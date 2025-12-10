// src/features/progress/ProgressScreen.js
import Header from "../../shared/ui/Header";
import BottomNav from "../../shared/ui/BottomNav";
import Card from "../../shared/ui/Card";
import { PageTransition } from "../../shared/ui/Loader";

export default function ProgressScreen() {
  return (
    <PageTransition>
      <Header title="Progress" />
      <div className="max-w-md mx-auto p-4 mt-6 space-y-4">
        <Card>
          <h2 className="text-lg font-bold mb-2">Coming Soon</h2>
          <p className="text-sm text-gray-600">
            Progress charts & analytics will be added here.
          </p>
        </Card>
      </div>
      <BottomNav active="progress" />
    </PageTransition>
  );
}
