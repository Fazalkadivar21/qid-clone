"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import qs from "qs";

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

interface RelatedBlogsProps {
  currentSlug: string;
  categoryName?: string;
  categoryId?: number;
  apiUrl?: string;
}

export default function RelatedBlogs({
  currentSlug,
  categoryName,
  categoryId,
  apiUrl = "http://localhost:1337",
}: RelatedBlogsProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const query = qs.stringify(
          {
            filters: {
              $and: [
                { slug: { $ne: currentSlug } },
                { category: { name: { $eq: categoryName } } },
              ],
            },
            populate: ["cover", "author", "category"],
            limit: 10,
            sort: ["createdAt:desc"],
          },
          { encodeValuesOnly: true }
        );

        const res = await fetch(`${apiUrl}/api/articles?${query}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setArticles(data.data || []);
      } catch (error) {
        console.error("Error fetching related blogs:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    if (categoryName || categoryId) {
      fetchRelatedBlogs();
    } else {
      setLoading(false);
    }
  }, [currentSlug, categoryName, categoryId, apiUrl]);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320; // width of card (300px) + gap (20px)
      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <div className="w-full py-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  if (articles.length === 0) return null;

  return (
    <div className="w-full raleway-regular">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-white raleway-bold px-4 sm:px-0 md:pl-12">
        More on {articles[0]?.category?.name || "this category"}
      </h2>
      <div className="mb-4 md:mb-8"></div>
      
      {/* Mobile Grid (below md) */}
      <div className="md:hidden px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                href={`/${slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col"
              >
                {coverUrl && (
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={
                        coverUrl.startsWith("http")
                          ? coverUrl
                          : `${apiUrl}${coverUrl}`
                      }
                      alt={cover?.alternativeText || title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 flex-grow">
                    {description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm flex-wrap">
                    <span className="font-semibold truncate">
                      By {author?.name || "Unknown"}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 truncate">
                      {category?.name || "Uncategorized"}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop Carousel (md and above) */}
      <div className="hidden md:block">
        <div className="relative flex items-center gap-4 px-4 md:px-0">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 md:left-0 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-black shadow-lg transition-all duration-200 hover:scale-110 flex-shrink-0"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-x-auto scrollbar-hide flex-1 mx-8 md:mx-12" ref={carouselRef}>
            <div className="flex gap-6">
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
                    href={`/${slug}`}
                    className="flex-none w-[280px] lg:w-[300px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col"
                  >
                    {coverUrl && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={
                            coverUrl.startsWith("http")
                              ? coverUrl
                              : `${apiUrl}${coverUrl}`
                          }
                          alt={cover?.alternativeText || title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-5 lg:p-6 flex flex-col flex-grow">
                      <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 line-clamp-2">
                        {title}
                      </h2>
                      <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2 flex-grow">
                        {description}
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 text-xs lg:text-sm">
                        <span className="font-semibold">
                          By {author?.name || "Unknown"}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
                          {category?.name || "Uncategorized"}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 md:right-0 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-black shadow-lg transition-all duration-200 hover:scale-110 flex-shrink-0"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
