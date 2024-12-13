import client from "@/lib/client";
// import { groq } from "next-sanity";
import Link from "next/link";
// import client from '../../client';

export default async function TeamPage() {
  const teamMembers = await client.fetch(`
    *[_type == "teamMember"]{
      _id,
      name,
      position,
      "slug": _id
    }
  `);

  return (
    <div>
      <h1>Our Team</h1>
      <div>
        {teamMembers.map((member) => (
          <div className="p-5" key={member._id}>
            <h2>{member.name}</h2>
            <p>{member.position.join(', ')}</p>
            <Link className="underline text-blue-500" href={`/Team.jsx/${member.slug}`}>
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
