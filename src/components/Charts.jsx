import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#00C49F', '#FF8042'];

function Charts({ transactions }) {
    const income = transactions
        .filter((t) => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);

    const data = [
        { name: 'income', value: income },
        { name: 'expense', value: expense }
    ];

    return (
        <div className="chart-container">
            <h2> Income vs Expense </h2>
            <PieChart width={300} height={250}>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRaidus={80} fill="#8884d8" label>
                    {data.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}

export default Charts;
