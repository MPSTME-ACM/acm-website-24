import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
import Slide from "./Slide";

function Desktop() {
  const projects = [
    {
      id: 1,
      title: "DVWA",
      image: "/images/projects/project1.avif",
      description:
        "Exploring PHP/MySQL vulnerabilities highlights crucial security flaws, stressing robust web development practices.",
      className: "col-span-2 row-span-2",
    },
    {
      id: 2,
      title: "Valor Arena",
      image: "/images/projects/project2.png",
      description:
        "3D wave survival game with card buffs, dynamic bosses, skill customization, and immersive sound.",
      className: "col-span-2",
    },
    {
      id: 3,
      title: "Quizzo",
      image: "/images/projects/project3.png",
      description:
        "Create, play, compete with live feedback, secure logins, and leaderboards.",
      className: "col-span-2",
    },
    {
      id: 4,
      title: "MediQuery",
      image: "/images/projects/project4.png",
      description:
        "Medical chatbot uses Pinecone vector storage and Qwen - 21.5 API for efficient, informed responses.",
      className: "col-span-2",
    },
    {
      id: 5,
      title: "Automation for ACM",
      image: "/images/projects/project5.png",
      description:
        "One-click website hosting automates deployment, Docker containers, and EC2 instance management for ACM MPSTME.",
      className: "col-span-2",
    },
  ];

  return (
    <div className="container text-center hidden md:flex flex-col items-center justify-center h-screen w-screen">
      <div className="grid grid-cols-4 gap-4 max-w-[920px] mx-auto h-full w-screen">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group ${project.className} bg-gray-800 rounded-lg overflow-hidden`}
          >
            <img
              alt={project.title}
              src={project.image}
              className="absolute inset-0 w-full h-full object-cover peer"
            />
            <div className="absolute inset-0 bg-black/70 text-sm text-left p-4 flex flex-col justify-end gap-5">
              <p className="text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 ">
                {project.description}
              </p>
              <div
                className={`text-${project.className.includes("col-span-2") ? "5xl" : "2xl"} font-bold text-white/80`}
              >
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Mobile() {
  const projects = [
    {
      title: "DVWA",
      description:
        "Exploring PHP/MySQL vulnerabilities highlights crucial security flaws, stressing robust web development practices.",
      image: "/images/projects/project1.avif",
    },
    {
      title: "Valor Arena",
      description:
        "3D wave survival game with card buffs, dynamic bosses, skill customization, and immersive sound.",
      image: "/images/projects/project2.png",
    },
    {
      title: "Quizzo",
      description:
        "Quizzo: Create, play, compete with live feedback, secure logins, and leaderboards.",
      image: "/images/projects/project3.png",
    },
    {
      title: "MediQuery",
      description:
        "Medical chatbot uses Pinecone vector storage and Qwen - 21.5 API for efficient, informed responses",
      image: "/images/projects/project4.png",
    },
    {
      title: "Automation for ACM",
      description:
        "One-click website hosting automates deployment, Docker containers, and EC2 instance management for ACM MPSTME.",
      image: "/images/projects/project5.png",
    },
  ];

  return (
    <div className="md:hidden px-8">
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full  rounded-2xl overflow-hidden py-3"
          >
            <div className="w-full h-[200px] relative">
              <Image
                alt={project.title}
                className="object-cover rounded-t-2xl"
                src={project.image}
                fill
              />
            </div>
            <div className="bg-neutral-900 p-4 rounded-b-2xl">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-zinc-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-screen h-full">
      <div className="relative flex flex-col items-center md:items-center justify-center">
        <Slide>
          <div
            className={`${bn.className} md:p-10 text-8xl md:text-[11rem] tracking-tight font-semibold uppercase px-8 `}
          >
            Our Projects!
          </div>
        </Slide>
        <div className=" container text-center flex flex-col items-center justify-center h-full">
          <Desktop />
          <Mobile />
        </div>
      </div>
    </div>
  );
}
