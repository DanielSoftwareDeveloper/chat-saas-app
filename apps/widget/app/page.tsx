"use client";

import { use } from "react";
import WidgetView from "@/modules/widget/ui/views/WidgetView";

interface Props {
  searchParams: Promise<{
    organizationId: string;
  }>;
}

export default function HomePage({ searchParams }: Props) {
  const { organizationId } = use(searchParams);

  return <WidgetView organizationId={organizationId} />;
}
