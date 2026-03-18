# Green Collar Landscaping LLC Website

A modern, professional React website for Green Collar Landscaping LLC featuring an interactive pricing calculator and comprehensive service information.

## 🚀 Features

- **Smart Quote Calculator**: Real-time pricing estimates with transparent material and labor cost breakdowns
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Industrial Corporate Design**: Professional aesthetic combining construction ruggedness with corporate validity
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Service Showcase**: 8 comprehensive services including paving, fencing, retaining walls, synthetic turf, lawn care, land leveling, sod replacement, and outdoor design
- **Contact Form**: Full-featured contact section with client-side validation, error messages, and business information
- **Service Area Map**: Interactive Google Maps showing Tacoma with 30-mile radius overlay and covered cities
- **Trust Indicators**: Prominent display of certification, insurance, and OSHA compliance
- **Accessibility**: Full keyboard navigation, ARIA labels, and semantic HTML for screen reader support
- **SEO Optimized**: Comprehensive meta tags, structured data, and Google Analytics integration
- **Project Gallery**: Showcasing before/after photos of completed projects

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first styling framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Clean, industrial-style icons

## 📦 Installation

1. **Install dependencies**:
   ```powershell
   npm install
   ```

2. **Start the development server**:
   ```powershell
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Build for Production

```powershell
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎨 Design System

### Colors
- **Primary**: Deep Forest Green (`#1b4d3e`)
- **Secondary**: Slate Grey (`#334155`)
- **Accent**: Safety Orange (`#f97316`)
- **Background**: White (`#ffffff`) / Light Grey (`#f8fafc`)

### Typography
- **Headings**: Oswald (Bold, geometric, structural)
- **Body**: Inter (Clean, legible, modern)

## 💰 Pricing Calculator Configuration

The pricing constants are organized at the top of the `Calculator.jsx` component for easy adjustment:

```javascript
const PRICING_CONFIG = {
  laborRate: 250.00,        // Per hour for 2-person team
  
  materials: {
    paving: 20.00,          // Per sq ft
    fencing: 50.00,         // Per sq ft
    walls: 40.00,           // Per linear ft
    turf: 15.00,            // Per sq ft
  },
  
  installSpeed: {
    paving: 40,             // sq ft per hour
    fencing: 15,            // sq ft per hour
    walls: 5,               // linear ft per hour
    turf: 50,               // sq ft per hour
  }
}
```

## 📁 Project Structure

