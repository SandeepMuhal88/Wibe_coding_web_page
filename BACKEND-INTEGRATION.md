# Backend Integration Guide

This document outlines how to integrate the Incall frontend with a Node.js + Express + MongoDB backend.

## Tech Stack Recommendation

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Payment**: Razorpay SDK
- **File Upload**: Multer
- **Validation**: express-validator

### Additional Tools
- **API Documentation**: Swagger/OpenAPI
- **Logging**: Winston
- **Email**: Nodemailer
- **SMS**: Twilio
- **Real-time**: Socket.io (for live tracking)

## Database Schema

### 1. User Schema
```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'technician', 'admin'], default: 'customer' },
  address: [{
    street: String,
    city: String,
    state: String,
    pincode: String,
    isDefault: Boolean
  }],
  createdAt: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false }
});
```

### 2. Service Schema
```javascript
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  icon: String,
  category: String,
  features: [String],
  pricing: {
    regular: {
      price: Number,
      time: String,
      discount: Number
    },
    immediate: {
      price: Number,
      time: String,
      discount: Number
    }
  },
  estimatedDuration: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});
```

### 3. Booking Schema
```javascript
const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  technicianId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  serviceType: { type: String, enum: ['regular', 'immediate'], required: true },
  scheduledDate: Date,
  scheduledTimeSlot: String,
  customerDetails: {
    name: String,
    phone: String,
    address: String,
    problemDescription: String
  },
  pricing: {
    basePrice: Number,
    discount: Number,
    tax: Number,
    totalAmount: Number
  },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'assigned', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentMethod: String,
  paymentId: String,
  rating: Number,
  review: String,
  createdAt: { type: Date, default: Date.now },
  completedAt: Date
});
```

### 4. Technician Schema
```javascript
const technicianSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  experience: Number,
  rating: { type: Number, default: 0 },
  totalJobs: { type: Number, default: 0 },
  availability: {
    isAvailable: { type: Boolean, default: true },
    workingHours: {
      start: String,
      end: String
    },
    offDays: [String]
  },
  documents: {
    aadhar: String,
    pan: String,
    certifications: [String]
  },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number] // [longitude, latitude]
  },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
```

### 5. Payment Schema
```javascript
const paymentSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  paymentGateway: { type: String, enum: ['razorpay', 'cash'], required: true },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  status: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});
```

## API Endpoints

### Authentication
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
POST   /api/auth/verify-otp        - Verify OTP
POST   /api/auth/forgot-password   - Request password reset
POST   /api/auth/reset-password    - Reset password
GET    /api/auth/me                - Get current user
```

### Services
```
GET    /api/services               - Get all services
GET    /api/services/:id           - Get service by ID
GET    /api/services/slug/:slug    - Get service by slug
POST   /api/services               - Create service (admin)
PUT    /api/services/:id           - Update service (admin)
DELETE /api/services/:id           - Delete service (admin)
```

### Bookings
```
GET    /api/bookings               - Get user bookings
GET    /api/bookings/:id           - Get booking by ID
POST   /api/bookings               - Create new booking
PUT    /api/bookings/:id           - Update booking
DELETE /api/bookings/:id           - Cancel booking
GET    /api/bookings/:id/status    - Get booking status
```

### Technicians
```
GET    /api/technicians            - Get all technicians
GET    /api/technicians/:id        - Get technician by ID
GET    /api/technicians/nearby     - Get nearby technicians
POST   /api/technicians            - Register as technician
PUT    /api/technicians/:id        - Update technician profile
PUT    /api/technicians/:id/availability - Update availability
```

### Payments
```
POST   /api/payments/create-order  - Create Razorpay order
POST   /api/payments/verify        - Verify payment
GET    /api/payments/:bookingId    - Get payment details
```

### Reviews
```
POST   /api/reviews                - Add review
GET    /api/reviews/:serviceId     - Get service reviews
GET    /api/reviews/technician/:id - Get technician reviews
```

## API Implementation Example

### 1. Create Booking Endpoint

```javascript
// routes/bookings.js
const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const Booking = require('../models/Booking');
const Service = require('../models/Service');

