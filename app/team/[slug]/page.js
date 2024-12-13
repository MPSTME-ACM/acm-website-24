// import client from '../../../client';
import client from "@/lib/client";

export default async function TeamMemberPage({ params }) {
  const { slug } = params;
  const teamMember = await client.fetch(`
    *[_type == "teamMember" && _id == $slug][0]{
      name,
      position,
      portfolioUrl,
      body
    }
  `, { slug });

  if (!teamMember) {
    return <p>Team member not found</p>;
  }

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <p>{teamMember.position.join(', ')}</p>
      <a href={teamMember.portfolioUrl} target="_blank" rel="noopener noreferrer">
        Portfolio
      </a>
      <div>
        {teamMember.body.map((block) => (
          <p key={block._key}>{block.children.map((child) => child.text).join(' ')}</p>
        ))}
      </div>
    </div>
  );
}
