import { React, useEffect, useMemo, useState} from 'react';
import useWebSocket from './usewebsocket';

export default function LiveStocks() {
  const { connected, lastMsg } = useWebSocket("wss://bearstocks-backend.onrender.com/ws", {
    autoReconnect: true,
    reconnectInterval: 3000,
  }
);


  const [stocks, setStocks] = useState({});
  const prevRef = useMemo(() => ({}), []);

useEffect(() => {
  if (!lastMsg) return;
    
    try {
        const parsed = JSON.parse(lastMsg);


        for (const [ticker, v] of Object.entries(parsed)) {
            const previous = prevRef[ticker]?.price ?? v.price;
            prevRef[ticker] = { ...v, prevPrice: previous };
        }


        setStocks({ ...prevRef });
    } catch (err) {
        console.error("WS parsing error:", err);
    }
  }, [lastMsg]);


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


     <header className="col-span-full p-4 bg-white/5 rounded-2xl flex justify-between items-center">
     <div>
        <p className="text-xs opacity-70">WebSocket</p>
        <p className={`text-sm font-medium ${connected ? "text-green-300" : "text-red-400"}`}>
            {connected ? "BEARECTED" : "UNBEARECTED - attempting reconnection..."}
        </p>
     </div>

     <span className="text-sm opacity-60"> BearStocks · Live Feed🐻</span>
     </header>
    
    
    {Object.keys(stocks).length === 0 && (
        <p className="col-span-full text-center opacity-60 p-8">Waiting for data...</p>
    )}


    {Object.entries(stocks).map(([ticker, stock]) => {
        const prev = stock.prevPrice ?? stock.price;
        const diff = stock.price - prev;
        const isUp = diff > 0;
        const isSame = diff === 0;


        return (
            <article
            key={ticker}
            className="p-5 rounded-2xl bg-linear-to-br from-white/5 to-white/10 border border-white/10 shadow-md flex flex-col gap-4"
            >


            <header className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{stock.name}</h2>
                <span className="text-sm opacity-60">{ticker}</span>
                </header>    


                <section className="text-right">
                    <p className="text-3xl font-bold">
                        {stock.price.toFixed(2)} kr
                    </p>


                    <p
                    className={`text-sm mt-1 ${
                        isUp ? "text-green-300" : isSame ? "text-slate-300" : "text-red-300"
                    }`}
                    >
                        {isUp ? "▲" : isSame ? "•" : "▼"} {diff.toFixed(2)}
                    </p>
                </section>


               <footer className="flex justify-between text-xs opacity-60">
                <span>Realtime</span>
                <span>Volatility: dynamic</span>
                </footer> 
            </article>
        );
    })}
    </section>
  );
}
