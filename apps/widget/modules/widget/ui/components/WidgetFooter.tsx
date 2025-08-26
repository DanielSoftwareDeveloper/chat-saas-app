import { Home, Inbox } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

function WidgetFooter() {
  const screen = "selection";
  return (
    <footer className="flex items-center justify-center border-t bg-background">
      <Button
        onClick={() => {}}
        size="icon"
        variant="ghost"
        className="h-14 flex-1 rounded-none"
      >
        <Home
          className={cn("size-5", screen === "selection" && "text-primary")}
        />
      </Button>
      <Button
        onClick={() => {}}
        size="icon"
        variant="ghost"
        className="h-14 flex-1 rounded-none"
      >
        <Inbox className={cn("size-5")} />
      </Button>
    </footer>
  );
}
export default WidgetFooter;
