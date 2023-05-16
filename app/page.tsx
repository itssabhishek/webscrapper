'use client';
import {useEffect, useRef, useState} from 'react';
import {scrapeWebsite} from "@/utils/scrapper";

export default function Home() {
const inputRef = useRef();
const [url,setUrl] = useState('https://www.udemy.com/')
  useEffect(() => {
    const handleScrape = async () => {
      const data = await scrapeWebsite(url);
      console.log(data);
    };

    handleScrape();
  }, [url]);

  return <form onSubmit={()=> setUrl(inputRef.current.value)}>
    <label>Enter your website:</label>
    <input type={"text"} ref={inputRef}/>
    <button type={'submit'}>Scrap</button>
  </form>;
}
