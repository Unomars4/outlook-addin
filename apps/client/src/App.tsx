import "./App.css";
import { LoginForm } from "@/components/login-form";
import DashBoard from "./components/dashboard";
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import contactService from "@/services/contacts";

export type ContactUser = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  contacts?: ContactUser[];
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [userContacts, setUserContacts] = useState<ContactUser[] | []>([]);

  useEffect(() => {
    const fetchUserContactList = async (user: User) => {
      try {
        const contacts = await contactService.getUserContacts(user.id);
        setUserContacts(contacts);
      } catch (err) {
        toast(
          `An error occurred retrieving your contact list: ${err.response.data.message}`,
        );
      }
    };

    const loggedInUser = window.localStorage.getItem("outlookAddIn");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user.user);
      contactService.setToken(user.token);
    }
  }, []);

  if (user) {
    return (
      <div>
        <DashBoard user={user} userHandler={setUser} />
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
