"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayoutModule } from "@/modules/auth/ui/layouts/auth-layout";
import { OrgSelectionView } from "@/modules/auth/ui/views/OrgSelectionView";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();
  if (!organization) {
    return (
      <AuthLayoutModule>
        <OrgSelectionView />
      </AuthLayoutModule>
    );
  }

  return <>{children}</>;
};
