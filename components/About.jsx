"use client";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Bebas_Neue } from "next/font/google";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="relative flex flex-col items-start justify-center w-full container"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-5 px-8">
        <Image
          className="md:w-1/2 h-full order-first md:order-last rounded-bl-3xl rounded-tr-3xl object-cover rounded-2xl"
          src={"/images/about.jpg"}
          alt="ACM MPSTME 2024 Team"
          height={1920}
          width={1920}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
            transitionDelay: "0.7s",
          }}
        />
        <div className="flex flex-col justify-center items-start gap-10">
          <div
            className={` ${bn.className} scroll-m-20 text-7xl font-normal  lg:text-9xl`}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
            }}
          >
            About Us!
          </div>
          <p
            className="md:text-lg md:mr-5 text-brand-surface2 text-justify"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
              transitionDelay: "0.5s",
            }}
          >
            We at ACM aim to ignite passion in young minds for technology and
            foster innovation. We conduct workshops, hackathons, podcasts, and
            blogs while offering members opportunities to excel in their fields
            through projects. Our goal is to empower youth to master computing
            and coding, gaining a technological edge. We provide high-quality
            education and open doors to new opportunities. Bound by our love for
            coding, ACM combines competition and collaboration, reaching
            milestones yearly with a growing team of bright minds. Join us as we
            explore the fascinating world of coding!
          </p>
        </div>
      </div>
    </div>
  );
}
