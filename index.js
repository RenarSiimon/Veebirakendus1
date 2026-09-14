import fs from 'fs';

let text = fs.readFileSync('index.js', 'utf-8');
console.log(text);