import Hadist from "@/components/layouts/Hadist";
import Hero from "@/components/layouts/Hero";
import Maps from "@/components/layouts/Maps";
import Package from "@/components/layouts/Package";
import Questions from "@/components/layouts/Questions";
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
      <Maps />
      <Questions />
    </>
  );
};
export default HomePage;
