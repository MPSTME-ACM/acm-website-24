"use client";
import Footer from "@/components/Footer";
import IconCloud from "@/components/ui/cloud";
import Slide from "@/components/Slide";

export default function How() {
  const slugs = [
    "typescript", // TypeScript
    "javascript", // JavaScript
    "react", // React
    "html5", // HTML5
    "css3", // CSS3
    "nodedotjs", // Node.js
    "nextdotjs", // Next.js
    "docker", // Docker
    "git", // Git
    "github", // GitHub
    "vercel", // Vercel
    "visualstudiocode", // Visual Studio Code
    "figma", // Figma
    "tailwindcss", // Tailwind CSS
    "framer", // Framer Motion
    "cloudflare", // Cloudflare
    "postgresql", // PostgreSQL
    "firebase", // Firebase
    "prisma", // Prisma
    "nginx", // Nginx
    "jest", // Jest
    "cypress", // Cypress
    "jira", // Jira
    "gitlab", // GitLab
    "sonarqube", // SonarQube
  ];

  return (
    <>
      <section className="flex flex-col w-screen items-start  justify-between  overflow-x-hidden text-brand-surface py-20 md:pt-40 max-w-[90rem] mx-auto p-0 md:p-20 gap-10 ">
        <Slide>
          <h1 className="text-8xl font-normal tracking-tight lg:text-9xl mb-8">
            How did we build this site?
          </h1>
        </Slide>
        <Slide delay={0.2}>
          <p className="text-xl leading-relaxed mb-6 max-w-prose">
            Glad you asked! Here&apos;s a quick rundown of the tech stack and
            tools that helped us bring this site to life. We&apos;ve put
            together some modern solutions to keep things efficient, scalable,
            and well... elegant (we think so).
          </p>

          <div className="flex flex-col md:flex-row w-full justify-between items-center">
            <div className="md:hidden">
              <IconCloud iconSlugs={slugs} />
            </div>
            <div className="text-lg leading-relaxed space-y-6 max-w-prose">
              <h2 className="text-2xl font-semibold mt-6 text-blue-400">
                Frontend
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li className=" font-light">
                  <span className="font-semibold">Next.js:</span> We went with
                  Next.js because it gives us the power of Server-Side Rendering
                  (SSR), Static Site Generation (SSG), and Incremental Static
                  Regeneration (ISR). It&apos;s fast, reliable, and we&apos;re
                  all about that developer experience.
                </li>
                <li className=" font-light">
                  <span className="font-semibold">TailwindCSS:</span> Styling
                  should be seamless and painless. Tailwind provides us with
                  utility-first classes, so we don&apos;t have to deal with
                  bulky CSS files. It&apos;s minimal and efficient.
                </li>
                <li className=" font-light">
                  <span className="font-semibold">Framer Motion:</span> Smooth
                  animations that make the user experience feel polished. We
                  couldn&apos;t resist adding a little flair to the
                  interactions.
                </li>
                <li className=" font-light">
                  <span className="font-semibold ">ShadCN:</span> We used a few
                  ready-made components like the navigation bar from ShadCN to
                  save time, because, well, there&apos;s no need to reinvent the
                  wheel.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 text-green-400">
                Deployment
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li className=" font-light">
                  <span className="font-semibold">GitHub Actions:</span>{" "}
                  We&apos;ve automated our deployment process with GitHub
                  Actions. Every time we push to main, our CI/CD pipeline kicks
                  in, ensuring the site is built and deployed smoothly.
                </li>
                <li className=" font-light">
                  <span className="font-semibold">Docker:</span> We use Docker
                  to containerize everything. The Docker image of this site is
                  built directly on our Hetzner machine, simplifying deployment
                  and scalability.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 text-pink-400">
                Networking & Security
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li className=" font-light">
                  <span className="font-semibold">Cloudflare DNS:</span> We
                  route all our traffic through Cloudflare&apos;s DNS. They
                  provide fast, secure, and reliable service, and yes, we get
                  the added bonus of free SSL certificates.
                </li>
                <li className=" font-light">
                  <span className="font-semibold">Zero Trust Tunnels:</span> For
                  added security, all requests to our Hetzner server are
                  tunneled through Cloudflare&apos;s Zero Trust solution.
                  It&apos;s like having a security guard ensuring only the right
                  traffic gets in.
                </li>
              </ul>

              <p className="text-xl mt-6">
                There you have it—a quick peek into the tech and tools that
                power this site. We&apos;ve combined the best of modern
                development practices to create something sleek, secure, and
                scalable.
              </p>
            </div>
            <div className="hidden md:block">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </Slide>
      </section>
      <Footer></Footer>
    </>
  );
}
