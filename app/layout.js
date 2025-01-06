import { Nabla } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
const options = {
  title: "ACM MPSTME",
  description: "Welcome to ACM MPSTME!",
  url: "https://mpstmeacm.com",
  ogImage: "https://mpstmeacm.com/opengraph-image.jpg",
};
export const metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "ACM MPSTME",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://analytics.nmims.tech/script.js"
        data-website-id="74a15570-f8ac-42fc-b3aa-4ac036cb036d"
      ></Script>
      <link rel="icon" href="/acm.png" sizes="any" />
      <body className="dark overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}