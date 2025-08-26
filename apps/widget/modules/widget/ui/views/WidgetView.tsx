"use client";

import WidgetAuthScreen from "@/modules/widget/ui/screens/WidgetAuthScreen";
import WidgetFooter from "@/modules/widget/ui/components/WidgetFooter";

interface Props {
  organizationId: string;
}

function WidgetView({ organizationId }: Props) {
  return (
    <main className="min-h-screen min-w-screen size-full flex flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetAuthScreen />
      <WidgetFooter />
    </main>
  );
}
export default WidgetView;
