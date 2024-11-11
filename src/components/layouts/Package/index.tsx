import { packagesData } from "@/constants/data";
import PackageCard from "./PackageCard";
import Title from "@/components/common/Title";

const Package = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 sm:space-y-8">
        <Title
          title="Paket Aqiqah"
          desc="Pilih paket aqiqah sesuai dengan kebutuhan anda!"
          className="text-primary"
        />

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-x-1 md:gap-8 lg:gap-4 xl:gap-8">
          {packagesData.map((item, index) => (
            <PackageCard
              key={index}
              title={item.title}
              description={item.description}
              images={item.images}
              note={item.note}
              bestSeller={item.bestSeller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Package;
