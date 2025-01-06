import PDFFlipbook from "@/components/FlipBok";

export default function ChroniclesPage() {
  return (
    <section className="flex flex-col md:flex-row w-screen items-center  justify-center  overflow-x-hidden text-brand-surface py-20 md:pt-40 max-w-[90rem] mx-auto px-8 lg:px-0 gap-10 ">
      <PDFFlipbook pdfUrl="http://localhost:3000/newsletter.pdf" />
    </section>
  );
}
