import Image from "next/image";

export default function Hero () {
    return (
        <div className="w-screen relative flex flex-col items-center justify-between">
            <div className="flex items-center justify-between">
                <Image className="absolute -top-16 -left-20 blur-xl hover:blur-none transition-all duration-300" src={'/images/image1.png'} width={360} height={360}/>
                <Image className="absolute -top-20 -right-20 blur-xl hover:blur-none transition-all duration-300" src={'/images/image2.png'} width={360} height={360}/>
            </div>
            <div className="scale-150 m-64 flex justify-center items-center text-9xl font-black">ACM</div>
            <div className="flex items-center justify-between">
                <Image className="absolute -bottom-16 -left-20 blur-xl hover:blur-none transition-all duration-300" src={'/images/image3.png'} width={360} height={360}/>
                <Image className="absolute -bottom-20 -right-20 blur-xl hover:blur-none transition-all duration-300" src={'/images/image4.png'} width={360} height={360}/>
            </div>
        </div>
    )
}