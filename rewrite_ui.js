const fs = require('fs');

const code = fs.readFileSync('src/app/page.tsx', 'utf8');
const messageIndex = code.indexOf('return (');

if (messageIndex === -1) {
  console.log('Could not find return block');
  process.exit(1);
}

const part1 = code.substring(0, messageIndex);

const newRender = eturn (
    <main className="min-h-screen bg-[#0a0a14] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-black text-slate-100 font-sans selection:bg-yellow-500/30">
      {/* Sticky Header with Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5 shadow-2xl mb-10">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(252,211,77,0.3)] m-0">
              Guess The Hero
            </h1>
            <p className="text-slate-400 text-sm mt-1.5 font-medium tracking-wide uppercase">Eliminate the board</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              className="px-6 py-2.5 rounded-lg border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 text-white transition-all shadow-lg hover:shadow-slate-700/50 font-semibold text-sm backdrop-blur-sm active:scale-95"
              onClick={() => setSelected([])}
            >
              Reset Clicks
            </button>
            <button 
              className="px-6 py-2.5 rounded-lg border border-yellow-500/50 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black transition-all shadow-[0_0_15px_rgba(217,119,6,0.4)] hover:shadow-[0_0_25px_rgba(217,119,6,0.6)] font-extrabold text-sm active:scale-95"
              onClick={() => {
                setSelected([]);
                const shuffled = [...heroes].sort(() => 0.5 - Math.random());
                setDisplayedHeroes(shuffled.slice(0, 50));
              }}
            >
              Shuffle Board
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col items-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-5 w-full">
          {displayedHeroes.map((hero) => {
            const isSelected = selected.includes(hero.name);
            return (
              <div 
                key={hero.name}
                onClick={() => toggleSelection(hero.name)}
                className={\group relative cursor-pointer transition-all duration-300 rounded-xl overflow-hidden shadow-xl aspect-[3/4] flex flex-col bg-slate-900 \\}
              >
                {/* Image Section */}
                <div className="w-full h-full relative overflow-hidden bg-black flex-1">
                  <img 
                    src={hero.image} 
                    alt={hero.name} 
                    className={\w-full h-full object-cover transition-transform duration-500 \\}
                    loading="lazy"
                  />
                  {/* Subtle vignette gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Name Label */}
                <div className="absolute inset-x-0 bottom-0 pb-3 pt-6 px-1 text-center pointer-events-none">
                  <span className="font-bold text-[13px] sm:text-sm tracking-widest text-[#f8fafc] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                    {hero.name}
                  </span>
                </div>

                {/* Red X Cross Out Overlay */}
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-screen">
                     <span className="text-red-500 text-8xl font-black drop-shadow-[0_0_20px_rgba(220,38,38,1)]">-</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

fs.writeFileSync('src/app/page.tsx', part1 + newRender + '\n}\n');
console.log('done');
