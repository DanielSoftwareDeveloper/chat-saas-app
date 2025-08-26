import { cn } from "@workspace/ui/lib/utils";

function WidgetHeader({ children }: { children: React.ReactNode }) {
  return (
    <header
      className={cn(
        "bg-gradient-to-b from-primary to-[#ff4c69] p-4 text-primary-foreground"
      )}
    >
      {children}
    </header>
  );
}
export default WidgetHeader;
