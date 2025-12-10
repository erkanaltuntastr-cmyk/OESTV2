// src/features/workouts/WorkoutsScreen.js
import { useNavigate } from "react-router-dom";
import Header from "../../shared/ui/Header";
import Card from "../../shared/ui/Card";
import Button from "../../shared/ui/Button";
import BottomNav from "../../shared/ui/BottomNav";
import { PageTransition } from "../../shared/ui/Loader";

export default function WorkoutsScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Header title="Workouts" />
      <div className="max-w-md mx-auto p-4 space-y-4 mt-6">
        <Card>
          <h2 className="text-lg font-bold mb-2">Start a Workout</h2>
          <p className="text-sm text-gray-600 mb-3">
            Begin a new workout session and log your movements.
          </p>
          <Button fullWidth onClick={() => navigate("/workouts/session")}>
            Start Session
          </Button>
        </Card>
        <Card>
          <h2 className="text-lg font-bold mb-2">Workout History</h2>
          <p className="text-sm text-gray-600 mb-3">
            Review your logged sessions and progress.
          </p>
          <Button fullWidth onClick={() => navigate("/workouts/list")}>
            View History
          </Button>
        </Card>
      </div>
      <BottomNav active="workouts" />
    </PageTransition>
  );
}
