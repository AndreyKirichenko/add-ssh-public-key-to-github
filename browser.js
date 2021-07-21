import puppeteer from 'puppeteer-extra';
import StealthPlugin from'puppeteer-extra-plugin-stealth';

const isDev = process.env.NODE_ENV === 'development';
const ARGS = ['--window-size=1280,800', '--disable-features=site-per-process'];

puppeteer.use(StealthPlugin());

const browser = puppeteer.launch({
  args: ARGS,
  headless: !isDev,
});

export default browser;
