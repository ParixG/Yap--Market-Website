# Environment Variables Configuration

This project uses environment variables to manage contact information and business details. This allows you to easily update contact information without modifying the codebase.

## Setup Instructions

### 1. Create your environment file

Copy the example environment file to create your local configuration:

```bash
cp .env.example .env.local
```

### 2. Update with your contact information

Open `.env.local` and fill in your actual contact details:

```env
NEXT_PUBLIC_PHONE_NUMBER=905432341401
NEXT_PUBLIC_PHONE_DISPLAY=0543 234 1401
NEXT_PUBLIC_EMAIL=info@akdenizyapimarket.com
NEXT_PUBLIC_ADDRESS_LINE1=Altınkum, Gazi Mustafa Kemal Blv.
NEXT_PUBLIC_ADDRESS_LINE2=Konyaaltı / Antalya
# ... etc
```

### 3. Restart the development server

After updating the `.env.local` file, restart your development server for changes to take effect:

```bash
npm run dev
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_PHONE_NUMBER` | Phone number without + prefix (for links) | `905432341401` |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Formatted phone number (displayed to users) | `0543 234 1401` |
| `NEXT_PUBLIC_EMAIL` | Business email address | `info@akdenizyapimarket.com` |
| `NEXT_PUBLIC_ADDRESS_LINE1` | First line of address | `Altınkum, Gazi Mustafa Kemal Blv.` |
| `NEXT_PUBLIC_ADDRESS_LINE2` | Second line of address | `Konyaaltı / Antalya` |
| `NEXT_PUBLIC_ADDRESS_FULL` | Full address for map links | `Altınkum, Gazi Mustafa Kemal Blv., Konyaaltı, Antalya` |
| `NEXT_PUBLIC_HOURS_WEEKDAY` | Weekday business hours | `Pazartesi - Cumartesi: 08:00 - 20:00` |
| `NEXT_PUBLIC_HOURS_WEEKEND` | Weekend business hours | `Pazar: 09:00 - 18:00` |
| `NEXT_PUBLIC_HOURS_EMERGENCY` | Emergency service hours | `Acil Servis: 24/7` |
| `NEXT_PUBLIC_FACEBOOK_URL` | Facebook page URL (optional) | `https://facebook.com/yourpage` |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile URL (optional) | `https://instagram.com/yourprofile` |
| `NEXT_PUBLIC_BUSINESS_NAME` | Business name | `Akdeniz Yapı Market` |
| `NEXT_PUBLIC_BUSINESS_TAGLINE` | Business tagline | `Konyaaltı Anahtar & Çilingir` |
| `NEXT_PUBLIC_MAP_EMBED_URL` | Google Maps embed URL | `https://www.google.com/maps/embed?pb=...` |

## Default Values

If you don't create a `.env.local` file, the application will use default values defined in `lib/config.ts`. However, it's recommended to always create and configure your own `.env.local` file.

## Security Notes

- ✅ `.env.local` is already added to `.gitignore` and will NOT be committed to git
- ✅ All variables use `NEXT_PUBLIC_` prefix because they're safe to expose to the browser
- ✅ No sensitive information (API keys, passwords) should be stored here
- ⚠️ Never commit `.env.local` to version control

## Usage in Components

The contact information is centralized in `lib/config.ts` and can be imported into any component:

```tsx
import { contactInfo } from '@/lib/config';

// Use in your component
<a href={contactInfo.phone.link}>{contactInfo.phone.display}</a>
<a href={contactInfo.whatsapp.link}>WhatsApp</a>
<a href={contactInfo.email.link}>{contactInfo.email.address}</a>
```

## Deployment

When deploying to production (Vercel, Netlify, etc.), add these environment variables in your hosting platform's dashboard:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each variable with its value
3. Redeploy your application

### Netlify
1. Go to Site Settings → Build & Deploy → Environment
2. Add each variable with its value
3. Trigger a new deploy

## Troubleshooting

### Changes not appearing?

1. Make sure you've restarted the development server after editing `.env.local`
2. Clear your browser cache or hard refresh (Ctrl+F5 / Cmd+Shift+R)
3. Check that variable names match exactly (case-sensitive)

### Variables showing as undefined?

1. Verify that all variables have the `NEXT_PUBLIC_` prefix
2. Check for typos in variable names
3. Ensure `.env.local` is in the root directory of the project

## Need Help?

If you encounter any issues with environment variables:

1. Check that `.env.local` exists in the project root
2. Verify all variable names are spelled correctly
3. Restart the development server
4. Check the browser console for any errors
