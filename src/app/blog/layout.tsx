import Header from "@/components/layouts/Header";
import { config } from "@/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default BlogLayout;
