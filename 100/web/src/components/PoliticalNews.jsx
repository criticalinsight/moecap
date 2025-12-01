import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Globe, AlertTriangle } from 'lucide-react';

const PoliticalNews = () => {
    const newsItems = [
        {
            id: 1,
            category: 'Macro',
            title: "Japan's 10-Year Bond Yields Cross 1%",
            content: "Significant move in global bond markets as Japan moves away from yield curve control. Could impact global liquidity flows.",
            sentiment: 'neutral',
            date: 'Today'
        },
        {
            id: 2,
            category: 'Crypto',
            title: "Bitcoin Surges Past $96k",
            content: "Crypto markets rally on institutional adoption and ETF inflows. MicroStrategy (MSTR) continues aggressive accumulation.",
            sentiment: 'positive',
            date: 'Today'
        },
        {
            id: 6,
            category: 'Politics',
            title: "Trump Cabinet Picks",
            content: "Markets reacting to potential deregulation with Trump's new cabinet appointments. Financials and Energy sectors seeing inflows.",
            sentiment: 'positive',
            date: 'Today'
        },
        {
            id: 3,
            category: 'Economy',
            title: "US PMI Data Shows Expansion",
            content: "Manufacturing and Services PMI came in stronger than expected, suggesting the US economy remains resilient despite high rates.",
            sentiment: 'positive',
            date: 'Yesterday'
        },
        {
            id: 7,
            category: 'Macro',
            title: "DXY Strength",
            content: "US Dollar Index strengthening as other central banks cut rates faster than the Fed, putting pressure on emerging markets.",
            sentiment: 'neutral',
            date: 'Yesterday'
        },
        {
            id: 4,
            category: 'Politics',
            title: "Fed Chair Powell Signals Caution",
            content: "Federal Reserve emphasizes data dependence, dampening hopes for immediate aggressive rate cuts.",
            sentiment: 'negative',
            date: 'Yesterday'
        },
        {
            id: 8,
            category: 'Crypto',
            title: "Solana ETF Hopes",
            content: "Speculation mounts over a potential Solana ETF approval following Ethereum's lead, driving altcoin momentum.",
            sentiment: 'positive',
            date: '2 days ago'
        },
        {
            id: 5,
            category: 'Commodities',
            title: "Silver Prices Breakout",
            content: "Industrial demand and safe-haven buying pushing silver to multi-year highs.",
            sentiment: 'positive',
            date: '2 days ago'
        }
    ];

    const getIcon = (category) => {
        switch (category) {
            case 'Macro': return <Globe size={18} />;
            case 'Crypto': return <TrendingUp size={18} />;
            case 'Politics': return <AlertTriangle size={18} />;
            default: return <Newspaper size={18} />;
        }
    };

    return (
        <div className="glass-card p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Newspaper size={24} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Global Macro & News</h3>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[600px] custom-scrollbar pr-2">
                {newsItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass p-4 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-l-accent/50"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${item.category === 'Crypto' ? 'bg-orange-500/20 text-orange-400' :
                                item.category === 'Macro' ? 'bg-purple-500/20 text-purple-400' :
                                    'bg-slate-700/50 text-slate-300'
                                }`}>
                                {item.category}
                            </span>
                            <span className="text-xs text-slate-500">{item.date}</span>
                        </div>
                        <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            {item.content}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PoliticalNews;
