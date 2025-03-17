interface Props {
  title: string;
}

export default function SectionTitle(props: Props) {
  return (
    <div className="flex justify-center">
      <h2 className="text-4xl font-bold font-exo bg-gradient-to-r from-teal-500 to-fuchsia-500 bg-clip-text text-transparent inline-block">
        {props.title}
      </h2>
    </div>
  );
}
