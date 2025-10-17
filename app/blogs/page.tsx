import qs from "qs";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

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
  },
  {
    encodeValuesOnly: true,
  }
);

const url = process.env.url || "http://localhost:1337";

const BlogsPage: FC = async () => {
  const res = await fetch(`${url}/api/articles?${query}`, {
    cache: "no-store",
  });
  const data: BlogsResponse = await res.json();
  const articles = data.data || [];

  return (
    <div className="bg-grid min-h-screen px-4 md:px-40 py-16 raleway-medium">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight raleway-bold drop-shadow-lg">
        Latest Articles
      </h1>
      <div className="mb-12"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.length === 0 && (
          <div className="col-span-full text-center text-lg">
            No articles found.
          </div>
        )}
        {articles.map((article) => {
          const { id, title, description, cover, author, category, slug } =
            article;
          const coverUrl =
            cover?.formats?.medium?.url ||
            cover?.formats?.small?.url ||
            cover?.formats?.thumbnail?.url ||
            cover?.url;
          return (
            <Link
              key={id}
              href={`/blogs/${slug}`}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-100"
              style={{ minHeight: 420 }}
            >
              {coverUrl && (
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
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 raleway-semibold line-clamp-2">
                {title}
              </h2>
              <div className="mb-4"></div>
              <div className="flex items-center gap-2 text-gray-600 text-base md:text-lg mb-1">
                <span className="font-semibold">
                  By {author?.name || "Unknown"}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm md:text-base px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                  {category?.name || "Uncategorized"}
                </span>
              </div>
              <p className="text-gray-700 text-base md:text-lg mt-3 line-clamp-3">
                {description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
