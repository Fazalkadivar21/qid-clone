import qs from "qs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import MarkdownRenderer from "../components/MarkdownRenderer";
import RelatedBlogs from "../components/RelatedBlogs";
import { siteConfig } from "../utils/seo";

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

// Generate static params for all articles
export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || url;
    const query = qs.stringify(
      {
        fields: ["slug"],
        pagination: { pageSize: 1000 },
      },
      { encodeValuesOnly: true }
    );

    const res = await fetch(`${apiUrl}/api/articles?${query}`, {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      console.warn(`Failed to fetch articles: ${res.status}`);
      return [];
    }
    
    const data: StrapiResponse = await res.json();
    
    return data.data.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.warn("Error generating static params for /[slug]:", error instanceof Error ? error.message : String(error));
    return [];
  }
}

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
    next: { revalidate: 3600 }, // Revalidate every hour
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

  try {
    const res = await fetch(`${url}/api/articles?${query}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      console.warn(`Failed to fetch article: ${res.status}`);
      return notFound();
    }
    
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
      <div className="bg-white min-h-screen flex flex-col items-center justify-center text-black raleway-regular">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
        
        {/* Back Button */}
        <div className="w-dvw md:w-3xl lg:w-5xl xl:w-6xl flex items-start justify-start mx-auto pt-8 px-5 md:px-4 mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Blogs
          </Link>
        </div>

        <article className="w-[90%] md:w-3xl lg:w-5xl xl:w-6xl lg:mx-6 mx-4 py-12 px-4 md:px-6 rounded-3xl shadow-lg bg-white border border-gray-200">
          {coverUrl ? (
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
          ) : (
            <div className="w-full h-72 md:h-96 mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-200 animate-pulse"></div>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black raleway-bold">
            {title}
          </h1>
          <div className="mb-4"></div>
          <div className="flex flex-wrap gap-4 items-center mb-6 text-gray-700 text-base">
            <span>
              By{" "}
              <span className="font-semibold text-black">
                {author?.name || "Unknown"}
              </span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="px-2 py-0.5 rounded text-black text-sm bg-gray-100">
              {category?.name || "Uncategorized"}
            </span>
          </div>
          <p className="text-2xl text-gray-900 mb-8">{description}</p>
          <div className="prose prose-lg max-w-none">
            {blocks && blocks.length > 0 ? (
              blocks.map((block, id) => (
                <MarkdownRenderer key={id}>{block.body}</MarkdownRenderer>
              ))
            ) : (
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              </div>
            )}
          </div>
        </article>

        {/* Related Blogs Carousel */}
        <div className="max-w-screen md:max-w-7xl mx-auto py-16 px-4">
          <RelatedBlogs 
            currentSlug={slug} 
            categoryName={category?.name}
            categoryId={category?.id}
            apiUrl={url}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.warn("Error fetching blog article:", error instanceof Error ? error.message : String(error));
    return notFound();
  }
}