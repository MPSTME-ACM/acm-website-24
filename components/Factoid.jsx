"use client";
import { useState, useEffect } from "react";

export default function Factoid() {
    const items = [
        "Do Projects",
        "Host Events",
        "Conduct Workshops",
        "Write Newsletters",
        "Make Podcasts",
    ];

    const [order, setOrder] = useState([0, 1, 2, 3, 4]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setOrder((prevOrder) => {
                const newOrder = prevOrder.map((value) => (value + 1) % items.length);
                return newOrder;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="flex w-screen px-5 md:px-10 text-3xl md:text-7xl items-center gap-2 -mt-10 md:pb-10 max-w-7xl mx-auto">
            <div className="text-[#0099FF] md:pr-6">We</div>
            <div className="flex flex-col gap-4 h-[80px] md:h-[200px] overflow-hidden relative min-w-[60rem] max-h-48">
                <div className="top-96 md:top-0 bg-gradient-to-b from-[#131313] via-transparent to-[#131313] z-30 absolute h-full w-full"></div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute w-full -top-[5.2rem] transition-transform duration-1000 ease-in-out`}
                        style={{
                            transform: `translateY(${order[index] * 100}%)`,
                            opacity:
                                order[index] === (isSmallScreen ? 3 : 2)
                                    ? 1
                                    : order[index] === 0
                                    ? 0
                                    : 0.5,
                            transition: `${
                                order[index] === (isSmallScreen ? 3 : 2)
                                    ? `opacity 0.5s 0.35s`
                                    : order[index] === 0
                                    ? `opacity 0s 0s`
                                    : `opacity 0.5s 0.35s`
                            }, transform 1s ease-in-out`,
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}