import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
};
export default RegisterPage;
