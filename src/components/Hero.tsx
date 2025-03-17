import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-950">
      <div className="flex flex-col items-center justify-center">
        <Image src="/salmon-icon-380x338.png" alt="Likesalmon" width={380} height={338} />
      </div>
      <div className="font-exo text-4xl font-bold">
        Developer & UI Designer Ammon Morris bridges the gap between design and development.
      </div>
      <div className="font-exo text-4xl font-bold">
        It&apos;s pronounced /ˈæmən/ - like &quot;salmon&quot;
      </div>
    </div>
  );
}
