const fs = require('fs');

let svg = fs.readFileSync('public/images/logo/xshore_new_logo.svg', 'utf8');

// 1. Update viewBox
svg = svg.replace(/viewBox="0 0 1024 1024"/, 'viewBox="110 220 850 460"');

// 2. Fix text fill and spelling
svg = svg.replace(/fill:\s*rgb\(51,\s*51,\s*51\)/g, 'fill: #FFFFFF');
svg = svg.replace(/stroke:\s*rgb\(0,\s*0,\s*0\)/g, 'stroke: none');
svg = svg.replace('Eqiupment', 'Equipment');

// 3. Fix path colors
svg = svg.replace(/<path[^>]+d="([^"]+)"[^>]*>/g, (match, d) => {
    // Find all Y coordinates
    const coords = [...d.matchAll(/-?\d+\.?\d*/g)].map(m => parseFloat(m[0]));
    const ys = coords.filter((_, j) => j % 2 === 1);
    if (ys.length === 0) return match;
    const maxY = Math.max(...ys);

    let newFill = '#FFFFFF';
    if (maxY <= 510) {
        newFill = '#C8892A';
    }

    // replace fill attribute
    let newMatch = match;
    if (newMatch.includes('fill=')) {
        newMatch = newMatch.replace(/fill="[^"]+"/, `fill="${newFill}"`);
    } else if (newMatch.includes('style=')) {
        newMatch = newMatch.replace(/style="([^"]+)"/, (s, styleStr) => {
            return `style="${styleStr.replace(/fill:\s*[^;]+;?/, `fill: ${newFill};`)}"`;
        });
    } else {
        newMatch = newMatch.replace('<path ', `<path fill="${newFill}" `);
    }
    
    // Also remove opacity="1.#FFFFFF" if it exists from previous bad replace
    newMatch = newMatch.replace(/opacity="1\.[^"]+"/, 'opacity="1.0"');

    return newMatch;
});

fs.writeFileSync('public/images/logo/xshore_new_logo.svg', svg);
console.log("SVG Updated successfully.");
