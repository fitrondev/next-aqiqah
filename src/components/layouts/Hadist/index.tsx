import Title from "@/components/common/Title";

const Hadist = () => {
  return (
    <section className="py-5 lg:py-10 bg-primary text-background">
      <div className="container space-y-4 sm:space-y-8">
        <Title title="Setiap Anak Tergadaikan Dengan Aqiqahnya" />

        <div className="max-w-3xl mx-auto text-center text-sm sm:text-base">
          <p className="font-semibold">
            Nabi shallallahu ‘alaihi wa sallam bersabda:
          </p>
          <p>
            “Setiap anak tergadaikan dengan aqiqahnya. Disembelih pada hari
            ketujuh, dicukur gundul rambutnya, dan diberi nama.” (HR. Ahmad
            20722, at-Turmudzi 1605, dan dishahihkan al-Albani).
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hadist;
