/**
 * Run this with node:
 * npx ts-node index.ts
 *
 * To export the output to a file:
 * npx ts-node index.ts > output.html
 */
const fetch = require('node-fetch');
import { FetchColruytClient } from './fetch-colruyt';

const client = new FetchColruytClient(fetch);

client.run('https://www.retaildetail.be/nl/news/food/lidl-een-sterker-merk-dan-aldi')
  .then((text) => {
    console.log(text);
  });
