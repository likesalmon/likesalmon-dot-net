interface Props {
  children: React.ReactNode;
  title?: string;
}
export default function Section({ children, title }: Props) {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col h-screen max-w-7xl">
        {title && <h2 className="text-4xl font-bold font-exo">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
