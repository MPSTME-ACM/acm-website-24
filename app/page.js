import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-between">
      <Navbar/>
      <Footer/>
    </div>
  )
}
