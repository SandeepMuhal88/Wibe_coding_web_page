# Incall - Home Services Booking Platform

A modern, responsive React website for booking home services including AC repair, plumbing, electrical work, car service, and more.

![Incall Platform](https://img.shields.io/badge/React-19.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8) ![React Router](https://img.shields.io/badge/React_Router-7.13-red)

## 🚀 Features

### Main Features
- ✅ **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- ✅ **Modern UI/UX**: Clean, professional design with smooth animations
- ✅ **Dual Pricing System**: Regular and Immediate service options
- ✅ **Real-time Booking**: Dynamic price calculation and booking form
- ✅ **Service Showcase**: 6 different service categories with detailed information
- ✅ **Customer Testimonials**: Rating and reviews section
- ✅ **Contact Form**: Fully functional contact page

### Pages Included
1. **Home** - Hero section, services overview, how it works, testimonials
2. **Services** - Complete service catalog with filtering options
3. **Booking** - Interactive booking form with dynamic pricing
4. **Booking Confirmation** - Success page with booking details
5. **About** - Company information and values
6. **Contact** - Contact form and information

## 📋 Technical Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.1
- **Routing**: React Router DOM 7.13
- **Font**: Inter (Google Fonts)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps to Run Locally

1. **Navigate to the project directory**
   ```bash
   cd d:\PROGRAMMING\INcall
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The application should now be running!

5. **Build for production** (optional)
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
INcall/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── Footer.jsx    # Footer with links
│   │   └── ServiceCard.jsx # Service display card
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Booking.jsx
│   │   ├── BookingConfirmation.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/             # Mock data
│   │   └── servicesData.js # Service catalog & testimonials
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & Tailwind
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

## 🎨 Design Features

### Color Palette
- Primary Blue: `#3B82F6` (Blue-600)
- Primary Purple: `#764BA2` (Purple gradient)
- Background: Soft gradients from blue to purple to pink
- Text: Gray-900 for headings, Gray-600 for body

### Animations
- Fade-in animations on page load
- Card hover effects with shadow and lift
- Button ripple effects
- Smooth transitions throughout

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 💼 Service Categories

1. **AC Repair & Servicing** - ₹399 (Regular) / ₹599 (Immediate)
2. **Electrician Services** - ₹299 (Regular) / ₹499 (Immediate)
3. **Plumbing Services** - ₹349 (Regular) / ₹549 (Immediate)
4. **Bike Repair** - ₹449 (Regular) / ₹699 (Immediate)
5. **Car Repair & Service** - ₹799 (Regular) / ₹1199 (Immediate)
6. **Home Maintenance** - ₹499 (Regular) / ₹749 (Immediate)

## 📱 Features in Detail

### Booking System
- Service selection dropdown
- Service type toggle (Regular vs Immediate)
- Date and time slot picker (for regular bookings)
- Customer information form
- Real-time price calculation
- Booking summary sidebar
- Confirmation page with booking ID

### Pricing Logic
- **Regular Service**: Schedule for later, standard pricing
- **Immediate Service**: Technician arrives in 30-60 mins, premium pricing
- Transparent pricing with no hidden charges
- Optional discounts displayed clearly

## 🔜 Future Enhancements (Backend Ready)

The frontend is structured to easily integrate with a backend:

### Phase 1: Backend Integration
- [ ] Node.js + Express API
- [ ] MongoDB database
- [ ] User authentication (JWT)
- [ ] Booking management system
- [ ] Admin dashboard

### Phase 2: Payment Integration
- [ ] Razorpay payment gateway
- [ ] Online payment options
- [ ] Invoice generation
- [ ] Payment history

### Phase 3: Advanced Features
- [ ] Real-time technician tracking
- [ ] Push notifications
- [ ] Rating & review system
- [ ] Technician portal
- [ ] Service history
- [ ] Loyalty program

### Phase 4: Mobile App
- [ ] React Native mobile app
- [ ] Push notifications
- [ ] Offline support
- [ ] Location services

## 🎯 Business Model

This platform can be monetized through:
1. Service commission (15-20% from technicians)
2. Premium listings for technicians
3. Advertisement revenue
4. Subscription plans for frequent users
5. Partner integrations

## 📊 Technical Decisions

### Why React + Vite?
- Fast development server with HMR
- Optimized production builds
- Modern JavaScript features
- Great developer experience

### Why Tailwind CSS?
- Utility-first approach for rapid development
- Highly customizable
- Small bundle size with purging
- Consistent design system

### Why React Router?
- Industry standard for React routing
- Declarative routing
- Easy nested routes
- Browser history support

## 🤝 Contributing

This is a startup-ready project. Areas to contribute:
1. Additional service categories
2. Advanced filtering options
3. Service bundling features
4. Mobile app development
5. Backend API development

## 📄 License

This project is open for commercial use.

## 👨‍💻 Developer Notes

### Data Management
- Currently using local state (`useState`)
- Ready for Context API or Redux integration
- Mock data in `src/data/servicesData.js`
- localStorage used for booking confirmation demo

### Scalability
- Component-based architecture
- Reusable components
- Modular file structure
- Easy to add new services

### SEO Optimization
- Semantic HTML
- Meta tags configured
- Proper heading hierarchy
- Fast page loads

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📞 Support & Contact

For any queries related to the project:
- Email: support@incall.com
- Phone: +91 9876543210

---

**Built with ❤️ for making home services accessible to everyone**

*Ready to scale into a full-fledged startup!*
