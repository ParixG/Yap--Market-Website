# 🚀 Quick Start Guide

## Akdeniz Yapı Market & Çilingir Website

### Step 1: Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons

### Step 2: Run Development Server

```powershell
npm run dev
```

The website will be available at: **http://localhost:3000**

### Step 3: View All Pages

Once running, you can visit:

- **Home**: http://localhost:3000
- **Services**: http://localhost:3000/hizmetler
- **Products**: http://localhost:3000/urunler
- **About**: http://localhost:3000/hakkimizda
- **Contact**: http://localhost:3000/iletisim
- **Gallery**: http://localhost:3000/referanslar

### Step 4: Customize Content

#### Update Phone Number
Replace `0543 234 1401` with your actual number in:
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `app/iletisim/page.tsx`
- All CTA sections

#### Update WhatsApp Link
Replace `905432341401` with your number in WhatsApp links (same files as above)

#### Update Email
Replace `info@akdenizyapimarket.com` with your actual email in:
- `components/layout/Footer.tsx`
- `app/iletisim/page.tsx`

#### Update Address
Edit the address in:
- `components/layout/Footer.tsx`
- `app/iletisim/page.tsx`

#### Update Google Maps
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `app/iletisim/page.tsx`

### Step 5: Build for Production

When ready to deploy:

```powershell
npm run build
npm start
```

### Step 6: Deploy

You can deploy to:

#### Vercel (Recommended - Free)
```powershell
npm install -g vercel
vercel
```

#### Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Auto-deploy

#### Other Hosts
Build and upload the `.next` folder and `node_modules` to your hosting.

---

## 📱 Features Included

✅ Fully responsive design
✅ Turkish language content
✅ Click-to-call buttons
✅ WhatsApp integration  
✅ Contact form
✅ Google Maps
✅ SEO optimized
✅ Fast animations
✅ Professional design
✅ 24/7 emergency service highlight

## 🎨 Color Scheme

- **Primary (Blue)**: Trust, professionalism, construction
- **Secondary (Orange/Gold)**: Keys, warmth, accessibility
- **Neutral (Grey)**: Clean, modern background

## 📞 Important Links

All links use:
- `tel:+905432341401` for phone calls
- `https://wa.me/905432341401` for WhatsApp
- `/iletisim` for contact page

## 🔧 Troubleshooting

### If you see TypeScript errors:
Run `npm install` first - errors will disappear

### If styles don't load:
1. Stop the dev server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again

### If port 3000 is busy:
Use a different port: `npm run dev -- -p 3001`

---

## 📚 Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Review all pages
4. ✅ Update contact information
5. ✅ Replace Google Maps
6. ✅ Test on mobile
7. ✅ Build for production
8. ✅ Deploy online

---

**Need Help?** Contact: 0543 234 1401

Built with Next.js, TypeScript, and Tailwind CSS ⚡
