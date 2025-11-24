# Quick Reference: Updating Contact Information

## 📝 How to Update Contact Info

### Step 1: Open the environment file
```bash
# File location: .env.local (in project root)
```

### Step 2: Edit the values you want to change
```env
# Example: Change phone number
NEXT_PUBLIC_PHONE_NUMBER=905432341401
NEXT_PUBLIC_PHONE_DISPLAY=0543 234 1401
```

### Step 3: Restart the development server
```bash
npm run dev
```

### Step 4: Verify changes
Visit your site and check that the new information appears everywhere.

---

## 🔍 What Gets Updated Automatically

When you change a value in `.env.local`, it updates **ALL** these places:

### Phone Number
- ✅ Header top bar
- ✅ Header "Hemen Arayın" button
- ✅ Mobile menu button
- ✅ Footer contact section
- ✅ Hero CTA button
- ✅ All page CTA sections
- ✅ Contact page phone card
- ✅ Product inquiry buttons

### WhatsApp
- ✅ Header WhatsApp button
- ✅ Footer social icons
- ✅ Contact page WhatsApp card
- ✅ CTA sections

### Email
- ✅ Footer contact section
- ✅ Contact page email card

### Address
- ✅ Header location display
- ✅ Footer contact section
- ✅ Contact page address card
- ✅ CTA info cards
- ✅ Google Maps links

### Business Name & Tagline
- ✅ Header logo
- ✅ Footer logo
- ✅ Hero section
- ✅ Page titles
- ✅ Copyright notice

---

## 📋 Common Updates

### Change Phone Number
```env
NEXT_PUBLIC_PHONE_NUMBER=905551234567
NEXT_PUBLIC_PHONE_DISPLAY=0555 123 4567
```

### Change Email
```env
NEXT_PUBLIC_EMAIL=contact@yourcompany.com
```

### Change Address
```env
NEXT_PUBLIC_ADDRESS_LINE1=Yeni Mahalle, Atatürk Cad. No:123
NEXT_PUBLIC_ADDRESS_LINE2=Muratpaşa / Antalya
NEXT_PUBLIC_ADDRESS_FULL=Yeni Mahalle, Atatürk Cad. No:123, Muratpaşa, Antalya
```

### Change Business Hours
```env
NEXT_PUBLIC_HOURS_WEEKDAY=Pazartesi - Cuma: 09:00 - 18:00
NEXT_PUBLIC_HOURS_WEEKEND=Cumartesi: 10:00 - 15:00
NEXT_PUBLIC_HOURS_EMERGENCY=Acil Çağrı: 7/24
```

### Add Social Media
```env
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/yourpage
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourprofile
```

---

## ⚠️ Important Reminders

1. **Always restart** the dev server after editing `.env.local`
2. **Never commit** `.env.local` to git (it's already ignored)
3. **Keep `.env.example`** updated if you add new variables
4. **Test thoroughly** after making changes

---

## 🚨 Troubleshooting

### Changes not showing?
1. Did you save `.env.local`?
2. Did you restart the dev server?
3. Try hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)

### Seeing "undefined"?
1. Check variable names (case-sensitive!)
2. Ensure `NEXT_PUBLIC_` prefix is present
3. Verify `.env.local` is in the project root

### Need more help?
- Check `ENV_SETUP.md` for detailed documentation
- Review `IMPLEMENTATION_SUMMARY.md` for technical details

---

## 📚 Related Files

- `.env.local` - Your contact information (edit this!)
- `.env.example` - Template file (for reference)
- `lib/config.ts` - Configuration utility (don't edit unless adding new features)
- `ENV_SETUP.md` - Detailed setup guide
- `IMPLEMENTATION_SUMMARY.md` - Technical implementation details
