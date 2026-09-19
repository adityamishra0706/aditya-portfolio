# Aditya Mishra — Portfolio Website

> **A minimal, editorial, cinematic personal portfolio for Aditya Mishra (@POV.ADITYA)**
> CSE Student • Video Editor • Creator

---

## 1. Project Overview

This website serves as the personal digital home and visual archive of **Aditya Mishra**. It highlights Aditya's primary creative identity: **@POV.ADITYA** — documenting the creative process, visual rhythm, video editing, and short-form storytelling while balancing an engineering degree.

### Design Philosophy
- **Editorial & Cinematic**: High contrast, expansive typography, and restrained aesthetics (magazine / creative studio feel).
- **No Card UI**: Content breathes with generous whitespace, large media, and thin dividers instead of boxed cards.
- **Monochrome with Signature Accent**: Clean black and white baseline with an electric accent (`#C8FF3D`).
- **Zero Fabrication**: No fake client testimonials, no exaggerated stats, no filler experience.
- **Resilient Media Architecture**: Designed so that missing assets display elegant editorial placeholder cards rather than broken browser icons.

---

## 2. Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: Vanilla CSS with modern CSS Custom Properties (zero CSS bloat, zero heavy UI dependencies)
- **Typography**: 
  - Signature / Display: **Anton** & **Bebas Neue** (Google Fonts)
  - UI / Body: **Inter** (Google Fonts)
- **Icons / UI**: Clean SVG elements & CSS micro-animations

---

## 3. Folder Structure

```
aditya-portfolio/
│
├── public/
│   ├── favicon.svg                 # Website favicon
│   ├── images/
│   │   ├── aditya.jpg              # Place your About portrait photo here
│   │   └── work/                   # Static project poster thumbnails
│   │       ├── coke-ad.png         # Coke spec commercial thumbnail
│   │       ├── curls-ad.png        # Curls ₹10K phone ad thumbnail
│   │       ├── fashion-reel-01.png # Fashion Reel 01 thumbnail
│   │       └── fashion-reel-02.png # Fashion Reel 02 thumbnail
│   └── videos/
│       └── hero/hero-main.mp4      # Full-screen background hero video
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Fixed minimal header with smooth scroll & theme toggle
│   │   ├── WorkThumbnail.jsx       # Static project thumbnail component with external link cues
│   │   ├── VideoPlayer.jsx         # Resilient player with autoplay & missing-media fallback
│   │   ├── EditorialImage.jsx      # Image component with elegant fallback
│   │   ├── ThemeToggle.jsx         # Dark/Light mode switcher with persistence
│   │   └── Marquee.jsx             # Continuous horizontal typography banner
│   │
│   ├── sections/
│   │   ├── Hero.jsx                # Full-screen video hero with signature typography
│   │   ├── PovSection.jsx          # Primary identity & creative archive (@POV.ADITYA)
│   │   ├── SelectedWork.jsx        # Editorial showcase (Coke Ad, Curls, Fashion Reel)
│   │   ├── About.jsx               # Engineering × Creativity narrative & portrait
│   │   ├── Capabilities.jsx        # "What I Do" editorial list
│   │   ├── Contact.jsx             # "KEEP WATCHING." creator ending
│   │   └── Footer.jsx              # Minimal copyright & back-to-top link
│   │
│   ├── data/
│   │   └── portfolio.js            # CENTRAL CONTENT CONFIGURATION FILE
│   │
│   ├── styles/
│   │   ├── variables.css           # Theme tokens, colors, dark/light definitions
│   │   ├── global.css              # Reset, typography, layout utilities
│   │   ├── components.css          # VideoPlayer, EditorialImage, ThemeToggle styles
│   │   ├── navbar.css              # Header styling
│   │   ├── hero.css                # Hero section layout
│   │   ├── marquee.css             # Infinite marquee banner
│   │   ├── pov.css                 # POV.ADITYA layout
│   │   ├── work.css                # Selected Work layout
│   │   ├── about.css               # About grid & portrait layout
│   │   ├── capabilities.css        # Capabilities editorial list styling
│   │   └── contact-footer.css      # Contact & footer styling
│   │
│   ├── App.jsx                     # Main layout & scroll reveal observer
│   └── main.jsx                    # React root mount
│
├── index.html                      # HTML shell with Google Fonts & SEO meta tags
├── vite.config.js                  # Vite bundler configuration
├── package.json                    # Project scripts & dependencies
├── README.md                       # This documentation
└── CONTENT_GUIDE.md                # Detailed beginner guide for updating text & media
```

---

## 4. Quick Start & Local Development

### Installation
Open your terminal in the project directory:

```bash
npm install
```

### Running Locally
Start the local development server:

```bash
npm run dev
```

The terminal will display:
```
➜  Local:   http://localhost:5173/
```

Open `http://localhost:5173` in any browser. Files update in real-time as you edit.

---

## 5. Opening in VS Code

1. Launch **Visual Studio Code**.
2. Click **File → Open Folder...** and select:
   ```
   C:\Users\adity\OneDrive\Documents\aditya-portfolio
   ```
3. Open the integrated terminal (`Ctrl + ` `~``) and run:
   ```bash
   npm run dev
   ```

---

## 6. Centralized Content Editing

All text, project information, and links are managed in:
👉 **`src/data/portfolio.js`**

You do **not** need to touch React component code to edit content. Simply open `portfolio.js` and modify:
- Your name, role, and social links
- Hero tagline and video path
- Selected work items, hooks, and descriptions
- About story and portrait path
- Capabilities list
- Contact / Closing lines

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for full step-by-step instructions.

---

## 7. Media Locations (Videos & Images)

Drop your files directly into `public/`:

| Asset | Target Location |
|---|---|
| **Hero Background Video** | `public/videos/hero/hero-main.mp4` |
| **Coke Ad Video** | `public/videos/work/coke-ad.mp4` |
| **Curls Phone Ad Video** | `public/videos/work/curls-ad.mp4` |
| **Fashion Reel 01 Video** | `public/videos/work/fashion-reel-01.mp4` |
| **POV Visual Experiment** | `public/videos/gods-plan.mp4` |
| **POV Identity Video** | `public/videos/pov-aditya.mp4` |
| **About Portrait Photo** | `public/images/aditya.jpg` |

*Note: If any media file is not yet added, the website will display a clean, subtle editorial placeholder (`MEDIA PREVIEW: /videos/...`), disappearing automatically when the file is added.*

---

## 8. Theme System (Dark / Light Mode)

- Toggle using the pill button in the top navigation bar.
- Choice is saved in `localStorage`.
- Signature accent (`#C8FF3D`) is preserved across both modes.

---

## 9. Building for Production

```bash
npm run build
```

The production-ready minified bundle will be output to the `dist/` directory.
