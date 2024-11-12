"use client";

import { navLinks } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  className?: string;
  classNameLink?: string;
};

const NavLinks = ({ className, classNameLink }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-4", className)}>
      {navLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "font-semibold hover:text-primary transition-all duration-300 ease-in-out",
            classNameLink,
            pathname === item.href && "text-primary"
          )}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
