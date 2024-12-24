"use client";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Podcast() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="relative flex flex-col items-start justify-center w-screen container mx-auto"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-8 md:px-0 w-full">
        {" "}
        <Image
          src="/images/podcast.png"
          width={600}
          height={600}
          alt="Tech It Out"
          className="rounded-3xl hidden md:block"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
            transitionDelay: "0.5s",
          }}
        ></Image>
        <div className=" container text-center flex flex-col items-start md:items-end justify-around h-full gap-5 ">
          <div
            className={` ${bn.className} scroll-m-20 text-7xl font-normal  lg:text-9xl text-blue-500`}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
            }}
          >
            Tech It Out!
          </div>
          <Image
            src="/images/podcast.png"
            width={600}
            height={600}
            alt="Tech It Out"
            className="rounded-3xl md:hidden"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
              transitionDelay: "0.5s",
            }}
          ></Image>
          <p
            className=" text-brand-surface2 max-w-prose text-justify md:text-lg md:[text-align-last:right]"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
              transitionDelay: "0.3s",
            }}
          >
            Tech It Out is our podcast at ACM MPSTME, where we dive into all
            things tech—sometimes with amazing guest speakers who share their
            stories and advice, and other times, it&apos;s just us geeking out
            about trends, updates, and what&apos;s going on in the about
            industry. We&apos;re students too, so we get how tricky it can be to
            stay on top of everything. That&apos;s why we&apos;re here—to share
            what we&apos;ve learned, keep you in the loop about the latest tech
            buzz, and hopefully make it a little easier (and fun) to stay
            informed. Whether it&apos;s industry insights or just relatable tech
            struggles, we&apos;ve got you covered. So grab your headphones and
            join us as we figure this whole tech world out together!
          </p>
          <Link
            href={
              "https://open.spotify.com/show/1qxxNxlypOLajzi7jEQWPz?si=89f1665786de47fa"
            }
            target="_blank"
            className="text-white/70 text-xl text-center underline text-blue-400 hover:text-blue-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
              transitionDelay: "0.5s",
            }}
          >
            Listen to Tech It Out!
          </Link>
        </div>
      </div>
    </div>
  );
}