router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      serviceId,
      serviceType,
      date,
      timeSlot,
      name,
      phone,
      address,
      problemDescription
    } = req.body;

    // Get service details
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Calculate pricing
    const basePrice = serviceType === 'regular' 
      ? service.pricing.regular.price 
      : service.pricing.immediate.price;
    
    const discount = serviceType === 'regular' 
      ? service.pricing.regular.discount 
      : 0;
    
    const tax = Math.round(basePrice * 0.18); // 18% GST
    const totalAmount = basePrice - discount + tax;

    // Generate booking ID
    const bookingId = `BK${Date.now()}`;

    // Create booking
    const booking = new Booking({
      bookingId,
      userId: req.user.userId,
      serviceId,
      serviceType,
      scheduledDate: date,
      scheduledTimeSlot: timeSlot,
      customerDetails: {
        name,
        phone,
        address,
        problemDescription
      },
      pricing: {
        basePrice,
        discount,
        tax,
        totalAmount
      },
      status: 'pending'
    });

    await booking.save();

    // Send confirmation SMS/Email
    // await sendBookingConfirmation(phone, bookingId);

    res.status(201).json({
      success: true,
      booking: {
        bookingId: booking.bookingId,
        status: booking.status,
        totalAmount: booking.pricing.totalAmount,
        serviceName: service.name
      }
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

module.exports = router;
```

### 2. Authentication Middleware

```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
```

### 3. Razorpay Integration

```javascript
// controllers/paymentController.js
const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const createOrder = async (req, res) => {
  try {
    const { bookingId, amount } = req.body;

    const options = {
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: bookingId,
      payment_capture: 1
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId
    } = req.body;

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      // Update booking payment status
      await Booking.findOneAndUpdate(
        { bookingId },
        {
          paymentStatus: 'paid',
          paymentId: razorpay_payment_id,
          status: 'confirmed'
        }
      );

      res.json({ success: true, message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ error: 'Invalid signature' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Payment verification failed' });
  }
};

module.exports = { createOrder, verifyPayment };
```

## Frontend Integration Changes

### 1. Create API Service

```javascript
// src/services/api.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const getAuthHeader = () => {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const api = {
  // Auth
  login: async (credentials) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return res.json();
  },

  // Services
  getServices: async () => {
    const res = await fetch(`${API_BASE}/services`);
    return res.json();
  },

  // Bookings
  createBooking: async (bookingData) => {
    const res = await fetch(`${API_BASE}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(bookingData)
    });
    return res.json();
  },

  getBookings: async () => {
    const res = await fetch(`${API_BASE}/bookings`, {
      headers: getAuthHeader()
    });
    return res.json();
  },

  // Payments
  createPaymentOrder: async (bookingId, amount) => {
    const res = await fetch(`${API_BASE}/payments/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify({ bookingId, amount })
    });
    return res.json();
  }
};
```

### 2. Update Booking Component

```javascript
// src/pages/Booking.jsx
import { api } from '../services/api';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    setLoading(true);
    const result = await api.createBooking(formData);
    
    if (result.success) {
      // Navigate to confirmation
      navigate('/booking-confirmation', { 
        state: { booking: result.booking } 
      });
    } else {
      setError(result.error);
    }
  } catch (error) {
    setError('Failed to create booking. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

### 3. Razorpay Integration (Frontend)

```javascript
// src/components/PaymentModal.jsx
const handlePayment = async (bookingId, amount) => {
  try {
    // Create order
    const { orderId } = await api.createPaymentOrder(bookingId, amount);

    // Razorpay options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: 'INR',
      name: 'Incall',
      description: 'Service Booking Payment',
      order_id: orderId,
      handler: async (response) => {
        // Verify payment
        const result = await api.verifyPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          bookingId
        });

        if (result.success) {
          navigate('/booking-confirmation');
        }
      },
      prefill: {
        name: formData.name,
        contact: formData.phone
      },
      theme: {
        color: '#3B82F6'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error('Payment failed:', error);
  }
};
```

## Environment Setup

### Backend `.env`
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/incall
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx

TWILIO_ACCOUNT_SID=xxxxx
TWILIO_AUTH_TOKEN=xxxxx
TWILIO_PHONE_NUMBER=+1234567890

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

FRONTEND_URL=http://localhost:5173
```

### Frontend `.env`
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxx
```

## Testing APIs

### Using Postman/Thunder Client

**1. Register User**
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "securepass123"
}
```

**2. Create Booking**
```
POST http://localhost:5000/api/bookings
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "serviceId": "service_id_here",
  "serviceType": "regular",
  "date": "2024-02-20",
  "timeSlot": "09:00 AM - 11:00 AM",
  "name": "John Doe",
  "phone": "9876543210",
  "address": "123 Main St, Mumbai",
  "problemDescription": "AC not cooling"
}
```

## Next Steps

1. ✅ Set up Express server
2. ✅ Connect MongoDB
3. ✅ Implement authentication
4. ✅ Create API endpoints
5. ✅ Add Razorpay integration
6. ✅ Implement SMS/Email notifications
7. ✅ Add admin dashboard
8. ✅ Deploy to production

## Deployment

### Backend (Railway/Heroku)
```bash
# Add Procfile
web: node server.js

# Deploy
git push heroku main
```

### Database (MongoDB Atlas)
- Create cluster on MongoDB Atlas
- Update connection string in `.env`
- Whitelist IP addresses

---

**Ready to build a full-stack application! 🚀**
