import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
};

const BlogCard = ({ title, description, image, tags, slug }: BlogCardProps) => {
  return (
    <Card className="max-w-sm shadow-md">
      <CardHeader className="p-0">
        <Link href={`/blog/${slug}`}>
          <div className="aspect-[16/9] relative">
            {image ? (
              <Image
                alt={title}
                className="object-cover rounded-tl-lg rounded-tr-lg"
                src={image}
                fill
              />
            ) : (
              <Image
                src="https://placehold.co/600x400"
                alt="placeholder"
                fill
                className="object-cover rounded-tl-lg rounded-tr-lg"
              />
            )}
          </div>
        </Link>
      </CardHeader>

      <CardContent className="p-3 space-y-2">
        <Link href={`/blog/${slug}`}>
          <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
        </Link>

        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="p-3 pt-0 gap-2">
        {tags.slice(0, 3).map((tag) => (
          <Badge key={tag} className="text-[10px] leading-5">
            #{tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
export default BlogCard;
