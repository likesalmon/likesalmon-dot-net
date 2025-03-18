import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex grow justify-center p-4 bg-slate-900">
      <h1 className="sr-only">Likesalmon Dot Net</h1>
      <div className="flex items-center justify-between w-full text-white font-exo text-lg font-bold max-w-lg">
        <Link href="/#hero">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#socials">Socials</Link>
      </div>
    </div>
  );
}
