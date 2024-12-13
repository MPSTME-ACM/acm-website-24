import client from "@/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";

const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const jbm = JetBrains_Mono({ subsets: ["latin"] });

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

// Sorting logic
function sortTeamMembers(teamMembers) {
  return teamMembers.sort((a, b) => {
    // 1. Prioritize "SC" department
    if ((a.position[0] === "SC" || a.position[0] === "") && (b.position[0] !== "SC" || b.position[0] !== "")) return -1;
    if ((b.position[0] === "SC" || b.position[0] === "") && (a.position[0] !== "SC" || a.position[0] !== "")) return 1;

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

export default async function Team() {
  // Fetch team member data
  const teamMembers = await client.fetch(`
    *[_type == "teamMember"]{
      _id,
      name,
      "photo": image.asset->url,
      position,
      portfolioUrl
    }
  `);

  // Sort team members based on the custom logic
  const sortedTeamMembers = sortTeamMembers(teamMembers);

  return (
    <div className="pt-10">
      <div className="flex flex-col items-center">
        <h1 className={`${bn.className} uppercase text-4xl md:text-6xl`}>Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-10">
          {sortedTeamMembers.map((member) => (
            <div key={member._id} className={`${member.position[1] === "Sub Head" ? 'hidden md:flex' : 'flex'} bg-zinc-800/25 border px-5 rounded-lg shadow-lg flex-col items-center justify-between text-center`}>
              {/* Member Name */}
              <h2 className={`${bn.className} text-blue-500 text-5xl mt-5`}>{member.name}</h2>
              
              {/* Department and Role */}
              <p className="text-sm text-gray-400">
                <div className="font-bold text-lg">{member.position[1] === 'SC' ? '' : member.position[1]}</div><div className={`${jbm.className} uppercase text-xs ${member.position[0] === 'SC' ? 'text-purple-500 font-bold' : `text-sky-500/50`}`}>{member.position[0] === "SC" ? 'Super Core' : member.position[0]}</div>
              </p>

              {/* Member Picture */}
              <Image className="aspect-square object-cover object-top"
                src={
                  member.photo
                    ? urlFor(member.photo).url()
                    : "/default-placeholder.png"
                }
                alt={member.name}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}