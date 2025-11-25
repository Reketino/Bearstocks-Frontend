"use client";
import { format } from 'date-fns';
import {useEffect, useRef, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function StockLiveChart({ ticker }) {
    const [data, setData] = useState ([]);
    const wsRef = useRef(null);
    
    const API_URL = "https://bearstocks-backend.onrender.com";

    useEffect(() => {
        fetch(`${API_URL}/history/${ticker}`)
        .then((res) => res.json())
        .then((history) => {
            const formatted = history.map((h) => ({
                time:h.timestamp,
                price: h.price,
            }));
            setData (formatted);
        });
    }, [ticker]);


    useEffect(()=> {
        wsRef.current = new WebSocket(`${API_URL.replace("https", "wss")}/ws`);

        wsRef.current.onmessage = (event) => {
            const json = JSON.parse (event.data);
            const price = json[ticker]?.price;

            if (!price) return;

            const newPoint = {
                time: new Date().toISOString(),
                price: price,
            };

            setData ((prev) => [...prev, newPoint].slice(-500));
        };

        return () => wsRef.current?.close();
    }, [ticker]);

  return (
    <main className='p-6 rounded-xl bg-neutral-900 text-white w-full h-[400px]'>
        <h2 className='text-2xl font-bold mb-4'>{ticker}-Live Chart</h2>


        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <XAxis 
                dataKey="time" 
                tickFormatter={(value) => format(new Date(value), "HH:mm:ss")}
                tick={{ fill: "#aaa", fontSize: 12 }}
                />
                <YAxis stroke="#ccc" />
                <Tooltip
                labelFormatter={(value) => 
                    format (new Date(value), "dd.MM.yyyy HH:mm:ss")
                }
                formatter={(price) => [`${price} kr`, "pris"]}
                contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    color: "#fff",
                }}
                />
                <Line
                type="monotone"
                dataKey="price"
                dot={false}
                stroke='#4ade80'
                strokeWidth={2}
                /> 
            </LineChart>
        </ResponsiveContainer>
    </main>
  );
}
