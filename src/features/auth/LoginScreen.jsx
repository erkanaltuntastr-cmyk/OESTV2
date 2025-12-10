// src/features/auth/LoginScreen.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../shared/ui/Card";
import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import Header from "../../shared/ui/Header";
import { PageTransition } from "../../shared/ui/Loader";
import { login } from "../../core/auth/authService";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);
      setError(null);
      await login(email, password);
      navigate("/welcome");
    } catch (err) {
      setError("Incorrect email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageTransition>
      <Header title="Welcome Back" />
      <div className="max-w-md mx-auto p-4 mt-6">
        <Card>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          {error && (
            <p className="text-red-600 text-sm mb-3 font-medium">{error}</p>
          )}
          <Button onClick={handleLogin} fullWidth disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Card>
      </div>
    </PageTransition>
  );
}
