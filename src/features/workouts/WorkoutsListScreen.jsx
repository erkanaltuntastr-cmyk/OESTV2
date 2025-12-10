// src/features/workouts/WorkoutsListScreen.js
import { useNavigate } from "react-router-dom";
import Header from "../../shared/ui/Header";
import Card from "../../shared/ui/Card";
import Button from "../../shared/ui/Button";
import BottomNav from "../../shared/ui/BottomNav";
import { PageTransition } from "../../shared/ui/Loader";

export default function WorkoutsListScreen() {
  const navigate = useNavigate();

  // Placeholder static data
  const sessions = [
    { id: "1", date: "2025-02-01", movements: 6 },
    { id: "2", date: "2025-02-03", movements: 4 },
  ];

  return (
    <PageTransition>
      <Header title="Workout History" />
      <div className="max-w-md mx-auto p-4 space-y-3 mt-6">
        {sessions.map((s) => (
          <Card key={s.id}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm">Session on {s.date}</h3>
                <p className="text-xs text-gray-600">
                  {s.movements} movements
                </p>
              </div>
              <Button
                size="sm"
                onClick={() => navigate(`/workouts/detail/${s.id}`)}
              >
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <BottomNav active="workouts" />
    </PageTransition>
  );
}
