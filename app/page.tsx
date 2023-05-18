'use client';
import React, { useRef, } from 'react';
import { scrapeWebsite } from '@/utils/scrapper';

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleScrape = async () => {
    const links = await scrapeWebsite(inputRef.current.value);
    console.log(links);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleScrape();
  };

  return (
      <div className="w-3/5 mx-auto ">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
              Query
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="query" type="text" placeholder="Query" ref={inputRef}/>
          </div>

          <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
        Scrape
            </button>
          </div>
        </form>
      </div>
  );
}
