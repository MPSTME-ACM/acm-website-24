"use client";

import {
  ProjectorIcon as Project,
  Calendar,
  BookOpen,
  Newspaper,
  Mic,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bebas_Neue } from "next/font/google";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const iconMap = {
  "Do Projects": Project,
  "Host Events": Calendar,
  "Conduct Workshops": BookOpen,
  "Write Newsletters": Newspaper,
  "Make Podcasts": Mic,
};

const para = [
  "Engaging in projects like apps for college, tools for learning, and Letter of Recommendation systems by the Associate Dean allows individuals to solve real-world problems. Projects foster creativity, teamwork, and professional growth while showcasing expertise and adaptability.",
  "Hosting events like Semicode, our flagship coding competition, provides a platform for learning, networking, and collaboration. These events bring communities together to exchange ideas, showcase skills, and build lasting connections.",
  "Workshops such as Programming for Everyone, BranchOut, Backend Weekend, and APIs with Postman offer hands-on learning experiences. They cater to diverse audiences, helping participants build new skills, gain confidence, and deepen their understanding.",
  "Our newsletter, ACM Chronicles, shares updates, insights, and trends with the community. Writing newsletters builds engagement, establishes thought leadership, and ensures members stay informed about the latest advancements.",
  "Our podcast, Tech It Out, hosted on Spotify, explores tech-related topics, sharing stories and insights. Podcasts like these help expand reach, build expertise, and connect with listeners in meaningful ways.",
];
const links=[
  "/#projects",
  "/events",
  "/events",
  "/newsletter",
  "/#podcast",
]

const Item = ({ text, index }) => {
  const Icon = iconMap[text];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.a
      href={links[index]}
      ref={ref}
      className="flex flex-col items-start justify-center p-10 bg-neutral-900 rounded-lg shadow-md gap-4"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
      }}
    >
      <Icon className="size-12 mb-2 text-blue-500 " strokeWidth={1} />
      <p className="font-bold text-xl md:text-2xl">{text}</p>
      <p className="md:text-lg md:mr-5 text-brand-surface2 text-justify">
        {para[index]}
      </p>
    </motion.a>
  );
};

export default function Factoid2() {
  const items = [
    "Do Projects",
    "Host Events",
    "Conduct Workshops",
    "Write Newsletters",
    "Make Podcasts",
  ];

  return (
    <section className="container mx-auto px-8 md:py-8">
      <h1
        className={` ${bn.className} scroll-m-20 text-7xl font-normal  lg:text-9xl pb-10`}
      >
        What We Do!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, index) => (
          <Item key={item} text={item} index={index} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
        {items.slice(3).map((item, index) => (
          <Item key={item} text={item} index={index + 3} />
        ))}
      </div>
    </section>
  );
}
