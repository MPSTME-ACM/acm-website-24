import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Team from "@/components/TeamPrev";
import Factoid2 from "@/components/Factoid2";
import Podcast from "@/components/Podcast";
import ContactForm from "@/components/Contact";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center justify-between gap-10 md:gap-28 overflow-x-hidden text-brand-surface">
      <Hero />
      <section id="about">
        <About />
      </section>
      <section>
        <Factoid2 />
      </section>
      <section id="podcast">
        <Podcast />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="faq">
        <Faq />
      </section>{" "}
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
