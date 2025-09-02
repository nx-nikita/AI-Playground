# 🧠 AI Playground – Frontend Prototype

A polished **frontend-only AI interface prototype** inspired by leading AI platforms.  
Built with **Next.js (TypeScript, React), Tailwind CSS**, and deployed on **Vercel / Netlify / GitHub Pages**.  

---

## 🔍 Research

I explored several leading AI platforms and summarized their standout features:

- **OpenAI Playground** → Flexible parameter tuning (temperature, max tokens, stop sequences).  
- **Anthropic Claude UI** → Clean conversational design, large context windows.  
- **Hugging Face Spaces** → Quick deploys, model cards, community demos.  
- **Microsoft Copilot Lab** → Guided templates and real-time productivity helpers.  
- **Perplexity AI** → Search-like results with citations and aggregated sources.  

## 🎨 Design

I created a **Figma mockup** to plan layout and tokens.

- **Colors/Spacing** → Tailwind tokens mapped to design  
- **Typography** → `font-sans` body, `font-mono` code  
- **Layout** → Sidebar + main editor using grid/flexbox  
- **Animations** → Framer Motion for hover/focus polish  

👉 Each mockup element was translated into React components with Tailwind classes.

--- 

### State Management
- React Context (`SessionContext`) for session/theme/params  
- Mock APIs (`/api/models`, `/api/templates`) with loading/error  

---

## 🌐 Accessibility & UX

- Tab-friendly keyboard navigation  
- Tailwind focus rings for clear states  
- ARIA labels for sliders/buttons  
- Framer Motion animations for polish  

---

