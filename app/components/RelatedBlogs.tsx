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

  // Placeholder card component
  const PlaceholderCard = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
      <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-4 sm:p-5 md:p-5 lg:p-6 flex flex-col flex-grow gap-3">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
        </div>
        <div className="mt-auto pt-2 flex gap-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
        </div>
      </div>
    </div>
  );
  
  if (loading) {
    return (
      <div className="w-full raleway-regular">
        <div className="h-8 md:h-10 bg-gray-300 rounded animate-pulse w-64 mb-6 md:mb-8 px-4 sm:px-0 md:pl-12"></div>
        <div className="mb-4 md:mb-8"></div>
        
        {/* Mobile Grid Placeholders */}
        <div className="md:hidden px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <PlaceholderCard key={i} />
            ))}
          </div>
        </div>

        {/* Desktop Carousel Placeholders */}
        <div className="hidden md:block">
          <div className="relative flex items-center gap-4 px-4 md:px-0">
            <div className="absolute left-0 z-10 p-2 rounded-full bg-gray-300 animate-pulse flex-shrink-0 w-10 h-10"></div>
            
            <div className="overflow-hidden flex-1 mx-8 md:mx-12">
              <div className="flex gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex-none w-[280px] lg:w-[300px]">
                    <PlaceholderCard />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-0 z-10 p-2 rounded-full bg-gray-300 animate-pulse flex-shrink-0 w-10 h-10"></div>
          </div>
        </div>
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
      <div className="md:hidden">
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
                className="bg-white w-[90dvw] rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col"
              >
                {coverUrl ? (
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
                ) : (
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-gray-200 animate-pulse flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {title || <span className="bg-gray-200 animate-pulse h-6 rounded w-3/4 inline-block">&nbsp;</span>}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 flex-grow">
                    {description || <span className="bg-gray-200 animate-pulse h-4 rounded w-full inline-block">&nbsp;</span>}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm flex-wrap">
                    <span className="font-semibold truncate">
                      By {author?.name || <span className="bg-gray-200 animate-pulse h-4 rounded w-20 inline-block">&nbsp;</span>}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 truncate">
                      {category?.name || <span className="bg-gray-200 animate-pulse h-4 rounded w-24 inline-block">&nbsp;</span>}
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
                    {coverUrl ? (
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
                    ) : (
                      <div className="relative w-full h-48 overflow-hidden bg-gray-200 animate-pulse flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="p-5 lg:p-6 flex flex-col flex-grow">
                      <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 line-clamp-2">
                        {title || <span className="bg-gray-200 animate-pulse h-6 rounded w-3/4 inline-block">&nbsp;</span>}
                      </h2>
                      <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2 flex-grow">
                        {description || <span className="bg-gray-200 animate-pulse h-4 rounded w-full inline-block">&nbsp;</span>}
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 text-xs lg:text-sm">
                        <span className="font-semibold">
                          By {author?.name || <span className="bg-gray-200 animate-pulse h-4 rounded w-20 inline-block">&nbsp;</span>}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
                          {category?.name || <span className="bg-gray-200 animate-pulse h-4 rounded w-24 inline-block">&nbsp;</span>}
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