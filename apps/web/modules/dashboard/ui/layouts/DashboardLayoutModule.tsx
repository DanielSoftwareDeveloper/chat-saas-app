import { AuthGuard } from "@/modules/auth/ui/components/AuthGuard";
import { OrganizationGuard } from "@/modules/auth/ui/components/OraganizationGuard";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import DashboardSidebar from "../components/DashboardSidebar";

export default async function DashboardLayoutModule({
  children,
}: {
  children: React.ReactNode;
}) {
  // Forzar estado expandido por defecto
  const defaultOpen = true;

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
