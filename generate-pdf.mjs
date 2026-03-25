import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'wireframe-voces-ai.html');
const pdfPath = path.join(__dirname, 'wireframe-voces-ai.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.pdf({
  path: pdfPath,
  format: 'A4',
  margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
  printBackground: true,
});
await browser.close();
console.log(`PDF generado: ${pdfPath}`);
