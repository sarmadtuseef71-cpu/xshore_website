const fs = require('fs');
const svg = fs.readFileSync('public/images/logo/xshore_new_logo.svg', 'utf8');
const paths = [...svg.matchAll(/d="([^"]+)"/g)].map(m => m[1]);
paths.forEach((p, i) => {
  const coords = [...p.matchAll(/-?\d+\.?\d*/g)].map(m => parseFloat(m[0]));
  const xs = coords.filter((_, j) => j % 2 === 0);
  const ys = coords.filter((_, j) => j % 2 === 1);
  if(xs.length){
    console.log('Path', i, 'X:', Math.min(...xs), '-', Math.max(...xs), 'Y:', Math.min(...ys), '-', Math.max(...ys));
  }
});

const texts = [...svg.matchAll(/<text[^>]*x="([^"]+)"[^>]*y="([^"]+)"[^>]*>([^<]+)<\/text>/g)];
texts.forEach((m, i) => {
  console.log('Text', i, 'X:', m[1], 'Y:', m[2], 'Content:', m[3]);
});
