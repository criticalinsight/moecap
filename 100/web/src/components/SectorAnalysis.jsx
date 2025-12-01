import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

const SectorAnalysis = ({ data }) => {
    if (!data || data.length === 0) return null;

    // Aggregate data by sector
    const sectorStats = data.reduce((acc, curr) => {
        const sector = curr.sector || 'Unknown';
        if (!acc[sector]) {
            acc[sector] = {
                name: sector,
                count: 0,
                totalReturn: 0,
                baggers: 0,
                fallen: 0
            };
        }
        acc[sector].count += 1;
        acc[sector].totalReturn += curr.returnMultiple;
        if (curr.returnMultiple >= 10) acc[sector].baggers += 1;
        if (curr.isFallen) acc[sector].fallen += 1;
        return acc;
    }, {});

    const chartData = Object.values(sectorStats)
        .map(s => ({
            ...s,
            avgReturn: s.totalReturn / s.count
        }))
        .sort((a, b) => b.avgReturn - a.avgReturn);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-lg">
                    <p className="text-white font-bold mb-2">{label}</p>
                    <p className="text-slate-400 text-sm">Avg Return: <span className="text-accent font-bold">{data.avgReturn.toFixed(1)}x</span></p>
                    <p className="text-slate-400 text-sm">Total Stocks: {data.count}</p>
                    <p className="text-slate-400 text-sm">Multibaggers: <span className="text-emerald-400">{data.baggers}</span></p>
                    <p className="text-slate-400 text-sm">Fallen Angels: <span className="text-danger">{data.fallen}</span></p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-secondary p-6 rounded-xl border border-slate-700 shadow-lg">
            <h3 className="font-bold text-lg text-white mb-6">Sector Performance (Avg Return)</h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                        <XAxis type="number" stroke="#64748b" />
                        <YAxis
                            dataKey="name"
                            type="category"
                            stroke="#64748b"
                            width={100}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="avgReturn" radius={[0, 4, 4, 0]}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.avgReturn > 20 ? '#10b981' : '#3b82f6'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SectorAnalysis;
