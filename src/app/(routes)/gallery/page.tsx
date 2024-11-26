import Title from "@/components/common/Title";
import { galleryData } from "@/constants/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Lihat galeri kami untuk melihat foto-foto aqiqah yang sudah kami kerjakan.",
};

const GalleryPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 sm:space-y-8">
        <Title
          title="Galeri Aqiqah Lombok"
          desc="Lihat galeri aqiqah yang sudah kami kerjakan"
          className="text-primary"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryData.map((item, index) => (
            <Image
              key={index}
              src={item.href}
              alt={item.alt}
              width={300}
              height={300}
              loading="lazy"
              className="size-auto rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default GalleryPage;
