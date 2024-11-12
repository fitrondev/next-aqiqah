import { formatDate } from "@/lib/formatDate";
import { wisp } from "@/lib/wisp";
import sanitize, { defaults } from "sanitize-html";

// type Params = {
//   slug: string;
// };

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: Params;
// }) {
//   const result = await wisp.getPost(slug);

//   if (!result || !result.post) {
//     return {
//       title: "Blog post not found",
//     };
//   }

//   const { title, description } = result.post;

//   return {
//     title,
//     description,
//   };
// }

const PostContent = ({ content }: { content: string }) => {
  const sanitizedContent = sanitize(content, {
    allowedTags: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "img",
      "h1",
      "h2",
      "h3",
      "code",
      "pre",
      "p",
      "li",
      "ul",
      "ol",
      "blockquote",
      // tables
      "td",
      "th",
      "table",
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "small",
      "div",
      "iframe",
    ],
    allowedAttributes: {
      ...defaults.allowedAttributes,
      "*": ["style"],
      iframe: ["src", "allowfullscreen", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  });
  return (
    <div
      className="blog-content mx-auto"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
  );
};

type TParams = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: TParams }) {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  if (!result.post) return null;
  const { title, publishedAt, content, tags } = result.post;

  return (
    <section>
      <div className="container">
        <div className="prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-10 break-words">
          <h1>{title}</h1>

          <PostContent content={content} />
          <div className="mt-10 opacity-40 text-sm">
            {tags.map((tag) => (
              <span key={tag.id}>#{tag.name}</span>
            ))}
          </div>
          <div className="text-sm opacity-40 mt-4">
            {formatDate(publishedAt ?? new Date())}
          </div>
        </div>
      </div>
    </section>
  );
}
