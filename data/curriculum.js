// data/curriculum.js — AP Calculus AB/BC Curriculum
// Lessons marked bc:true are BC-only; all others are AB+BC

export const UNITS = [
  {
    id: 1,
    title: 'Limits & Continuity',
    description: 'Intuitive and formal definitions of limits, one-sided limits, continuity, and the Intermediate Value Theorem.',
    icon: 'lim',
    lessons: [
      { id: '1.1', title: 'Introducing Limits',              desc: 'Intuitive idea of a limit; estimating from tables and graphs.' },
      { id: '1.2', title: 'Evaluating Limits Algebraically', desc: 'Direct substitution, factoring, rationalization, special trig limits.' },
      { id: '1.3', title: 'One-Sided Limits',                desc: 'Left- and right-hand limits; when the limit exists vs. does not exist.' },
      { id: '1.4', title: 'Limits at Infinity',              desc: 'End behavior of functions; horizontal asymptotes via limits.' },
      { id: '1.5', title: 'Continuity',                      desc: 'Definition of continuity, types of discontinuity, removable vs. non-removable.' },
      { id: '1.6', title: 'Intermediate Value Theorem',      desc: 'Statement, proof sketch, and applications of the IVT.' },
      { id: '1.7', title: 'Squeeze Theorem',                 desc: 'Squeeze theorem and key limits: sin(x)/x and (1−cos x)/x.' },
    ]
  },
  {
    id: 2,
    title: 'Differentiation: Fundamentals',
    description: 'The derivative as a limit, basic differentiation rules, and derivatives of elementary functions.',
    icon: "f'",
    lessons: [
      { id: '2.1', title: 'The Derivative at a Point',     desc: 'Limit definition of the derivative; tangent line slope; differentiability.' },
      { id: '2.2', title: 'The Derivative as a Function',  desc: 'f\'(x) as a function; graphical relationships between f and f\'.' },
      { id: '2.3', title: 'Power & Constant Rules',        desc: 'Power rule, constant rule, constant multiple rule, sum/difference rule.' },
      { id: '2.4', title: 'Product & Quotient Rules',      desc: 'Deriving and applying product and quotient rules.' },
      { id: '2.5', title: 'Derivatives of Trig Functions', desc: 'Derivatives of sin, cos, tan, cot, sec, csc and their applications.' },
      { id: '2.6', title: 'Derivatives of Exp & Log',      desc: 'Derivatives of e^x, a^x, ln x, log_a x.' },
    ]
  },
  {
    id: 3,
    title: 'Differentiation: Composite & Implicit',
    description: 'Chain rule, implicit differentiation, and derivatives of inverse and inverse-trig functions.',
    icon: '∘',
    lessons: [
      { id: '3.1', title: 'The Chain Rule',                       desc: 'Differentiating composite functions; chain rule with multiple layers.' },
      { id: '3.2', title: 'Implicit Differentiation',             desc: 'Finding dy/dx for implicitly defined curves.' },
      { id: '3.3', title: 'Derivatives of Inverse Functions',     desc: 'Inverse function derivative theorem and applications.' },
      { id: '3.4', title: 'Derivatives of Inverse Trig',         desc: 'Derivatives of arcsin, arccos, arctan and their chain rule variants.' },
      { id: '3.5', title: 'Higher-Order Derivatives',             desc: 'Second and higher derivatives; notation; acceleration as second derivative.' },
    ]
  },
  {
    id: 4,
    title: 'Contextual Applications of Differentiation',
    description: 'Rates of change in applied contexts: motion, related rates, linear approximation, and L\'Hôpital\'s Rule.',
    icon: 'Δ',
    lessons: [
      { id: '4.1', title: 'Rates of Change in Context',  desc: 'Interpreting derivatives as rates; velocity, speed, and acceleration.' },
      { id: '4.2', title: 'Related Rates',               desc: 'Setting up and solving related rates problems using implicit differentiation.' },
      { id: '4.3', title: 'Linear Approximation',        desc: 'Tangent line approximation; linearization of a function near a point.' },
      { id: '4.4', title: "L'Hôpital's Rule",            desc: 'Evaluating indeterminate forms 0/0 and ∞/∞ using derivatives.' },
      { id: '4.5', title: 'Mean Value Theorem',          desc: 'Statement, geometric meaning, and consequences of the MVT.' },
    ]
  },
  {
    id: 5,
    title: 'Analytical Applications of Differentiation',
    description: 'Using derivatives to analyze function behavior: extrema, concavity, curve sketching, and optimization.',
    icon: 'max',
    lessons: [
      { id: '5.1', title: 'Extreme Values',              desc: 'Absolute and local extrema; critical points; Extreme Value Theorem.' },
      { id: '5.2', title: 'Increasing & Decreasing',     desc: 'First Derivative Test; intervals of increase and decrease.' },
      { id: '5.3', title: 'Concavity & Inflection Points', desc: 'Second derivative and concavity; inflection points.' },
      { id: '5.4', title: 'Second Derivative Test',      desc: 'Classifying critical points using the second derivative.' },
      { id: '5.5', title: 'Curve Sketching',             desc: 'Combining f, f\', f\'\' to produce accurate sketches.' },
      { id: '5.6', title: 'Optimization Problems',       desc: 'Setting up and solving applied max/min problems.' },
    ]
  },
  {
    id: 6,
    title: 'Integration & Accumulation of Change',
    description: 'Antiderivatives, the definite integral, Fundamental Theorem of Calculus, and standard integration techniques.',
    icon: '∫',
    lessons: [
      { id: '6.1', title: 'Antiderivatives & Indefinite Integrals', desc: 'Antiderivative families; basic antiderivative rules.' },
      { id: '6.2', title: 'Riemann Sums',                           desc: 'Left, right, and midpoint sums; approximating area under a curve.' },
      { id: '6.3', title: 'The Definite Integral',                  desc: 'Definition as a limit of Riemann sums; properties of definite integrals.' },
      { id: '6.4', title: 'Fundamental Theorem of Calculus I',      desc: 'FTC Part 1: derivatives of accumulation functions.' },
      { id: '6.5', title: 'Fundamental Theorem of Calculus II',     desc: 'FTC Part 2: evaluating definite integrals via antiderivatives.' },
      { id: '6.6', title: 'u-Substitution',                         desc: 'Reversing the chain rule; substitution for indefinite and definite integrals.' },
      { id: '6.7', title: 'Integration by Parts',                   desc: 'Technique for products of functions; tabular method.', bc: true },
      { id: '6.8', title: 'Partial Fractions & Advanced Techniques', desc: 'Partial fraction decomposition; improper integrals.', bc: true },
    ]
  },
  {
    id: 7,
    title: 'Differential Equations',
    description: 'Separable differential equations, slope fields, Euler\'s method, and exponential models.',
    icon: 'dy/dx',
    lessons: [
      { id: '7.1', title: 'Slope Fields',                      desc: 'Sketching and interpreting slope fields for dy/dx = f(x, y).' },
      { id: '7.2', title: 'Separable Differential Equations',  desc: 'Solving separable DEs by separation of variables.' },
      { id: '7.3', title: 'Exponential Growth & Decay',        desc: 'Solving dy/dt = ky; doubling time and half-life applications.' },
      { id: '7.4', title: "Euler's Method",                    desc: 'Numerical approximation of solutions to DEs.', bc: true },
      { id: '7.5', title: 'Logistic Growth',                   desc: 'The logistic model; carrying capacity and inflection point.', bc: true },
    ]
  },
  {
    id: 8,
    title: 'Applications of Integration',
    description: 'Using definite integrals to find area, volume, arc length, and accumulated change.',
    icon: 'area',
    lessons: [
      { id: '8.1', title: 'Area Between Curves',               desc: 'Setting up integrals for area between two functions.' },
      { id: '8.2', title: 'Volumes: Disk & Washer Method',     desc: 'Solids of revolution using disk and washer cross-sections.' },
      { id: '8.3', title: 'Volumes: Shell Method',             desc: 'Cylindrical shell method for solids of revolution.', bc: true },
      { id: '8.4', title: 'Volumes by Cross-Section',          desc: 'Solids with known cross-sectional shapes.' },
      { id: '8.5', title: 'Average Value of a Function',       desc: 'Mean Value Theorem for Integrals; average value formula.' },
      { id: '8.6', title: 'Accumulation & Net Change',         desc: 'Interpreting definite integrals as net change and total accumulation.' },
    ]
  },
  {
    id: 9,
    title: 'Parametric, Polar & Vector-Valued Functions',
    description: 'BC topic: derivatives and integrals for parametric curves, polar graphs, and vector-valued functions.',
    icon: 'r,θ',
    bc: true,
    lessons: [
      { id: '9.1', title: 'Parametric Equations & Derivatives',   desc: 'dy/dx and d²y/dx² for parametric curves.', bc: true },
      { id: '9.2', title: 'Arc Length (Parametric & Cartesian)',   desc: 'Arc length formulas for parametric and Cartesian curves.', bc: true },
      { id: '9.3', title: 'Polar Coordinates & Graphs',            desc: 'Plotting and converting; roses, limaçons, cardioids.', bc: true },
      { id: '9.4', title: 'Area & Arc Length in Polar Form',       desc: 'Setting up polar area and arc length integrals.', bc: true },
      { id: '9.5', title: 'Vector-Valued Functions',               desc: 'Position, velocity, acceleration vectors; motion in a plane.', bc: true },
    ]
  },
  {
    id: 10,
    title: 'Infinite Sequences & Series',
    description: 'BC topic: convergence tests, power series, Taylor and Maclaurin series, and error bounds.',
    icon: 'Σ',
    bc: true,
    lessons: [
      { id: '10.1', title: 'Sequences & Convergence',          desc: 'Definition, limits of sequences, geometric and arithmetic sequences.', bc: true },
      { id: '10.2', title: 'Geometric & Telescoping Series',   desc: 'Geometric series sum formula; telescoping series.', bc: true },
      { id: '10.3', title: 'Divergence & Integral Tests',      desc: 'nth-term test for divergence; integral test for positive series.', bc: true },
      { id: '10.4', title: 'Comparison & Limit Comparison Tests', desc: 'Direct and limit comparison tests for series convergence.', bc: true },
      { id: '10.5', title: 'Ratio, Root & Alternating Series', desc: 'Ratio test, root test, alternating series test and error bound.', bc: true },
      { id: '10.6', title: 'Power Series & Radius of Convergence', desc: 'Power series, interval and radius of convergence.', bc: true },
      { id: '10.7', title: 'Taylor & Maclaurin Series',        desc: 'Generating and using Taylor/Maclaurin series; common series.', bc: true },
      { id: '10.8', title: 'Taylor Polynomial Error Bounds',   desc: 'Lagrange error bound; approximation accuracy.', bc: true },
    ]
  },
];

export const TOTAL_LESSONS = UNITS.reduce((sum, u) => sum + u.lessons.length, 0);
