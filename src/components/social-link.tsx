import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center flex-col gap-3.5 hover:opacity-80 hover:top-0.5 hover:left-0.5 transition-all duration-300 relative"
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-full text-primary-foreground shadow-xs p-4 lg:p-6 shadow-sm shadow-white/90",
          "bg-gradient-to-br from-teal-500 to-fuchsia-500",
        )}
      >
        {icon}
      </div>
      <div className="text-base text-white font-medium font-exo flex items-center gap-2">
        {label} <SquareArrowOutUpRight className="size-4 inline-block" />
      </div>
    </Link>
  );
}
