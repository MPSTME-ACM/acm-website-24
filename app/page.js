import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center justify-between">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}
