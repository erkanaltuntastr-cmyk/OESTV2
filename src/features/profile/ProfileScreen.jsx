// src/features/profile/ProfileScreen.js
import Header from "../../shared/ui/Header";
import BottomNav from "../../shared/ui/BottomNav";
import Card from "../../shared/ui/Card";
import { PageTransition } from "../../shared/ui/Loader";
import { useAuth } from "../../shared/hooks/useAuth";
import Button from "../../shared/ui/Button";
import { logout } from "../../core/auth/authService";

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <PageTransition>
      <Header title="Profile" />
      <div className="max-w-md mx-auto p-4 mt-6 space-y-4">
        <Card>
          <h2 className="text-lg font-bold mb-1">User Info</h2>
          <p className="text-sm text-gray-700">
            Email: {user?.email || "Unknown"}
          </p>
        </Card>
        <Button fullWidth variant="danger" onClick={logout}>
          Logout
        </Button>
      </div>
      <BottomNav active="profile" />
    </PageTransition>
  );
}
