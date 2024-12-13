import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jbm = JetBrains_Mono({ subsets: ["latin"] });

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_NEWSLETTER_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  if (!source) return "/placeholder-image.png"; // Fallback image
  return builder.image(source).url(); // Properly build the image URL
}

async function fetchPosts() {
  return await sanityClient.fetch(`
    *[_type == "post" && !archived && defined(mainImage)] | order(publishedAt desc) {
      _id,
      title,
      cardTitle,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url, // Ensure full URL is fetched
      publishedAt
    }
  `);
}

export default async function NewsletterPage() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="p-6 mt-24 pb-10 mb-10 border-b">
        <h1 className="text-3xl font-bold mb-6">Newsletters</h1>
        <div className="flex flex-col-reverse gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex gap-4 flex-col justify-between md:flex-row-reverse border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              {post.imageUrl ? (
                <img
                  src={urlFor(post.imageUrl)}
                  alt={post.title}
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
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-brand-surface2">{post.cardTitle}</p>
                </div>
                <div className="flex flex-col items-stretch md:items-start">
                  <Link
                    href={`/newsletter/${post.slug}`}
                    className={`${jbm.className} text-xs uppercase border text-center py-2 px-8 rounded-sm bg-zinc-800/25 hover:bg-zinc-800/40 transition-all duration-300 text-blue-500 hover:border-blue-900/50 mt-2 inline-block`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}