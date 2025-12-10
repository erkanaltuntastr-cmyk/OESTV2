// src/app/router/AppRouter.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { GuestRoute } from "./GuestRoute";

import LoginScreen from "../../features/auth/LoginScreen";
import WelcomeScreen from "../../features/dashboard/WelcomeScreen";
import WorkoutsScreen from "../../features/workouts/WorkoutsScreen";
import WorkoutsListScreen from "../../features/workouts/WorkoutsListScreen";
import WorkoutDetailScreen from "../../features/workouts/WorkoutDetailScreen";
import WorkoutSessionScreen from "../../features/workouts/WorkoutSessionScreen";
import ProgressScreen from "../../features/progress/ProgressScreen";
import ProfileScreen from "../../features/profile/ProfileScreen";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Guest */}
        <Route
          path="/"
          element={
            <GuestRoute>
              <LoginScreen />
            </GuestRoute>
          }
        />

        {/* Protected */}
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <WelcomeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workouts"
          element={
            <ProtectedRoute>
              <WorkoutsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workouts/list"
          element={
            <ProtectedRoute>
              <WorkoutsListScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workouts/detail/:id"
          element={
            <ProtectedRoute>
              <WorkoutDetailScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workouts/session"
          element={
            <ProtectedRoute>
              <WorkoutSessionScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <ProgressScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileScreen />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
