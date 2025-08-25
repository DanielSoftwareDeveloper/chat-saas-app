import DashboardLayoutModule from "@/modules/dashboard/ui/layouts/DashboardLayoutModule";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutModule>{children}</DashboardLayoutModule>;
}
