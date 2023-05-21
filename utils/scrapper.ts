import * as cheerio from 'cheerio';

export async function scrapeWebsite(query: string) {
  try {
    const response = await fetch(`https://www.google.com/search?q=${query}+course`);
    const html = await response.text();
    const $ = cheerio.load(html);
    const topLinks = $('.yuRUbf a');
    const links: string[] = [];
    let count:number = 0;

    topLinks.each((_, element) => {
      if (count < 20) {
        const value = $(element).attr('href');
        if (value) {
          links.push(value);
        }
        count++;
      }
    });

    return links;
  } catch (error) {
    console.error('Error scraping website:', error);
  }
}


export async function scrapeWithoutGoogle(query: string) {
  try {
    const response = await fetch(query);
    const html = await response.text();
    const $ = cheerio.load(html);
    return $.text()
  } catch (error) {
    console.error('Error scraping website:', error);
  }
}
