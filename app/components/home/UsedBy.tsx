"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, FC } from "react";

interface Person {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}

interface CarouselButtonProps {
  onClick: () => void;
  position: 'left' | 'right';
  label: string;
}

const UsedBy: FC = () => {
  const people: Person[] = useMemo(
    () => [
      {
        name: "Lavish Sharma",
        title: "Operations Manager",
        company: "The Lost Hostels",
        quote:
          "The managers of our property suggest QID to their customers due to its ease of access.",
        avatar: "/images/usedby/Lavish.jpg",
      },
      {
        name: "Mayur Sontakke",
        title: "Founder & CEO",
        company: "NomadGao",
        quote:
          "QID is set to revolutionise not just hospitality, but also other identity-centric industries.",
        avatar: "/images/usedby/Mayur.jpg",
      },
      {
        name: "Jitesh Agarwal",
        title: "Founder",
        company: "The Lost Hostels",
        quote:
          "Even while on the move, QID allows me to easily monitor and manage the business with precision.",
        avatar: "/images/usedby/Jitesh.jpg",
      },
      {
        name: "Dhruv Arora",
        title: "Property Owner",
        company: "Unplan Hostels, Rishikesh",
        quote:
          "Best bheed management software for your property's front desk. ID collection has never been this fast.",
        avatar: "/images/usedby/Dhruv.jpg",
      },
      {
        name: "Krishan Pandey",
        title: "Property Owner",
        company: "The Unmad, Dharamkot",
        quote:
          "Guests are benefited as they can pre-fill the required documents before they come-in.",
        avatar: "/images/usedby/Krishan.jpg",
      },
    ],
    []
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovering, setHovering] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const cardWidth = useRef<number>(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Triple the items for seamless infinite scroll
  const items: Person[] = useMemo(() => [...people, ...people, ...people], [people]);

  const measureCard = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector("[data-card]");
    if (!firstCard) return;
    const rect = firstCard.getBoundingClientRect();
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    cardWidth.current = rect.width + gap;
  };

  useEffect(() => {
    measureCard();
    const handleResize = () => {
      measureCard();
      setIsTransitioning(false);
      setOffset(-cardWidth.current * people.length);
      setTimeout(() => setIsTransitioning(true), 50);
    };
    window.addEventListener("resize", handleResize);
    
    setIsTransitioning(false);
    setOffset(-cardWidth.current * people.length);
    setTimeout(() => setIsTransitioning(true), 50);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [people.length]);

  const slideNext = () => {
    if (!cardWidth.current) measureCard();
    setOffset((prev) => prev - cardWidth.current);
  };

  const slidePrev = () => {
    if (!cardWidth.current) measureCard();
    setOffset((prev) => prev + cardWidth.current);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const checkBoundaries = () => {
      const minOffset = -cardWidth.current * people.length * 2;
      const maxOffset = 0;

      if (offset <= minOffset) {
        setIsTransitioning(false);
        setOffset(-cardWidth.current * people.length);
        requestAnimationFrame(() => {
          setTimeout(() => setIsTransitioning(true), 50);
        });
      } else if (offset >= maxOffset) {
        setIsTransitioning(false);
        setOffset(-cardWidth.current * people.length);
        requestAnimationFrame(() => {
          setTimeout(() => setIsTransitioning(true), 50);
        });
      }
    };

    const timer = setTimeout(checkBoundaries, 600);
    return () => clearTimeout(timer);
  }, [offset, isTransitioning, people.length]);

  useEffect(() => {
    if (isHovering) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      slideNext();
    }, 4000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovering]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      slideNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      slidePrev();
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <header className="mb-8 text-center sm:mb-12">
          <h2 className="text-4xl raleway-bold leading-tight md:text-8xl">
            <span className="text-orange-500">Identified</span>{" "}
            <span className="text-foreground">by </span>
            <span className="poppins-bold-italic">qid</span>
          </h2>
          <p className="mx-auto mt-4 text-balance text-3xl raleway-medium">
            Let&apos;s dive into the real stories of how our service has touched
            the lives of our customers.
          </p>
        </header>

        <div
          className="relative w-full md:w-2/3"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 px-1 pb-4 pt-2"
              style={{
                transform: `translateX(${offset}px)`,
                transition: isTransitioning ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
              }}
              onKeyDown={onKeyDown}
              role="region"
              aria-label="Customer testimonials carousel"
              tabIndex={0}
            >
              {items.map((p, idx) => (
                <article
                  key={idx}
                  data-card
                  className="relative flex w-[85%] min-w-0 flex-none flex-col rounded-[28px] border border-neutral-800/70 bg-neutral-900/70 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-sm sm:w-[65%] md:w-[48%] lg:w-[32%] lg:p-8"
                >
                  <Image
                    src={p.avatar}
                    alt={`${p.name} avatar`}
                    width={72}
                    height={72}
                    className="size-[125px] rounded-full object-cover ring-1 ring-white/10"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  <p className="mt-6 text-pretty raleway-medium text-xl leading-8 text-white/90 sm:text-[22px] sm:leading-8 md:text-2xl md:leading-9">
                    {p.quote}
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl raleway-bold text-white/90">{p.name}</h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      {p.title}
                      {p.company ? ", " : ""}
                      {p.company}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute -left-2 -right-2 top-1/2 z-10 flex -translate-y-1/2 justify-between">
            <CarouselButton
              onClick={slidePrev}
              position="left"
              label="Previous"
            />
            <CarouselButton
              onClick={slideNext}
              position="right"
              label="Next"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CarouselButton: FC<CarouselButtonProps> = ({ onClick, position = "left", label }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      aria-label={label}
      className={[
        "pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60",
        position === "left" ? "-ml-1" : "-mr-1",
      ].join(" ")}
    >
      <span className="sr-only">{label}</span>
      {position === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8.25 4.5 15.75 12l-7.5 7.5"
          />
        </svg>
      )}
    </button>
  );
};

export default UsedBy;
