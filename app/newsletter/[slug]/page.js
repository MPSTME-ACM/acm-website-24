import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const jbm = JetBrains_Mono({ subsets: ["latin"] });

// Sanity client configuration with environment variables
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_NEWSLETTER_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01", // Use the latest API version
  useCdn: true, // Use CDN for faster responses
});

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source); // Correctly returning builder
}

// Fetch post by slug
async function fetchPostBySlug(slug) {
  return await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      summary,
      spotify,
      topic1,
      top1body,
      topic2,
      top2body,
      topic3,
      top3body,
      topic4,
      top4body,
      topic5,
      top5body,
      publishedAt
    }
  `,
    { slug }
  );
}

// PortableTextComponents for rendering rich content
const PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold my-4">{children}</h2>,
    normal: ({ children }) => <p className="text-base text-zinc-300/80 my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5 my-4">{children}</ol>,
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

  // Create a dynamic table of contents
  const tableOfContents = [
    { id: "topic1", title: post.topic1 },
    post.topic2 && { id: "topic2", title: post.topic2 },
    post.topic3 && { id: "topic3", title: post.topic3 },
    post.topic4 && { id: "topic4", title: post.topic4 },
    post.topic5 && { id: "topic5", title: post.topic5 },
  ].filter(Boolean); // Remove null/undefined entries

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row max-w-6xl mx-auto p-6 mt-28">
        {/* Main Content */}
        <div className="flex-1 pr-8">
          <h1 className="text-5xl font-bold text-brand-surface mb-4">{post.title}</h1>

          <p className={`${jbm.className} uppercase text-zinc-500 text-sm mb-4`}>
            Published on {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={800}
            height={600}
            className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
          />

          <p className="text-base text-zinc-500 pb-4 mb-6 border-b">{post.summary}</p>

          <div className="prose prose-lg">
            <h2 id="topic1" className="text-2xl font-semibold text-brand-surface mb-4">
              {post.topic1}
            </h2>
            <PortableText value={post.top1body} components={PortableTextComponents} />

            {post.topic2 && (
              <>
                <h2 id="topic2" className="text-2xl font-semibold text-brand-surface mt-10 mb-4">
                  {post.topic2}
                </h2>
                <PortableText value={post.top2body} components={PortableTextComponents} />
              </>
            )}

            {post.topic3 && (
              <>
                <h2 id="topic3" className="text-2xl font-semibold text-brand-surface mt-10 mb-4">
                  {post.topic3}
                </h2>
                <PortableText value={post.top3body} components={PortableTextComponents} />
              </>
            )}

            {post.topic4 && (
              <>
                <h2 id="topic4" className="text-2xl font-semibold text-brand-surface mt-10 mb-4">
                  {post.topic4}
                </h2>
                <PortableText value={post.top4body} components={PortableTextComponents} />
              </>
            )}

            {post.topic5 && (
              <>
                <h2 id="topic5" className="text-2xl font-semibold text-brand-surface mt-10 mb-4">
                  {post.topic5}
                </h2>
                <PortableText value={post.top5body} components={PortableTextComponents} />
              </>
            )}
          </div>

          <h2 className="text-2xl font-semibold text-brand-surface mt-12">
            Listen to Our Latest Podcast!
          </h2>
          <iframe
            src={post.spotify}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mt-4 rounded-xl shadow-lg"
          ></iframe>
        </div>

        {/* Right Sidebar: Table of Contents */}
        <aside className="hidden md:block w-64">
          <div className="fixed">  
            <h3 className="text-lg font-bold text-brand-surface mb-4">Table of Contents</h3>
            <ul className="space-y-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-zinc-500 hover:underline block text-sm font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}