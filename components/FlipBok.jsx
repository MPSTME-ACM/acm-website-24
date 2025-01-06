"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Document, Page, pdfjs } from "react-pdf";
import useResizeObserver from "use-resize-observer";
import { Download } from "lucide-react";
import Image from "next/image";

// Dynamically import HTMLFlipBook to avoid SSR issues
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

const PDFFlipbook = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ref, width = 1 } = useResizeObserver();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "newsletter.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pageWidth = Math.min(width - 20, 800);
  const pageHeight = pageWidth * 1.414; // Assuming A4 aspect ratio

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-10">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col justify-around gap-4 items-start mb-4 px-10">
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            ACM Chronicles
          </h1>
          <p className="text-brand-surface2 text-justify md:text-lg max-w-sm ">
            The official newsletter of ACM MPSTME! This is a flip-book or you
            can download the pdf file!
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center hover:text-blue-500 hover:underline group"
          >
            <Download className="w-4 h-4 mr-2 group-hover:text-blue-500" />
            Download PDF
          </button>
          {!isLoading && (
            <>
              <p className="page-info block">
                Page {pageNumber} of {numPages}
              </p>
            </>
          )}
        </div>
      </div>
      <div ref={ref} className="overflow-hidden mx-2 w-full max-w-4xl">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => setError(error)}
          loading={
            <div className="flex justify-center">
              <Image
                src="/cover.png"
                alt="PDF Cover"
                width={400}
                height={566}
                className="object-contain"
              />
            </div>
          }
        >
          {!isLoading && width > 1 && typeof window !== "undefined" ? (
            <HTMLFlipBook
              width={pageWidth - 20}
              height={pageHeight - 20}
              size="stretch"
              minWidth={400}
              maxWidth={1000}
              minHeight={500}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="custom-flipbook"
              onFlip={(e) => setPageNumber(e.data + 1)}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div key={`page_${index + 1}`} className="demoPage">
                  <Page
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          ) : (
            <div className="flex justify-center">
              <Image
                src="/cover.png"
                alt="PDF Cover"
                width={400}
                height={566}
                className="object-contain"
              />
            </div>
          )}
        </Document>
      </div>
    </div>
  );
};

export default PDFFlipbook;
