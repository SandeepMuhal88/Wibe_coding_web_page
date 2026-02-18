# Quick Start Guide - Incall Platform

## 🚀 Running the Application

### Current Status
Your Incall home services booking platform has been fully set up with:
- ✅ React 19.2 with Vite
- ✅ Tailwind CSS 4.1 (with PostCSS configuration)
- ✅ React Router for navigation
- ✅ 6 Complete pages with modern UI
- ✅ Responsive design
- ✅ Interactive booking system

### To Run the Application

1. **Open Terminal/PowerShell** in the project directory:
   ```powershell
   cd d:\PROGRAMMING\INcall
   ```

2. **Start the development server**:
   ```powershell
   npm run dev
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

### If You See Errors

#### Issue: Tailwind CSS PostCSS Error
**Solution**: The PostCSS configuration has been updated. If you still see errors:
```powershell
npm install -D @tailwindcss/postcss
```

#### Issue: Port 5173 already in use
**Solution**: Kill the running process or use a different port:
```powershell
# Kill existing process
taskkill /F /IM node.exe

# Or use a different port
npm run dev -- --port 3000
```

#### Issue: Dependencies not installed
**Solution**: Install all dependencies:
```powershell
npm install
```

## 📱 Navigating the Application

Once the server is running, you can access these pages:

### 1. Homepage (/)
- **URL**: `http://localhost:5173/`
- **Features**: 
  - Hero section with CTA buttons
  - Service showcase (6 services)
  - How it works (3 steps)
  - Customer testimonials
  - Why choose us section

### 2. Services Page (/services)
- **URL**: `http://localhost:5173/services`
- **Features**:
  - Complete service catalog
  - Service cards with pricing
  - Category filters (placeholder)
  - Dual pricing display

### 3. Booking Page (/booking)
- **URL**: `http://localhost:5173/booking`
- **Features**:
  - Service selection dropdown
  - Regular vs Immediate service toggle
  - Date & time picker (for regular service)
  - Customer information form
  - Real-time price calculation
  - Booking summary sidebar

### 4. Booking Confirmation (/booking-confirmation)
- **URL**: `http://localhost:5173/booking-confirmation`
- **Features**:
  - Booking details display
  - Booking ID generation
  - Next steps information
  - Action buttons

### 5. About Page (/about)
- **URL**: `http://localhost:5173/about`
- **Features**:
  - Company mission
  - Statistics
  - Core values
  - Process overview

### 6. Contact Page (/contact)
- **URL**: `http://localhost:5173/contact`
- **Features**:
  - Contact form
  - Office information
  - Social media links
  - Map placeholder

## 🎨 Testing the Booking Flow

### End-to-End Test:

1. **Go to Homepage** → Click "Book Now"
2. **Select a Service** → Choose "AC Repair & Servicing"
3. **Choose Service Type** → Select "Regular Service" or "Immediate Service"
4. **Fill Customer Details**:
   - Name: John Doe
   - Phone: 9876543210
   - Address: 123 Street, Mumbai
   - Problem: AC not cooling properly
5. **Click "Confirm Booking"**
6. **View Confirmation** → See booking details with ID

## 📁 Project Structure at a Glance

```
INcall/
├── src/
│   ├── components/        # Navbar, Footer, ServiceCard
│   ├── pages/            # Home, Services, Booking, etc.
│   ├── data/             # servicesData.js (mock data)
│   ├── App.jsx           # Router setup
│   └── index.css         # Tailwind + custom styles
├── public/               # Static assets
├── README.md             # Full documentation
├── DEVELOPMENT.md        # Developer guide
└── BACKEND-INTEGRATION.md # Backend setup guide
```

## 🔧 Quick Fixes

### Clear Cache and Reinstall
If nothing works:
```powershell
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install

# Run dev server
npm run dev
```

### Build for Production
```powershell
npm run build
```
This creates a `dist/` folder with optimized production files.

### Preview Production Build
```powershell
npm run preview
```

## 🎯 Key Features to Test

1. **Responsive Design**
   - Resize browser to mobile size (375px)
   - Check navigation menu (hamburger)
   - Verify all content is readable

2. **Service Cards**
   - Hover over cards (should lift and shadow)
   - Click "Book Now" → Should navigate to booking page

3. **Booking Form**
   - Select different services → Price should update
   - Toggle between Regular and Immediate → Price changes
   - For Regular: Date and time fields appear
   - For Immediate: Date and time fields hidden

4. **Navigation**
   - Click all nav links
   - Test mobile menu
   - Footer links should work

## 📊 Sample Data

### Available Services:
1. AC Repair & Servicing - ₹399/₹599
2. Electrician Services - ₹299/₹499
3. Plumbing Services - ₹349/₹549
4. Bike Repair - ₹449/₹699
5. Car Repair & Service - ₹799/₹1199
6. Home Maintenance - ₹499/₹749

### Test Credentials (When backend is integrated):
- Email: test@incall.com
- Phone: 9876543210

## 🐛 Common Issues

### 1. Blank White Screen
- Check browser console (F12)
- Verify all files are in correct locations
- Check for JavaScript errors

### 2. Styles Not Loading
- Verify Tailwind CSS is properly configured
- Check `tailwind.config.js` exists
- Ensure PostCSS is configured correctly

### 3. React Router Not Working
- Ensure you're using the dev server (not opening file://)
- Check browser URL is localhost:5173

## 📞 Support

If you encounter issues:
1. Check the terminal for error messages
2. Open browser console (F12) for frontend errors
3. Review README.md for detailed documentation
4. Check DEVELOPMENT.md for code examples

## 🚀 Next Steps

1. **Test the application** - Navigate through all pages
2. **Customize the data** - Edit `src/data/servicesData.js`
3. **Add more services** - Follow the schema in servicesData.js
4. **Integrate backend** - See BACKEND-INTEGRATION.md
5. **Deploy** - Build and deploy to Vercel/Netlify

---

**The application is ready to use! Start the dev server and explore! 🎉**

For detailed documentation, see:
- `README.md` - Full project overview
- `DEVELOPMENT.md` - Development guide
- `BACKEND-INTEGRATION.md` - Backend setup

**Current Server**: http://localhost:5173
