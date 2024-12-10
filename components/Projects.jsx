import { Bebas_Neue, Big_Shoulders_Display } from "next/font/google"
import Image from "next/image";

const bn = Bebas_Neue({ subsets: ['latin'], weight: ['400']});
const bsd = Big_Shoulders_Display({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']});

export default function Projects () {
    return (
        <div className="border-t rounded-[4rem] md:rounded-[6rem] pt-10 w-screen">    
            <div className="relative mt-40 flex flex-col items-center justify-center">
                <div className={`${bn.className} absolute -top-40 md:-top-1/2 md:p-10 uppercase text-8xl md:text-[11rem] md:scale-150`}>Projects</div>
                <div className="relative shadow-black shadow-[0_-100px_200px_rgba(0,0,0,0.25)] -top-16 md:top-20 max-w-3xl text-center flex flex-col items-center justify-center">
                    <div className="flex scale-125 gap-4">
                        <div className="relative">
                            <Image src={'/images/projects/project1.png'} height={220} width={220}/>
                            <div className="opacity-0 transition-all duration-300 absolute bg-black/50 min-h-full bottom-0 text-[0.60rem] text-left p-4 text-pretty gap-1 hover:opacity-100 flex flex-col justify-end">
                                <div className={`${bsd.className} text-5xl font-black`}>DVWA</div>
                                Exploring PHP/MySQL
                                vulnerabilities highlights crucial
                                security flaws, stressing robust web
                                development practices.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 justify-between items-center">
                            <div className="flex gap-6 justify-between items-center">
                                <div className="relative">
                                    <Image src={'/images/projects/project2.png'} height={420} width={360}/>
                                    <div className="opacity-0 transition-all duration-300 absolute bg-black/50 min-h-full bottom-0 text-[0.60rem] text-left p-4 text-pretty gap-1 hover:opacity-100 flex flex-col justify-end">
                                        <div className={`${bsd.className} text-5xl font-black`}>Valor Arena</div>
                                        3D wave survival game with card buffs, dynamic bosses,
                                        skill customization, and immersive sound.
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image src={'/images/projects/project3.png'} height={220} width={220}/>
                                    <div className="opacity-0 transition-all duration-300 absolute bg-black/50 min-h-full bottom-0 text-[0.60rem] text-left p-4 text-pretty gap-1 hover:opacity-100 flex flex-col justify-end">
                                        <div className={`${bsd.className} text-5xl font-black`}>Quizzo</div>
                                        Quizzo: Create, play, compete with
                                        live feedback, secure logins, and
                                        leaderboards.
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                                <div className="relative">
                                    <Image src={'/images/projects/project4.png'} height={210} width={210}/>
                                    <div className="opacity-0 transition-all duration-300 absolute bg-black/50 min-h-full bottom-0 text-[0.50rem] text-left p-4 text-pretty gap-0 hover:opacity-100 flex flex-col justify-end">
                                        <div className={`${bsd.className} text-2xl font-black`}>MediQuery</div>
                                        Quizzo: Create, play, compete with
                                        live feedback, secure logins, and
                                        leaderboards.
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image src={'/images/projects/project5.png'} height={210} width={350}/>
                                    <div className="opacity-0 transition-all duration-300 absolute bg-black/50 min-h-full bottom-0 text-[0.50rem] text-left p-4 text-pretty gap-0 hover:opacity-100 flex flex-col justify-end">
                                        <div className={`${bsd.className} text-2xl font-black`}>Automation for ACM</div>
                                        One-click website hosting automates deployment, Docker containers, and EC2 instance management for ACM MPSTME.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}