import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Search, TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';
import StockChart from './StockChart';
import SectorAnalysis from './SectorAnalysis';
import ComparisonTool from './ComparisonTool';
import StockAnalysis from './StockAnalysis';
import PoliticalNews from './PoliticalNews';
import { stockAnalysis } from '../data/stockAnalysis';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTicker, setSelectedTicker] = useState(null);
    const [statusFilter, setStatusFilter] = useState('All');
    const [yearsFilter, setYearsFilter] = useState('All');

    const STATUS_OPTIONS = ['All', '100-Bagger', 'Multibagger', 'Fallen 100-Bagger', 'Fallen Multibagger', 'Normal'];
    const YEARS_OPTIONS = ['All', '< 5 Years', '5-10 Years', '10-20 Years', '> 20 Years'];

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.BASE_URL}data.json`);
                setData(response.data);
                if (response.data.length > 0) {
                    setSelectedTicker(response.data[0]);
                }
            } catch (error) {
                console.error("Failed to load data", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const filteredData = data.filter(item => {
        const matchesSearch = item.ticker.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

        let matchesYears = true;
        if (yearsFilter === '< 5 Years') matchesYears = item.years < 5;
        else if (yearsFilter === '5-10 Years') matchesYears = item.years >= 5 && item.years < 10;
        else if (yearsFilter === '10-20 Years') matchesYears = item.years >= 10 && item.years < 20;
        else if (yearsFilter === '> 20 Years') matchesYears = item.years >= 20;

        return matchesSearch && matchesStatus && matchesYears;
    });

    const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
        >
            <div className={`absolute top-0 right-0 p-20 opacity-5 bg-gradient-to-br from-transparent to-${color.split('-')[1]}-500 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity group-hover:opacity-10`}></div>
            <div className="flex justify-between items-start relative z-10">
                <div>
                    <p className="text-slate-400 text-sm font-medium mb-1 tracking-wide uppercase">{title}</p>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
                    {subtext && <p className={`text-xs mt-2 font-medium ${color}`}>{subtext}</p>}
                </div>
                <div className={`p-3 rounded-xl bg-slate-800/50 border border-white/5 ${color}`}>
                    <Icon size={22} />
                </div>
            </div>
        </motion.div>
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-primary">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-8 font-sans text-slate-200">
            <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                        100-Bagger
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg font-light">Identify the next generation of wealth creators.</p>
                </div>

                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 group-focus-within:text-accent transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search tickers..."
                        className="glass bg-slate-900/40 border-white/10 rounded-full py-3 pl-12 pr-6 w-full md:w-80 focus:outline-none focus:border-accent/50 focus:bg-slate-900/60 transition-all shadow-lg text-white placeholder-slate-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            {/* High Level Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard
                    title="Total Analyzed"
                    value={data.length}
                    subtext="Tickers processed"
                    icon={Activity}
                    color="text-blue-400"
                />
                <StatCard
                    title="100-Baggers"
                    value={data.filter(d => d.is100Bagger).length}
                    subtext="Achieved 100x return"
                    icon={TrendingUp}
                    color="text-emerald-400"
                />
                <StatCard
                    title="Fallen Angels"
                    value={data.filter(d => d.isFallen).length}
                    subtext="High peak, significant drop"
                    icon={TrendingDown}
                    color="text-danger"
                />
                <StatCard
                    title="Potential Baggers"
                    value={data.filter(d => d.returnMultiple >= 10 && d.returnMultiple < 100).length}
                    subtext="10x - 99x Returns"
                    icon={TrendingUp}
                    color="text-purple-400"
                />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
                <select
                    className="glass px-6 py-2.5 rounded-xl text-sm focus:outline-none focus:border-accent/50 text-slate-300 cursor-pointer hover:bg-slate-800/60 transition-colors appearance-none"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    {STATUS_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-slate-900 text-slate-300">{opt}</option>)}
                </select>

                <select
                    className="glass px-6 py-2.5 rounded-xl text-sm focus:outline-none focus:border-accent/50 text-slate-300 cursor-pointer hover:bg-slate-800/60 transition-colors appearance-none"
                    value={yearsFilter}
                    onChange={(e) => setYearsFilter(e.target.value)}
                >
                    {YEARS_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-slate-900 text-slate-300">{opt}</option>)}
                </select>
            </div>

            {/* Sector Analysis */}
            <div className="mb-8">
                <SectorAnalysis data={filteredData} />
            </div>

            {/* Comparison Tool */}
            <div className="mb-8">
                <ComparisonTool data={data} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Stock List */}
                <div className="lg:col-span-1 glass-card rounded-2xl overflow-hidden flex flex-col h-[650px]">
                    <div className="p-5 border-b border-white/5 bg-white/5 backdrop-blur-sm">
                        <h3 className="font-semibold text-lg text-white tracking-wide">Top Performers</h3>
                    </div>
                    <div className="overflow-y-auto flex-1 p-3 space-y-2 custom-scrollbar">
                        {filteredData.map((item) => (
                            <motion.div
                                key={item.ticker}
                                whileHover={{ scale: 1.01, x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedTicker(item)}
                                className={`p-4 rounded-xl cursor-pointer transition-all border ${selectedTicker?.ticker === item.ticker
                                    ? 'bg-accent/10 border-accent/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                                    : 'bg-transparent border-transparent hover:bg-white/5'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-white">{item.ticker}</h4>
                                        <p className="text-xs text-slate-400">{item.years.toFixed(1)} years</p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-bold ${item.is100Bagger ? 'text-emerald-400' :
                                            item.isFallen ? 'text-danger' : 'text-blue-400'
                                            }`}>
                                            {item.returnMultiple.toFixed(1)}x
                                        </p>
                                        {item.isFallen && (
                                            <p className="text-[10px] text-danger/70">
                                                Peak: {item.maxReturnMultiple.toFixed(1)}x
                                            </p>
                                        )}
                                        {!item.isFallen && (
                                            <p className="text-xs text-slate-400">
                                                {(item.cagr * 100).toFixed(1)}% CAGR
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Main Chart Area */}
                <div className="lg:col-span-2 space-y-6">
                    {selectedTicker && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={selectedTicker.ticker}
                            className="glass-card rounded-2xl p-8"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold flex items-center gap-3">
                                        {selectedTicker.ticker}
                                        {selectedTicker.is100Bagger && (
                                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/50">
                                                100-BAGGER
                                            </span>
                                        )}
                                        {selectedTicker.isFallen && (
                                            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/50">
                                                FALLEN
                                            </span>
                                        )}
                                    </h2>
                                    <p className="text-slate-400">
                                        Started: {selectedTicker.startDate} • Current: {selectedTicker.currentDate}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-slate-400">Total Return</p>
                                    <p className="text-3xl font-bold text-accent">
                                        {selectedTicker.returnMultiple.toFixed(2)}x
                                    </p>
                                </div>
                            </div>

                            <StockChart data={selectedTicker.history} milestones={selectedTicker.milestones} />

                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="glass p-5 rounded-xl">
                                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Max Drawdown</p>
                                    <p className="text-2xl font-bold text-danger">
                                        {(selectedTicker.maxDrawdown * 100).toFixed(1)}%
                                    </p>
                                </div>
                                <div className="glass p-5 rounded-xl">
                                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">CAGR</p>
                                    <p className="text-2xl font-bold text-amber-400">
                                        {(selectedTicker.cagr * 100).toFixed(1)}%
                                    </p>
                                </div>
                                <div className="glass p-5 rounded-xl">
                                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Years Active</p>
                                    <p className="text-2xl font-bold text-blue-400">
                                        {selectedTicker.years.toFixed(1)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Investment Analysis */}
                    {selectedTicker && (
                        <StockAnalysis
                            ticker={selectedTicker.ticker}
                            analysis={stockAnalysis[selectedTicker.ticker.replace('.US', '')]}
                            news={selectedTicker.news}
                        />
                    )}
                </div>
            </div>

            {/* Political & Macro News Section */}
            <div className="mt-8">
                <PoliticalNews />
            </div>
        </div>
    );
};

export default Dashboard;
