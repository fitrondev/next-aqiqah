"use client";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/Logo";

const Header = () => {
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
        <div>
          <Logo />
        </div>

        <NavLinks className="hidden lg:flex" />

        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
