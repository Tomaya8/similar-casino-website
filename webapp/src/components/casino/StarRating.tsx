import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  reviewCount?: number;
}

export default function StarRating({ rating, size = "md", showNumber = true, reviewCount }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const iconClass = cn(
    size === "sm" && "w-3 h-3",
    size === "md" && "w-4 h-4",
    size === "lg" && "w-5 h-5"
  );

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className={cn(iconClass, "fill-accent text-accent")} />
        ))}
        {hasHalf && <StarHalf className={cn(iconClass, "fill-accent text-accent")} />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className={cn(iconClass, "text-border fill-border")} />
        ))}
      </div>
      {showNumber && (
        <span className={cn(
          "font-semibold font-sans text-foreground",
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          size === "lg" && "text-base"
        )}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className={cn(
          "text-muted-foreground font-sans",
          size === "sm" && "text-xs",
          size === "md" && "text-xs",
          size === "lg" && "text-sm"
        )}>
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
