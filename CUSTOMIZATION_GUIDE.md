# PropertyAI Landing Page - Customization Guide

## 🎨 How to Customize

### 1. Change Company Name & Branding

**File**: `src/app/layout.tsx`
```tsx
export const metadata: Metadata = {
  title: "PropertyAI - Smart Real Estate Solutions", // Change this
  description: "Your custom description here",
};
```

**File**: `src/components/Footer.tsx`
```tsx
<h3 className="text-lg font-bold text-white mb-4">PropertyAI</h3> {/* Change this */}
```

### 2. Change Colors & Theme

**File**: `src/app/globals.css`
```css
:root {
  --background: #0a0a0a;  /* Change background */
  --foreground: #ededed;  /* Change text color */
}
```

**Tailwind Color Classes**: Update in component files
- `bg-cyan-500` → Change to your primary color
- `bg-blue-600` → Change to your secondary color
- `bg-purple-500` → Change to your accent color

### 3. Change Content

#### Hero Section
**File**: `src/components/Hero.tsx`
```tsx
<span className="bg-gradient-to-r from-cyan-400...">
  Change this heading text here
</span>

<p className="text-xl md:text-2xl...">
  Update this subtitle text
</p>
```

#### Features
**File**: `src/components/Features.tsx`
```tsx
const features = [
  {
    icon: "🔍",
    title: "Change Feature Title",
    description: "Change feature description",
  },
  // Add or modify features here
];
```

#### Testimonials
**File**: `src/components/Testimonials.tsx`
```tsx
const testimonials = [
  {
    name: "John Doe",
    role: "Your Role",
    image: "👨‍💼",
    text: "Your testimonial text here",
    rating: 5,
  },
  // Add more testimonials
];
```

#### Pricing Plans
**File**: `src/components/Pricing.tsx`
```tsx
const plans = [
  {
    name: "Plan Name",
    price: "$99",
    period: "/month",
    description: "Plan description",
    features: [
      "Feature 1",
      "Feature 2",
      // Add features
    ],
    highlighted: false, // Set true for featured plan
  },
];
```

### 4. Add/Modify Animations

#### Adjust Animation Duration
**File**: Any component file
```tsx
transition={{
  duration: 8,  // Increase or decrease for faster/slower animations
  repeat: Infinity,
}}
```

#### Add New Floating Animation
```tsx
<motion.div
  animate={{
    y: [0, -20, 0],  // Y-axis movement
    x: [0, 10, 0],   // X-axis movement
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
>
  Your content
</motion.div>
```

### 5. Add New Sections

Create a new component file: `src/components/YourNewSection.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export default function YourNewSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Your content */}
      </motion.div>
    </section>
  );
}
```

Then import and use in `src/app/page.tsx`:

```tsx
import YourNewSection from "@/components/YourNewSection";

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Hero />
      <Features />
      <YourNewSection /> {/* Add here */}
      <Testimonials />
      {/* ... */}
    </main>
  );
}
```

### 6. Change Fonts

**File**: `src/app/layout.tsx`
```tsx
import { Geist, Geist_Mono, YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your",
  subsets: ["latin"],
});

export default function RootLayout() {
  return (
    <html className={`${yourFont.variable}`}>
      {/* Use your font */}
    </html>
  );
}
```

### 7. Add Images/Icons

Place images in `public/` directory, then use:

```tsx
import Image from "next/image";

<Image
  src="/your-image.png"
  alt="Description"
  width={100}
  height={100}
/>
```

### 8. Change Button Links

**File**: `src/components/Hero.tsx`
```tsx
<button onClick={() => window.location.href = "https://your-url.com"}>
  Click Me
</button>
```

## 🌐 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Use in components:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 📱 Responsive Design Tips

- Use `md:` prefix for tablet and up
- Use `lg:` prefix for desktop
- Mobile is the default (no prefix)

Example:
```tsx
<div className="text-lg md:text-2xl lg:text-4xl">
  Responsive text
</div>
```

## ⚡ Performance Optimization

1. **Image Optimization**
   ```tsx
   <Image
     src="/image.png"
     alt="Description"
     width={1000}
     height={500}
     priority // For above-the-fold images
   />
   ```

2. **Lazy Loading**
   ```tsx
   <Image
     src="/image.png"
     alt="Description"
     loading="lazy"
   />
   ```

3. **Code Splitting**: Already handled by Next.js

## 🔍 SEO Optimization

**File**: `src/app/layout.tsx`
```tsx
export const metadata: Metadata = {
  title: "Your Title - Keyword Focus",
  description: "Meta description with keywords",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "Your Title",
    description: "Description for social sharing",
    image: "https://your-domain.com/og-image.png",
  },
};
```

## 🚀 Deployment Checklist

- [ ] Update company name and branding
- [ ] Update all content (features, testimonials, pricing)
- [ ] Change colors to match brand
- [ ] Update images and logos
- [ ] Test responsiveness on mobile devices
- [ ] Check all links are working
- [ ] Optimize images
- [ ] Add analytics code
- [ ] Set up domain and SSL certificate
- [ ] Deploy to Vercel or hosting platform

## 🛠️ Useful Commands

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run lint     # Check code quality
npm start        # Start production server
npm run format   # Format code (if configured)
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 💡 Tips & Tricks

1. **Use `whileInView`** to trigger animations on scroll
2. **Use `motion.div`** instead of `div` for animations
3. **Optimize background images** as they affect performance
4. **Test on real devices** for mobile experience
5. **Use CSS classes** over inline styles for consistency
6. **Keep animations subtle** for better user experience

## 🆘 Troubleshooting

### Animations not working?
- Make sure component has `"use client"` at top
- Check Framer Motion is installed: `npm install framer-motion`

### Styles not applying?
- Rebuild Tailwind: `npm run build`
- Clear browser cache
- Check className syntax

### Build errors?
- Check TypeScript errors: `npm run build`
- Verify all imports are correct
- Clear `.next` folder: `rm -rf .next`

---

Happy customizing! 🎉
