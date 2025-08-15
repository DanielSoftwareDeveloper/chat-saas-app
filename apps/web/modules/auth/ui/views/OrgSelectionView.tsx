"use client";

import { OrganizationList, useOrganization } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export const OrgSelectionView = () => {
  const { organization } = useOrganization();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Guardamos el redirectUrl original antes de que Clerk lo borre
  const redirectUrlRef = useRef(
    searchParams.get("redirectUrl") || "/org-selection"
  );

  useEffect(() => {
    if (!organization) {
      router.push(redirectUrlRef.current);
    }
  }, [organization, router]);

  return (
    <OrganizationList
      afterCreateOrganizationUrl="/dashboard"
      afterSelectOrganizationUrl="/dashboard"
      hidePersonal
      skipInvitationScreen
    />
  );
};
