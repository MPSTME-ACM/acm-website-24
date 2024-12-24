"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const jbm = JetBrains_Mono({ subsets: ["latin"] });

export default function Events () {
	const targetRef = useRef(null);
  	const { scrollYProgress } = useScroll({
    	target: targetRef,
  	});

		const multiplier = (typeof window !== 'undefined' && window.innerWidth < 768)? 3.62 : 1.5;
		const divider = (typeof window !== 'undefined' && window.innerWidth < 768)? 2.3 : (typeof window !== 'undefined' ? window.innerHeight * 2.3 : 0);

	const x = useTransform(scrollYProgress, [0, 1], [-(typeof window !== 'undefined' ? window.innerHeight/divider : 0), -(typeof window !== 'undefined' ? window.innerWidth * multiplier : 0)]);

		const [ isInView, setIsInView ] = useState(false);

		useEffect(() => {
				const observer = new IntersectionObserver(
					([entry]) => {
						// entry.isIntersecting is true when the element is in view
						setIsInView(entry.isIntersecting);
					},
					{
						// Adjust threshold if you want more or less of the element in view before triggering
						threshold: 0.1,
					}
				);
		
				if (targetRef.current) {
					observer.observe(targetRef.current);
				}
		
				return () => {
					if (targetRef.current) {
						observer.unobserve(targetRef.current);
					}
				};
			}, []);
    
    const events_list = [
        {
            "logo": ["/images/logos/pfe_logo.png", true],
            "image": "/images/events/pfe.png",
            "name": "Programming for everyone",
            "date": ["Sep", "2024"],
            "tag": ["Introduction", "Activities"],
            "color": "text-purple-500",
            "last": false,
            "first": true,
        },
        {
            "logo": ["/images/logos/semicolon_logo.png", true],
            "image": "/images/events/semicolon.png",
            "name": "Semicolon",
            "date": ["Aug", "2024"],
            "tag": ["Fun", "Coding"],
            "color": "text-sky-500",
            "last": false,
            "first": false,
        },
        {
            "logo": ["SEM", false],
            "image": "/images/events/pfe.png",
            "name": "Semicode",
            "date": ["Jan", "2025"],
            "tag": ["Introduction", "Activities"],
            "color": "text-blue-500",
            "last": false,
            "first": false,
        },
        {
            "logo": ["HCO", false],
            "image": "/images/events/semicolon.png",
            "name": "Hour of Code",
            "date": ["Feb", "2025"],
            "tag": ["Fun", "Coding"],
            "color": "text-red-500",
            "last": true,
            "first": false,
        },
    ]
    return (
        <section className="relative border-t rounded-[4rem] md:rounded-[6rem] pt-10 w-screen">    
            <div className="relative mt-40 flex flex-col items-center justify-center">
                <div className={`absolute -top-[8rem] md:-top-[05%] text-8xl md:text-[10rem] md:scale-150`}>Events</div>
								<div className="h-[40vh] md:h-[50vh]"></div>
								<section ref={targetRef} className="relative flex items-center min-h-[300vh] md:min-h-[200vh] w-screen">
									<div className={`${isInView ? 'opacity-100' : 'opacity-0'} -z-20 transition-all duration-500 fixed top-[10%] md:top-1/4 md:px-16 scrollbar-hidden scale-90 md:scale-100 rounded-3xl snap-x snap-always snap-mandatory left-20 min-w-full max-w-2xl text-center`}>
										<motion.div style={{ x }} className="scrollbar-hidden snap-x snap-always overflow-visible snap-mandatory min-w-[300vw] text-center flex gap-6 md:gap-3 items-center">
												{events_list.map((item, index) => (
														<Card key={index} item={item}/>
												))}
										</motion.div>
									</div>
								</section>
								<div className="h-[60vh]"></div>
            </div>
        </section>
    )
}

const Card = ({item}) => (
	<div style={{ backgroundImage: "url('/noise.png')", backgroundSize: '40px'}} className={`bg-zinc-950/75 backdrop-blur-lg p-4 pt-8 rounded-xl snap-center md:snap-start md:flex-row flex-col gap-3 md:gap-0 items-center md:items-start border flex mt-5 ${item.last ? 'mr-60 md:mr-20' : ''} ${item.first ? 'ml-52 md:ml-4' : ''}`}>
		<Image className="min-w-72 ml-3 md:ml-0 max-w-72" src={item.image} alt={item.name} height={1200} width={1200} />
		<div className="flex flex-col gap-5 md:min-h-60 max-h-56 justify-between md:pr-10">
				<div className="flex gap-2 text-center md:text-left items-center">
						{item.logo[1] ? <Image alt={`${item.name} Logo`} src={item.logo[0]} height={30} width={30} /> : <div className={`uppercase ${item.color} text-xl font-black`}>{item.logo[0]}</div>}
						<div className={`${jbm.className} uppercase md:min-w-64`}>{item.name}</div>
				</div>
				<div>
						<div className={`font-medium uppercase text-7xl ${item.color}`}>{item.date[0]}</div>
						<div>{item.date[1]}</div>
				</div>
				<div className="flex gap-1 text-xs items-center justify-center">
						{item.tag.map((tag, index) => (
								<div key={index} className={`bg-zinc-800/75 px-4 py-1 rounded-full`}>{tag}</div>
						))}
						<Link href={'/events'} className={`bg-zinc-800/75 hover:bg-blue-950/75 transition-all duration-500 px-4 py-1 border border-blue-900 rounded-full text-sky-500`}>View</Link>
				</div>
		</div>
	</div>
)
