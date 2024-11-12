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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar, FaWhatsapp } from "react-icons/fa6";

interface PackageCardProps {
  title: string;
  description: string;
  note?: string;
  bestSeller?: boolean;
  images: string[];
}

const PackageCard = ({
  title,
  description,
  images,
  bestSeller,
}: PackageCardProps) => {
  return (
    <Dialog>
      <Card className="w-[300px] overflow-hidden shadow-lg">
        <CardHeader className="p-0">
          <DialogTrigger>
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={images[0]}
                alt={title}
                width={300}
                height={300}
                sizes="100%"
                loading="lazy"
                className="object-cover"
              />

              {bestSeller && (
                <Badge className="absolute bottom-2 right-2 bg-yellow-500 text-lg text-primary-foreground">
                  Best Seller <FaStar className="size-5 ml-2" />
                </Badge>
              )}
            </div>
          </DialogTrigger>
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

      <DialogContent className="max-w-xs sm:max-w-xl flex items-center justify-center">
        <DialogHeader className="hidden">
          <DialogTitle>Paket Aqiqah</DialogTitle>
          <DialogDescription>
            Pilih paket aqiqah sesuai dengan kebutuhan anda!
          </DialogDescription>
        </DialogHeader>

        <Carousel className="w-full max-w-xs sm:max-w-md">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={300}
                  sizes="100%"
                  loading="lazy"
                  className="size-auto object-cover select-none"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default PackageCard;
