# Syed Abdul Aleem Ahmad Shah — Portfolio Website (v3, Editorial Professional Theme + SEO)

Ye aap ki purani portfolio (syedabdulaleem.vercel.app) ka upgraded version hai — wahi tamam content, lekin zyada professional structure, mukammal SEO, aur 2 naye client projects ke sath.

## Kya naya / behtar hai
- **5 projects** (pehle 2 thay): Zorva, Zewarly Store, **Roshan Restaurant & Pizza Time**, **iPhones by Arbab**, Zewarly Social Media Automation (full case study ke sath)
- **WhatsApp integration**: Hire Me button, floating WhatsApp button, aur contact form jo message seedha WhatsApp par bhegta hai (0329 5566111)
- **Complete SEO**: title/meta description, canonical, Open Graph + Twitter cards (share preview image ke sath), JSON-LD schema (Person + ProfessionalService + FAQ — Google rich results ke liye), sitemap.xml, robots.txt, semantic HTML with sirf 1 H1
- **FAQ section** — Google search me logo ke sawalo ke jawab ke liye
- **Speed**: tamam images optimize (total site ~1.3 MB), lazy loading, fonts display=swap, koi heavy framework nahi — plain HTML/CSS/JS
- **Design**: wahi premium dark look, light/dark theme toggle, scroll animations, fully responsive (mobile menu ke sath)
- Accessibility: alt text har image par, aria labels, keyboard focus, reduced-motion support

## Deploy karna (Vercel — purani site replace karna)
**Sab se asan tareeqa:**
1. vercel.com par apne account se login karen
2. Apni purani project (syedabdulaleem) ki Settings → ya phir nayi deploy: is folder ki tamam files ko ek nayi Git repo me push karen, ya Vercel CLI use karen:
   - `npm i -g vercel` phir is folder ke andar `vercel --prod`
3. Domain syedabdulaleem.vercel.app khud attach ho jayega agar aap isi project ko redeploy karte hain

**Netlify alternative:** netlify.com → "Add new site" → is folder ko drag & drop kar dein. Bas.

**Note:** SEO tags me canonical/OG URLs `https://syedabdulaleem.vercel.app/` par set hain. Agar domain change ho to index.html, sitemap.xml aur robots.txt me naya domain replace kar dein.

## Deploy ke baad SEO checklist
1. Google Search Console (search.google.com/search-console) me property add karen aur sitemap submit karen: `https://syedabdulaleem.vercel.app/sitemap.xml`
2. Apni LinkedIn, Fiverr aur Upwork profiles par portfolio link update/check karen (teeno profiles pehle se site me linked hain)
3. WhatsApp status / Facebook par naya portfolio link share karen

## Files
- `index.html` — poori website (ek hi page, tamam sections: About, Work, Case Study, Services, Skills, Experience, FAQ, Contact)
- `style.css` — design
- `script.js` — theme, menu, animations, WhatsApp form
- `assets/` — profile photo, project images, certificates, OG share image
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `vercel.json`

## Kuch change karna ho
- Phone/WhatsApp number: index.html me `923295566111` search karke badal dein
- Naya project: `#work` section me maujooda project card copy karke edit kar dein
- Rang (colors): style.css ke shuru me `:root` variables

— Built for Syed Abdul Aleem Ahmad Shah · AI Developer · Pakistan
