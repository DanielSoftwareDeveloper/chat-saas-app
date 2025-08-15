import { AuthGuard } from "@/modules/auth/ui/components/AuthGuard";
import { OrganizationGuard } from "@/modules/auth/ui/components/OraganizationGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
}
