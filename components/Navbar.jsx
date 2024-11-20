export default function Navbar () {
    return (
        <div className="m-4 z-50 fixed flex justify-center items-center">
            <div className="flex border border-white/10 font-light bg-zinc-900 rounded-lg p-1 backdrop-blur-lg">
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">About Us</p>
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Projects</p>
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Events</p>
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Team</p>
            </div>
        </div>
    )
}