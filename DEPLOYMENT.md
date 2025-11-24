# 🚀 Deployment Guide - Akdeniz Yapı Market & Çilingir

## Pre-Deployment Checklist

Before deploying, make sure to:

### 1. Update Contact Information

Replace placeholder information with actual business details:

#### Phone Numbers
- **Files to edit**: 
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `app/iletisim/page.tsx`
  - All CTA sections in home components
- **Current**: `0543 234 1401`
- **Replace with**: Your actual phone number

#### WhatsApp
- **Files to edit**: Same as phone numbers
- **Current**: `905432341401`
- **Replace with**: Your WhatsApp number (country code + number, no spaces)
- **Format**: `90XXXXXXXXXX`

#### Email
- **Files to edit**: `components/layout/Footer.tsx`, `app/iletisim/page.tsx`
- **Current**: `info@akdenizyapimarket.com`
- **Replace with**: Your actual email

#### Address
- **Files to edit**: `components/layout/Footer.tsx`, `app/iletisim/page.tsx`
- **Current**: Altınkum, Gazi Mustafa Kemal Blv., Konyaaltı, Antalya
- **Verify**: This is the correct address based on TuMAPS data

### 2. Update Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: `Altınkum, Gazi Mustafa Kemal Blv., Konyaaltı, Antalya`
3. Click **Share** → **Embed a map**
4. Copy the iframe code
5. Replace in `app/iletisim/page.tsx` (around line 237)

### 3. Add Real Images

Current implementation uses emojis as placeholders. To add real photos:

1. Create a `public/images/` folder
2. Add your photos:
   - Store interior
   - Products
   - Team photos
   - Lock systems
   - Completed work
3. Update image references in components
4. Use Next.js `Image` component for optimization

---

## Deployment Options

### Option 1: Vercel (Recommended - Free for personal projects)

**Easiest and recommended for Next.js projects**

#### Steps:

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```powershell
   vercel login
   ```

3. **Deploy**
   ```powershell
   vercel
   ```

4. **Follow prompts**:
   - Link to Vercel account
   - Set project name: `akdeniz-yapi-market`
   - Accept defaults
   - Deploy!

5. **Production deployment**
   ```powershell
   vercel --prod
   ```

**Your site will be live at**: `https://akdeniz-yapi-market.vercel.app`

#### Custom Domain:
1. Buy domain (e.g., `akdenizyapimarket.com`)
2. In Vercel dashboard → Settings → Domains
3. Add custom domain
4. Update DNS records as instructed
5. SSL certificate added automatically!

---

### Option 2: Netlify (Also Free)

1. **Push to GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/akdeniz-yapi-market.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Deploy!

**Your site will be live at**: `https://akdeniz-yapi-market.netlify.app`

---

### Option 3: Traditional Hosting (cPanel, etc.)

If you have traditional web hosting:

1. **Build the project**
   ```powershell
   npm run build
   ```

2. **Install Node.js on server** (if not available)

3. **Upload files via FTP**:
   - Upload all project files
   - Including `node_modules` folder

4. **On server, run**:
   ```bash
   npm install
   npm run build
   npm start
   ```

