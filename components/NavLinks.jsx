"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLinks({ path, title, className = "" }) {
  const route = usePathname();
  return (
    <Link
      className={`font-bebas text-bgray hover:text-primary text-2xl transition-all duration-500 hover:opacity-80 ${path === route && "text-primary underline underline-offset-4"} ${className}`}
      href={path}
    >
      <span>{title}</span>
    </Link>
  );
}
