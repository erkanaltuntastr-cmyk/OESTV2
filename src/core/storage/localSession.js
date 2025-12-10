// src/core/storage/localSession.js
const SESSION_KEY = "oestv2_v1_session";

export function saveSessionToLocal(session) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch (err) {
    console.error("[localSession] Failed to save session:", err);
  }
}

export function loadSessionFromLocal() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("[localSession] Failed to load session:", err);
    return null;
  }
}

export function clearLocalSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (err) {
    console.error("[localSession] Failed to clear session:", err);
  }
}
