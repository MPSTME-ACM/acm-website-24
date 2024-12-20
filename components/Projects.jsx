import Image from "next/image";

function Desktop() {
  return (
    <div className="hidden md:flex scale-125 gap-4">
      <div className="relative">
        <Image
          alt="DVWA"
          src={"/images/projects/project1.png"}
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
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="flex gap-6 justify-between items-center">
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
          <div className="relative">
            <Image
              alt="Quizzo"
              src={"/images/projects/project3.png"}
              height={220}
              width={220}
            />
            <div className="opacity-0 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-[0.60rem] text-left p-4 text-pretty gap-1 hover:opacity-100 flex flex-col justify-end">
              <div className={`text-5xl tracking-tight font-bold`}>Quizzo</div>
              <p className="text-zinc-400">
                Quizzo: Create, play, compete with live feedback, secure logins,
                and leaderboards.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-center">
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
                Medical chatbot uses Pinecone vector storage and Qwen - 21.5 API
                for efficient, informed responses
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="md:hidden flex flex-col items-center gap-4">
      <div className="relative px-4">
        <Image
          alt="DVWA"
          className="aspect-video object-cover border border-blue-500/50 rounded-2xl"
          src={"/images/projects/project1.png"}
          height={1920}
          width={1920}
        />
        <div className="opacity-100 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-xs mr-2 text-left p-4 text-pretty gap-1 flex flex-col justify-end">
          <div className={`text-5xl font-bold tracking-tighter`}>DVWA</div>
          <p className="text-zinc-400">
            Exploring PHP/MySQL vulnerabilities highlights crucial security
            flaws, stressing robust web development practices.
          </p>
        </div>
      </div>
      <div className="relative px-4">
        <Image
          alt="Valor Arena"
          className="aspect-video object-cover border border-blue-500/50 rounded-2xl"
          src={"/images/projects/project2.png"}
          height={1920}
          width={1920}
        />
        <div className="opacity-100 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-xs mr-2 text-left p-4 text-pretty gap-1 flex flex-col justify-end">
          <div className={`text-5xl font-bold tracking-tight`}>Valor Arena</div>
          <p className="text-zinc-400">
            3D wave survival game with card buffs, dynamic bosses, skill
            customization, and immersive sound.
          </p>
        </div>
      </div>
      <div className="relative px-4">
        <Image
          alt="Quizzo"
          className="aspect-video object-cover border border-blue-500/50 rounded-2xl"
          src={"/images/projects/project3.png"}
          height={1920}
          width={1920}
        />
        <div className="opacity-100 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-xs mr-2 text-left p-4 text-pretty gap-1 flex flex-col justify-end">
          <div className={`text-5xl font-bold tracking-tight`}>Quizzo</div>
          <p className="text-zinc-400">
            Quizzo: Create, play, compete with live feedback, secure logins, and
            leaderboards.
          </p>
        </div>
      </div>
      <div className="relative px-4">
        <Image
          alt="MediQuery"
          className="aspect-video object-cover border border-blue-500/50 rounded-2xl"
          src={"/images/projects/project4.png"}
          height={1920}
          width={1920}
        />
        <div className="opacity-100 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-xs mr-2 text-left p-4 text-pretty gap-0 flex flex-col justify-end">
          <div className={`text-5xl font-bold tracking-tight`}> MediQuery</div>
          <p className="text-zinc-400">
            Medical chatbot uses Pinecone vector storage and Qwen - 21.5 API for
            efficient, informed responses
          </p>
        </div>
      </div>
      <div className="relative px-4">
        <Image
          alt="Automation for ACM"
          className="aspect-video object-cover border border-blue-500/50 rounded-2xl"
          src={"/images/projects/project5.png"}
          height={1920}
          width={1920}
        />
        <div className="opacity-100 transition-all duration-300 absolute bg-black/70 min-h-full bottom-0 text-xs mr-2 text-left p-4 text-pretty gap-0 flex flex-col justify-end">
          <div className={`text-5xl font-bold tracking-tight`}>
            {" "}
            Automation for ACM
          </div>
          <p className="text-zinc-400">
            One-click website hosting automates deployment, Docker containers,
            and EC2 instance management for ACM MPSTME.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-screen">
      <div className="relative mt-40 flex flex-col items-center justify-center">
        <div
          className={`absolute -top-40 md:-top-1/2 md:p-10 text-8xl md:text-[11rem] tracking-tight`}
        >
          Projects
        </div>
        <div className="relative shadow-black shadow-[0_-100px_200px_rgba(0,0,0,0.25)] -top-10 md:top-24 max-w-3xl text-center flex flex-col items-center justify-center">
          <Desktop />
          <Mobile />
        </div>
      </div>
    </div>
  );
}
