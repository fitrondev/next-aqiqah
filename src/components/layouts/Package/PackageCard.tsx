import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FaStar, FaWhatsapp } from "react-icons/fa6";

interface PackageCardProps {
  title: string;
  description: string;
  note?: string;
  bestSeller?: boolean;
  images: string;
}

const PackageCard = ({
  title,
  description,
  images,
  bestSeller,
}: PackageCardProps) => {
  return (
    <Card className="w-[300px] overflow-hidden shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={images}
            alt={title}
            width={300}
            height={300}
            sizes="100%"
            className="object-cover"
          />

          {bestSeller && (
            <Badge className="absolute bottom-2 right-2 bg-yellow-500 text-lg text-primary-foreground">
              Best Seller <FaStar className="size-5 ml-2" />
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pb-1">
        <CardTitle className="text-lg font-bold mb-2 line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="mb-4">*{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 justify-end">
        <Button className="w-full">
          Pesan Sekarang <FaWhatsapp className="size-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
