# Victus Launch - Style Guide

## Brand Colors

### Primary Palette
- **Purple** `#2B0058` - Main brand color, used for primary CTAs and accents
- **Violet** `#8A3BFF` - Electric accent, gradients, and highlights
- **Cyan** `#00D1FF` - Tech accent, secondary gradients, and glows
- **Charcoal** `#0F1724` - Primary text color
- **Background** `#F8F8FB` - Page background

### Usage
```css
/* Tailwind classes */
.victus-purple: #2B0058
.victus-violet: #8A3BFF
.victus-cyan: #00D1FF
.victus-charcoal: #0F1724
.victus-bg: #F8F8FB
```

## Typography

### Display Font (Headings)
- **Font**: Sora
- **Weights**: 400, 600, 700, 800
- **Usage**: All h1-h6 elements, hero headlines, section titles

```css
font-family: 'Sora', sans-serif;
```

### Body Font
- **Font**: Inter
- **Weights**: 300, 400, 500, 600
- **Usage**: Body text, paragraphs, buttons, UI elements

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Monospace Font (Numbers/Metrics)
- **Font**: JetBrains Mono
- **Weights**: 400, 600
- **Usage**: Statistics, dollar amounts, percentages

```css
font-family: 'JetBrains Mono', monospace;
```

## Spacing Scale

Using Tailwind's default scale:
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **base**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 5rem (80px)

## Component Patterns

### Buttons

**Primary CTA**
```jsx
className="px-8 py-4 bg-gradient-to-r from-victus-violet to-victus-cyan 
          text-white rounded-xl font-semibold hover:shadow-xl 
          hover:scale-105 transition-all"
```

**Secondary Button**
```jsx
className="px-8 py-4 bg-white/80 backdrop-blur-sm text-victus-charcoal 
          rounded-xl border-2 border-transparent hover:border-victus-violet/20"
```

**Ghost Button**
```jsx
className="px-6 py-2 text-victus-charcoal hover:text-victus-violet 
          transition-colors"
```

### Cards

**Standard Card**
```jsx
className="bg-white rounded-2xl p-8 border-2 border-gray-100 
          hover:border-victus-violet/30 transition-all duration-300 
          hover:shadow-xl"
```

**Glass Card**
```jsx
className="glass rounded-2xl p-8 backdrop-blur-xl border border-white/20"
```

### Animations

**Fade In**
```css
animation: fade-in 0.6s ease-out
```

**Slide Up**
```css
animation: slide-up 0.6s ease-out
```

**Slide In (Custom)**
```css
animation: slide-in-left 0.8s cubic-bezier(0.2, 0.9, 0.1, 1)
animation: slide-in-right 0.8s cubic-bezier(0.2, 0.9, 0.1, 1)
```

## 3D Elements

### Hero Token Scene
- **Background**: Gradient from off-white to soft purple/cyan
- **Token**: Cylindrical shape with purple base and cyan inner glow
- **Podium**: Metallic grey platform
- **Particles**: 50 orbiting particles in purple/cyan
- **Animation**: Auto-rotation with cursor parallax

### Performance
- Target: 60 FPS on desktop, 30 FPS on mobile
- LOD implementation for low-end devices
- Fallback to static image on mobile

## Responsive Breakpoints

```javascript
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

## Accessibility Standards

- WCAG AA contrast ratios
- Keyboard navigation for all interactions
- ARIA labels for interactive elements
- Focus indicators on all focusable elements
- Alt text for all images
- Semantic HTML structure

## Motion Principles

1. **Subtlety**: Animations should enhance, not distract
2. **Purpose**: Every animation serves a functional purpose
3. **Performance**: 60fps target, degrade gracefully
4. **Respect**: Honor prefers-reduced-motion
5. **Timing**: Use cubic-bezier easing for natural feel

## Gradients

**Primary Gradient**
```css
background: linear-gradient(to right, #8A3BFF, #00D1FF)
```

**Text Gradient**
```css
background: linear-gradient(to right, #8A3BFF, #00D1FF)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

**Background Gradient**
```css
background: linear-gradient(to bottom right, #F8F8FB, rgba(138, 59, 255, 0.3))
```

## Shadows & Effects

**Purple Glow**
```css
box-shadow: 0 0 20px rgba(138, 59, 255, 0.3)
```

**Cyan Glow**
```css
box-shadow: 0 0 20px rgba(0, 209, 255, 0.3)
```

**Elevated Card**
```css
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1)
```

**Glass Effect**
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(16px)
border: 1px solid rgba(255, 255, 255, 0.2)
```


