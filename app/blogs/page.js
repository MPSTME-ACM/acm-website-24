import client from '@/lib/client'
import Footer from "@/components/Footer";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Slide from "@/components/Slide";

const jbm = JetBrains_Mono({ subsets: ["latin"] });

const builder = imageUrlBuilder(client);

function urlFor(source) {
  if (!source) return "/placeholder-image.png"; // Fallback image
  return builder.image(source).url(); // Properly build the image URL
}

async function fetchPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
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
  `);
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col items-center">
      <div className="p-6 mt-24 pb-10 mb-10 border-b">
        <Slide>
          <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        </Slide>
        <div className="flex flex-col-reverse gap-6">
          {posts.map((post, index) => (
            <Slide delay={index * 0.1} key={post._id}>
              <div className="flex gap-4 flex-col justify-between md:flex-row-reverse border rounded-lg p-4 shadow hover:shadow-md transition">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage)}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="w-64 h-40 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full md:max-w-52 md:aspect-video h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <div className="flex md:max-w-96 gap-4 flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className={`${jbm.className} text-gray-600 text-xs mb-2`}>
                      {new Date(post.publishedAt).toLocaleDateString()} | By{" "}
                      <span className="font-medium">{post.author?.name}</span>
                    </p>
                    <p className="text-gray-700">{post.description}</p>
                    <p className="text-xs text-gray-500">
                      Categories:{" "}
                      {post.categories
                        ?.map((category) => category.title)
                        .join(", ") || "Uncategorized"}
                    </p>
                  </div>
                  <div className="flex flex-col items-stretch md:items-start">
                    <Link
                      href={`/blogs/${post.slug?.current || '/unknown'}`}
                      className={`${jbm.className} text-xs uppercase border text-center py-2 px-8 rounded-sm bg-zinc-800/25 hover:bg-zinc-800/40 transition-all duration-300 text-blue-500 hover:border-blue-900/50 mt-2 inline-block`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}