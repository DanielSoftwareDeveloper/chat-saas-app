import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";

import { Check, LucideIcon } from "lucide-react";

interface PricingCardProps {
  plan: string;
  icon: LucideIcon;
  price: number;
  features: string[];
  ctaLabel: string;
  ctaColor: string;
}

function PricingCard({
  plan,
  icon: Icon,
  price,
  features,
  ctaLabel,
  ctaColor,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-card border p-6 rounded-lg flex flex-col justify-between"
      )}
    >
      <div className="flex flex-col gap-x-2 mb-4">
        <div className="flex gap-x-2 mb-4">
          <Icon className="size-7" />
          <h3 className="text-xl font-semibold">{plan}</h3>
        </div>
        <span className="">Price: ${price} / Month</span>
      </div>
      <Separator />
      <div className="mt-4">
        <h3 className="">Features:</h3>
        <ul className="flex flex-col my-4 gap-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-x-1">
              <Check className="size-4" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={cn(
          "text-black font-semibold hover:cursor-pointer px-4 py-2 rounded",
          ctaColor
        )}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
export default PricingCard;
