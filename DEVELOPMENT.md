# Development Guide - Incall Platform

## Project Overview

Incall is a React-based home services booking platform built with modern web technologies. This guide will help you understand the codebase and extend it with new features.

## Architecture

### Component Hierarchy

```
App (Router)
├── Navbar (Fixed)
├── Routes
│   ├── Home
│   ├── Services
│   ├── Booking
│   ├── BookingConfirmation
│   ├── About
│   └── Contact
└── Footer
```

### Data Flow

```
servicesData.js (Mock Data)
    ↓
Components (Props)
    ↓
State Management (useState)
    ↓
localStorage (Booking Data)
```

## Key Files Explained

### 1. `src/data/servicesData.js`
**Purpose**: Central data store for all services and testimonials

**Structure**:
```javascript
{
  servicesData: Array<Service>,
  testimonials: Array<Testimonial>,
  howItWorks: Array<Step>
}
```

**To Add a New Service**:
```javascript
{
  id: 7,
  name: "Cleaning Services",
  slug: "cleaning",
  description: "Professional home cleaning",
  icon: "🧹",
  features: ["Deep Cleaning", "Sanitization"],
  pricing: {
    regular: { price: 399, time: "Schedule for later", discount: 0 },
    immediate: { price: 599, time: "Arrives in 30-60 mins", discount: 0 }
  },
  estimatedDuration: "60-90 mins",
  rating: 4.7,
  reviewsCount: 1234
}
```

### 2. `src/components/ServiceCard.jsx`
**Purpose**: Reusable card component for displaying services

**Props**:
- `service`: Object containing service details

**Features**:
- Displays service info
- Shows dual pricing
- Rating display
- Book Now CTA

### 3. `src/pages/Booking.jsx`
**Purpose**: Interactive booking form with dynamic pricing

**State Management**:
```javascript
formData: {
  serviceId, serviceType, date, timeSlot,
  name, phone, address, problemDescription
}
```

**Key Functions**:
- `handleInputChange`: Updates form state
- `handleSubmit`: Saves booking to localStorage
- Dynamic price calculation based on service type

### 4. `src/App.jsx`
**Purpose**: Main application component with routing

**Routes**:
- `/` → Home
- `/services` → Services
- `/booking` → Booking (with query params)
- `/booking-confirmation` → Confirmation
- `/about` → About
- `/contact` → Contact

## Styling Guide

### Tailwind Classes Used

**Layout**:
- `max-w-7xl mx-auto`: Centered container
- `px-4 sm:px-6 lg:px-8`: Responsive padding
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`: Responsive grid

**Colors**:
- `bg-gradient-to-r from-blue-600 to-purple-600`: Primary gradient
- `text-gray-900`: Headings
- `text-gray-600`: Body text

**Effects**:
- `card-hover`: Custom hover effect (defined in index.css)
- `fade-in`: Fade-in animation
- `shadow-lg`: Large shadow

### Custom Animations (index.css)

```css
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

## Adding New Features

### 1. Adding a New Service Category

**Step 1**: Update `servicesData.js`
```javascript
export const servicesData = [
  ...existingServices,
  {
    id: 7,
    name: "New Service",
    // ... other fields
  }
];
```

**Step 2**: Add icon emoji or upload image

**Step 3**: Test the service card display on Services page

### 2. Adding a New Page

**Step 1**: Create component in `src/pages/`
```javascript
// src/pages/NewPage.jsx
const NewPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Your content */}
    </div>
  );
};

export default NewPage;
```

**Step 2**: Add route in `App.jsx`
```javascript
<Route path="/new-page" element={<NewPage />} />
```

**Step 3**: Add navigation link in `Navbar.jsx`

### 3. Implementing Backend Integration

**Step 1**: Create API service
```javascript
// src/services/api.js
const API_BASE = 'http://localhost:5000/api';

export const bookService = async (bookingData) => {
  const response = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  });
  return response.json();
};
```

