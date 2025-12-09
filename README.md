# 🏋️ Oakwood Easy Sport Tracker V2 (OESTV2)

OESTV2 is a minimal, fast, and fully *local-first* workout tracker designed to deliver a clean, distraction-free training experience.  
The app is built with a modern, modular architecture using **React, Vite, TypeScript, Zustand, Zod, and Tailwind CSS**.

---

## 🚀 Features (MVP)

- **Local-first architecture** — no login, no cloud dependency  
- **Onboarding Flow** — basic profile, goals, preferences  
- **Workout Engine**
  - Movement list
  - Add / undo sets
  - Automatic volume calculation  
- **Progress Overview** — simple training statistics  
- **AI Support (optional)**
  - Daily status classification
  - Session modification advice  
- **Modular structure** — easy to extend  
- **PWA-ready** — offline capability prepared for future release  

---

## 🧱 Architecture Overview

src/
app/ # Router, layout, global error boundary
core/ # Domain logic: models, engine, movement library, AI
features/ # Onboarding, Workout, Progress modules
shared/ # UI system, reusable components, hooks, utils
store/ # Global Zustand store with persist + migrations
assets/ # Icons, graphics, illustrations

yaml
Copy code

### Layer Summary

- **core/** → Pure logic (program generator, workout engine, Zod schemas)  
- **features/** → Each user-facing capability as a self-contained module  
- **shared/** → Visual components, design tokens, utility hooks  
- **store/** → Global state: program, workout, profile, settings, onboarding flag  

---

## 🛠 Installation

### 1. Clone the repository  
```bash
git clone https://github.com/erkanaltuntastr-cmyk/OESTV2.git
2. Navigate into the project folder
bash
Copy code
cd OESTV2
3. Install dependencies
bash
Copy code
npm install
4. Start the development server
bash
Copy code
npm run dev
Your local app will run at:

arduino
Copy code
http://localhost:5173
🧠 AI Integration (Optional)
AI is not required for core functionality.
All AI requests are routed through a secure backend proxy:

Prompts: /src/core/ai/prompts.ts

Client service: /src/core/ai/aiService.ts

Endpoint: POST /api/ai

No API keys are exposed on the client.

📈 Roadmap
 Workout Screen V2 (movement visuals + advanced set input)

 Full History View

 Weekly Volume Chart

 AI Day Classifier v2

 Complete Offline PWA mode

 Optional Cloud Sync

🤝 Contributing
Contributions are welcome.
Code style follows the principles:

Strong TypeScript typing

Zod-based schema validation

Feature-first architecture

Pure functions inside the engine

📄 License
MIT License

✨ Credits
OESTV2 is created to support the personal fitness workflow of Erkan Altuntaş, focusing on clarity, speed, and a calm training experience.