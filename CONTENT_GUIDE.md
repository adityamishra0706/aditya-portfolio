# Aditya Mishra — Portfolio Content Guide

This guide explains how to update every piece of content, add videos, replace images, and customize your portfolio website in simple, step-by-step instructions.

All your content is controlled from **one central file**:
👉 `src/data/portfolio.js`

---

## Table of Contents
1. [Where to Put Videos & Photos](#1-where-to-put-videos--photos)
2. [How to Replace the Hero Video](#2-how-to-replace-the-hero-video)
3. [How to Update Work Thumbnails & External Video Links](#3-how-to-update-work-thumbnails--external-video-links)
4. [How to Replace the About Portrait Photo](#4-how-to-replace-the-about-portrait-photo)
5. [How to Update Fashion Reel 2 (Thumbnail & External Destination)](#5-how-to-update-fashion-reel-2-thumbnail--external-destination)
6. [How to Add Another Project](#6-how-to-add-another-project)
7. [How to Edit Project Titles, Hooks, and Descriptions](#7-how-to-edit-project-titles-hooks-and-descriptions)
8. [How to Edit About Text (Engineering × Creativity)](#8-how-to-edit-about-text)
9. [How to Update Capabilities ("What I Do")](#9-how-to-update-capabilities)
10. [How to Change Instagram or LinkedIn Links](#10-how-to-change-instagram-or-linkedin-links)
11. [How to Change the Signature Accent Color](#11-how-to-change-the-signature-accent-color)
12. [How to Run the Project in VS Code](#12-how-to-run-the-project-in-vs-code)
13. [Recommended Video Export & Compression Settings](#13-recommended-video-export--compression-settings)

---

### 1. Where to Put Videos & Photos

All media belongs directly in the `public/` directory:

```
public/
├── images/
│   ├── aditya.jpg               ← Your About portrait
│   └── work/                    ← Static project thumbnails
│       ├── coke-ad.png          ← Coke spec ad thumbnail
│       ├── curls-ad.png         ← Curls phone ad thumbnail
│       ├── fashion-reel-01.png  ← Fashion Reel 01 thumbnail
│       └── fashion-reel-02.png  ← Fashion Reel 02 thumbnail
└── videos/
    └── hero/hero-main.mp4       ← Full-screen background hero video
```

---

### 2. How to Replace the Hero Video

1. Export your hero video in MP4 (H.264 format).
2. Rename the file to: `hero-main.mp4`
3. Save or copy it into:
   ```
   public/videos/hero/hero-main.mp4
   ```
4. Refresh your browser. The hero video will play automatically.

---

### 3. How to Update Work Thumbnails & External Video Links

The WORK section uses static thumbnail images that link out to external destinations (Instagram Reels) where visitors can watch your edits in full quality with audio.

1. Save your poster image (PNG or JPG) into:
   `public/images/work/`
2. Open `src/data/portfolio.js`, find the project inside `selectedWork`, and update `thumbnail` and `externalUrl`:
   ```javascript
   thumbnail: "/images/work/coke-ad.png",
   externalUrl: "https://www.instagram.com/reel/DcqFrheSBtZ/"
   ```

---

### 4. How to Replace the About Portrait Photo

1. Choose a high-quality vertical portrait (4:5 or 3:4 aspect ratio recommended).
2. Rename the image to: `aditya.jpg`
3. Save or copy it into:
   ```
   public/images/aditya.jpg
   ```
4. Refresh your browser. The About section will display your new portrait immediately.

---

### 5. How to Update Fashion Reel 02 (Thumbnail & External Destination)

Fashion Reel 02 is active in your portfolio as Project `04` in the vertical reels grid!

1. Save your vertical poster image into:
   ```
   public/images/work/fashion-reel-02.png
   ```
2. In `src/data/portfolio.js`:
   ```javascript
   {
     id: "fashion-reel-02",
     number: "04",
     badge: "04 / REEL",
     title: "FASHION REEL 02",
     label: "SHOT + EDITED",
     category: "SHORT-FORM CONTENT",
     description: "Second installment exploring rhythm, grading, and fashion storytelling.",
     thumbnail: "/images/work/fashion-reel-02.png",
     externalUrl: "https://www.instagram.com/reel/DdeA9tgAA4S/",
     alt: "Fashion Reel 02 — @POV.ADITYA",
     aspectRatio: "9/16",
     featured: false
   }
   ```
3. Save the file. The thumbnail renders, and clicking it opens the Instagram Reel in a new tab!

---

### 6. How to Add Another Project

1. Copy your thumbnail image into `public/images/work/my-new-project.jpg`.
2. Open `src/data/portfolio.js`.
3. In `selectedWork`, add a new project block:
   ```javascript
   {
     id: "my-new-project",
     number: "05",
     badge: "05 / PROJECT",
     title: "PROJECT TITLE",
     category: "COMMERCIAL / EXPERIMENTAL",
     description: "Brief concept summary of what you shot and edited.",
     thumbnail: "/images/work/my-new-project.jpg",
     externalUrl: "https://youtube.com/...",
     aspectRatio: "16/9", // use "16/9" for landscape or "9/16" for vertical reel
     featured: false
   }
   ```
4. Save `portfolio.js`.

---

### 7. How to Edit Project Titles, Hooks, and Descriptions

Open `src/data/portfolio.js`.
Find the project you want to change inside `selectedWork`. For example, to adjust the Curls hook:
```javascript
{
  id: "curls-ad",
  title: "CURLS",
  hook: "CAN A ₹10K ANDROID PHONE SHOOT A COMMERCIAL?",
  description: "Your updated concept text here...",
}
```
Save the file.

---

### 8. How to Edit About Text

Open `src/data/portfolio.js` and locate `about`:
```javascript
about: {
  heading: "ENGINEERING × CREATIVITY",
  storyParagraphs: [
    "I'm studying engineering, but somewhere between classes, assignments and college life...",
    "@POV.ADITYA is where I document that process."
  ],
  image: "/images/aditya.jpg",
  statusBadge: "DOCUMENTING THE JOURNEY"
}
```
Edit any line and save.

---

### 9. How to Update Capabilities ("What I Do")

Open `src/data/portfolio.js` and find `capabilities`.
You can modify the title or description of any capability:
```javascript
{
  number: "01",
  title: "VIDEO EDITING",
  description: "Precision pacing, rhythm-driven cuts, kinetic typography, and seamless transitions."
}
```

---

### 10. How to Change Instagram or LinkedIn Links

Open `src/data/portfolio.js` and edit the `instagram` or `linkedin` blocks:
```javascript
instagram: {
  label: "@POV.ADITYA",
  url: "https://www.instagram.com/pov.aditya/"
},
linkedin: {
  label: "LINKEDIN",
  url: "https://www.linkedin.com/in/aditya-mishra-803186422"
}
```
Changes apply sitewide automatically.

---

### 11. How to Change the Signature Accent Color

The signature accent color is `#C8FF3D` (acid lime).
To adjust it:
1. Open `src/styles/variables.css`.
2. Look at lines 8–10:
   ```css
   --accent: #C8FF3D;
   --accent-rgb: 200, 255, 61;
   ```
3. Change `#C8FF3D` to your preferred color.
4. Save the file.

---

### 12. How to Run the Project in VS Code

1. Open VS Code.
2. Go to **File → Open Folder...** and select:
   `C:\Users\adity\OneDrive\Documents\aditya-portfolio`
3. Press `Ctrl + ` `~`` to open the terminal.
4. Run:
   ```bash
   npm run dev
   ```
5. Click or open `http://localhost:5173` in your browser.

---

### 13. Recommended Video Export & Compression Settings

For optimal playback in web browsers, export your videos using these settings:
- **Format**: MP4
- **Codec**: H.264 (AVC)
- **Audio Codec**: AAC (128–192 kbps)
- **Bitrate**: 4 to 8 Mbps (VBR 1-pass or 2-pass)
- **Web Optimized / Moov Atom at Front**: Enable this setting in Premiere/DaVinci so video starts playing instantly without waiting for the full file download.
- **Hero Video File Size**: Target 10–25 MB for instant loading.
