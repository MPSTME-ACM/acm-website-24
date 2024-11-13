export default function Navbar () {
    return (
        <div className="m-4 flex justify-center items-center">
            <div className="flex font-light bg-[#515151] rounded-xl p-1">
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">About Us</p>
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Projects</p>
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Events</p>
                <p className="m-0 p-0 transition-all duration-200 cursor-pointer rounded-lg px-6 py-3 hover:bg-black/25">Team</p>
            </div>
        </div>
    )
}