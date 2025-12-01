import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

const StockChart = ({ data, milestones }) => {
    if (!data || data.length === 0) return null;

    // Format date for axis
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.getFullYear();
    };

    // Custom Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-lg">
                    <p className="text-slate-400 text-sm">{label}</p>
                    <p className="text-white font-bold">
                        ${payload[0].value.toFixed(2)}
                        <span className="text-emerald-400 text-xs ml-2">
                            ({payload[0].payload.multiple.toFixed(1)}x)
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis
                        dataKey="date"
                        tickFormatter={formatDate}
                        stroke="#64748b"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        minTickGap={50}
                    />
                    <YAxis
                        stroke="#64748b"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        domain={['auto', 'auto']}
                        tickFormatter={(val) => `$${val}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                    />

                    {milestones && milestones.map((m, idx) => (
                        <ReferenceLine
                            key={idx}
                            x={m.date}
                            stroke="#10b981"
                            strokeDasharray="3 3"
                            label={{
                                value: `${m.multiple}x`,
                                fill: '#10b981',
                                fontSize: 10,
                                position: 'top'
                            }}
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StockChart;
