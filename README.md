# Akdeniz Yapı Market & Çilingir - Website

Modern, professional website for a combined hardware store and locksmith business in Konyaaltı, Antalya.

## 🏪 About

**Akdeniz Yapı Market Konyaaltı Anahtar Çilingir** is a trusted local business serving both retail (building materials) and service (locksmith) customers in Konyaaltı, Antalya.

## ✨ Features

### Pages
- **Ana Sayfa (Home)**: Hero section, services overview, testimonials, CTA sections
- **Hizmetler (Services)**: Detailed service listings for yapı market, locksmith, emergency services, security solutions
- **Ürünler (Products)**: Product catalog with categories and pricing
- **Hakkımızda (About)**: Company history, mission, vision, team, values
- **İletişim (Contact)**: Contact form, Google Maps integration, contact information, business hours
- **Referanslar (Gallery)**: Photo gallery and customer testimonials

### Design & Branding
- **Color Scheme**: Deep blues and greys with warm orange/gold accents
- **Typography**: Clean sans-serif (Inter) for body, stronger display font (Poppins) for headings
- **Logo**: Key + House/Hammer symbol combination
- **Style**: Professional, trustworthy, local, and friendly

### Functionality
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Click-to-call buttons
- ✅ WhatsApp integration
- ✅ Contact form with validation
- ✅ Google Maps embed
- ✅ Smooth animations (Framer Motion)
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Modern Next.js 14 App Router

### Key Services Highlighted
- Yapı Market (Building Materials)
- Çilingir & Anahtar (Locksmith & Keys)
- 24/7 Acil Servis (Emergency Service)
- Güvenlik Çözümleri (Security Solutions)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Client-Website/
├── app/
│   ├── globals.css              # Global styles & Tailwind
│   ├── layout.tsx               # Root layout with header & footer
│   ├── page.tsx                 # Home page
│   ├── hizmetler/page.tsx       # Services page
│   ├── urunler/page.tsx         # Products page
│   ├── hakkimizda/page.tsx      # About page
│   ├── iletisim/page.tsx        # Contact page
│   └── referanslar/page.tsx     # Gallery/References page
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Footer component
│   └── home/
│       ├── Hero.tsx             # Hero section
│       ├── Services.tsx         # Services overview
│       ├── WhyChooseUs.tsx      # Benefits section
│       ├── Testimonials.tsx     # Customer testimonials
│       └── CTASection.tsx       # Call-to-action section
├── public/                      # Static assets
├── package.json
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.mjs              # Next.js configuration
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter, Poppins)

## 📞 Contact Information

- **Phone**: [0543 234 1401](tel:+905432341401)
- **WhatsApp**: [Message Us](https://wa.me/905432341401)
- **Email**: info@akdenizyapimarket.com
- **Address**: Altınkum, Gazi Mustafa Kemal Blv., Konyaaltı, Antalya
- **Hours**: 
  - Mon-Sat: 08:00 - 20:00
  - Sunday: 09:00 - 18:00
  - Emergency Service: 24/7

## 🎯 SEO & Local Optimization

- Optimized for local Konyaaltı searches
- Keywords: "Konyaaltı çilingir", "Antalya yapı market", "Konyaaltı anahtar"
- Structured metadata for better search visibility
- Mobile-first responsive design
- Fast loading times

## 📝 Customization

### Update Contact Information
Edit the following files:
- `components/layout/Header.tsx` - Phone number in top bar
- `components/layout/Footer.tsx` - All contact details
- `app/iletisim/page.tsx` - Contact page details

### Update Business Hours
- `components/layout/Footer.tsx`
- `app/iletisim/page.tsx`

### Update Location/Map
- `app/iletisim/page.tsx` - Google Maps embed URL

### Change Colors
Edit `tailwind.config.ts` to customize the color palette.

## 🔧 Development Notes

The TypeScript errors shown during build are expected as dependencies need to be installed. Once you run `npm install`, all errors will be resolved.

## 📄 License

This project is created for Akdeniz Yapı Market & Çilingir.

## 🙏 Support

For any questions or support, please contact the business directly at 0543 234 1401.

---

Built with ❤️ for Konyaaltı community
