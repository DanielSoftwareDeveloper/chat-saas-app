"use client";

import WidgetFooter from "../../components/WidgetFooter";
import WidgetHeader from "../../components/WidgetHeader";

interface Props {
  organizationId: string;
}

function WidgetView({ organizationId }: Props) {
  return (
    <main className="min-h-screen min-w-screen size-full flex flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetHeader>
        <div className="font-semibold flex flex-col justify-between gap-y-2 px-2 py-6 ">
          <p className="text-3xl">Hi there! ✨</p>
          <p className="text-lg">How can we help you today?</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1">WidgetView {organizationId}</div>
      <WidgetFooter />
    </main>
  );
}
export default WidgetView;
