import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default async function TeamPage() {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <Team/>
      <Footer/>
    </div>
  );
}
