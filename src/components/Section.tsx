import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

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
        "flex justify-center min-h-screen flex-col",
        props.light && "bg-slate-900",
        props.className,
      )}
    >
      {props.title && <SectionTitle title={props.title} />}
      {props.children}
    </div>
  );
}
