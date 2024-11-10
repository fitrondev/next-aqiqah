import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignIn fallbackRedirectUrl={"/"} />
    </div>
  );
};
export default LoginPage;
