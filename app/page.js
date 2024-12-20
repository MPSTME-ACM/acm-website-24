import About from "@/components/About";
import Events from "@/components/Events";
import Factoid from "@/components/Factoid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center justify-between gap-16 md:gap-48 overflow-x-hidden text-brand-surface">
      <Hero />
      <section id="about">
        <About />
      </section>
      <Factoid />
      <section id="projects">
        <Projects />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="team">
        <Team />
      </section>
      <Footer />
    </div>
  );
}
