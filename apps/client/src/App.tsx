import "./App.css";
import { LoginForm } from "@/components/login-form";
import DashBoard from "./components/dashboard";
import { useState } from "react";
import { Toaster } from "sonner";

function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div>
        <DashBoard />
        <Toaster />
      </div>
    );
  }
  return (
    <div className="w-1/4 mt-20  mx-auto">
      <LoginForm userHandler={setUser} />
      <Toaster />
    </div>
  );
}

export default App;
