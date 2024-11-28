import ButtonWA from "@/components/common/ButtonWA";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#f7c3b6,transparent)]"></div>
      </div>

      <div className="container h-[calc(100vh-64px)] flex items-center justify-center ">
        <div className="size-full lg:h-[500px] grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="lg:flex-1 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-primary font-bold text-center lg:text-start">
              Jasa Aqiqah di Lombok & Mataram
            </h1>

            <p className="max-w-[550px] text-sm sm:text-lg text-muted-foreground text-center lg:text-start">
              Catering Aqiqah Siap Saji Yang Membantu{" "}
              <span className="lg:text-primary">2.250+ Keluarga</span> Tunaikan
              Aqiqah Tanpa Ribet. Tunaikan aqiqah jadi lebih mudah, hemat waktu
              & tenaga.
            </p>

            <div>
              <ButtonWA />
            </div>
          </div>

          <div className="relative size-full lg:flex-1 flex items-center justify-center">
            <Image
              src={"/images/hero.png"}
              alt=""
              width={100}
              height={300}
              sizes="100%"
              priority
              className="w-full lg:size-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
