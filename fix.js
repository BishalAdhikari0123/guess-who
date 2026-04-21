const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

const regexUseEffect = /  useEffect\(\(\) => \{\s*const shuffled = \[\.\.\.heroes\]\.sort\(\(\) => 0\.5 - Math\.random\(\)\);\s*setDisplayedHeroes\(heroCount === 'all' \? shuffled : shuffled\.slice\(0, heroCount\)\);\s*\}, \[heroCount\]\);/;

content = content.replace(regexUseEffect, `  useEffect(() => {
    setDisplayedHeroes(heroCount === 'all' ? heroes : heroes.slice(0, heroCount));
  }, [heroCount]);`);

const regexButton = /\s*<button \s*className="px-6 py-3 rounded-lg border border-yellow-500\/50 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black transition-all hover:-translate-y-0\.5 shadow-\[0_0_25px_rgba\(217,119,6,0\.3\)\] hover:shadow-\[0_0_35px_rgba\(217,119,6,0\.6\)\] font-extrabold tracking-wider text-xs uppercase active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500\/50"\s*onClick=\{\(\) => \{\s*setSelected\(\[\]\);\s*setDisplayedHeroes\(\[\.\.\.heroes\]\.sort\(\(\) => 0\.5 - Math\.random\(\)\)\.slice\(0, heroCount === 'all' \? heroes\.length : heroCount\)\);\s*\}\}\s*>\s*Shuffle Board\s*<\/button>/g;

content = content.replace(regexButton, '');

fs.writeFileSync('src/app/page.tsx', content);
