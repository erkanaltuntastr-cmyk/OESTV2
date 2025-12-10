// src/features/dashboard/WelcomeScreen.js
import { useNavigate } from "react-router-dom";
import Header from "../../shared/ui/Header";
import Card from "../../shared/ui/Card";
import Button from "../../shared/ui/Button";
import BottomNav from "../../shared/ui/BottomNav";
import { PageTransition } from "../../shared/ui/Loader";
import { useAuth } from "../../shared/hooks/useAuth";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <PageTransition>
      <Header title="Welcome" />
      <div className="max-w-md mx-auto p-4 mt-6 space-y-4">
        <Card>
          <h2 className="text-xl font-bold mb-2">
            Hello{user?.email ? `, ${user.email}` : ""}
          </h2>
          <p className="text-sm text-gray-600">
            Track your workouts, monitor your progress, and stay consistent.
          </p>
          <Button
            fullWidth
            className="mt-4"
            onClick={() => navigate("/workouts")}
          >
            Go to Workouts
          </Button>
        </Card>
      </div>
      <BottomNav active="workouts" />
    </PageTransition>
  );
}
