import { cn } from "@workspace/ui/lib/utils";

interface MainWrapperProps {
  className?: string;
  children: React.ReactNode;
}

function MainWrapper({ className, children }: MainWrapperProps) {
  return (
    <div className={cn("w-[90%] max-w-[1250px] mx-auto", className)}>
      {children}
    </div>
  );
}
export default MainWrapper;
