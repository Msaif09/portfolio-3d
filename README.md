# 🚀 3D Android Portfolio Website

A stunning, high-performance portfolio website for Android App Developer Mohammad Saif, featuring a futuristic 3D scene built with React Three Fiber and glassmorphism UI design.

![Portfolio Demo](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-Latest-blue?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)

## ✨ Features

- **🌌 Immersive 3D Scene** - Abstract geometric shapes float and react to mouse movement
- **🎨 Glassmorphism UI** - Premium frosted glass effect on all cards
- **🎬 Smooth Animations** - GSAP-powered entrance and scroll-triggered animations
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **⚡ Performance Optimized** - Lazy loading, Suspense boundaries, and efficient rendering
- **🎯 SEO Ready** - Comprehensive meta tags and semantic HTML

## 🛠️ Tech Stack

- **Next.js 14+** - React framework with App Router
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Helpers for R3F (Float, etc.)
- **GSAP** - Professional-grade animations
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Type-safe development
- **Lucide React** - Beautiful icon library

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-3d
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-3d/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & theme
├── components/
│   ├── Scene.tsx           # 3D Canvas container
│   ├── AndroidGeometry.tsx # 3D shapes & animations
│   ├── Lighting.tsx        # Scene lighting setup
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Projects showcase
│   ├── ProjectCard.tsx     # Individual project card
│   └── About.tsx           # About & social links
├── hooks/
│   └── useCameraScroll.ts  # Scroll-based camera movement
└── data/
    ├── projects.ts         # Portfolio projects data
    └── techStack.ts        # Technologies list
```

## 🎨 Customization

### Update Projects
Edit `data/projects.ts` to add or modify your apps:
```typescript
{
  id: "unique-id",
  title: "App Name",
  role: "Your Role",
  description: "App description",
  techStack: ["Kotlin", "Firebase"],
  playStoreUrl: "https://play.google.com/store/apps/details?id=...",
  appIcon: "📱",
}
```

### Update Tech Stack
Modify `data/techStack.ts` to showcase your skills:
```typescript
{ name: "Kotlin", icon: "🎯" }
```

### Customize Colors
All theme colors are defined in `app/globals.css`:
- Android Green: `#3DDC84`
- Neon Green: `#39FF14`
- Space Black: `#0a0a0a`

## 🌟 Key Features Explained

### 3D Scene
- **Abstract Geometry**: Spheres, cubes, and torus rings floating in space
- **Anti-Gravity Effect**: Smooth vertical oscillation using Drei's Float component
- **Mouse Parallax**: 3D objects subtly rotate following mouse movement
- **Scroll Animation**: Camera pans and zooms as you scroll

### Glassmorphism
- Backdrop blur effects on all UI cards
- Semi-transparent backgrounds
- Subtle borders for depth

### GSAP Animations
- **Hero**: Fade up with blur dissolve
- **Projects**: Staggered entrance + magnetic hover
- **About**: Elastic bounce-in for tech stack icons
- **Scroll**: Camera movement synced with scroll position

## 📱 Responsive Design

- **Mobile (< 768px)**: Horizontal scroll for projects
- **Tablet (768px - 1024px)**: 2-column project grid
- **Desktop (> 1024px)**: 3-column project grid

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

**Mohammad Saif**
- GitHub: [@Msaif09](https://github.com/Msaif09)
- LinkedIn: [Mohammad Saif](https://www.linkedin.com/in/mohammad-saif-1500412b4)

---

Built with ❤️ using Next.js, Three.js, and GSAP
