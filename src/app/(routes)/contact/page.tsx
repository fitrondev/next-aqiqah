import ButtonWA from "@/components/common/ButtonWA";
import Map from "@/components/layouts/Maps/Map";
import { contactData } from "@/constants/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi kami jika Anda memiliki pertanyaan atau ingin berbicara dengan kami. Kontak Aqiqah Lombok sekarang.",
};

const ContactPage = () => {
  return (
    <section className="py-5 lg:py-0">
      <div className="container lg:min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="w-full lg:h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
          <div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                Kontak Kami
              </h3>

              <p className="text-sm sm:text-base font-semibold">
                Jika Anda memiliki pertanyaan atau ingin berbicara dengan kami,
                jangan ragu untuk menghubungi kami.
              </p>
            </div>

            {contactData.map((item, index) => (
              <div key={index}>
                <h4 className="text-lg sm:text-xl font-bold mt-4">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base font-semibold">
                  {item.desc}
                </p>

                <p className="text-sm sm:text-base font-semibold">
                  {item.desc2}
                </p>
              </div>
            ))}

            <div>
              <h4 className="text-lg sm:text-xl font-bold mt-4 mb-2">
                Hubungi Kami
              </h4>

              <ButtonWA />
            </div>
          </div>

          <div>
            <Map className="lg:h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
