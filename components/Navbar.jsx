import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar () {
    return (
        <div className="m-4 z-50 fixed flex justify-center items-center">
            <div className="flex gap-40 md:gap-0 justify-between border border-white/10 font-light bg-zinc-900 rounded-lg p-1 backdrop-blur-lg">
                <p className="block md:hidden m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 text-blue-500 font-bold">ACM</p>
                <p className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">About Us</p>
                <p className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Projects</p>
                <p className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Events</p>
                <p className="hidden md:block m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Team</p>
                <Sheet>
                    <SheetTrigger className="md:hidden m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Open</SheetTrigger>
                    <SheetContent className="flex flex-col justify-between h-screen">
                        <div>
                            <SheetHeader>
                            <SheetTitle className="pt-5 text-2xl font-black text-blue-500">ACM MPSTME</SheetTitle>
                            </SheetHeader>
                            <div className="mt-5">
                                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25">About Us</p>
                                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25">Projects</p>
                                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25">Events</p>
                                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-3 py-2 underline hover:bg-black/25">Team</p>
                            </div>
                        </div>
                        <div className="text-xs mt-0.5 flex items-center justify-center bottom-56 text-slate-600">Built with {"<"}3 by ACM</div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}