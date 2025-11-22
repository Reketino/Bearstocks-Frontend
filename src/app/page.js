"use client";
import React from 'react'
import NeonH1 from '@/components/neonh1';
import LiveStocks from '@/components/livestocks';

export default function Page() {
  return (
    <main className='min-h-screen bg-[#05060a] text-white p-6 flex flex-col gap-8 items-center'>
      <NeonH1 text="BEARSTOCKS" />
      <p className='opacity-70 text-sm'>Realtime stockfeed hustling stocks from bearstocks-backend.onrender.com</p>


      <section className='w-full max-w-6xl'>
        <LiveStocks />
      </section>
    </main>
  );
}
