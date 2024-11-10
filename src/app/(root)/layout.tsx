import Header from "@/components/layouts/Header";
import AuthHeader from "@/components/layouts/Header/AuthHeader";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>
        <AuthHeader />
      </Header>
      {children}
    </div>
  );
};
export default HomeLayout;
