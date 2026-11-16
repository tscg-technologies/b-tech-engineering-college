# B.Tech Engineering College Website
### Modern, Premium, Multi-Page Static Website for Indian Engineering Institutions

A multi-page static website built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript** (with zero third-party frameworks or runtime dependencies). It is designed to present a generic Indian engineering institution to prospective students and parents.

---

## 1. Project Overview & Architecture

- **Technology Stack**: Pure HTML5, Vanilla CSS3, Modern Vanilla JavaScript (ES6+).
- **Hosting Target**: 100% compatible with Hostinger Static Web Hosting, Apache, NGINX, Cloudflare Pages, or GitHub Pages.
- **Branding & Identity**: Strictly generic institutional identity (`B.TECH ENGINEERING COLLEGE`, `ENGINEERING EDUCATION`, `ADMISSIONS 2026–27`). No real or fictional brand, organization, or university name is asserted.
- **Contact Details**: Safe dummy placeholders throughout (Phone: `0000000000`, Email: `demo@example.com`, Address: `Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000`).
- **Responsive Design**: Mobile-first design system with sticky header, responsive mobile drawer, accessible dropdown navigation, interactive filter tabs, modal dialogs, and smooth scroll.
- **Image Placeholder System**: 100% CSS-driven placeholders with stable aspect ratios and spec badges. No missing image errors or 404 network requests. Ready for image integration via Google Flow.

---

## 2. Directory & File Structure

```
engineering-college-website/
│
├── index.html                      # 01. Homepage (Hero, Highlights, Programs, Campus Life, Testimonials, CTA)
├── about.html                      # 02. About College (Vision, Mission, Philosophy, Academic Approach)
├── programs.html                   # 03. B.Tech Programs (CSE, AIML, DS, IT, ECE, EEE, Mech, Civil)
├── departments.html                # 04. Departments (Subjects, Labs, Faculty Approach, Careers)
├── admissions.html                 # 05. Admissions 2026–27 (4-step process, eligibility, checklist, form, FAQs)
├── placements.html                 # 06. Placements & Careers (Training modules, readiness, demo statistics)
├── infrastructure.html             # 07. Infrastructure & Facilities (Smart classrooms, computer center, library)
├── laboratories.html               # 08. Engineering Laboratories (9 specialized departmental lab overviews)
├── research.html                   # 09. Research & Innovation (8 technological domains, student challenges)
├── campus-life.html                # 10. Campus Life (Coding clubs, robotics societies, cultural fest, sports)
├── student-projects.html           # 11. Student Projects Showcase (8 interactive projects + detail modal)
├── contact.html                    # 12. Contact Us (Enquiry form with JS validation, location diagram)
│
├── assets/
│   ├── css/
│   │   └── style.css               # Unified institutional stylesheet with design tokens & responsive media queries
│   │
│   ├── js/
│   │   └── script.js               # Pure Vanilla JS (mobile drawer, dropdowns, modal, FAQ, validation, scroll)
│   │
│   ├── images/                     # Target directory for generated images (.webp)
│   │   └── (future images generated from Google Flow will be placed here)
│   │
│   └── icons/                      # Inline and SVG asset icons
│
├── IMAGE-GENERATION-GUIDE.md       # Master inventory of all 63 image placeholders with Google Flow prompts
└── README.md                       # Setup, documentation, and Hostinger deployment guide
```

---

## 3. Key Design System Tokens

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Navy** | `#142B45` | Primary brand headers, footer, high-contrast sections |
| **Engineering Blue** | `#1769AA` | Primary buttons, active links, icons, accents |
| **Electric Blue** | `#2878D0` | Hover states, glowing accents, badge highlights |
| **White** | `#FFFFFF` | Backgrounds, clean card surfaces, readable text |
| **Light Grey** | `#F4F7FA` | Alternating section backgrounds, card borders |
| **Dark Text** | `#202B38` | Primary body typography for high accessibility |
| **Accent Orange** | `#F29D38` | CTAs, high-priority notification badges, admission highlights |
| **Soft Blue** | `#EAF3FC` | Tag badges, highlight containers, icon backgrounds |

---

## 4. Local Preview Instructions

You do not need any backend server, Node.js, or complex compiler to view or develop this website:

### Option A: Direct Browser Preview
Double-click `index.html` (or right-click and choose **Open with > Google Chrome / Microsoft Edge / Firefox**). All navigation links and interactions work out of the box.

### Option B: Local Lightweight Web Server
Using any lightweight static server (e.g. VS Code Live Server or Python):
```bash
# Using Python 3 built-in HTTP server:
python -m http.server 8000
```
Then navigate to `http://localhost:8000/` in your browser.

---

## 5. Hostinger Static Hosting Deployment Guide

This website is designed for deployment on Hostinger's Shared, Cloud, or Static hosting plans.

### Method 1: Using Hostinger File Manager (Quickest)
1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** and click **Manage** next to your domain.
3. Open the **File Manager** (located in the `Files` section).
4. Navigate into the **`public_html`** folder.
5. If there is a default `default.php` file, delete or rename it.
6. Upload all files from this project directory into **`public_html`**:
   - `index.html`, `about.html`, `programs.html`, etc.
   - The entire `assets/` folder (including `assets/css/style.css` and `assets/js/script.js`).
7. Ensure `index.html` is located directly in the root of `public_html`.
8. Your website is immediately live and accessible via your domain!

### Method 2: Using FTP / SFTP (FileZilla / WinSCP)
1. In **Hostinger hPanel**, go to **Files > FTP Accounts** and copy your FTP credentials (Host, Username, Port: 21).
2. Connect using an FTP client like **FileZilla**.
3. Open `public_html` on the remote server.
4. Drag and drop all project HTML files and the `assets/` folder into `public_html`.

### Method 3: Using Hostinger Git Deployment
1. Push this project to your GitHub/GitLab repository.
2. In Hostinger hPanel, navigate to **Advanced > Git**.
3. Enter your repository URL, branch (`main`), and set the deployment directory to `/public_html`.
4. Click **Deploy**.

---

## 6. Integrated Image Assets

All 63 generated images have been placed in the `images/` directory (and synchronized to `assets/images/`) and integrated across all 12 HTML pages:
- Images are served via clean relative paths (`images/{name}.jpeg`).
- Each image is placed inside its respective `.img-placeholder` container with responsive aspect ratios (`16:9` or `4:3`) and `.has-image` styling.
- Zero dashed borders or layout shifts; images render with rounded corners (`border-radius: inherit`) and `object-fit: cover`.
- All images feature accessible, descriptive `alt` tags and `loading="lazy"` (`loading="eager"` on the hero image).

---

## 7. Regulatory & Demo Disclaimers

All content on this website is created exclusively as an illustrative layout demonstration for a generic Indian B.Tech Engineering College:
- No real or fictional brand, university affiliation, or state board is claimed.
- All admissions information, cutoffs, document lists, and procedures are generalized models.
- All placement statistics and student testimonials are explicitly labeled as illustrative demo content.
- All contact forms are frontend demos with client-side JavaScript validation and do not transmit data to any server.
