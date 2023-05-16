import * as cheerio from 'cheerio';

export async function scrapeWebsite(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    // Use cheerio to extract data from the HTML
    // Example:
    const title = $('body');

    return { title };
  } catch (error) {
    console.error('Error scraping website:', error);
  }
}
