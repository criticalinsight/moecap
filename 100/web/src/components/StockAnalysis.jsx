import React from 'react';
import { motion } from 'framer-motion';

const StockAnalysis = ({ ticker, analysis }) => {
    if (!analysis) {
        return (
            <div className="glass-card p-8 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">Analysis Not Available</h3>
                <p className="text-slate-400">Detailed 13-point framework analysis has not yet been generated for {ticker}.</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Executive Summary Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 rounded-2xl border-l-4 border-accent"
            >
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Executive Summary</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                    {analysis.executiveSummary}
                </p>
            </motion.div>

            {/* Recent Updates / News */}
            {analysis.news && analysis.news.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-6 rounded-2xl border-l-4 border-emerald-500"
                >
                    <h3 className="text-xl font-bold text-white mb-4 tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Recent Updates
                    </h3>
                    <div className="space-y-4">
                        {analysis.news.map((item, idx) => (
                            <div key={idx} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{item.title}</span>
                                    <span className="text-xs text-slate-500">{item.date}</span>
                                </div>
                                <p className="text-slate-300 text-sm">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* 13-Point Framework Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {analysis.points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                        <h4 className="text-accent font-bold mb-3 text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                            {point.title}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {point.content}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StockAnalysis;
