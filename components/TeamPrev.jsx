import client from "@/lib/client";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Slide from "./Slide";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default async function Team() {
  let teamMembers = await client.fetch(`
        *[_type == "teamMember" && "SC" in position]{
          _id,
          name,
          "photo": image.asset->url,
          position,
          portfolioUrl
        }
      `);
  function sortTeamMembers(teamMembers) {
    return teamMembers.sort((a, b) => {
      // 1. Prioritize "SC" department
      if (
        (a.position[0] === "SC" || a.position[0] === "") &&
        (b.position[0] !== "SC" || b.position[0] !== "")
      )
        return -1;
      if (
        (b.position[0] === "SC" || b.position[0] === "") &&
        (a.position[0] !== "SC" || a.position[0] !== "")
      )
        return 1;

      // 2. Sort departments alphabetically
      if (a.position[0] !== b.position[0]) {
        return a.position[0].localeCompare(b.position[0]);
      }

      // 3. Within departments, "Head" comes before "Sub Head"
      if (a.position[1] === "Head" && b.position[1] !== "Head") return -1;
      if (b.position[1] === "Head" && a.position[1] !== "Head") return 1;

      // 4. Alphabetical order by name if roles are the same
      return a.name.localeCompare(b.name);
    });
  }
  const sortedTeamMembers = sortTeamMembers(teamMembers);

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="flex flex-col mt-40 items-center justify-center">
      <div className=" flex flex-row items-center justify-around w-full container mx-auto">
        <Slide>
          <h1
            className={`${bn.className}  text-8xl md:text-[11rem] tracking-tight font-semibold uppercase `}
          >
            Our Team
          </h1>{" "}
        </Slide>
      </div>
      <Slide delay={0.1}>
        <Link
          href="/team"
          className="text-white/70 text-xl text-center underline text-blue-400 hover:text-blue-700"
        >
          View All Team Members!
        </Link>
      </Slide>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-10">
        {sortedTeamMembers.map((member, index) => (
          <Slide delay={index * 0.1} key={member._id}>
            <div
              className={`${member.position[1] === "Sub Head" ? "hidden md:flex" : "flex"} relative bg-zinc-800/25 border px-5 rounded-lg shadow-lg flex-col items-center justify-between text-center`}
            >
              {/* Member Name */}
              <h2 className={`${bn.className} text-white text-7xl mt-5`}>
                {member.name.split(" ")[0]}
                <br />
                {member.name.split(" ").slice(1).join(" ")}
              </h2>

              {/* Department and Role */}
              <p
                className={`absolute -z-10 ${bn.className} ${member.position[0] !== "SC" ? (member.position[1] === "Head" ? "text-[10rem]" : "text-[8rem]") : "text-[6rem]"} text-black/0 text-nowrap`}
                style={{
                  WebkitTextStroke: "0.1px #0c3149",
                  lineHeight: "0.9",
                  top: member.position[0] !== "SC" ? "60%" : "60%",
                  left: member.position[0] !== "SC" ? "50%" : "",
                  transform:
                    member.position[0] !== "SC"
                      ? "translate(-50%, -50%)"
                      : "translate(0%, -50%)",
                  textAlign: "center",
                }}
              >
                <div
                  className={`font-bold ${member.position[0] === "SC" ? "text-wrap" : "text-balance"} opacity-65`}
                >
                  {member.position[1]
                    .split(member.position[0] === "SC" ? "" : " ")
                    .map((char, index) => (
                      <span
                        className="p-0 m-0"
                        key={index}
                        style={{ display: "inline-block" }}
                      >
                        {char}
                      </span>
                    ))}
                </div>
              </p>

              <div className="flex-grow text-[7rem] text-black/0">ACM</div>

              {/* Member Picture */}
              <Image
                className="absolute bottom-0 aspect-square object-cover object-top"
                src={
                  member.photo
                    ? urlFor(member.photo).url()
                    : "/default-placeholder.png"
                }
                alt={member.name}
                width={200}
                height={200}
              />
              <div
                className={`absolute bottom-0 right-0 ${bn.className} ${member.position[0] === "SC" ? "text-purple-400" : "text-white"} p-0 my-1 text-shadow-md -mx-2 text-2xl`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "sideways",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  transform: "rotate(180deg)",
                }}
              >
                {member.position[0] === "SC"
                  ? "Super Core"
                  : member.position[0]}
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}
