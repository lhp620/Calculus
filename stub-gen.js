// stub-gen.js — generates placeholder lesson files from curriculum
const fs = require('fs');
const code = fs.readFileSync('data/curriculum.js', 'utf8');

// Extract lesson metadata
const titleRe = /id:\s*'(\d+\.\d+)',\s*title:\s*'([^']+)'/g;
const descRe  = /id:\s*'(\d+\.\d+)',\s*title:\s*'[^']+',\s*desc:\s*'([^']+)'/g;

const titles = {}, descs = {};
for (const m of code.matchAll(titleRe)) titles[m[1]] = m[2];
for (const m of code.matchAll(descRe))  descs[m[1]]  = m[2];

// Group by unit
const units = {};
for (const id of Object.keys(titles)) {
  const uid = id.split('.')[0];
  if (!units[uid]) units[uid] = [];
  units[uid].push(id);
}

for (const [uid, lessons] of Object.entries(units)) {
  const parts = lessons.map(lid => {
    const title = titles[lid] || lid;
    const desc  = (descs[lid] || '').replace(/'/g, "\\'");
    return `  {\n    id: '${lid}',\n    learn: '<div class="concept-card"><h2>${title}</h2><p>${desc}</p><p style="color:var(--color-text-muted)">Full lesson content coming soon.</p></div>',\n    examples: [],\n    practice: []\n  }`;
  });
  const content = `// data/lessons/unit${uid}.js\nexport const lessons = [\n${parts.join(',\n')}\n];\n`;
  fs.writeFileSync(`data/lessons/unit${uid}.js`, content);
  console.log(`Wrote unit${uid}.js (${lessons.length} stubs)`);
}
