import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  avatarSrc,
}: TestimonialProps) => {
  return (
    <Card className="w-full max-w-xs md:max-w-md flex flex-col justify-between shadow-md">
      <CardHeader>
        <QuoteIcon className="h-8 w-8 text-primary" />
      </CardHeader>

      <CardContent className="h-[160px]">
        <blockquote className="text-xs md:text-sm font-semibold">
          &quot;{quote}&quot;
        </blockquote>
      </CardContent>

      <CardFooter className="flex items-center gap-4 px-6 py-4 bg-muted/50">
        <Avatar>
          <AvatarImage src={avatarSrc} loading="lazy" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{author || "Anonymous"}</p>
          <p className="text-sm text-muted-foreground">{role || "User"}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
export default TestimonialCard;
