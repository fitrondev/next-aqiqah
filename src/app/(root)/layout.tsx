import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default HomeLayout;
