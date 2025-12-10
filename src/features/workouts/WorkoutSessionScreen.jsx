// src/features/workouts/WorkoutSessionScreen.js
import { useState } from "react";
import Header from "../../shared/ui/Header";
import Button from "../../shared/ui/Button";
import BottomNav from "../../shared/ui/BottomNav";
import { PageTransition } from "../../shared/ui/Loader";
import { useWorkoutSession } from "../../core/hooks/useWorkoutSession";
import { MovementRow } from "../../shared/ui/MovementRow";
import { AddMovementForm } from "../../shared/ui/AddMovementForm";

export default function WorkoutSessionScreen() {
  const {
    session,
    addMovementToSession,
    updateMovementInSession,
    removeMovementFromSession,
  } = useWorkoutSession();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageTransition>
      <Header title="Workout Session" />
      <div className="max-w-md mx-auto p-4 space-y-4 mt-6">
        {session.movements.map((m) => (
          <MovementRow
            key={m.id}
            movement={m}
            onUpdate={updateMovementInSession}
            onRemove={removeMovementFromSession}
          />
        ))}

        <Button fullWidth onClick={() => setModalOpen(true)}>
          Add Movement
        </Button>

        <AddMovementForm
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={addMovementToSession}
        />
      </div>
      <BottomNav active="workouts" />
    </PageTransition>
  );
}
