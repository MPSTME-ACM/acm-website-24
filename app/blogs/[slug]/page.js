import client from "@/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const jbm = JetBrains_Mono({ subsets: ["latin"] });

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source); // Properly build image URLs
}

// Fetch post by slug
async function fetchPostBySlug(slug) {
  return await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      description,
      body,
      publishedAt,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }
  `,
    { slug }
  );
}

// PortableTextComponents for rendering rich content
const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold my-4">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="text-base text-zinc-300/80 my-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-5 my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-5 my-4">{children}</ol>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
  },
  types: {
    image: ({ value }) => (
      <Image
        src={value?.asset ? urlFor(value).url() : "/placeholder-image.png"}
        alt={value?.alt || "Image"}
        width={800}
        height={600}
        className="w-full rounded-lg my-4"
      />
    ),
  },
};

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <div className="flex flex-row max-w-6xl mx-auto p-6 mt-28">
        {/* Main Content */}
        <div className="flex-1 pr-8">
          <h1 className="text-5xl font-bold text-brand-surface mb-4">
            {post.title}
          </h1>

          <p
            className={`${jbm.className} uppercase text-zinc-500 text-sm mb-4`}
          >
            Published on {formattedDate} •{" "}
            <span className="font-medium text-blue-500">{post.author?.name}</span>
          </p>

          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={800}
            height={600}
            className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
          />

          <p className="text-base text-zinc-500 pb-4 mb-6 border-b">
            {post.description}
          </p>

          <PortableText
            value={post.body}
            components={PortableTextComponents}
          />

          {post.categories?.length > 0 && (
            <p className="text-sm text-zinc-400 mt-10">
              Categories:{" "}
              {post.categories.map((category) => category.title).join(", ")}
            </p>
          )}
        </div>

        {/* Right Sidebar: Author Info */}
        <aside className="hidden md:block w-64">
          <div className="border-l pb-5 pl-10 fixed">
            <h3 className="text-lg text-center font-bold text-brand-surface mb-4">
              About
            </h3>
            <div className="flex flex-col items-center text-center">
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={100}
                  height={100}
                  className="w-32 h-32 object-cover border-b-2 px-3 border-blue-950  mb-4"
                />
              )}
              <p className={`${jbm.className} uppercase mb-2 text-sm text-zinc-400`}>{post.author?.name}</p>
              <p className="text-sm text-zinc-400">Published on {" "} <span className="text-blue-500">{formattedDate}</span></p>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}