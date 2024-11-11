import { testimonialData } from "@/constants/data";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";
import Title from "@/components/common/Title";

const Testimonial = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 sm:space-y-8">
        <Title
          title="Testimonial"
          desc="Apa kata mereka tentang layanan kami?"
          className="text-primary"
        />

        <Marquee pauseOnHover pauseOnClick>
          <div className="flex items-center justify-center gap-5 mr-5">
            {testimonialData.map((item, index) => (
              <TestimonialCard
                key={index}
                author={item.author}
                quote={item.quote}
                role={item.role}
                avatarSrc={item.avatarSrc}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
export default Testimonial;
