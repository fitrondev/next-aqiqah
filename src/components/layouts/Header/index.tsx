"use client";

import Logo from "@/components/common/Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = ({ children }: { children?: React.ReactNode }) => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "bg-background sticky top-0 left-0 right-0",
        scroll && "bg-background z-50 shadow-md transition-all duration-300"
      )}>
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />

          <NavLinks className="hidden lg:flex" />
        </div>

        <div className="hidden lg:flex">{children}</div>

        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