5. **Set up process manager** (PM2 recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "akdeniz-website" -- start
   pm2 save
   pm2 startup
   ```

---

### Option 4: VPS (DigitalOcean, Linode, etc.)

For more control:

1. **Create VPS** (Ubuntu recommended)

2. **SSH into server**

3. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone/upload project**

5. **Install dependencies**:
   ```bash
   npm install
   ```

6. **Build**:
   ```bash
   npm run build
   ```

7. **Set up Nginx reverse proxy**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Use PM2 to run**:
   ```bash
   pm2 start npm --name "akdeniz" -- start
   pm2 startup
   pm2 save
   ```

9. **Add SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Post-Deployment Tasks

### 1. SSL Certificate
- **Vercel/Netlify**: Automatic
- **Other hosting**: Use Let's Encrypt (free)

### 2. Google My Business
1. Go to [Google My Business](https://business.google.com)
2. Add your business
3. Verify ownership
4. Add website URL
5. Add photos
6. Enable messaging

### 3. Google Search Console
1. Go to [Search Console](https://search.google.com/search-console)
2. Add property (website URL)
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### 4. Google Analytics
1. Create GA4 property
2. Get tracking ID
3. Add to `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   ```

### 5. Social Media
Update business profiles with website URL:
- Facebook Business Page
- Instagram Bio
- WhatsApp Business Profile
- Local directories (Yandex, Foursquare, etc.)

### 6. Business Cards & Marketing
- Print website on business cards
- Add to storefront signage
- Include in email signatures
- Add to invoices

---

## Environment Variables (if needed)

Create `.env.local` file:

```env
# Contact Form Email Service (optional)
SENDGRID_API_KEY=your_key_here
CONTACT_EMAIL=info@akdenizyapimarket.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Testing Before Launch

### 1. Test all links
- Phone numbers (click-to-call)
- WhatsApp link
- Email link
- Internal navigation
- External links

### 2. Test form
- Fill out contact form
- Verify validation works
- Check if emails are received

### 3. Mobile testing
- Test on actual mobile devices
- Check responsive breakpoints
- Test touch interactions

### 4. Performance
- Run [PageSpeed Insights](https://pagespeed.web.dev/)
- Aim for 90+ score
- Optimize if needed

### 5. SEO
- Check meta titles and descriptions
- Verify Google can crawl site
- Test social media previews

---

## Domain Setup

### Buying a Domain

**Recommended registrars**:
- [Namecheap](https://namecheap.com) - $10-15/year
- [GoDaddy](https://godaddy.com)
- [Name.com](https://name.com)

**Suggested domains**:
- akdenizyapimarket.com
- akdenizyapimarket.com.tr (for Turkey)
- akdenizcilingir.com

### Connecting Domain

**For Vercel**:
1. Vercel Dashboard → Project → Settings → Domains
2. Add domain
3. Update DNS at registrar:
   - Type: A
   - Name: @
   - Value: (Vercel provides)
4. Wait for propagation (up to 48 hours, usually minutes)

**For Netlify**: Similar process, follow Netlify instructions

---

## Backup & Maintenance

### Regular Backups
- Code: Keep in GitHub repository
- Database: If you add one later
- Images: Store in cloud (Cloudinary, AWS S3)

### Updates
```powershell
# Update dependencies monthly
npm update

# Rebuild and redeploy
npm run build
vercel --prod
```

### Monitoring
- Set up uptime monitoring (UptimeRobot - free)
- Check Google Analytics weekly
- Review Google Search Console monthly

---

## Support & Help

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)

### Community Support
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## Estimated Costs

### Free Option (Recommended for start)
- Hosting: Vercel/Netlify (Free)
- Domain: ~$12/year
- SSL: Free (auto-included)
- **Total**: ~$12/year

### Professional Option
- Hosting: VPS ($5-10/month)
- Domain: ~$12/year
- Email: Google Workspace ($6/user/month)
- CDN: Cloudflare (Free)
- **Total**: ~$100-150/year

---

## Launch Checklist

- [ ] Update all contact information
- [ ] Replace Google Maps with correct location
- [ ] Add real business photos
- [ ] Test contact form
- [ ] Test all phone/WhatsApp links
- [ ] Check mobile responsiveness
- [ ] Run performance tests
- [ ] Set up SSL certificate
- [ ] Add to Google My Business
- [ ] Set up Google Analytics
- [ ] Update social media profiles
- [ ] Print business cards with URL
- [ ] Announce launch!

---

## 🎉 Ready to Launch!

Your website is ready to go live. Choose your deployment method above and follow the steps!

**Good luck with your business!** 🚀

---

**Questions?** Review the README.md and QUICKSTART.md files, or seek help from a web developer.
