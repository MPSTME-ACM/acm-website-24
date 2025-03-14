"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

const FlyWithACM = () => (    
    <svg className="size-56" viewBox="0 0 389 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* A */}<path d="M0.106812 294.801L27.1953 99.5688H84.7888L111.877 294.801H74.295L70.1463 254.046H41.8377L37.689 294.801H0.106812ZM45.2542 221.833H66.7298L62.3371 178.638L59.4086 131.782H52.5755L49.647 178.638L45.2542 221.833Z" fill="#0099FF"/>
        {/* C */}<path d="M164.901 297.241C146.516 297.241 133.419 293.459 125.61 285.893C117.882 278.328 113.815 265.76 113.408 248.189C113.327 241.438 113.245 233.628 113.164 224.761C113.083 215.895 113.042 206.702 113.042 197.185C113.042 187.586 113.083 178.353 113.164 169.486C113.245 160.538 113.327 152.607 113.408 145.692C113.652 130.806 117.801 119.011 125.854 110.307C133.989 101.521 147.004 97.1284 164.901 97.1284C182.472 97.1284 195.202 100.911 203.093 108.476C210.984 115.96 215.173 128.447 215.661 145.936C215.742 148.621 215.783 151.549 215.783 154.722C215.783 157.813 215.742 160.945 215.661 164.117C215.58 167.209 215.498 170.096 215.417 172.781H178.811C178.892 169.771 178.974 166.232 179.055 162.165C179.136 158.016 179.177 153.908 179.177 149.841C179.177 145.692 179.136 142.113 179.055 139.103C178.974 135.199 177.672 132.189 175.15 130.074C172.71 127.959 169.293 126.901 164.901 126.901C160.264 126.901 156.644 127.959 154.041 130.074C151.519 132.189 150.177 135.199 150.014 139.103C149.689 147.645 149.445 156.878 149.282 166.802C149.201 176.726 149.16 186.854 149.16 197.185C149.16 207.516 149.201 217.644 149.282 227.568C149.445 237.411 149.689 246.562 150.014 255.022C150.177 259.008 151.519 262.1 154.041 264.296C156.644 266.411 160.264 267.468 164.901 267.468C169.7 267.468 173.401 266.411 176.004 264.296C178.608 262.1 179.95 259.008 180.031 255.022C180.112 252.094 180.153 248.596 180.153 244.529C180.235 240.38 180.235 236.272 180.153 232.205C180.153 228.056 180.112 224.517 180.031 221.589H216.637C216.8 225.494 216.881 229.927 216.881 234.889C216.881 239.851 216.8 244.285 216.637 248.189C216.149 265.76 211.878 278.328 203.825 285.893C195.853 293.459 182.878 297.241 164.901 297.241Z" fill="#0099FF"/>
        {/* M */}<path d="M226.578 294.801V99.5688H285.392L301.498 173.513L304.671 262.588H311.016L313.944 173.513L330.295 99.5688H388.865V294.801H352.259V234.767L359.336 131.782H352.747L342.497 237.207L327.367 294.801H288.076L273.19 237.207L262.696 131.782H256.351L263.184 234.767V294.801H226.578Z" fill="#0099FF"/>
        {/* # */}<path d="M6.76826 87.3664L11.4624 63.9959H0L3.1658 50.6725H14.0823L17.2481 35.165H5.89493L8.95157 21.8416H19.8681L24.2347 0H40.6096L36.2429 21.8416H46.6137L50.9803 0H67.3551L62.9885 21.8416H73.7958L70.8484 35.165H60.3685L57.2027 50.6725H67.9009L64.7351 63.9959H54.5827L49.8886 87.3664H33.5138L38.2079 63.9959H27.8372L23.1431 87.3664H6.76826ZM30.4572 50.6725H40.8279L43.9937 35.165H33.623L30.4572 50.6725Z" fill="#FCF8EF"/>
        {/* F */}<path d="M78.1983 87.3664V0H115.97V14.4154H94.5731V35.711H114.878V50.1265H94.5731V87.3664H78.1983Z" fill="#FCF8EF"/>
        {/* L */}<path d="M119.272 87.3664V0H135.647V72.9509H157.152V87.3664H119.272Z" fill="#FCF8EF"/>
        {/* Y */}<path d="M161.765 87.3664V66.5077L145.39 0H162.093L166.787 21.1863L168.424 46.8502H171.481L173.118 21.1863L177.813 0H194.515L178.14 66.5077V87.3664H161.765Z" fill="#FCF8EF"/>
        {/* W */}<path d="M202.194 87.3664L193.897 0H210.381L213.22 39.9701L214.857 72.9509H217.805L217.586 39.9701L225.228 0.546039H246.188L253.829 39.9701L253.611 72.9509H256.558L258.196 39.9701L261.034 0H277.518L269.222 87.3664H242.476L238.437 63.013L237.127 14.4154H234.289L232.979 63.013L228.94 87.3664H202.194Z" fill="#FCF8EF"/>
        {/* I */}<path d="M280.444 87.3664V0H296.819V87.3664H280.444Z" fill="#FCF8EF"/>
        {/* T */}<path d="M312.645 87.3664V14.4154H298.617V0H343.047V14.4154H329.02V87.3664H312.645Z" fill="#FCF8EF"/>
        {/* H */}<path d="M344.788 87.3664V0H361.163V35.711H372.625V0H389V87.3664H372.625V50.1265H361.163V87.3664H344.788Z" fill="#FCF8EF"/>
    </svg>
)

