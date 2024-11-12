import Title from "@/components/common/Title";
import Map from "./Map";

const Maps = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 sm:space-y-8">
        <Title
          title="Lokasi Kami"
          desc="Kami siap melayani anda dengan sepenuh hati!"
          className="text-primary"
        />

        <Map />
      </div>
    </section>
  );
};
export default Maps;