```
antonios website/
├── public/
│   └── photos/                 # Project photos and company logo (52 images)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navigation with keyboard support
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Calculator.jsx      # Smart quote calculator
│   │   ├── ServicesGrid.jsx    # 8 services showcase with anchor links
│   │   ├── ProjectGallery.jsx  # Before/after project photos
│   │   ├── AboutUs.jsx         # Company information & stats
│   │   ├── SafetyBadge.jsx     # Trust indicators & process
│   │   ├── ServiceAreaMap.jsx  # Interactive map with service radius
│   │   └── Contact.jsx         # Contact form with validation
│   ├── App.jsx                 # Main app component with footer
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Key Components

### Navbar
- Responsive mobile menu with phone number
- Dropdown services navigation (8 services with anchor links)
- Sticky header with call-to-action button
- ARIA labels for accessibility

### Hero
- Compelling headline and subheadline
- Trust badges (Certified & Insured, OSHA Compliant)
- Direct link to calculator

### Calculator
- Icon-based project type selection (8 service types)
- Interactive slider and number input
- Real-time price calculations
- Detailed cost breakdown
- "Book This Job" CTA with estimated total

### ServicesGrid
- 4-column grid showcasing 8 services
- Feature lists for each service
- Industrial iconography with gradient headers
- Anchor links for easy navigation
- Links to calculator

### ProjectGallery
- Before/after project photos
- Showcases retaining walls, paving, fencing, turf, and more
- Responsive image grid

### AboutUs
- Company statistics (1 year, 60+ projects, 30mi radius)
- Company logo display
- Visual card layout highlighting expertise
- "Why Choose Us" section

### SafetyBadge
- Corporate validity indicators
- Multi-county certification details
- 5-step professional process timeline
- OSHA compliance highlights

### Contact
- Full contact form with validation and backend integration
- Phone: (253) 212-6752
- Instagram: @greencollarlandscaping_
- Business hours and service area
- Success/error messages with ARIA live regions
- Web3Forms integration for email submissions

### Footer
- Company contact information
- Service list
- Trust indicators
- Business hours
- Social media links

## ✅ Recent Updates (December 2024)

### Latest Enhancements (December 11, 2025)
- ✅ **Enhanced SEO**: Added comprehensive meta tags including canonical URLs, theme colors, Apple touch icons, mobile alternate links
- ✅ **Google Analytics**: Integrated GA4 with custom event tracking for phone clicks, email clicks, and calculator engagement
- ✅ **Keyboard Navigation**: Fixed dropdown keyboard accessibility with Enter/Space/Escape support and visible focus states
- ✅ **Form Validation**: Added client-side validation with real-time error messages, field highlighting, and ARIA attributes
- ✅ **Service Area Map**: Created interactive Google Maps embed showing Tacoma service area with 30-mile radius overlay and animated center point
- ✅ **Map Legend**: Added visual legend matching all map elements (base location, radius zones)

### Contact & Communication
- ✅ Created comprehensive Contact section with form
- ✅ Added phone number to navbar (desktop & mobile)
- ✅ Enhanced footer with contact info, business hours, and social links
- ✅ Integrated Instagram link throughout site
- ✅ Form validation with email, phone, and message validation
- ✅ Real-time error clearing and field highlighting

### Services Expansion
- ✅ Expanded from 4 to 8 services
- ✅ Added: Lawn Care, Land Leveling, Sod Replacement, Outdoor Design
- ✅ Updated navbar dropdown with all 8 services
- ✅ Added anchor link navigation to individual services

### Brand & Content
- ✅ Updated company statistics (1 year, 60+ projects)
- ✅ Changed certification language from "Licensed & Bonded" to "Certified & Insured"
- ✅ Replaced "crew" terminology with "team" throughout
- ✅ Integrated company logo in navbar and About section
- ✅ Added interactive service area map with 12 cities and 3 counties

### Technical Improvements
- ✅ Moved all 52 images to proper `/public/photos` directory
- ✅ Added ARIA labels for accessibility across all components
- ✅ Updated favicon from Vite logo to company logo
- ✅ Enhanced SEO meta descriptions and structured data
- ✅ Implemented keyboard navigation for dropdowns
- ✅ Added Google Analytics 4 with event tracking
- ✅ Form validation with proper error handling
- ✅ Interactive map with SVG overlay showing service radius

## 🔐 Security Features

- ✅ **Environment Variables**: API keys stored securely in `.env` (not committed to Git)
- ✅ **No Vulnerabilities**: All dependencies audited with `npm audit`
- ✅ **Form Validation**: Client-side validation prevents malicious input
- ✅ **External Link Security**: All external links use `rel="noopener noreferrer"`
- ⏳ **HTTPS/SSL**: Ready for deployment (see [DEPLOYMENT.md](DEPLOYMENT.md))
- ⏳ **Security Headers**: Configure via hosting provider

## 🚀 Environment Setup

### Development

1. **Copy environment template**:
   ```bash
   cp .env.example .env
   ```

## ✅ Security Implementation Complete

### 1. **API Keys Moved to Environment Variables** ✅

**Created:**
- .env - Your actual keys (NOT committed to Git)
- .env.example - Template for other developers
- .gitignore - Ensures .env is never committed

**Updated:**
- Contact.jsx - Now uses `import.meta.env.VITE_WEB3FORMS_KEY`
- index.html - Google Analytics loads dynamically from `import.meta.env.VITE_GA_MEASUREMENT_ID`

**To activate:**
1. Open .env
2. Replace placeholders with actual keys:
   - Get Web3Forms key: [web3forms.com](https://web3forms.com)
   - Get Google Analytics ID: [analytics.google.com](https://analytics.google.com)

### 2. **SSL/HTTPS Certificate Documentation** ✅

Created comprehensive DEPLOYMENT.md with:
- **4 deployment options** (Netlify, Vercel, GitHub Pages, Traditional)
- Step-by-step SSL setup for each platform
- DNS configuration instructions
- Security headers configuration
- Pre/post deployment checklists
- All options provide **FREE SSL certificates**

### 3. **Dependencies Audit** ✅

Ran `npm audit --production`:
- ✅ **0 vulnerabilities found**
- All dependencies are secure
- No updates needed

---

## 🎯 Next Steps Before Deployment:

1. Update .env with your actual API keys
2. Test locally: `npm run build && npm run preview`
3. Choose a hosting provider from DEPLOYMENT.md
4. Follow SSL setup instructions for your chosen platform

Your site is now **production-ready** with proper security! 🔒

2. **Start development server**:
   ```bash
   npm run dev
   ```

### Production Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete SSL/HTTPS setup and deployment instructions.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

**Proprietary & Confidential** - Portfolio Display

Copyright (c) 2024 Green Collar Landscaping LLC. All rights reserved.

This project is proprietary and confidential. The code is displayed for portfolio/demonstration purposes only. You may NOT use, copy, modify, or distribute this code without explicit written permission from Green Collar Landscaping LLC.

See [LICENSE](LICENSE) for full details.

## 📞 Contact Information

- **Phone/Text**: (253) 212-6752
- **Instagram**: [@greencollarlandscaping_](https://www.instagram.com/greencollarlandscaping_?igsh=emtmZmg4OXdjcnJx)
- **Service Area**: Tacoma, WA & 30-mile radius

### Business Hours
- **Monday - Friday**: 7:00 AM - 6:00 PM
- **Saturday**: 8:00 AM - 4:00 PM
- **Sunday**: Closed

---

**Built with precision for the Pacific Northwest** 🌲
