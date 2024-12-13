import About from "@/components/About";
import Events from "@/components/Events";
import Factoid from "@/components/Factoid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Team from "@/components/Team";

// export default function Home() {
//   return (
//     <div className="flex flex-col w-screen items-center justify-between gap-16 md:gap-48 overflow-x-hidden text-brand-surface">
//       <Navbar />
//       <Hero />
//       <About />
//       <Factoid />
//       <Projects />
//       <Events/>
//       <Team/>
//       <Footer />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center justify-between gap-16 md:gap-48 overflow-x-hidden text-brand-surface">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="factoid">
        <Factoid />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer />
    </div>
  );
}
