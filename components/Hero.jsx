"use client";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="w-full relative flex flex-col items-center justify-center max-w-[90rem] h-screen max-h-[1080px] gap-5"
      ref={ref}
    >
      <Image
        className="absolute -top-16 -left-20 blur-xl hover:blur-none transition-all duration-300"
        src={"/images/image1.png"}
        width={360}
        height={360}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
          transitionDelay: "0.5s",
        }}
      />
      <Image
        className="absolute -top-20 -right-20 blur-xl hover:blur-none transition-all duration-300"
        src={"/images/image2.png"}
        width={360}
        height={360}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
          transitionDelay: "0.7s",
        }}
      />
      <h1
        className="scroll-m-20 text-7xl font-black tracking-tight lg:text-title px-4"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
        }}
      >
        ACM MPSTME
      </h1>
      <h2
        className=" uppercase text-lg md:text-body-1 text-brand-surface2 tracking-wide text-center mb-6"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
          transitionDelay: "0.3s",
        }}
      >
        Association of Computing Machinery
      </h2>
      <Image
        className="absolute -bottom-16 -left-20 blur-xl hover:blur-none transition-all duration-300"
        src={"/images/image3.png"}
        width={360}
        height={360}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
          transitionDelay: "0.9s",
        }}
      />
      <Image
        className="absolute -bottom-20 -right-20 blur-xl hover:blur-none transition-all duration-300"
        src={"/images/image4.png"}
        width={360}
        height={360}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
          transitionDelay: "1.1s",
        }}
      />
    </div>
  );
}
