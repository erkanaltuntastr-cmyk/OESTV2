// src/features/workouts/WorkoutDetailScreen.js
import { useParams } from "react-router-dom";
import Header from "../../shared/ui/Header";
import Card from "../../shared/ui/Card";
import BottomNav from "../../shared/ui/BottomNav";
import { PageTransition } from "../../shared/ui/Loader";

export default function WorkoutDetailScreen() {
  const { id } = useParams();

  const session = {
    id,
    date: "2025-02-01",
    movements: [
      { name: "Bench Press", sets: 4, reps: 10, weight: 60 },
      { name: "Squat", sets: 4, reps: 8, weight: 80 },
    ],
  };

  return (
    <PageTransition>
      <Header title="Workout Detail" />
      <div className="max-w-md mx-auto p-4 space-y-4 mt-6">
        <Card>
          <h2 className="text-lg font-bold mb-2">Session: {session.date}</h2>
          {session.movements.map((m, i) => (
            <div key={i} className="border-b py-2 text-sm">
              <p className="font-semibold">{m.name}</p>
              <p className="text-gray-600">
                {m.sets} sets × {m.reps} reps — {m.weight} kg
              </p>
            </div>
          ))}
        </Card>
      </div>
      <BottomNav active="workouts" />
    </PageTransition>
  );
}
