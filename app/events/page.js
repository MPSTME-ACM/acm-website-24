"use client";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
import Footer from "@/components/Footer";

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      {" "}
      <section
        className="flex flex-col w-screen items-start md:items-center justify-between  overflow-x-hidden text-brand-surface py-20 md:pt-40 max-w-[90rem] mx-auto px-8 lg:px-0 gap-16 md:gap-32 "
        ref={ref}
      >
        <h1
          className=" text-8xl font-normal tracking-tight lg:text-9xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.3s cubic-bezier(0.42, 0, 0.58, 1)",
          }}
        >
          Our Events!
        </h1>
        <div className=" w-full flex flex-col lg:flex-row gap-16 justify-between items-center">
          <Image
            src="/images/events/pfe-event.png"
            width={600}
            height={600}
            alt="Poster"
            className="rounded-3xl hidden md:block"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
            }}
          ></Image>
          <div className="flex flex-col justify-center items-end  gap-10 w-full">
            <div
              className="scroll-m-20 text-5xl font-normal tracking-tight lg:text-7xl text-fuchsia-400 w-fit md:text-right"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "0.3s",
              }}
            >
              Programming for Everyone!
            </div>
            <Image
              src="/images/events/pfe-event.png"
              width={600}
              height={600}
              alt="Poster"
              className="rounded-3xl md:hidden"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
              }}
            ></Image>
            <p
              className=" md:mr-5 text-brand-surface2  max-w-prose text-justify"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "0.5s",
              }}
            >
              Programming For Everyone (PFE) is one of ACM MPSTME&apos;s
              flagship events, where we make coding accessible through a 3-day
              workshop teaching Python and C++ from basics like syntax and loops
              to advanced concepts. Our team collaborates across departments,
              creating presentations, code snippets, and roles like teachers and
              debuggers to provide personalized guidance. PFE not only helps
              participants build coding confidence but also allows us to
              reinforce our knowledge. With one-on-one attention and innovative
              methods, PFE continues to be a success, empowering students with a
              strong programming foundation.
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-16 justify-between items-center w-full">
          <div className="flex flex-col justify-center items-start gap-10">
            <div
              className="scroll-m-20 text-5xl font-normal tracking-tight lg:text-7xl text-blue-400"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "0.7s",
              }}
            >
              Branch Out!
            </div>
            <Image
              src="/images/events/branch.png"
              width={600}
              height={600}
              alt="Poster"
              className="rounded-3xl  md:hidden"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "1.3s",
              }}
            ></Image>
            <p
              className=" m md:mr-5 text-brand-surface2 max-w-prose text-justify"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "1s",
              }}
            >
              Branch Out is a two-day event aimed at helping new coders explore
              GitHub and open-source contributions. We guide participants
              through creating repositories, branches, commits, and using
              GitHub&apos;s version control. On Day 1, we introduce Git and
              GitHub, explaining their differences, and cover Git basics with
              hands-on exercises to build foundational skills. Day 2 dives into
              advanced Git commands, exploring open-source projects, and using
              Visual Studio Code&apos;s features for productivity. The event
              concludes with an introduction to Linux, teaching basic commands
              to navigate the OS. By the end, participants are equipped to
              contribute to open-source projects confidently and collaborate
              using GitHub.
            </p>
          </div>{" "}
          <Image
            src="/images/events/branch.png"
            width={600}
            height={600}
            alt="Poster"
            className="rounded-3xl hidden md:block"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
              transitionDelay: "1.3s",
            }}
          ></Image>
        </div>

        <div className=" w-full flex flex-col lg:flex-row gap-16 justify-around items-center">
          <Image
            src="/images/events/semicode.png"
            width={300}
            height={300}
            alt="Poster"
            className="rounded-3xl md:w-1/2 hidden md:block"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
              transitionDelay: "0.7s",
            }}
          ></Image>
          <div className="flex flex-col justify-center md:items-end  gap-10 w-full">
            <div
              className="scroll-m-20 text-5xl font-normal tracking-tight lg:text-7xl text-emerald-400 w-fit md:text-right"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "0.3s",
              }}
            >
              Semicode
            </div>
            <Image
              src="/images/events/semicode.png"
              width={300}
              height={300}
              alt="Poster"
              className="rounded-3xl md:w-1/2 md:hidden"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "0.7s",
              }}
            ></Image>
            <p
              className=" md:mr-5 text-brand-surface2  max-w-prose text-justify"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
                transitionDelay: "0.5s",
              }}
            >
              SEMICODE is our flagship competitive coding event, where we
              collaborate with ACM-W SNDT, ACM MHSSCOE, ACM BVDUDET, ACM CRCE,
              and other ACM Student Chapters to bring together hundreds of teams
              from Mumbai&apos;s top graduate programs. With the support of
              platforms like Unstop, event partners such as AlgoZenith, and
              collaborations with industry leaders, we aim to test
              participants&apos; problem-solving, teamwork, and coding skills.
              The event kicks off with an inspiring speaker session featuring
              renowned professionals from leading tech companies. Through three
              challenging rounds, blending online and offline formats, we
              celebrate the spirit of collaboration and coding excellence,
              empowering participants to excel.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full border border-white/20 my-10" ></div>
      <Footer></Footer>
    </>
  );
}
