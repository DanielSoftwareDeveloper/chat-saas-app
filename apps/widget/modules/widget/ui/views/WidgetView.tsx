"use client";

import { useAtomValue } from "jotai";
import WidgetAuthScreen from "@/modules/widget/ui/screens/WidgetAuthScreen";
import WidgetFooter from "@/modules/widget/ui/components/WidgetFooter";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
import WidgetErrorScreen from "@/modules/widget/ui/screens/WidgetErrorScreen";
import WidgetLoadingScreen from "../screens/WidgetLoadingScreen";

interface Props {
  organizationId: string | null;
}

function WidgetView({ organizationId }: Props) {
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    error: <WidgetErrorScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO: Voice</p>,
    inbox: <p>TODO: Inbox</p>,
    selection: <p>TODO: Selection</p>,
    chat: <p>TODO: Chat</p>,
    contact: <p>TODO: Contact</p>,
  };

  return (
    <main className="min-h-screen min-w-screen size-full flex flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
      <WidgetFooter />
    </main>
  );
}
export default WidgetView;