**Step 2**: Update Booking component
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await bookService(formData);
    navigate('/booking-confirmation', { state: { booking: result } });
  } catch (error) {
    console.error('Booking failed:', error);
  }
};
```

### 4. Adding User Authentication

**Step 1**: Install dependencies
```bash
npm install jsonwebtoken react-hook-form
```

**Step 2**: Create auth context
```javascript
// src/context/AuthContext.jsx
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = async (credentials) => {
    // API call
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

**Step 3**: Wrap App with provider
```javascript
<AuthProvider>
  <App />
</AuthProvider>
```

## State Management Migration

### Current: useState
```javascript
const [formData, setFormData] = useState({});
```

### Future: Context API
```javascript
// src/context/BookingContext.jsx
export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  
  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };
  
  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
```

### Future: Redux
```javascript
// src/store/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: { bookings: [] },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    }
  }
});
```

## Testing

### Unit Tests (To be added)
```javascript
// src/components/__tests__/ServiceCard.test.jsx
import { render, screen } from '@testing-library/react';
import ServiceCard from '../ServiceCard';

test('renders service name', () => {
  const service = { name: 'AC Repair', ... };
  render(<ServiceCard service={service} />);
  expect(screen.getByText('AC Repair')).toBeInTheDocument();
});
```

### E2E Tests (To be added)
```javascript
// cypress/e2e/booking.cy.js
describe('Booking Flow', () => {
  it('should complete a booking', () => {
    cy.visit('/booking');
    cy.get('select[name="serviceId"]').select('AC Repair');
    cy.get('input[name="name"]').type('John Doe');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/booking-confirmation');
  });
});
```

## Performance Optimization

### 1. Code Splitting
```javascript
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));

<Suspense fallback={<Loading />}>
  <Home />
</Suspense>
```

### 2. Image Optimization
```javascript
<img 
  src="/service-icon.webp" 
  alt="Service" 
  loading="lazy"
  width="400"
  height="300"
/>
```

### 3. Memoization
```javascript
import { memo } from 'react';

const ServiceCard = memo(({ service }) => {
  // Component code
});
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve 'dist' folder with nginx or Apache
```

## Environment Variables

Create `.env` file:
```
VITE_API_BASE_URL=http://localhost:5000
VITE_RAZORPAY_KEY=rzp_test_xxxxx
VITE_GOOGLE_MAPS_API_KEY=AIzaxxxxxx
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## Common Issues & Solutions

### Issue: Tailwind classes not working
**Solution**: Ensure `index.css` imports are in this order:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Issue: React Router not working after build
**Solution**: Configure server for SPA:
```nginx
# nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Issue: Form not submitting
**Solution**: Check that all required fields have values and form has `onSubmit` handler

## Code Standards

### File Naming
- Components: PascalCase (`ServiceCard.jsx`)
- Utilities: camelCase (`formatPrice.js`)
- Pages: PascalCase (`Home.jsx`)
- Styles: kebab-case (`custom-styles.css`)

### Component Structure
```javascript
// 1. Imports
import { useState } from 'react';

// 2. Component
const MyComponent = ({ prop1, prop2 }) => {
  // 3. State
  const [state, setState] = useState();
  
  // 4. Effects
  useEffect(() => {}, []);
  
  // 5. Handlers
  const handleClick = () => {};
  
  // 6. Render
  return <div>...</div>;
};

// 7. Export
export default MyComponent;
```

### CSS Class Order
1. Layout (display, position, grid, flex)
2. Box model (margin, padding, width, height)
3. Typography (font, text)
4. Visual (background, border, shadow)
5. Misc (cursor, transition, transform)

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-service-category

# Make changes and commit
git add .
git commit -m "feat: add cleaning service category"

# Push to remote
git push origin feature/new-service-category

# Create pull request
```

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Guide](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev)

---

**Happy Coding! 🚀**
