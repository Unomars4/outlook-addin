import "./App.css";
import { LoginForm } from "@/components/login-form";
import DashBoard from "./components/dashboard";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div>
        <DashBoard />
      </div>
    );
  }
  return (
    <div className="w-1/4 mt-20  mx-auto">
      <LoginForm userHandler={setUser} />
    </div>
  );
}

export default App;
