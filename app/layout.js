import { Nabla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "ACM MPSTME",
  description: "Welcome to ACM MPSTME!",
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
