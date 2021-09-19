import { createClient } from 'microcms-js-sdk';

console.log('===')
console.log(createClient)
console.log(process.env.API_KEY)
console.log('===')

export const client = createClient({
  serviceDomain: 'famisto',
  apiKey: process.env.API_KEY,
});
