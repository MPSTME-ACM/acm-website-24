import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
import Slide from "./Slide";

function Desktop() {
  return (
    <div className="hidden md:flex scale-125 gap-4">
      <Slide delay={0.2}>
        <div className="relative">
          <Image
            alt="DVWA"
            src={"/images/projects/project1.avif"}
            height={220}
            width={220}
          />
          <div className="opacity-0 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-[0.60rem] text-left p-4 text-pretty gap-1 hover:opacity-100 flex flex-col justify-end">
            <div className={`text-5xl tracking-tight font-bold`}>DVWA</div>
            <p className="text-zinc-400">
              Exploring PHP/MySQL vulnerabilities highlights crucial security
              flaws, stressing robust web development practices.
            </p>
          </div>
        </div>
      </Slide>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="flex gap-6 justify-between items-center">
          <Slide delay={0.4}>
            <div className="relative">
              <Image
                alt="Valor Arena"
                src={"/images/projects/project2.png"}
                height={420}
                width={360}
              />
              <div className="opacity-0 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-[0.60rem] text-left p-4 text-pretty gap-1 hover:opacity-100 flex flex-col justify-end">
                <div className={` text-5xl tracking-tight font-bold`}>
                  Valor Arena
                </div>
                <p className="text-zinc-400">
                  3D wave survival game with card buffs, dynamic bosses, skill
                  customization, and immersive sound.
                </p>
              </div>
            </div>
          </Slide>
          <Slide delay={0.6}>
            <div className="relative">
              <Image
                alt="Quizzo"
                src={"/images/projects/project3.png"}
                height={220}
                width={220}
              />
              <div className="opacity-0 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-[0.60rem] text-left p-4 text-pretty gap-1 hover:opacity-100 flex flex-col justify-end">
                <div className={`text-5xl tracking-tight font-bold`}>
                  Quizzo
                </div>
                <p className="text-zinc-400">
                  Quizzo: Create, play, compete with live feedback, secure
                  logins, and leaderboards.
                </p>
              </div>
            </div>
          </Slide>
        </div>
        <div className="flex gap-4 justify-between items-center">
          <Slide delay={0.8}>
            <div className="relative">
              <Image
                alt="MediQuery"
                src={"/images/projects/project4.png"}
                height={210}
                width={210}
              />
              <div className="opacity-0 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-[0.50rem] text-left p-4 text-pretty gap-0 hover:opacity-100 flex flex-col justify-end">
                <div className={` text-2xl font-bold tracking-tighter `}>
                  MediQuery
                </div>
                <p className="text-zinc-400">
                  Medical chatbot uses Pinecone vector storage and Qwen - 21.5
                  API for efficient, informed responses
                </p>
              </div>
            </div>
          </Slide>
          <Slide delay={1}>
            <div className="relative">
              <Image
                alt="Automation for ACM"
                src={"/images/projects/project5.png"}
                height={210}
                width={350}
              />
              <div className="opacity-0 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-[0.50rem] text-left p-4 text-pretty gap-0 hover:opacity-100 flex flex-col justify-end">
                <div className={`text-2xl font-bold tracking-tighter `}>
                  Automation for ACM
                </div>
                <p className="text-zinc-400">
                  One-click website hosting automates deployment, Docker
                  containers, and EC2 instance management for ACM MPSTME.
                </p>
              </div>
            </div>
          </Slide>
        </div>
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
            className="w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden"
          >
            <div className="w-full h-[200px] relative">
              <Image
                alt={project.title}
                className="object-cover rounded-t-2xl"
                src={project.image}
                fill
              />
            </div>
            <div className="bg-black/70 p-4 rounded-b-2xl">
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
    <div className="w-screen">
      <div className="relative flex flex-col items-center justify-center">
        <Slide>
          <div
            className={`${bn.className} md:p-10 text-8xl md:text-[11rem] tracking-tight font-semibold uppercase px-8 `}
          >
            Our Projects!
          </div>
        </Slide>
        <div className=" container text-center flex flex-col items-center justify-center">
          <Desktop />
          <Mobile />
        </div>
      </div>
    </div>
  );
}
