# 📘 **OESTV2 — Oakwood Easy Sports Tracker**

*Modern, modular, mobile-first workout tracking platform*

---

## 🚀 Overview

**OESTV2**, spor antrenmanlarını kolayca takip etmek, ilerlemeyi analiz etmek ve kullanıcıya modern bir "fitness app" deneyimi sunmak için geliştirilmiş React tabanlı bir uygulamadır.

Uygulama:

* ⚡ **React 18 + Vite** ile inşa edildi
* 🎨 **TailwindCSS** kullanıyor
* 🔥 **Firebase Authentication** entegre
* 🧠 **Clean Architecture & Feature-Based Architecture** prensipleri
* 📱 **Mobile-first UI kit**
* 💾 Başlangıçta **Local-First** veri modeli

---

## 🧩 Architecture

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

Mimari prensipler:

* **UI → Screens → Core** yönünde tek yönlü bağımlılık
* High cohesion, low coupling
* Clean, scalable, testable yapı

---

## 🗂️ Final Folder Structure

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
 │
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
 │
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
 │
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
 │
 ├ styles/
 │     └ tailwind.css
 │
 └ assets/
       ├ icons/
       └ images/
```

---

## 🔐 Authentication Flow

* **AuthProvider** → Firebase auth listener çalışır
* **useAuth()** → user + loading döner
* **ProtectedRoute** → login olmayanı `/`'a yollar
* **GuestRoute** → login olmuş kullanıcıyı `/welcome`'a yollar

---

## 🧠 Workout Engine

Domain katmanında yer alır ve UI'dan bağımsızdır.

Yapabildikleri:

* createMovement
* createWorkoutSession
* addMovement
* updateMovement
* removeMovement
* localStorage ile otomatik persist

UI ile iletişim tek bir hook üzerinden gerçekleşir:

### ✔ `useWorkoutSession()`

---

## 🎨 UI Design System

Tamamen reusable, minimal ve mobile-first bileşenlerden oluşur:

* Button / Input / Card
* Header
* Loader + GlobalLoader
* PageTransition
* Modal
* BottomNav
* Tabs, Badge, Toggle
* MovementRow, AddMovementForm

Bu kit tüm ekranlara tutarlılık sağlar.

---

## 📱 Screens

8 ekran tamamen hazırdır:

* Login
* Welcome
* Workouts
* Workouts List
* Workout Detail
* Workout Session
* Progress
* Profile

Her ekran UI kit + router + core motor ile entegredir.

---

## 🛠️ Development Setup

### 1. Install dependencies

```
npm install
```

### 2. Configure Firebase

`src/core/config/firebase.js` içindeki placeholder alanlarını doldurun.

### 3. Run the app

```
npm run dev
```

### 4. Build

```
npm run build
```

---

## 🧪 Status

* ✔ Mental Compile Test → **0 errors**
* ✔ Tüm import pathleri doğru
* ✔ Proje derlenebilir
* ✔ UI + Core + Screens tamamen entegre

---

## ✨ Roadmap

* Firestore senkronizasyonu
* ProgressScreen grafikler
* Kullanıcı ayarları
* Offline mode + sync queue
* Program generator (AI-assisted)
* Beta release

---

## 🙌 Credits

Developed collaboratively by **Erkan Altuntaş** & **ChatGPT (Architecture Mode)**.
Clean, scalable, and future-proof engineering.

---

# README.md

## OESTV2 — Oakwood Easy Sports Tracker v2

Modern, modular, mobile-first fitness tracking platform built with React 18, Vite, TailwindCSS, Firebase Authentication, and a Clean Architecture domain core.

### 🚀 Overview

OESTV2 enables users to track workouts through a clean, intuitive, mobile-first interface.

* React 18 + Vite
* TailwindCSS UI kit
* Firebase Auth
* Clean Architecture + Feature-based structure
* Local-First model (Firestore sync coming soon)

### 🧩 Architecture

```
src/
 ├ app/        # Router, Providers, App bootstrap
 ├ core/       # Domain layer, business logic, storage, auth
 ├ features/   # Screens grouped by functionality
 ├ shared/     # Reusable UI components, hooks
 ├ styles/     # Global styling (Tailwind)
 └ assets/     # Icons, images
```

### 📦 Setup

```
npm install
npm run dev
```

### 🔐 Firebase Setup

Fill in your keys inside:

```
src/core/config/firebase.js
```

### 🧠 Workout Engine

Pure business logic handling workout sessions:

* addMovement
* updateMovement
* removeMovement
* createMovement
* createWorkoutSession

Local-first design via localStorage, expandable to Firestore sync.

### 🎨 UI Kit

Reusable mobile-first components:

* Button, Input, Card
* Header, Loader, Modal
* BottomNav
* Tabs, Badge, Toggle
* MovementRow, AddMovementForm

### 📱 Screens Included

* Login
* Welcome
* Workouts
* Workouts List
* Workout Detail
* Workout Session
* Progress
* Profile

### ✨ Roadmap

* Firestore sync
* Progress charts
* Settings page
* AI-based program generator
* Offline sync queue
* Public Beta release

### 🙌 Credits

Developed collaboratively by **Erkan Altuntaş** & **ChatGPT Architecture Mode**.
