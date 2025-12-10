// src/core/gym/workoutEngine.js

export function createMovement({
  name,
  sets = 3,
  reps = 10,
  weight = 0,
  notes = "",
}) {
  return {
    id: crypto.randomUUID(),
    name,
    sets,
    reps,
    weight,
    notes,
  };
}

export function createWorkoutSession({ date = Date.now(), movements = [] } = {}) {
  return {
    id: crypto.randomUUID(),
    date,
    movements,
  };
}

export const WorkoutEngine = {
  addMovement(session, movement) {
    return { ...session, movements: [...session.movements, movement] };
  },
  updateMovement(session, movementId, updates) {
    return {
      ...session,
      movements: session.movements.map((m) =>
        m.id === movementId ? { ...m, ...updates } : m
      ),
    };
  },
  removeMovement(session, movementId) {
    return {
      ...session,
      movements: session.movements.filter((m) => m.id !== movementId),
    };
  },
};
