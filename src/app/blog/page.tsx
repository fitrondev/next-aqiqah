import Title from "@/components/common/Title";
import BlogCard from "@/components/layouts/Blog/BlogCard";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  const result = await wisp.getPosts({ limit: 6 });
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-6">
        <Title
          title="Aqiqah Lombok Blog"
          desc="Dapatkan informasi terbaru seputar aqiqah dan berbagai tips menarik seputar aqiqah"
          className="text-primary"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-items-center gap-y-10 md:gap-4 xl:gap-y-10">
          {result.posts.map((post) => (
            <div className="break-words" key={post.id}>
              <BlogCard
                title={post.title}
                description={post.description!}
                image={post.image!}
                tags={post.tags.map((tag) => tag.name)}
                slug={post.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
