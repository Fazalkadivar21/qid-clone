import qs from "qs";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import { siteConfig } from "../../utils/seo";

interface ImageFormat {
  url: string;
  width?: number;
  height?: number;
}

interface CoverImage {
  alternativeText?: string;
  url: string;
  formats?: {
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
  };
}

interface Author {
  id: number;
  name: string;
  email?: string;
}

interface Category {
  id: number;
  name: string;
}

interface Block {
  id: number;
  body: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover?: CoverImage;
  author?: Author;
  category?: Category;
  blocks?: Block[];
  createdAt?: string;
  updatedAt?: string;
}

interface StrapiResponse {
  data: Article[];
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const url = process.env.url || "http://localhost:1337";

// Generate metadata for blog post
export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
  const { slug } = await params;
  
  const query = qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      populate: "*",
    },
    { encodeValuesOnly: true }
  );

  const res = await fetch(`${url}/api/articles?${query}`, {
    cache: "no-store",
  });
  
  const data: StrapiResponse = await res.json();
  const blog = data.data?.[0];
  
  if (!blog) return { title: "Blog Not Found" };

  const coverUrl =
    blog.cover?.formats?.large?.url ||
    blog.cover?.formats?.medium?.url ||
    blog.cover?.formats?.small?.url ||
    blog.cover?.url;

  const imageUrl = coverUrl
    ? coverUrl.startsWith("http")
      ? coverUrl
      : `${url}${coverUrl}`
    : siteConfig.ogImage;

  return {
    title: blog.title,
    description: blog.description,
    keywords: [
      ...(blog.category?.name ? [blog.category.name] : []),
      "article",
      "blog",
      ...siteConfig.keywords,
    ].join(", "),
    alternates: {
      canonical: `${siteConfig.url}/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${siteConfig.url}/blogs/${slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  const query = qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      populate: "*",
    },
    { encodeValuesOnly: true }
  );

  const res = await fetch(`${url}/api/articles?${query}`, {
    cache: "no-store",
  });
  
  const data: StrapiResponse = await res.json();
  const blog = data.data?.[0];
  
  if (!blog) return notFound();

  const { title, description, cover, author, category, blocks } = blog;
  
  const coverUrl =
    cover?.formats?.large?.url ||
    cover?.formats?.medium?.url ||
    cover?.formats?.small?.url ||
    cover?.url;

  const imageUrl = coverUrl
    ? coverUrl.startsWith("http")
      ? coverUrl
      : `${url}${coverUrl}`
    : siteConfig.ogImage;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    author: {
      "@type": "Person",
      name: author?.name || siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };

  return (
    <div className="bg-grid">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <article className="max-w-3xl mx-auto py-12 px-5 md:px-0 rounded-3xl shadow-xl">
        {coverUrl && (
          <div className="relative w-full h-72 md:h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={coverUrl.startsWith("http") ? coverUrl : `${url}${coverUrl}`}
              alt={cover?.alternativeText || title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white raleway-bold">
          {title}
        </h1>
        <div className="mb-4"></div>
        <div className="flex flex-wrap gap-4 items-center mb-6 text-gray-200 text-base">
          <span>
            By{" "}
            <span className="font-semibold text-white">
              {author?.name || "Unknown"}
            </span>
          </span>
          <span className="text-gray-300">•</span>
          <span className="px-2 py-0.5 rounded text-gray-100 text-sm">
            {category?.name || "Uncategorized"}
          </span>
        </div>
        <p className="text-2xl text-gray-100 mb-8">{description}</p>
        <div className="prose prose-lg max-w-none prose-invert">
          {blocks?.map((block,id) => (
            <MarkdownRenderer key={id}>{block.body}</MarkdownRenderer>
          ))}
        </div>
      </article>
    </div>
  );
}