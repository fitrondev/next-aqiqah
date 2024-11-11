import Hadist from "@/components/layouts/Hadist";
import Hero from "@/components/layouts/Hero";
import Package from "@/components/layouts/Package";
import Testimonial from "@/components/layouts/Testimonials";
import WhyChooseUs from "@/components/layouts/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Hadist />
      <WhyChooseUs />
      <Testimonial />
      <Package />
    </>
  );
};
export default HomePage;
