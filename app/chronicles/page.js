"use client";
import PDFFlipbook from "@/components/FlipBok";
import { Suspense } from "react";

export default function ChroniclesPage() {
  return (
    <section className="flex flex-col md:flex-row w-screen items-center  justify-center  overflow-x-hidden text-brand-surface py-20 md:pt-40 max-w-[90rem] mx-auto px-8 lg:px-0 gap-10 ">
      <Suspense fallback={<div>Loading...</div>}>
            <PDFFlipbook pdfUrl="/newsletter.pdf" />
      </Suspense>
    </section>
  );
}
