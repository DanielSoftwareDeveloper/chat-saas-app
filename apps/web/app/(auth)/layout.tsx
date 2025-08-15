import { AuthLayoutModule } from "@/modules/auth/ui/layouts/auth-layout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayoutModule>{children}</AuthLayoutModule>;
}
