import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Slide from "./Slide";

const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const jbm = JetBrains_Mono({ subsets: ["latin"] });

export default function Events() {
  const events_list = [
    {
      logo: ["/images/logos/semicolon_logo.png", true],
      image: "/images/events/semicolon.png",
      name: "Semicolon",
      date: ["Aug", "2024"],
      tag: ["Fun", "Coding"],
      color: "text-sky-500",
      last: false,
      first: false,
    },
    {
      logo: ["/images/logos/pfe_logo.png", true],
      image: "/images/events/pfe.png",
      name: "Programming for everyone",
      date: ["Sep", "2024"],
      tag: ["Introduction", "Activities"],
      color: "text-purple-500",
      last: false,
      first: true,
    },
    {
      logo: ["BO", false],
      image: "/images/events/semicolon.png",
      name: "Branch Out",
      date: ["DEC", "2045"],
      tag: ["Fun", "Coding"],
      color: "text-red-500",
      last: false,
      first: false,
    },
    {
      logo: ["SEM", false],
      image: "/images/events/pfe.png",
      name: "Semicode",
      date: ["Mar", "2025"],
      tag: ["Introduction", "Activities"],
      color: "text-blue-500",
      last: true,
      first: false,
    },
  ];
  return (
    <div className="pt-10 w-screen">
      <div className="relative mt-40 flex flex-col items-center justify-center">
        <Slide>
          <div
            className={`${bn.className} text-8xl md:text-[11rem] tracking-tight font-semibold uppercase `}
          >
            Events
          </div>
        </Slide>
        <div className="scrollbar-hidden scale-75 md:scale-100 rounded-3xl snap-x snap-always snap-mandatory relative left-20 min-w-full shadow-black shadow-[0_-100px_200px_rgba(0,0,0,0.25)] -top-10 md:top-24 overflow-y-scroll max-w-2xl text-center bg-gradient-to-b from-black/75 to-black/10 flex gap-16 md:gap-10 items-center">
          {events_list.map((item, index) => (
            <Slide delay={index * 0.1} key={index}>
              <div
                className={`snap-start md:flex-row flex-col ${item.last ? "" : "border-r"} scroll-mx-20 flex mt-5 ${item.last ? "mr-60 md:mr-20" : ""} ${item.first ? "ml-52 md:ml-4" : ""}`}
              >
                <Image
                  className="min-w-72 max-w-72"
                  src={item.image}
                  alt={item.name}
                  height={1200}
                  width={1200}
                />
                <div className="flex flex-col max-h-56 justify-between pr-10">
                  <div className="flex gap-2 text-left items-center">
                    {item.logo[1] ? (
                      <Image
                        alt={`${item.name} Logo`}
                        src={item.logo[0]}
                        height={30}
                        width={30}
                      />
                    ) : (
                      <div
                        className={`uppercase ${item.color} text-xl font-black`}
                      >
                        {item.logo[0]}
                      </div>
                    )}
                    <div className={`${jbm.className} uppercase min-w-64`}>
                      {item.name}
                    </div>
                  </div>
                  <div>
                    <div
                      className={`font-medium uppercase text-7xl ${item.color}`}
                    >
                      {item.date[0]}
                    </div>
                    <div>{item.date[1]}</div>
                  </div>
                  <div className="flex gap-1 text-xs items-center justify-center">
                    {item.tag.map((tag, index) => (
                      <div
                        key={index}
                        className={`bg-zinc-800/75 px-4 py-1 rounded-full`}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
}
