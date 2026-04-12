# AP Calculus AB/BC Interactive Learning

An interactive, self-paced AP Calculus AB/BC learning site with 10 units and 61 lessons. Built with vanilla JavaScript, KaTeX for math rendering, and no external dependencies beyond KaTeX.

**Live site:** https://lhp620.github.io/Calculus/

**Offline use:** download `dist-web/index.html` and open in any browser — no internet or server required.

---

## Features

- **61 lessons** across 10 units covering the full AP Calculus AB/BC curriculum
- **BC-only lessons clearly labeled** with pink "BC" badges throughout
- **Three-tab lesson format:** Learn → Examples → Practice
- **KaTeX math rendering** for all formulas and equations
- **Auto-graded practice problems** — multiple choice and fill-in-the-blank with instant feedback
- **Progress tracking** saved in browser localStorage (streak, mastery status per lesson)
- **Formula reference page** with search across 35 formulas
- **Function grapher** — interactive canvas-based plotter
- **Single-file build** — the entire site bundles into one self-contained `dist-web/index.html` (~852 KB)

---

## Curriculum

| Unit | Title | AB/BC | Lessons |
|------|-------|-------|---------|
| 1 | Limits & Continuity | AB + BC | 7 |
| 2 | Differentiation: Fundamentals | AB + BC | 6 |
| 3 | Differentiation: Composite & Implicit | AB + BC | 5 |
| 4 | Contextual Applications of Differentiation | AB + BC | 5 |
| 5 | Analytical Applications of Differentiation | AB + BC | 6 |
| 6 | Integration & Accumulation of Change | AB + BC | 8 |
| 7 | Differential Equations | AB + BC | 5 |
| 8 | Applications of Integration | AB + BC | 6 |
| 9 | Parametric, Polar & Vector-Valued Functions | **BC only** | 5 |
| 10 | Infinite Sequences & Series | **BC only** | 8 |

Units 9–10 are BC-only. Within Units 6–8, individual BC-only lessons are also labeled.

---

## Project Structure

```
Calculus/
├── app.js                  # Main SPA — routing, progress, BC badges, rendering
├── index.html              # HTML shell (dev / GitHub Pages)
├── index.css               # All styles
├── build-web.mjs           # Build script → dist-web/index.html
├── components/
│   ├── header.js           # Site header & progress ring
│   ├── quiz.js             # Practice quiz engine
│   ├── math-renderer.js    # KaTeX auto-render wrapper
│   └── grapher.js          # Canvas function grapher
├── data/
│   ├── curriculum.js       # Unit & lesson registry (with bc: true flags)
│   ├── formulas.js         # Formula reference data
│   └── lessons/
│       ├── unit1.js        # Lesson content (learn, examples, practice)
│       └── ...             # unit2.js through unit10.js
└── dist-web/
    └── index.html          # Bundled single-file output (offline use)
```

---

## Getting Started

### Open directly (online)
Visit **https://lhp620.github.io/Calculus/**

### Open offline
Download `dist-web/index.html` and open it in any browser.

### Build from source
```bash
npm install
node build-web.mjs
# Output: dist-web/index.html
```

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Language | Vanilla JavaScript (ES modules) |
| Math | [KaTeX](https://katex.org/) 0.16 |
| Routing | Hash-based SPA (`#home`, `#unit/1`, `#lesson/1.1`) |
| Storage | `localStorage` (no backend needed) |
| Build | Custom Node.js bundler (`build-web.mjs`) |
| Styling | Plain CSS with CSS custom properties |
