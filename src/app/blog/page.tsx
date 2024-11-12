import BlogCard from "@/components/layouts/Blog/BlogCard";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  const result = await wisp.getPosts({ limit: 6 });

  console.log(result);
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-6">
        <div>
          <h3 className="text-3xl text-center font-bold">Aqiqah Lombok Blog</h3>
        </div>

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
