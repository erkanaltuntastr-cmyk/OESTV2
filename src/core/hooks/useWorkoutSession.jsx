// src/core/hooks/useWorkoutSession.js
import { useState, useEffect } from "react";
import {
  createWorkoutSession,
  createMovement,
  WorkoutEngine,
} from "../gym/workoutEngine";
import {
  saveSessionToLocal,
  loadSessionFromLocal,
} from "../storage/localSession";

export function useWorkoutSession() {
  const existing = loadSessionFromLocal();
  const [session, setSession] = useState(existing || createWorkoutSession());

  useEffect(() => {
    saveSessionToLocal(session);
  }, [session]);

  function addMovementToSession(movementData) {
    const movement = createMovement(movementData);
    setSession((prev) => WorkoutEngine.addMovement(prev, movement));
  }

  function updateMovementInSession(id, updates) {
    setSession((prev) => WorkoutEngine.updateMovement(prev, id, updates));
  }

  function removeMovementFromSession(id) {
    setSession((prev) => WorkoutEngine.removeMovement(prev, id));
  }

  return {
    session,
    addMovementToSession,
    updateMovementInSession,
    removeMovementFromSession,
  };
}
