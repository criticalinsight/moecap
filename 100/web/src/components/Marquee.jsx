import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ data }) => {
    // Sort by startDate descending to get newest
    const newStocks = [...data]
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        .slice(0, 10); // Top 10 newest

    if (newStocks.length === 0) return null;

    return (
        <div className="fixed top-0 left-0 w-full bg-slate-900/90 border-b border-white/10 overflow-hidden py-2 z-50 backdrop-blur-md h-10 flex items-center">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Render multiple times to fill screen and allow looping */}
                {[...newStocks, ...newStocks, ...newStocks, ...newStocks].map((stock, idx) => (
                    <a
                        key={`${stock.ticker}-${idx}`}
                        href={`?ticker=${stock.ticker}`}
                        className="mx-6 text-xs font-medium text-blue-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span className="bg-blue-500/20 px-1.5 py-0.5 rounded text-[10px] text-blue-300 border border-blue-500/30">NEW</span>
                        <span className="font-bold">{stock.ticker}</span>
                        <span className="text-slate-500">added {stock.startDate}</span>
                    </a>
                ))}
            </div>
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                /* Pause on hover */
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Marquee;
