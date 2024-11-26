import Header from "@/components/layouts/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Aqiqah Lombok",
    default: "Aqiqah Lombok",
    template: "%s - Aqiqah Lombok",
  },
  description:
    "Harga kambing di Aqiqah Lombok juga sangat terjangkau, mulai dari 3 juta saja Ayah & Bunda sudah bisa menunaikan ibadah aqiqah.",
};

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default RoutesLayout;
