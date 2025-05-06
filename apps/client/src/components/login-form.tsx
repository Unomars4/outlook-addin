import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import loginService from "@/services/user";
import contactService from "@/services/contacts";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { User } from "@/App";

export function LoginForm({
  className,
  userHandler,
  ...props
}: React.ComponentProps<"div"> & {
  userHandler: Dispatch<SetStateAction<User | null>>;
}) {
  const actionState = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    if (email && password) {
      try {
        const user = await loginService.login({
          email: email.toString(),
          password: password.toString(),
        });
        userHandler(user.user);
        contactService.setToken(user.token);
        window.localStorage.setItem("outlookAddIn", JSON.stringify(user));
        toast(`Welcome back ${user.user.firstName}🙂`);
      } catch (err) {
        toast(`We were unable to log you in 😔: ${err.response.data.message}`);
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={actionState}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
