import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";

interface Props {
  children: React.ReactNode;
  title?: string;
  className?: string;
  light?: boolean;
  id: string;
}

export default function Section(props: Props) {
  return (
    <div
      id={props.id}
      className={cn(
        "flex min-h-screen flex-col items-center justify-center",
        props.light && "bg-slate-900",
        props.className,
      )}
    >
      {props.title && <SectionTitle title={props.title} />}
      {props.children}
    </div>
  );
}
