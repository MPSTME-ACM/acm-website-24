import { Nabla } from "next/font/google";
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
      <link rel="icon" href="/acm.png" sizes="any" />
      <body className="dark overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
