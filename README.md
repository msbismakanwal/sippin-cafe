# Sippin Cafe — Website

Premium cafe website built with React (Vite) + Bootstrap 5 — MERN-ready frontend.

## Features
- Brand theme from the Sippin Cafe logo (deep brown + caramel + cream)
- Interactive menu: category filter + live search (22 items with PKR prices)
- Working cart: add items, change quantity, remove, live total
- WhatsApp ordering: cart converts into a pre-filled WhatsApp order message
- Table reservation form that sends details to WhatsApp
- Gallery, testimonials, opening hours, floating WhatsApp button
- Fully responsive design

## Owner setup (one-time)
1. Open `src/data/menuData.js` and replace `WHATSAPP_NUMBER` (`923000000000`) with the cafe's real WhatsApp number.
2. Update the cafe address in `src/components/Sections.jsx` (Visit section).

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Deployed on Vercel. Backend (Node/Express + MongoDB) can be added under
`server/` later — frontend data is centralised in `src/data/menuData.js`.
