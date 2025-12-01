import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { Plus, X } from 'lucide-react';

const ComparisonTool = ({ data }) => {
    const [selectedTickers, setSelectedTickers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTicker = (ticker) => {
        if (selectedTickers.includes(ticker)) return;
        if (selectedTickers.length >= 5) {
            alert("You can compare up to 5 stocks at a time.");
            return;
        }
        setSelectedTickers([...selectedTickers, ticker]);
        setSearchTerm('');
    };

    const handleRemoveTicker = (ticker) => {
        setSelectedTickers(selectedTickers.filter(t => t !== ticker));
    };

    const selectedData = data.filter(d => selectedTickers.includes(d.ticker));

    // Prepare chart data: Align by "Days Since Start"
    let chartData = [];
    if (selectedData.length > 0) {
        const maxDays = Math.max(...selectedData.map(d => d.history.length));

        for (let i = 0; i < maxDays; i += 5) {
            const point = { day: i };
            selectedData.forEach(stock => {
                if (stock.history[i]) {
                    point[stock.ticker] = stock.history[i].multiple;
                }
            });
            chartData.push(point);
        }
    }

    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    return (
        <div className="glass-card p-8 rounded-2xl">
            <h3 className="font-bold text-xl text-white mb-6 tracking-wide">Stock Comparison Tool</h3>

            {/* Search/Add Bar */}
            <div className="relative mb-8">
                <div className="flex gap-2 mb-2">
                    <input
                        type="text"
                        placeholder="Type to add stock (e.g. AAPL)..."
                        className="glass bg-slate-900/40 border-white/10 rounded-xl px-6 py-3 w-full focus:outline-none focus:border-accent/50 text-white placeholder-slate-500 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Autocomplete Dropdown */}
                {searchTerm && (
                    <div className="absolute z-10 w-full glass bg-slate-900/90 border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto mt-2 backdrop-blur-xl">
                        {data
                            .filter(d => d.ticker.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedTickers.includes(d.ticker))
                            .map(d => (
                                <div
                                    key={d.ticker}
                                    className="px-6 py-3 hover:bg-white/10 cursor-pointer flex justify-between items-center border-b border-white/5 last:border-0"
                                    onClick={() => handleAddTicker(d.ticker)}
                                >
                                    <span className="font-bold text-white">{d.ticker}</span>
                                    <span className="text-xs text-slate-400">{d.sector}</span>
                                </div>
                            ))}
                    </div>
                )}
            </div>

            {/* Selected Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
                {selectedTickers.map((ticker, idx) => (
                    <div key={ticker} className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-white/10 shadow-sm">
                        <span className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: colors[idx], color: colors[idx] }}></span>
                        <span className="font-bold text-sm text-slate-200">{ticker}</span>
                        <button onClick={() => handleRemoveTicker(ticker)} className="text-slate-400 hover:text-white transition-colors">
                            <X size={14} />
                        </button>
                    </div>
                ))}
                {selectedTickers.length === 0 && (
                    <p className="text-slate-500 text-sm italic">Select stocks to compare their journey...</p>
                )}
            </div>

            {selectedData.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Comparison Table */}
                    <div className="lg:col-span-1 overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="text-slate-400 border-b border-white/10">
                                    <th className="py-3 font-medium uppercase tracking-wider text-xs">Metric</th>
                                    {selectedData.map(d => <th key={d.ticker} className="py-3 px-2 font-medium">{d.ticker}</th>)}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="py-4 text-slate-400">Total Return</td>
                                    {selectedData.map(d => (
                                        <td key={d.ticker} className={`font-bold ${d.returnMultiple >= 100 ? 'text-emerald-400' : 'text-white'}`}>
                                            {d.returnMultiple.toFixed(1)}x
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-4 text-slate-400">CAGR</td>
                                    {selectedData.map(d => (
                                        <td key={d.ticker} className="text-amber-400 font-bold">
                                            {(d.cagr * 100).toFixed(1)}%
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-4 text-slate-400">Max Drawdown</td>
                                    {selectedData.map(d => (
                                        <td key={d.ticker} className="text-danger">
                                            {(d.maxDrawdown * 100).toFixed(1)}%
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-4 text-slate-400">Years Active</td>
                                    {selectedData.map(d => (
                                        <td key={d.ticker} className="text-blue-400">
                                            {d.years.toFixed(1)}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Comparison Chart */}
                    <div className="lg:col-span-2 h-[300px]">
                        <p className="text-xs text-slate-400 mb-2 text-center">Return Multiple vs. Days Since Start</p>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                <XAxis
                                    dataKey="day"
                                    stroke="#64748b"
                                    label={{ value: 'Days Since Start', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 12 }}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                    labelStyle={{ color: '#94a3b8' }}
                                />
                                <Legend />
                                {selectedData.map((d, idx) => (
                                    <Line
                                        key={d.ticker}
                                        type="monotone"
                                        dataKey={d.ticker}
                                        stroke={colors[idx]}
                                        strokeWidth={2}
                                        dot={false}
                                        activeDot={{ r: 6 }}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComparisonTool;
