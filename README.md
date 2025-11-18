# Mr X Hair Saloon - Professional Landing Page

A modern, responsive landing page for Mr X Hair Saloon built with Next.js 16, TypeScript, and Tailwind CSS v4. Features a sleek design with dark/light theme toggle, WhatsApp integration, and comprehensive salon information.

## 🌟 Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Dark/Light Theme** - Seamless theme switching with smooth transitions
- **WhatsApp Integration** - Direct messaging and booking through WhatsApp
- **Interactive UI** - Smooth animations, hover effects, and scroll progress indicator
- **Service Showcase** - Detailed information about hair styling, keratin treatments, and coloring services
- **Customer Testimonials** - Real client reviews with ratings
- **Team Profiles** - Meet our certified professional stylists
- **FAQ Section** - Answers to common questions
- **Contact Form** - Easy inquiry form with service selection
- **Google Maps Integration** - Embedded location map for easy navigation
- **Animated Statistics** - Dynamic counters showing business metrics
- **Image Gallery** - Showcase of transformations and salon space

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Code Quality:** ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
```bash
   git clone https://github.com/chaudhary-hadi27/mr-x-saloon.git
   cd mr-x-saloon
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Run the development server**
```bash
   npm run dev
   # or
   yarn dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
```
mr-x-hair-saloon/
├── app/
│   ├── page.tsx          # Main landing page component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and Tailwind imports
├── public/               # Static assets (images, icons)
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
└── README.md            # Project documentation
```

## ⚙️ Configuration

### WhatsApp Number
Update the WhatsApp number in `app/page.tsx`:
```typescript
const handleWhatsAppClick = () => {
  const message = encodeURIComponent('Hi! I would like to book an appointment at Mr X Hair Saloon.');
  window.open(`https://wa.me/YOUR_NUMBER?text=${message}`, '_blank');
};
```

### Contact Information
Modify contact details in the Contact section:
```typescript
- Location: Update address in the MapPin section
- Phone: Update phone number in the Phone section
- Email: Update email in the Mail section
```

### Google Maps
Replace the Google Maps embed URL in the Contact section:
```html
<iframe 
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  ...
/>
```

## 🎨 Customization

### Colors
The project uses Tailwind's utility classes with custom gradient accents:
- Primary: Amber (500) to Orange (500)
- Dark Mode: Neutral (900, 800, 700)
- Light Mode: White with Neutral accents

### Content
Edit the following sections in `app/page.tsx`:
- **Services**: Update `services` array
- **Team Members**: Modify `teamMembers` array
- **Testimonials**: Edit `testimonials` array
- **FAQs**: Update `faqs` array
- **Opening Hours**: Change `openingHours` array

## 🚢 Build for Production
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📱 Features Overview

### Header Navigation
- Smooth scroll navigation to all sections
- Theme toggle button
- Mobile-responsive hamburger menu
- Fixed header with backdrop blur

### Hero Section
- Eye-catching headline with gradient text
- Call-to-action buttons
- Professional hero image
- Special offer banner

### Services Section
- Three main service categories
- Duration indicators
- Feature lists with checkmarks
- Direct booking buttons

### About Section
- Company overview
- Keratin treatment specialization highlight
- Professional certifications
- Visual imagery

### Team Section
- Stylist profiles with experience details
- Specialty indicators
- Professional avatars

### Testimonials
- Client reviews with 5-star ratings
- Client photos
- Verified client badges

### Gallery
- 6-image showcase grid
- Hover zoom effects
- Gradient overlays with descriptions

### FAQ Section
- Common questions and answers
- Clean, easy-to-read format

### Contact Section
- Contact information cards
- Inquiry form with service selection
- Embedded Google Maps
- WhatsApp quick action

## 🔧 Scripts
```json
{
  "dev": "next dev",           // Start development server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "next lint"          // Run ESLint
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Mr X Hair Saloon Development Team

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, email info@mrxhairsaloon.com or message us on WhatsApp.

---

**Built with ❤️ for Mr X Hair Saloon**