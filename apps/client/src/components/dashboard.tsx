import { ContactUser, User } from "@/App";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";

export default function DashBoard({
  user,
  userHandler,
}: {
  user: User;
  userHandler: React.Dispatch<React.SetStateAction<User | null>>;
}) {
  const [selectedContact, setSelectedContact] = useState<ContactUser | null>(
    null,
  );
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar
        user={user}
        userHandler={userHandler}
        selectedContactHandler={setSelectedContact}
      />
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {selectedContact ? (
            <div>
              <p>
                Here's some details on {selectedContact.firstName} from your
                contact list:
              </p>
              <p>
                🏣
                {selectedContact.firstName} works in{" "}
                {selectedContact.department} as a {selectedContact.title} 💼
              </p>
              <p>☎️ : {selectedContact.phoneNumber}</p>
            </div>
          ) : (
            Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="aspect-video h-12 w-full rounded-lg bg-muted/50"
              />
            ))
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
