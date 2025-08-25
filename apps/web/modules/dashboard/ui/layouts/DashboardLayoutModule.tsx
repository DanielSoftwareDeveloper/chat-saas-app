import { AuthGuard } from "@/modules/auth/ui/components/AuthGuard";
import { OrganizationGuard } from "@/modules/auth/ui/components/OraganizationGuard";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import DashboardSidebar from "../components/DashboardSidebar";

export default async function DashboardLayoutModule({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <AuthGuard>
      <OrganizationGuard>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
          <main className="flex flex-1 flex-col">{children}</main>
        </SidebarProvider>
      </OrganizationGuard>
    </AuthGuard>
  );
}
