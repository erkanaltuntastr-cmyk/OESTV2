# 📘 **OESTV2 — Oakwood Easy Sports Tracker**

*Modern, modular, mobile-first workout tracking platform*

---

## 🚀 Overview

**OESTV2**, spor antrenmanlarını kolayca takip etmek, ilerlemeyi analiz etmek ve kullanıcıya modern bir “fitness app” deneyimi sunmak için geliştirilmiş React tabanlı bir uygulamadır.

Uygulama:

* ⚡ **React 18 + Vite** ile inşa edildi
* 🎨 **TailwindCSS** kullanıyor
* 🔥 **Firebase Authentication** entegre
* 🧠 **Clean Architecture** & **Feature-Based Architecture** yaklaşımını benimsiyor
* 📱 Tamamen **mobile-friendly** UI kit ile tasarlandı
* 💾 Şu an **Local-First**, ileride Firestore ile tam senkron olacak

---

# 🧩 **Architecture**

Uygulama 5 ana katman üzerine kuruludur:

```
src/
 ├ app/          → Router, Providers, App bootstrap
 ├ core/         → Business logic, domain models, services, storage
 ├ features/     → Screens grouped by feature
 ├ shared/       → Reusable UI components + shared hooks
 ├ styles/       → Global CSS & Tailwind entry
 └ assets/       → Images, icons
```

Bu mimari:

* **UI → Screens → Core** yönünde tek yönlü bağımlılık
* High cohesion, low coupling
* Test edilebilir modüller
* Kolay genişletilebilirlik

sağlar.

---

# 🗂️ **Folder Structure (Final)**

```
src/
 ├ app/
 │   ├ providers/
 │   │     └ AuthProvider.js
 │   ├ router/
 │   │     ├ AppRouter.js
 │   │     ├ ProtectedRoute.js
 │   │     └ GuestRoute.js
 │   └ index.js

 ├ core/
 │   ├ config/
 │   │     └ firebase.js
 │   ├ auth/
 │   │     └ authService.js
 │   ├ gym/
 │   │     ├ workoutEngine.js
 │   │     └ models.js
 │   ├ storage/
 │   │     └ localSession.js
 │   └ hooks/
 │         └ useWorkoutSession.js

 ├ features/
 │   ├ auth/
 │   │     └ LoginScreen.js
 │   ├ dashboard/
 │   │     └ WelcomeScreen.js
 │   ├ workouts/
 │   │     ├ WorkoutsScreen.js
 │   │     ├ WorkoutsListScreen.js
 │   │     ├ WorkoutDetailScreen.js
 │   │     └ WorkoutSessionScreen.js
 │   ├ progress/
 │   │     └ ProgressScreen.js
 │   └ profile/
 │         └ ProfileScreen.js

 ├ shared/
 │   ├ ui/
 │   │     ├ Button.js
 │   │     ├ Input.js
 │   │     ├ Card.js
 │   │     ├ Header.js
 │   │     ├ Loader.js
 │   │     ├ Modal.js
 │   │     ├ BottomNav.js
 │   │     ├ Tabs.js
 │   │     ├ Badge.js
 │   │     ├ Toggle.js
 │   │     ├ MovementRow.js
 │   │     └ AddMovementForm.js
 │   └ hooks/
 │         └ useAuth.js

 ├ styles/
 │     └ tailwind.css

 └ assets/
       ├ icons/
       └ images/
```

---

# 🔥 **Core Technologies**

| Layer        | Technology                                |
| ------------ | ----------------------------------------- |
| UI           | React 18, TailwindCSS                     |
| Routing      | React Router v6                           |
| Auth         | Firebase Auth                             |
| Local Data   | localStorage (Local-First Model)          |
| Domain       | Custom Workout Engine                     |
| Architecture | Clean Architecture + Feature Architecture |

---

# 🔐 **Authentication Flow**

* `AuthProvider` → Firebase `onAuthStateChanged` listener'ı çalıştırır
* `useAuth()` → user + loading state sağlar
* `ProtectedRoute` → auth gerektiren sayfaları korur
* `GuestRoute` → giriş yapmış kullanıcıların login sayfasına girmesine izin vermez

---

# 🧠 **Workout Engine**

WorkoutEngine domain katmanında yer alır:

* addMovement
* updateMovement
* removeMovement
* createMovement
* createWorkoutSession
* localStorage persist via `localSession.js`

UI ile **doğrudan bağlantısı yoktur**, her şey `useWorkoutSession()` hook'u üzerinden yönetilir.

---

# 🎨 **UI Design System**

UI Kit şunlardan oluşur:

* Button / Input / Card
* Header / Loader / PageTransition
* Modal / BottomNav
* Tabs, Badge, Toggle
* MovementRow / AddMovementForm

Tüm bileşenler:

* Reusable
* Mobile-first
* TailwindCSS uyumlu
* Minimal, modern ve tutarlı

---

# 📱 **Screens**

8 ekran tamamen hazırdır:

* Login
* Welcome
* Workouts
* Workouts List
* Workout Detail
* Workout Session
* Progress
* Profile

Hepsi:
✔ PageTransition
✔ Header
✔ BottomNav
✔ UI Kit + Core entegrasyonu
kullanır.

---

# 🛠️ **Development Setup**

### 1. Install dependencies

```sh
npm install
```

### 2. Add Firebase config

`src/core/config/firebase.js` içinde `YOUR_API_KEY` gibi alanları doldurun.

### 3. Run the app

```
npm run dev
```

---

# 📦 **Build**

```
npm run build
```

---

# 🧪 Status

* ✔ Mental Compile Test → **0 error**
* ✔ Tüm modüller eşleşiyor
* ✔ Tüm ekranlar render edebilir
* ✔ Routing / Auth / UI / Core %100 entegre
* ✔ Tailwind doğru bağlı
* ✔ Project is **run-ready**

---

# ✨ Roadmap (Next Steps)

* Add Firestore sync for workouts
* Add charts in ProgressScreen
* Add user settings page
* Add program generator (AI-assisted)
* Add offline sync queue
* Release Beta version

---

# 🙌 Credits

Developed collaboratively with **Erkan Altuntaş** & **ChatGPT Architecture Mode**
Clean, scalable and modern frontend engineering.
