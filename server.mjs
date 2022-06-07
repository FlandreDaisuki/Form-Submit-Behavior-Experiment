import express from 'express';
import { readFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:false}));

app.get('/server', async (req, res) => {
  const serverSource = await readFile(`${__dirname}/server.mjs`, 'utf8');
  res.send(`<pre>${serverSource}</pre>`);
})

app.get(['/'], async(req, res) => {
  res.sendFile(`${__dirname}/index.html`);
})

app.get('/race', async(req, res) => {
  const t = Number(req.query.t)
  let html = await readFile(`${__dirname}/race.html`, 'utf8');
  if(Number.isSafeInteger(t)) {
    html = html.replace(/DELAY_IN_MS = 0/, `DELAY_IN_MS = ${t}`)
  }
  res.send(html);
})

app.post('*', async(req, res) => {
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
