"use client";
import { useState, useEffect } from 'react';

export default function Factoid() {
    const items = [
        "Do Projects",
        "Host Events",
        "Conduct Workshops",
        "Write Newsletters",
        "Make Podcasts"
    ];

    const [order, setOrder] = useState([0, 1, 2, 3, 4]);

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
        <div className="flex w-screen px-10 text-7xl items-center gap-2 -mt-10 pb-10 max-w-7xl mx-auto">
            <div className="text-[#0099FF] pr-6">We</div>
            <div className="flex flex-col gap-4 h-[200px] overflow-hidden relative min-w-[60rem] max-h-48">
                <div className='bg-gradient-to-b from-brand-background via-transparent to-brand-background z-30 absolute h-full w-full'></div> 
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute w-full -top-[5.2rem] transition-transform duration-1000 ease-in-out transform`}
                        style={{
                            transform: `translateY(${order[index] * 100}%)`,
                            opacity: order[index] === 2 ? 1 : order[index] === 0 ? 0 : 0.5,
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}