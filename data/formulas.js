// data/formulas.js — AP Calculus AB/BC Formula Reference

export const FORMULAS = [
  // ── Unit 1: Limits & Continuity ──────────────────────────────────────────
  { unit: 'Unit 1', name: 'Limit Definition', formula: '\\lim_{x \\to a} f(x) = L', notes: 'L exists iff left-hand and right-hand limits both equal L.', tags: ['limit', 'definition'] },
  { unit: 'Unit 1', name: 'Squeeze Theorem', formula: 'g(x) \\leq f(x) \\leq h(x) \\text{ and } \\lim g = \\lim h = L \\Rightarrow \\lim f = L', notes: 'All three functions near x = a.', tags: ['squeeze', 'limit'] },
  { unit: 'Unit 1', name: 'Special Trig Limit', formula: '\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1', notes: 'x must be in radians. Also: lim(1−cos x)/x = 0.', tags: ['sine', 'trig', 'limit'] },
  { unit: 'Unit 1', name: 'Continuity at a Point', formula: 'f \\text{ continuous at } a \\iff \\lim_{x \\to a} f(x) = f(a)', notes: 'Requires: f(a) defined, limit exists, and they are equal.', tags: ['continuity', 'limit'] },

  // ── Unit 2: Differentiation Fundamentals ─────────────────────────────────
  { unit: 'Unit 2', name: 'Derivative (Limit Definition)', formula: "f'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}", notes: 'Also written as lim(x→a) [f(x)−f(a)]/(x−a).', tags: ['derivative', 'definition', 'limit'] },
  { unit: 'Unit 2', name: 'Power Rule', formula: '\\dfrac{d}{dx}[x^n] = nx^{n-1}', notes: 'Works for all real n.', tags: ['power rule', 'derivative'] },
  { unit: 'Unit 2', name: 'Product Rule', formula: "(fg)' = f'g + fg'", notes: 'Differentiate first × second + first × differentiate second.', tags: ['product rule', 'derivative'] },
  { unit: 'Unit 2', name: 'Quotient Rule', formula: "\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}", notes: 'Lo d-Hi minus Hi d-Lo over Lo squared.', tags: ['quotient rule', 'derivative'] },
  { unit: 'Unit 2', name: 'Derivatives of Trig', formula: "\\tfrac{d}{dx}\\sin x = \\cos x,\\quad \\tfrac{d}{dx}\\cos x = -\\sin x,\\quad \\tfrac{d}{dx}\\tan x = \\sec^2 x", notes: 'Also: d/dx(sec x) = sec x tan x, d/dx(csc x) = −csc x cot x, d/dx(cot x) = −csc²x.', tags: ['trig', 'derivative', 'sine', 'cosine', 'tangent'] },
  { unit: 'Unit 2', name: 'Derivative of e^x', formula: '\\dfrac{d}{dx}[e^x] = e^x', notes: 'The only function equal to its own derivative.', tags: ['exponential', 'derivative'] },
  { unit: 'Unit 2', name: 'Derivative of ln x', formula: '\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{x}', notes: 'Valid for x > 0. For |x|: d/dx[ln|x|] = 1/x.', tags: ['logarithm', 'derivative'] },
  { unit: 'Unit 2', name: 'Derivative of a^x', formula: '\\dfrac{d}{dx}[a^x] = a^x \\ln a', notes: 'General exponential base a > 0, a ≠ 1.', tags: ['exponential', 'derivative'] },

  // ── Unit 3: Chain Rule & Implicit ────────────────────────────────────────
  { unit: 'Unit 3', name: 'Chain Rule', formula: '\\dfrac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)', notes: 'Derivative of outer (evaluated at inner) times derivative of inner.', tags: ['chain rule', 'composite', 'derivative'] },
  { unit: 'Unit 3', name: 'Inverse Function Derivative', formula: "(f^{-1})'(a) = \\dfrac{1}{f'(f^{-1}(a))}", notes: 'Slope of inverse = reciprocal of slope of f at the reflected point.', tags: ['inverse', 'derivative'] },
  { unit: 'Unit 3', name: 'Derivatives of Inverse Trig', formula: '\\dfrac{d}{dx}[\\arcsin x] = \\dfrac{1}{\\sqrt{1-x^2}}, \\quad \\dfrac{d}{dx}[\\arctan x] = \\dfrac{1}{1+x^2}', notes: 'Also: d/dx[arccos x] = −1/√(1−x²), d/dx[arccot x] = −1/(1+x²).', tags: ['inverse trig', 'arcsin', 'arctan', 'derivative'] },

  // ── Unit 4: Contextual Applications ──────────────────────────────────────
  { unit: 'Unit 4', name: "L'Hôpital's Rule", formula: "\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = \\lim_{x \\to a} \\dfrac{f'(x)}{g'(x)}", notes: 'Apply when the limit gives 0/0 or ∞/∞.', tags: ["l'hopital", 'indeterminate', 'limit'] },
  { unit: 'Unit 4', name: 'Linear Approximation', formula: 'f(x) \\approx f(a) + f\'(a)(x - a)', notes: 'Also called the tangent-line approximation or linearization L(x).', tags: ['linearization', 'tangent', 'approximation'] },
  { unit: 'Unit 4', name: 'Mean Value Theorem', formula: "f'(c) = \\dfrac{f(b) - f(a)}{b - a} \\text{ for some } c \\in (a,b)", notes: 'Requires f continuous on [a,b] and differentiable on (a,b).', tags: ['MVT', 'mean value theorem'] },

  // ── Unit 5: Analytical Applications ──────────────────────────────────────
  { unit: 'Unit 5', name: 'Critical Points', formula: "f'(c) = 0 \\text{ or } f'(c) \\text{ undefined}", notes: 'Candidates for local extrema. Always check endpoints on closed intervals.', tags: ['critical point', 'extrema'] },
  { unit: 'Unit 5', name: 'First Derivative Test', formula: "f' > 0 \\Rightarrow \\text{increasing}; \\quad f' < 0 \\Rightarrow \\text{decreasing}", notes: 'Sign change of f\' at a critical point determines local max or min.', tags: ['first derivative test', 'increasing', 'decreasing'] },
  { unit: 'Unit 5', name: 'Concavity', formula: "f'' > 0 \\Rightarrow \\text{concave up}; \\quad f'' < 0 \\Rightarrow \\text{concave down}", notes: 'Inflection point: where f\'\' changes sign.', tags: ['concavity', 'inflection', 'second derivative'] },

  // ── Unit 6: Integration ───────────────────────────────────────────────────
  { unit: 'Unit 6', name: 'Power Rule (Integration)', formula: '\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)', notes: 'Indefinite integral; always add constant of integration C.', tags: ['power rule', 'integral', 'antiderivative'] },
  { unit: 'Unit 6', name: 'FTC Part 1', formula: '\\dfrac{d}{dx}\\int_a^x f(t)\\,dt = f(x)', notes: 'The accumulation function is an antiderivative of f.', tags: ['FTC', 'fundamental theorem'] },
  { unit: 'Unit 6', name: 'FTC Part 2', formula: '\\int_a^b f(x)\\,dx = F(b) - F(a)', notes: 'Where F is any antiderivative of f.', tags: ['FTC', 'fundamental theorem', 'definite integral'] },
  { unit: 'Unit 6', name: 'u-Substitution', formula: '\\int f(g(x))\\,g\'(x)\\,dx = \\int f(u)\\,du \\quad (u = g(x))', notes: 'Change variables; remember to substitute limits on definite integrals.', tags: ['substitution', 'u-sub', 'integral'] },
  { unit: 'Unit 6', name: 'Integration by Parts', formula: '\\int u\\,dv = uv - \\int v\\,du', notes: 'BC topic. Choose u using LIATE: Logarithm, Inverse trig, Algebraic, Trig, Exponential.', tags: ['integration by parts', 'integral', 'BC'] },
  { unit: 'Unit 6', name: 'Common Antiderivatives', formula: '\\int e^x\\,dx = e^x + C; \\quad \\int \\tfrac{1}{x}\\,dx = \\ln|x| + C; \\quad \\int \\cos x\\,dx = \\sin x + C', notes: 'Also: ∫sin x dx = −cos x + C, ∫sec²x dx = tan x + C.', tags: ['antiderivative', 'integral', 'exponential', 'trig'] },

  // ── Unit 7: Differential Equations ───────────────────────────────────────
  { unit: 'Unit 7', name: 'Exponential Growth/Decay', formula: '\\dfrac{dy}{dt} = ky \\implies y = y_0 e^{kt}', notes: 'k > 0: growth; k < 0: decay. y₀ is initial value.', tags: ['differential equation', 'exponential', 'growth', 'decay'] },
  { unit: 'Unit 7', name: 'Logistic Growth', formula: '\\dfrac{dP}{dt} = kP\\!\\left(1 - \\dfrac{P}{M}\\right)', notes: 'BC topic. M = carrying capacity; fastest growth at P = M/2.', tags: ['logistic', 'differential equation', 'BC'] },

  // ── Unit 8: Applications of Integration ──────────────────────────────────
  { unit: 'Unit 8', name: 'Area Between Curves', formula: 'A = \\int_a^b [f(x) - g(x)]\\,dx \\quad (f \\geq g)', notes: 'May need to split at intersection points.', tags: ['area', 'integral', 'between curves'] },
  { unit: 'Unit 8', name: 'Average Value', formula: 'f_{\\text{avg}} = \\dfrac{1}{b-a}\\int_a^b f(x)\\,dx', notes: 'Mean Value Theorem for Integrals guarantees f(c) = f_avg for some c in (a,b).', tags: ['average value', 'integral'] },
  { unit: 'Unit 8', name: 'Volume: Disk Method', formula: 'V = \\pi\\int_a^b [f(x)]^2\\,dx', notes: 'Rotation about the x-axis. For y-axis, integrate in y.', tags: ['volume', 'disk', 'solid of revolution'] },
  { unit: 'Unit 8', name: 'Volume: Washer Method', formula: 'V = \\pi\\int_a^b \\bigl([f(x)]^2 - [g(x)]^2\\bigr)\\,dx', notes: 'Outer radius f(x), inner radius g(x); rotation about x-axis.', tags: ['volume', 'washer', 'solid of revolution'] },

  // ── Unit 9: Parametric & Polar (BC) ──────────────────────────────────────
  { unit: 'Unit 9', name: 'Parametric Derivative', formula: '\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}', notes: 'BC. Second derivative: d²y/dx² = (d/dt[dy/dx]) / (dx/dt).', tags: ['parametric', 'derivative', 'BC'] },
  { unit: 'Unit 9', name: 'Arc Length (Parametric)', formula: 'L = \\int_a^b \\sqrt{\\left(\\tfrac{dx}{dt}\\right)^2 + \\left(\\tfrac{dy}{dt}\\right)^2}\\,dt', notes: 'BC. For Cartesian: L = ∫√(1 + [f\'(x)]²) dx.', tags: ['arc length', 'parametric', 'BC'] },
  { unit: 'Unit 9', name: 'Polar Area', formula: 'A = \\dfrac{1}{2}\\int_\\alpha^\\beta [r(\\theta)]^2\\,d\\theta', notes: 'BC. For area between curves: ½∫(r₁² − r₂²)dθ.', tags: ['polar', 'area', 'BC'] },

  // ── Unit 10: Series (BC) ──────────────────────────────────────────────────
  { unit: 'Unit 10', name: 'Geometric Series', formula: '\\sum_{n=0}^{\\infty} ar^n = \\dfrac{a}{1-r} \\quad (|r| < 1)', notes: 'BC. Diverges if |r| ≥ 1.', tags: ['geometric series', 'BC'] },
  { unit: 'Unit 10', name: 'nth-Term Test', formula: '\\text{If } \\lim_{n\\to\\infty} a_n \\neq 0, \\text{ the series } \\sum a_n \\text{ diverges}', notes: 'BC. If lim = 0, the test is inconclusive — series may still diverge.', tags: ['nth term test', 'series', 'BC'] },
  { unit: 'Unit 10', name: 'Ratio Test', formula: 'L = \\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|: \\; L<1 \\Rightarrow \\text{converges}', notes: 'BC. L > 1 diverges; L = 1 inconclusive.', tags: ['ratio test', 'series', 'BC'] },
  { unit: 'Unit 10', name: 'Taylor Series', formula: 'f(x) = \\sum_{n=0}^{\\infty} \\dfrac{f^{(n)}(a)}{n!}(x-a)^n', notes: 'BC. Maclaurin series: a = 0. Common: e^x, sin x, cos x, 1/(1−x).', tags: ['taylor', 'maclaurin', 'series', 'BC'] },
  { unit: 'Unit 10', name: 'Lagrange Error Bound', formula: '|R_n(x)| \\leq \\dfrac{M|x-a|^{n+1}}{(n+1)!}', notes: 'BC. M is max of |f^(n+1)| on the interval between a and x.', tags: ['lagrange', 'error bound', 'taylor', 'BC'] },
  { unit: 'Unit 10', name: 'Common Maclaurin Series', formula: 'e^x = \\sum_{n=0}^{\\infty}\\dfrac{x^n}{n!}, \\quad \\sin x = \\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}', notes: 'BC. Also: cos x = Σ(−1)ⁿx²ⁿ/(2n)!, 1/(1−x) = Σxⁿ (|x|<1).', tags: ['maclaurin', 'series', 'BC', 'exponential', 'sine'] },
];
