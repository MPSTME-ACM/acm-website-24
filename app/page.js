import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center justify-between gap-48 overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}
