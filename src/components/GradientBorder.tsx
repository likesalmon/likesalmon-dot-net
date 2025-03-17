import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBorder({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gradient-to-br from-teal-500 to-fuchsia-500 p-0.5 grow-0 flex relative",
        className,
      )}
    >
      {children}
    </div>
  );
}
