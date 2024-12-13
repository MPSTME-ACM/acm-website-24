import About from "@/components/About";
import Events from "@/components/Events";
import Factoid from "@/components/Factoid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center justify-between gap-16 md:gap-48 overflow-x-hidden text-brand-surface">
      <Navbar />
      <Hero />
      <About />
      <Factoid />
      <Projects />
      <Events/>
      <Footer />
    </div>
  );
}
