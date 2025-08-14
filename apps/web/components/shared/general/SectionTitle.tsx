import { cn } from "@workspace/ui/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

function SectionTitle({ title, description, className }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2
        className={cn(
          "text-xl font-bold bg-amber-50 text-neutral-800 inline-block px-4 py-0.5  mb-2",
          className
        )}
      >
        {title}
      </h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}
export default SectionTitle;
