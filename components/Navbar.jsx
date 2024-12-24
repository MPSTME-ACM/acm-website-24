"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamIcon } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  const getSectionLink = (section) => {
    if (pathname === "/") {
      // If on the home page, return the anchor link directly
      return `#${section}`;
    }
    // If on a different page, link to the home page with the anchor
    return `/`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4">
      {" "}
      <div className="flex gap-40 md:gap-0 justify-between border border-white/10 font-light bg-zinc-900/80 rounded-lg p-1 backdrop-blur-xl">
        {/* Home (ACM) */}
        <Link
          href="/"
          className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 text-blue-500 font-bold"
        >
          ACM
        </Link>
        {/* Desktop Navigation Links */}
        <Link
          href={getSectionLink("about")}
          className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25"
        >
          About Us
        </Link>
        <Link
          href={getSectionLink("projects")}
          className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25"
        >
          Projects
        </Link>
        <Link
          href={"/events"}
          className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25"
        >
          Events
        </Link>
        <Link
          href={"/team"}
          className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25"
        >
          Team
        </Link>
        {/* Newsletter */}
        <Link
          href="/newsletter"
          className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25"
        >
          Newsletter
        </Link>
        <Link
          href="/how"
          className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25"
        >
          How
        </Link>
        {/* Mobile Sidebar Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between h-screen">
            <div>
              <SheetHeader>
                <SheetTitle className="pt-5 text-2xl font-black text-blue-500">
                  ACM MPSTME
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col mt-5">
                <Link
                  href="/"
                  className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25"
                >
                  Home
                </Link>
                <Link
                  href={getSectionLink("about")}
                  className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25"
                >
                  About Us
                </Link>
                <Link
                  href={getSectionLink("projects")}
                  className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25"
                >
                  Projects
                </Link>
                <Link
                  href={"/events"}
                  className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25"
                >
                  Events
                </Link>
                <Link
                  href={"/team"}
                  className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25"
                >
                  Team
                </Link>
                <Link
                  href="/newsletter"
                  className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25"
                >
                  Newsletter
                </Link>
                <Link
                  href="/how"
                  className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25"
                >
                  How
                </Link>
              </div>
            </div>
            <div className="text-xs mt-0.5 flex items-center justify-center bottom-56 text-slate-600">
              Built with {"<"}3 by ACM
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
