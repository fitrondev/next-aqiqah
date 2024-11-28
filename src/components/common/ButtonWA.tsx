import Link from "next/link";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type ButtonWAProps = {
  className?: string;
};

const ButtonWA = ({ className }: ButtonWAProps) => {
  return (
    <Button className={cn("", className)} asChild>
      <Link
        href="https://wa.link/lzrenk"
        target="_blank"
        rel="noopener noreferrer">
        Pesan Sekarang <FaWhatsapp className="size-5" />
      </Link>
    </Button>
  );
};
export default ButtonWA;