export default function Footer () {
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
        <div className="m-4 flex flex-col w-screen border-t border-white/20 pt-6">
            <div className="flex flex-col-reverse gap-10 items-center md:items-start md:gap-0 md:flex-row justify-around px-20">
                <FlyWithACM/>
                <div className="flex gap-8 md:gap-16">
                    <div className="flex flex-col gap-3">
                        <h1 className="p-0 m-0 uppercase font-semibold">Socials</h1>
                        <div className="flex flex-col gap-2 font-extralight text-xs">
                            <Link href={'https://www.instagram.com/acm_mpstme/'} target="_blank" className="flex fill-white hover:underline hover:text-sky-400 hover:font-bold transition-all duration-200 hover:fill-sky-400 items-center">
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                </svg>
                                <p>Instagram</p>
                            </Link>
                            <div className="flex fill-white hover:underline hover:text-sky-400 transition-all duration-200 hover:fill-sky-400 hover:font-bold items-center">
                                <svg className="size-[1rem] border border-white rounded-sm p-[0.1rem]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z" />
                                </svg>
                                <p>Linktree</p>
                            </div>
                            <Link href={'https://www.linkedin.com/company/mpstmeacm/'} target="_blank" className="flex fill-white hover:underline hover:text-sky-400 hover:font-bold transition-all duration-200 hover:fill-sky-400 items-center">
                                <svg className="size-[1rem] border border-white rounded-sm p-[0.1rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                                </svg>
                                <p>LinkedIn</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="p-0 m-0 uppercase font-semibold">Quick Links</h1>
                        <div className="flex flex-col gap-2 font-extralight text-xs">
                            <Link href={getSectionLink("about")} className="cursor-pointer underline hover:text-sky-400 transition-all duration-200 hover:font-bold">About Us</Link>
                            <Link href={getSectionLink("projects")} className="cursor-pointer underline hover:text-sky-400 transition-all duration-200 hover:font-bold">Projects</Link>
                            <Link href={'/events'} className="cursor-pointer underline hover:text-sky-400 transition-all duration-200 hover:font-bold">Events</Link>
                            <Link href={'/team'} className="cursor-pointer underline hover:text-sky-400 transition-all duration-200 hover:font-bold">Team</Link>
                            <Link href={'/newsletter'} className="cursor-pointer underline hover:text-sky-400 transition-all duration-200 hover:font-bold">Newsletter</Link>
                            <Link href={'/how'} className="cursor-pointer underline hover:text-sky-400 transition-all duration-200 hover:font-bold">How</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="p-0 m-0 uppercase font-semibold">Contact</h1>
                        <div className="flex flex-col gap-2 font-extralight text-xs">
                            <div className="flex hover:underline hover:text-sky-400 transition-all duration-200 hover:font-bold items-center">
                                <svg className="fill-white size-[1rem] border border-white rounded-sm p-[0.1rem]" width="134" height="100" viewBox="0 0 134 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1:194)">
                                        <path d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z"/>
                                        <path d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848"/>
                                        <path d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727"/>
                                        <path d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576"/>
                                        <path d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1:194">
                                            <rect width="133.333" height="100" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <Link href={'mailto:acm.mpstme@gmail.com'} target="_blank">acm.mpstme@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-sm font-thin text-[#FCF8EF]/55">
                Made with {"<"}3 by ACM FAM
            </div>
        </div>
    )
}