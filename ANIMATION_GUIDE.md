# Animation Patterns & Effects Guide

## 🎬 Animation Patterns Used in PropertyAI Landing Page

This document details all the advanced Framer Motion animations implemented in the landing page.

---

## 1. **Staggered Entrance Animations**

Used in: Features, Testimonials, Pricing, Footer

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,        // 100ms delay between children
      delayChildren: 0.2,          // Initial 200ms delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Usage:
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={containerVariants}
  className="grid grid-cols-3 gap-8"
>
  {items.map((item, idx) => (
    <motion.div key={idx} variants={itemVariants}>
      {/* Content */}
    </motion.div>
  ))}
</motion.div>
```

**Effect**: Children elements fade in and slide up sequentially

---

## 2. **Floating/Levitation Animation**

Used in: Features icons, CTA cards, Testimonials

```tsx
const floatingVariants = {
  animate: {
    y: [0, -30, 0],  // Move up 30px then back
    transition: {
      duration: 6,
      repeat: Infinity,
    },
  },
};

// Usage:
<motion.div
  variants={floatingVariants}
  animate="animate"
>
  Content floats up and down
</motion.div>
```

**Effect**: Continuous gentle up-and-down floating motion

---

## 3. **Animated Background Blobs**

Used in: Hero, Features, CTA sections

```tsx
<motion.div
  className="w-72 h-72 bg-blue-500 rounded-full blur-3xl"
  animate={{
    x: [0, 100, 0],
    y: [0, 50, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
/>
```

**Effect**: Background gradient blobs move in smooth patterns

**Variants**:
- Diagonal movement: `x: [0, 100, 0], y: [0, 50, 0]`
- Linear movement: `x: [0, 100, 0], y: [0, 0, 0]`
- Complex paths: `x: [0, 50, -50, 0], y: [0, -100, 100, 0]`

---

## 4. **Hover Scale & Glow Effect**

Used in: Buttons, Cards, CTA buttons

```tsx
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
  }}
  whileTap={{ scale: 0.95 }}
>
  Hover or Click Me
</motion.button>
```

**Effects**:
- `whileHover`: Scale up 5% + cyan glow
- `whileTap`: Scale down 5% for press effect

---

## 5. **Scroll-Triggered Animations**

Used in: All major sections

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, margin: "-100px" }}
>
  Animates when scrolled into view
</motion.div>
```

**Parameters**:
- `once: true`: Animation plays only once
- `margin: "-100px"`: Start animation 100px before element enters viewport

---

## 6. **Infinite Rotation**

Used in: Hero section rotating element

```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 20,
    repeat: Infinity,
  }}
>
  Rotating element
</motion.div>
```

**Effect**: Continuous 360° rotation

---

## 7. **Gradient Background Animation**

Used in: Testimonials, Pricing backgrounds

```tsx
<motion.div
  animate={{
    backgroundPosition: ["0% 0%", "100% 100%"],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse",
  }}
  style={{
    backgroundImage: "radial-gradient(...)",
    backgroundSize: "200% 200%",
  }}
/>
```

**Effect**: Smooth gradient shifting across section

---

## 8. **Pulsing Opacity**

Used in: Star ratings, testimonials

```tsx
<motion.span
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: idx * 0.1 }}
>
  ⭐
</motion.span>
```

**Effect**: Stars appear sequentially with scale animation

---

## 9. **Multi-Axis Animation**

Used in: CTA floating cards

```tsx
<motion.div
  animate={{
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 5, -5, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
>
  Moves in multiple directions simultaneously
</motion.div>
```

**Effect**: Complex floating pattern with rotation

---

## 10. **Scale on Hover with Shadow**

Used in: Pricing cards, Feature cards

```tsx
<motion.div
  whileHover={{
    y: -10,
    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)",
  }}
  className="border border-cyan-500/20"
>
  Card lifts up on hover
</motion.div>
```

**Effect**: Card lifts 10px up with enhanced shadow

---

## 11. **Staggered List Animation**

Used in: Pricing features list

```tsx
{features.map((feature, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: idx * 0.05 }}
    viewport={{ once: true }}
  >
    ✓ {feature}
  </motion.div>
))}
```

**Effect**: Features slide in from left with staggered timing

---

## 12. **Animate Border & Background**

Used in: CTA sections

```tsx
<motion.div
  whileHover={{
    borderColor: "rgba(34, 211, 238, 0.6)",
    boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
  }}
  className="border border-cyan-500/50"
>
  Animated border and glow
</motion.div>
```

**Effect**: Border color and glow animate on hover

---

## 13. **Scroll Indicator Bounce**

Used in: Hero section

```tsx
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  ⬇️
</motion.div>
```

**Effect**: Bouncing arrow indicating scroll

---

## 14. **Animated Badge**

Used in: Hero section hero badge

```tsx
<motion.div
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
  }}
  className="px-4 py-2 border border-cyan-500/50 bg-cyan-500/10"
>
  🚀 AI-Powered Real Estate Intelligence
</motion.div>
```

**Effect**: Badge scales and glows on hover

---

## 15. **Fade & Slide Animation**

Used in: All section headings

```tsx
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Section Title
</motion.h2>
```

**Effect**: Title fades in while sliding up

---

## Animation Timing Reference

| Animation Type | Duration | Effect |
|---|---|---|
| Entrance | 0.6-0.8s | Smooth, noticeable |
| Hover | 0.3s | Quick feedback |
| Background | 8-20s | Slow, subtle |
| Float | 3-6s | Gentle movement |
| Bounce | 2s | Attention grabbing |
| Rotation | 20s | Very slow |

---

## Performance Tips

1. **Use `repeat: Infinity`** for continuous animations
2. **Use `once: true`** in `viewport` for single-play animations
3. **Keep durations reasonable** (0.3s - 10s)
4. **Avoid animating large DOM trees**
5. **Use GPU-accelerated properties**: transform, opacity
6. **Avoid animating**: width, height, left, right

---

## Common Animation Combinations

### Card Hover Effect
```tsx
whileHover={{
  y: -10,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
}}
```

### Button Click Effect
```tsx
whileTap={{ scale: 0.95 }}
```

### Scroll-In Effect
```tsx
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
```

### Floating Element
```tsx
animate={{ y: [0, -20, 0] }}
transition={{ duration: 4, repeat: Infinity }}
```

---

## CSS Animation Additions (globals.css)

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.float { animation: float 3s ease-in-out infinite; }
.gradient-animate { animation: gradient-shift 8s ease infinite; }
.pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
```

---

## Customization Examples

### Slower Animation
```tsx
transition={{ duration: 2 }}  // Instead of 0.6
```

### Faster Animation
```tsx
transition={{ duration: 0.2 }}  // Instead of 0.6
```

### Different Scale
```tsx
whileHover={{ scale: 1.1 }}  // Instead of 1.05
```

### Different Movement
```tsx
y: [0, -50, 0]  // Bigger movement
x: [0, 20, 0]   // Horizontal movement
```

---

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Best Practices](https://www.framer.com/motion/animation-performance/)
- [Variants Deep Dive](https://www.framer.com/motion/variants/)

---

Created with ❤️ using Framer Motion
