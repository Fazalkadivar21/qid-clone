import qs from "qs";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Metadata } from "next";
import { pageMetadata, siteConfig } from "../utils/seo";

interface Article {
  id: string | number;
  title: string;
  description: string;
  slug: string;
  cover?: {
    url: string;
    alternativeText?: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
  author?: {
    name: string;
  };
  category?: {
    name: string;
  };
}

interface BlogsResponse {
  data: Article[];
}

export const metadata: Metadata = {
  title: pageMetadata.blogs.title,
  description: pageMetadata.blogs.description,
  keywords: pageMetadata.blogs.keywords.join(", "),
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: `${siteConfig.url}/blogs`,
  },
  openGraph: {
    title: pageMetadata.blogs.title,
    description: pageMetadata.blogs.description,
    url: `${siteConfig.url}/blogs`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: pageMetadata.blogs.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.blogs.title,
    description: pageMetadata.blogs.description,
    images: [siteConfig.ogImage],
  },
};

interface Article {
  id: string | number;
  title: string;
  description: string;
  slug: string;
  cover?: {
    url: string;
    alternativeText?: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
  author?: {
    name: string;
  };
  category?: {
    name: string;
  };
}

interface BlogsResponse {
  data: Article[];
}

const query = qs.stringify(
  {
    populate: ["cover", "author", "category"],
    sort: ["createdAt:desc"]
  },
  {
    encodeValuesOnly: true,
  }
);

const url = process.env.url || "http://localhost:1337";

const BlogsPage: FC = async () => {
  let articles: Article[] = [];
  
  try {
    const res = await fetch(`${url}/api/articles?${query}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      console.warn(`Failed to fetch articles: ${res.status}`);
    } else {
      const data: BlogsResponse = await res.json();
      articles = data.data || [];
    }
  } catch (error) {
    console.warn("Error fetching articles:", error instanceof Error ? error.message : String(error));
    // Return graceful fallback with no articles
  }

  return (
    <div className="bg-white min-h-screen px-4 xl:max-w-6xl py-16 raleway-medium">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight raleway-bold drop-shadow-lg text-black">
        Latest Articles
      </h1>
      <div className="mb-12"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.length === 0 && (
          <div className="col-span-full text-center text-lg text-black">
            No articles found.
          </div>
        )}
        {articles.map((article) => {
          const { id, title, cover, author, category, slug } =
            article;
          const coverUrl =
            cover?.formats?.medium?.url ||
            cover?.formats?.small?.url ||
            cover?.formats?.thumbnail?.url ||
            cover?.url;
          return (
            <Link
              key={id}
              href={`/${slug}`}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-100"
              style={{ minHeight: 420 }}
            >
              {coverUrl ? (
                <div className="relative w-full h-52 mb-6 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={
                      coverUrl.startsWith("http")
                        ? coverUrl
                        : `${url}${coverUrl}`
                    }
                    alt={cover?.alternativeText || title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="w-full h-52 mb-6 rounded-xl overflow-hidden shadow-sm bg-gray-200 animate-pulse"></div>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 raleway-semibold line-clamp-2">
                {title}
              </h2>
              <div className="mb-4"></div>
              <div className="flex items-center gap-2 text-gray-700 text-base md:text-lg mb-1">
                <span className="font-semibold">
                  By {author?.name || "Unknown"}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm md:text-base px-2 py-0.5 rounded bg-gray-200 text-black">
                  {category?.name || "Uncategorized"}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
