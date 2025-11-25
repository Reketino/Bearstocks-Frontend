"use client";
import { useState} from 'react'
import NeonH1 from '@/components/neonh1';
import LiveStocks from '@/components/livestocks';
import StockLiveChart from '@/components/stocklivechart';

export default function Page() {
 const tickers = ["BRR", "REKE", "BGI", "BEM", "REG", "REP"];
 const [activeTicker, setActiveTicker] = useState("BRR");

  return (
    <main className='min-h-screen bg-[#05060a] text-white p-6 flex flex-col gap-8 items-center'>
      <NeonH1 text="BEARSTOCKS" />
      <p className='opacity-70 text-sm'>Realtime stockfeed hustling stocks from bearstocks-backend.onrender.com</p>


      <section className='w-full max-w-6xl'>
        <LiveStocks />
      </section>

    <section className='flex gap-3 mt-4'>
      {tickers.map((t) => (
        <button
        key={t}
        onClick={() => setActiveTicker(t)}
        className={`
          px-4 py-2 rounded-lg transition
          ${activeTicker === t
            ? "bg-green-500 text-black font-bold"
            :"bg-neutral-800 hover:bg-neutral-700"}
          `}
          >
            {t}
          </button>
      ))}
    </section>


    <section className='w-full max-w-6xl'>
      <StockLiveChart ticker={activeTicker} />
    </section>
    </main>
  );
}
