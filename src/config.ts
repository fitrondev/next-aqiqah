const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Aqiqah Lombok";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "aqiqahlombok";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Aqiqah Lombok";
  const defaultDescription =
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Selamat datang di Aqiqah Lombok Blog, sumber informasi terpercaya untuk layanan aqiqah di Lombok. Temukan berbagai artikel menarik seputar aqiqah, tips, dan panduan untuk acara aqiqah yang sempurna.";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
