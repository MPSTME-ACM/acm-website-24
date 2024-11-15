import { Bebas_Neue } from "next/font/google"
import Image from "next/image";

const bn = Bebas_Neue({ subsets: ['latin'], weight: ['400']});

export default function Projects () {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className={`${bn.className} absolute -top-1/2 p-10 uppercase text-[11rem] scale-150`}>About Us</div>
            <div className="relative shadow-black shadow-[0_-100px_200px_rgba(0,0,0,0.25)] top-20 max-w-3xl text-center flex flex-col items-center justify-center">
                <Image className="brightness-[.35] scale-125" src={'/images/about.png'} height={1920} width={1920}/>
                <div className="absolute max-w-2xl">
                    We at ACM have a simple mission of igniting passion in young minds for technology and opening new
                    horizons for the growth of innovation. We conduct workshops and hackathons, create podcasts and
                    blogs, and also provide opportunities to our members to shine in their desired field by creating
                    projects throughout the academic year. We strive to empower the youth to become masterminds of
                    computing and coding, and develop a true technological edge. We open doors to new opportunities
                    and experiences. Bound by our love for coding, ACM is a leading pioneer in ensuring that high quality
                    technological education is available to everyone. Competition and collaboration go hand in hand, as
                    we reach new milestones every year, with our team expanding and growing with some of the
                    brightest minds. Join us in our invigorating journey as we delve deeper into the intriguing
                    world of coding!
                </div>
            </div>
        </div>
    )
}