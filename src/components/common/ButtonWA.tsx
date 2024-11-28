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
        href="//api.whatsapp.com/send?phone=+6287769171945text=Assalamu'alaikum%20
        mohon%20informasi%20paket%20aqiqah">
        Pesan Sekarang <FaWhatsapp className="size-5" />
      </Link>
    </Button>
  );
};
export default ButtonWA;
