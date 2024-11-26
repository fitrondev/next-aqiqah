import Title from "@/components/common/Title";
import TestimonialCard from "@/components/layouts/Testimonials/TestimonialCard";
import { testimonialData } from "@/constants/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonial",
  description:
    "Apa kata mereka tentang aqiqah lombok? Baca testimonial dari pelanggan aqiqah lombok yang puas dengan layanan kami.",
};

const TestimonialPage = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 sm:space-y-8">
        <Title
          title="Testimonial"
          desc="Apa kata mereka tentang layanan kami?"
          className="text-primary"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
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
      </div>
    </section>
  );
};
export default TestimonialPage;
