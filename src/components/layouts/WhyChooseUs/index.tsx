import Title from "@/components/common/Title";
import { whyChooseUsData } from "@/constants/data";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 sm:space-y-8">
        <Title title="Kenapa Memilih Kami?" className="text-primary" />

        <div className="flex flex-wrap items-center justify-center gap-8">
          {whyChooseUsData.map((item, index) => (
            <WhyChooseUsCard
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
