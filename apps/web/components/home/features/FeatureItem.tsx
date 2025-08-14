import { cn } from "@workspace/ui/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  title: string;
  color: string;
  description: string;
  icon: LucideIcon;
}

function FeatureItem({
  title,
  color,
  description,
  icon: Icon,
}: FeatureItemProps) {
  return (
    <div className="bg-card border p-4 md:p-5 rounded-lg h-full">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-x-3 mb-4">
        <Icon className="size-6 md:size-7 mb-1" />
        <h3 className={cn(" text-sm md:text-base font-medium", color)}>
          {title}
        </h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
export default FeatureItem;
