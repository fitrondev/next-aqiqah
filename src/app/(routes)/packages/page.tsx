import Package from "@/components/layouts/Package";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paket",
  description:
    "Berbagai macam paket aqiqah yang bisa anda pilih sesuai dengan kebutuhan anda. Harga kambing aqiqah di Aqiqah Lombok sangat terjangkau.",
};

const PackagesPage = () => {
  return (
    <>
      <Package />
    </>
  );
};
export default PackagesPage;
