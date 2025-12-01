import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Globe, AlertTriangle } from 'lucide-react';

const PoliticalNews = () => {
    const [newsItems, setNewsItems] = React.useState([]);

    React.useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}news.json`);
                const data = await response.json();
                setNewsItems(data);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            }
        };
        fetchNews();
    }, []);

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
