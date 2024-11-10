import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <>
      <SignedIn>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <UserButton />
        </div>
      </SignedIn>

      <SignedOut>
        <Button asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
    </>
  );
};
export default AuthHeader;
