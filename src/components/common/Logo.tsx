import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/images/logo1.png"}
        alt=""
        width={100}
        height={100}
        priority
        sizes="100%"
        className="w-full h-[35px] object-cover"
      />
    </Link>
  );
};
export default Logo;
