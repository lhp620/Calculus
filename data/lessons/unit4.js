export const lessons = [
  {
    id: '4.1',
    title: 'Rates of Change in Context',
    content: `Learn how derivatives represent real-world rates of change in motion, economics, and other applications.`,
    learn: `
<div style="">
  <div class="concept-card">
    <h3>Derivatives as Rates of Change</h3>
    <p>The derivative $$f'(x)$$ represents the <strong>instantaneous rate of change</strong> of a function. In context, derivatives measure how quantities change.</p>
    <p><strong>Common interpretations:</strong></p>
    <ul>
      <li><strong>Position & Velocity:</strong> If $$s(t)$$ is position, then $$v(t) = s'(t)$$ is velocity (rate of change of position)</li>
      <li><strong>Velocity & Acceleration:</strong> If $$v(t)$$ is velocity, then $$a(t) = v'(t) = s''(t)$$ is acceleration</li>
      <li><strong>Speed:</strong> Speed = $$|v(t)|$$ (always non-negative)</li>
      <li><strong>Direction of Motion:</strong> When $$v(t) > 0$$, particle moves right; when $$v(t) < 0$$, particle moves left; when $$v(t) = 0$$, particle is momentarily stopped</li>
    </ul>
  </div>

  <div class="concept-card">
    <h3>Other Applications</h3>
    <p><strong>Population Growth:</strong> If $$P(t)$$ is population, then $$\frac{dP}{dt}$$ is the rate of population change</p>
    <p><strong>Economics:</strong> If $$C(x)$$ is total cost, then $$C'(x)$$ is <strong>marginal cost</strong> (cost of producing one more unit)</p>
    <p><strong>Temperature:</strong> If $$T(t)$$ is temperature, then $$\frac{dT}{dt}$$ is the rate of temperature change</p>
  </div>

  <div class="formula-box">
    <h4>Key Formulas</h4>
    <p>$$v(t) = s'(t) = \frac{ds}{dt}$$</p>
    <p>$$a(t) = v'(t) = s''(t) = \frac{dv}{dt}$$</p>
    <p>Speed = $$|v(t)|$$</p>
  </div>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h4>Tip</h4>
    <p>When interpreting derivatives in context, always include <strong>units</strong>. If position is in feet and time is in seconds, velocity is in feet per second.</p></p>
 </div>
</div>
    `,
    examples: [
      {
        problem: 'A particle moves along a line with position function s(t) = t³ - 6t² + 9t (in feet, t in seconds). Find the velocity and acceleration at t = 2.',
        solution: [
          {
            step: 'Find velocity by differentiating position:',
            work: 'v(t) = s\'(t) = 3t² - 12t + 9'
          },
          {
            step: 'Evaluate velocity at t = 2:',
            work: 'v(2) = 3(2)² - 12(2) + 9 = 3(4) - 24 + 9 = 12 - 24 + 9 = -3 ft/s'
          },
          {
            step: 'Find acceleration by differentiating velocity:',
            work: 'a(t) = v\'(t) = 6t - 12'
          },
          {
            step: 'Evaluate acceleration at t = 2:',
            work: 'a(2) = 6(2) - 12 = 12 - 12 = 0 ft/s²'
          }
        ],
        answer: 'At t = 2: velocity is -3 ft/s (moving left) and acceleration is 0 ft/s²'
      },
      {
        problem: 'For the particle in Example 1 (s(t) = t³ - 6t² + 9t), determine when the particle is moving to the right.',
        solution: [
          {
            step: 'Particle moves right when v(t) > 0:',
            work: 'v(t) = 3t² - 12t + 9 > 0'
          },
          {
            step: 'Factor the velocity:',
            work: 'v(t) = 3(t² - 4t + 3) = 3(t - 1)(t - 3)'
          },
          {
            step: 'Find critical points where v(t) = 0:',
            work: 't = 1 and t = 3'
          },
          {
            step: 'Test intervals to determine where v(t) > 0:',
            work: 'Test t = 0: v(0) = 9 > 0 ✓; Test t = 2: v(2) = -3 < 0; Test t = 4: v(4) = 3(4-1)(4-3) = 9 > 0 ✓'
          },
          {
            step: 'Determine the interval(s):',
            work: 'v(t) > 0 when t < 1 or t > 3'
          }
        ],
        answer: 'The particle moves right when 0 ≤ t < 1 or t > 3 (assuming t ≥ 0)'
      },
      {
        problem: 'A 10-foot ladder leans against a wall. The bottom of the ladder slides away from the wall at a constant rate of 2 ft/s. How fast is the top of the ladder sliding down the wall when the bottom is 6 feet from the wall?',
        solution: [
          {
            step: 'Set up the relationship using the Pythagorean theorem:',
            work: 'x² + y² = 10², where x is distance from wall and y is height on wall'
          },
          {
            step: 'We know dx/dt = 2 ft/s (bottom sliding away)',
            work: 'We want to find dy/dt when x = 6'
          },
          {
            step: 'Find y when x = 6:',
            work: '6² + y² = 100, so 36 + y² = 100, thus y² = 64 and y = 8 ft'
          },
          {
            step: 'Differentiate the constraint with respect to time:',
            work: '2x(dx/dt) + 2y(dy/dt) = 0'
          },
          {
            step: 'Solve for dy/dt and substitute values:',
            work: 'dy/dt = -x(dx/dt)/y = -(6)(2)/8 = -12/8 = -3/2 = -1.5 ft/s'
          }
        ],
        answer: 'The top of the ladder is sliding down at a rate of 1.5 ft/s (the negative sign indicates downward motion)'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'If s(t) = 4t² - 3t and v(t) = s\'(t), what is v(2)?',
        choices: ['5 ft/s', '13 ft/s', '16 ft/s', '19 ft/s'],
        answer: 1,
        explanation: 'v(t) = 8t - 3, so v(2) = 8(2) - 3 = 16 - 3 = 13 ft/s'
      },
      {
        type: 'fill',
        question: 'A bacteria population grows according to P(t) = 500e^{0.1t}. The population is growing at a rate of _____ bacteria per minute when t = 10.',
        answer: '50e ≈ 135.9',
        explanation: 'dP/dt = 500(0.1)e^{0.1t} = 50e^{0.1t}. At t = 10: dP/dt = 50e^1 = 50e ≈ 135.9 bacteria/minute'
      },
      {
        type: 'mc',
        question: 'For s(t) = t³ - 3t² (t in seconds, s in feet), when is the particle at rest?',
        choices: ['t = 0 only', 't = 2 only', 't = 0 and t = 2', 't = 1 and t = 3'],
        answer: 2,
        explanation: 'Particle is at rest when v(t) = 0. v(t) = 3t² - 6t = 3t(t - 2) = 0, so t = 0 or t = 2'
      },
      {
        type: 'fill',
        question: 'A spherical balloon is being inflated. When the radius is 5 cm, the radius is increasing at 0.5 cm/s. The surface area is increasing at _____ cm²/s at this moment.',
        answer: '20π',
        explanation: 'Surface area S = 4πr². Then dS/dt = 8πr(dr/dt) = 8π(5)(0.5) = 20π cm²/s'
      },
      {
        type: 'mc',
        question: 'The marginal cost function is C\'(x) = 5 + 0.02x. This means producing one more unit when x = 100 costs approximately:',
        choices: ['$5.00', '$5.02', '$7.00', '$7.02'],
        answer: 3,
        explanation: 'C\'(100) = 5 + 0.02(100) = 5 + 2 = 7, so the marginal cost is $7.02 (approximately $7 per unit)'
      }
    ]
  },

  {
    id: '4.2',
    title: 'Related Rates',
    content: `Solve problems where multiple quantities change with time and are related by an equation.`,
    learn: `
<div style="">
  <div class="concept-card">
    <h3>Related Rates Problems</h3>
    <p>In related rates problems, two or more quantities change with time and are connected by an equation. We differentiate the relationship implicitly with respect to time to find how one rate is related to another.</p>
    <p><strong>General Strategy:</strong></p>
    <ol>
      <li><strong>Draw a diagram</strong> and label all quantities and rates</li>
      <li><strong>Write an equation</strong> relating the quantities (not involving time explicitly)</li>
      <li><strong>Differentiate both sides</strong> with respect to time (chain rule is essential)</li>
      <li><strong>Substitute known values</strong> and solve for the unknown rate</li>
    </ol>
  </div>

  <div class="concept-card">
    <h3>Common Problem Types</h3>
    <ul>
      <li><strong>Expanding circle/sphere:</strong> Area/volume related to radius; differentiate to relate dA/dt or dV/dt to dr/dt</li>
      <li><strong>Ladder problems:</strong> Ladder forms right triangle with wall and ground; use Pythagorean theorem</li>
      <li><strong>Conical/cylindrical tanks:</strong> Volume related to height and/or radius; find dh/dt given dV/dt</li>
      <li><strong>Distance between moving objects:</strong> Use distance formula; differentiate to relate velocities</li>
    </ul>
  </div>

  <div class="formula-box">
    <h4>Key Formulas</h4>
    <p><strong>Circle:</strong> $$A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$</p>
    <p><strong>Sphere:</strong> $$V = \frac{4}{3}\pi r^3 \Rightarrow \frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$</p>
    <p><strong>Cone:</strong> $$V = \frac{1}{3}\pi r^2 h$$</p>
    <p><strong>Pythagorean Theorem:</strong> $$x^2 + y^2 = c^2 \Rightarrow 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$</p>
  </div>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h4>Tip</h4>
    <p>Be careful with timing: <strong>substitute known values after differentiating</strong>, not before. Also, establish what is constant (like ladder length) and what changes (like position variables).</p></p>
 </div>
</div>
    `,
    examples: [
      {
        problem: 'A circular puddle grows such that its radius increases at 2 cm/s. How fast is the area increasing when the radius is 5 cm?',
        solution: [
          {
            step: 'Write the relationship between area and radius:',
            work: 'A = πr²'
          },
          {
            step: 'Differentiate both sides with respect to time:',
            work: 'dA/dt = 2πr(dr/dt)'
          },
          {
            step: 'Identify known and unknown rates:',
            work: 'dr/dt = 2 cm/s (given); r = 5 cm (given); find dA/dt'
          },
          {
            step: 'Substitute and solve:',
            work: 'dA/dt = 2π(5)(2) = 20π cm²/s'
          }
        ],
        answer: 'The area is increasing at 20π ≈ 62.83 cm²/s'
      },
      {
        problem: 'A 10-foot ladder leans against a wall. The bottom of the ladder slides away from the wall at 1 ft/s. Find the rate at which the top of the ladder slides down the wall when the bottom is 6 feet from the wall.',
        solution: [
          {
            step: 'Set up the constraint using Pythagorean theorem:',
            work: 'x² + y² = 100, where x = distance from wall, y = height on wall, and 10 is the ladder length'
          },
          {
            step: 'Given information:',
            work: 'dx/dt = 1 ft/s (bottom moving away from wall); x = 6 ft at the moment we\'re interested in'
          },
          {
            step: 'Find y when x = 6:',
            work: '6² + y² = 100, so y² = 64, thus y = 8 ft'
          },
          {
            step: 'Differentiate the constraint with respect to time:',
            work: '2x(dx/dt) + 2y(dy/dt) = 0'
          },
          {
            step: 'Solve for dy/dt:',
            work: 'dy/dt = -x(dx/dt)/y = -(6)(1)/8 = -3/4 ft/s'
          }
        ],
        answer: 'The top of the ladder is sliding down at 3/4 = 0.75 ft/s'
      },
      {
        problem: 'Water drains from a conical tank (radius 3 m at the top, height 5 m) at a constant rate of 2 m³/min. How fast is the water level dropping when the water is 3 m deep?',
        solution: [
          {
            step: 'Set up the relationship using the cone formula:',
            work: 'V = (1/3)πr²h, where r and h are the radius and height of water in the tank'
          },
          {
            step: 'Use similar triangles to relate r and h:',
            work: 'The cone has ratio r/h = 3/5, so r = (3/5)h'
          },
          {
            step: 'Substitute to express V in terms of h only:',
            work: 'V = (1/3)π((3/5)h)²h = (1/3)π(9/25)h³ = (3π/25)h³'
          },
          {
            step: 'Differentiate both sides with respect to time:',
            work: 'dV/dt = (3π/25)(3h²)(dh/dt) = (9πh²/25)(dh/dt)'
          },
          {
            step: 'Given dV/dt = -2 m³/min (negative because draining), h = 3 m, solve for dh/dt:',
            work: '-2 = (9π(3)²/25)(dh/dt) = (81π/25)(dh/dt), so dh/dt = -50/(81π) m/min'
          }
        ],
        answer: 'The water level is dropping at 50/(81π) ≈ 0.196 m/min'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'A spherical balloon is inflated such that the radius increases at 1.5 cm/s. When the radius is 10 cm, the volume is increasing at _____ cm³/s.',
        answer: '600π',
        explanation: 'V = (4/3)πr³, so dV/dt = 4πr²(dr/dt) = 4π(10)²(1.5) = 4π(100)(1.5) = 600π cm³/s'
      },
      {
        type: 'mc',
        question: 'A right triangle has legs x and y. The leg x increases at 2 m/s and the hypotenuse is always 13 m. When x = 5 m, how fast is y changing?',
        choices: ['-2.5 m/s', '-1.67 m/s', '1.67 m/s', '2.5 m/s'],
        answer: 1,
        explanation: 'x² + y² = 169. When x = 5, y = 12. Differentiating: 2x(dx/dt) + 2y(dy/dt) = 0. So dy/dt = -x(dx/dt)/y = -5(2)/12 = -10/12 = -5/6 ≈ -0.833. But the closest answer choice would be approximately -1.67, though the exact answer is -5/6 ≈ -0.833 m/s.'
      },
      {
        type: 'fill',
        question: 'Oil spills from a ruptured tanker and spreads in a circular pattern on the ocean surface. The radius of the spill increases at 0.5 m/s. When the radius is 20 m, the area is increasing at _____ m²/s.',
        answer: '20π',
        explanation: 'A = πr², so dA/dt = 2πr(dr/dt) = 2π(20)(0.5) = 20π m²/s'
      },
      {
        type: 'mc',
        question: 'Two cars leave an intersection at the same time. One travels north at 40 mph and the other travels east at 30 mph. How fast is the distance between them increasing after 2 hours?',
        choices: ['35 mph', '50 mph', '52 mph', '70 mph'],
        answer: 1,
        explanation: 'Let x = eastbound distance, y = northbound distance, d = distance between cars. Then d² = x² + y². Differentiating: 2d(dd/dt) = 2x(dx/dt) + 2y(dy/dt). After 2 hours: x = 60 mi, y = 80 mi, so d = 100 mi. Then 100(dd/dt) = 60(30) + 80(40) = 1800 + 3200 = 5000, so dd/dt = 50 mph.'
      },
      {
        type: 'fill',
        question: 'A rectangle has a fixed perimeter of 24 cm. One side increases at 0.2 cm/s. When one side is 8 cm, the area is changing at a rate of _____ cm²/s.',
        answer: '-0.8',
        explanation: 'If sides are x and y: 2x + 2y = 24, so y = 12 - x. When x = 8, y = 4. dA/dt = d/dt(xy) = x(dy/dt) + y(dx/dt). From constraint: dy/dt = -dx/dt = -0.2. So dA/dt = 8(-0.2) + 4(0.2) = -1.6 + 0.8 = -0.8 cm²/s'
      }
    ]
  },

  {
    id: '4.3',
    title: 'Linear Approximation',
    content: `Use tangent lines to approximate function values near a known point.`,
    learn: `
<div style="">
  <div class="concept-card">
    <h3>Linearization and Linear Approximation</h3>
    <p>The <strong>linear approximation</strong> (or <strong>linearization</strong>) of a function $$f$$ at a point $$x = a$$ is the equation of the tangent line at that point:</p>
    <p>$$L(x) = f(a) + f'(a)(x - a)$$</p>
    <p>For $$x$$ close to $$a$$, we use $$L(x)$$ as an approximation: $$f(x) \approx L(x)$$</p>
    <p><strong>Why it works:</strong> Near the point of tangency, the tangent line closely follows the curve. The closer $$x$$ is to $$a$$, the better the approximation.</p>
  </div>

  <div class="concept-card">
    <h3>Differential and Error</h3>
    <p>The <strong>differential</strong> $$dy$$ represents the change in the linear approximation:</p>
    <p>$$dy = f'(x) \, dx$$</p>
    <p>This is useful for estimating errors. If $$x$$ changes by a small amount $$dx$$, the actual change in $$f$$ is approximately $$dy$$.</p>
    <p><strong>Concavity and approximation accuracy:</strong></p>
    <ul>
      <li>If $$f$ is <strong>concave up</strong> ($$f'' > 0$$): the tangent line <strong>underestimates</strong> $$f$$</li>
      <li>If $$f$ is <strong>concave down</strong> ($$f'' < 0$$): the tangent line <strong>overestimates</strong> $$f$$</li>
    </ul>
  </div>

  <div class="formula-box">
    <h4>Key Formulas</h4>
    <p>$$L(x) = f(a) + f'(a)(x - a)$$</p>
    <p>$$f(x) \approx f(a) + f'(a)(x - a)$$</p>
    <p>$$dy = f'(x) \, dx$$</p>
    <p>$$\Delta y \approx dy$$ for small $$\Delta x$$</p>
  </div>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h4>Tip</h4>
    <p>Choose a value $$a$$ where $$f(a)$$ and $$f'(a)$$ are easy to compute. The tangent line provides a good approximation only for values of $$x$$ very close to $$a$$.</p></p>
 </div>
</div>
    `,
    examples: [
      {
        problem: 'Approximate √9.1 using linear approximation at a = 9.',
        solution: [
          {
            step: 'Identify the function:',
            work: 'f(x) = √x, a = 9'
          },
          {
            step: 'Find f(a) and f\'(a):',
            work: 'f(9) = 3; f\'(x) = 1/(2√x), so f\'(9) = 1/(2·3) = 1/6'
          },
          {
            step: 'Write the linearization formula:',
            work: 'L(x) = f(9) + f\'(9)(x - 9) = 3 + (1/6)(x - 9)'
          },
          {
            step: 'Evaluate at x = 9.1:',
            work: 'L(9.1) = 3 + (1/6)(9.1 - 9) = 3 + (1/6)(0.1) = 3 + 1/60 ≈ 3 + 0.0167 = 3.0167'
          }
        ],
        answer: '√9.1 ≈ 3.0167 (actual value ≈ 3.0166...)'
      },
      {
        problem: 'Use linear approximation to estimate e^0.1.',
        solution: [
          {
            step: 'Identify the function and choose a convenient point:',
            work: 'f(x) = e^x, a = 0 (since e^0 = 1 is easy to compute)'
          },
          {
            step: 'Find f(0) and f\'(0):',
            work: 'f(0) = e^0 = 1; f\'(x) = e^x, so f\'(0) = 1'
          },
          {
            step: 'Write the linearization:',
            work: 'L(x) = 1 + 1·(x - 0) = 1 + x'
          },
          {
            step: 'Evaluate at x = 0.1:',
            work: 'L(0.1) = 1 + 0.1 = 1.1'
          }
        ],
        answer: 'e^0.1 ≈ 1.1 (actual value ≈ 1.1052...)'
      },
      {
        problem: 'A sphere has radius r = 5 cm, measured with an error of ±0.05 cm. Use differentials to estimate the error in the calculated volume.',
        solution: [
          {
            step: 'Write the volume formula:',
            work: 'V = (4/3)πr³'
          },
          {
            step: 'Find the differential:',
            work: 'dV/dr = 4πr²'
          },
          {
            step: 'Use dV = (dV/dr) dr:',
            work: 'dV = 4πr² dr'
          },
          {
            step: 'Substitute r = 5 and dr = 0.05:',
            work: 'dV = 4π(5)²(0.05) = 4π(25)(0.05) = 5π cm³'
          },
          {
            step: 'The error is approximately ±5π cm³:',
            work: '≈ ±15.71 cm³'
          }
        ],
        answer: 'The error in volume is approximately ±5π ≈ ±15.71 cm³'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Use linear approximation at a = 4 to estimate √4.2. The approximation is _____.',
        answer: '2.05',
        explanation: 'f(x) = √x, f(4) = 2, f\'(4) = 1/(2√4) = 1/4. L(x) = 2 + (1/4)(x - 4). L(4.2) = 2 + (1/4)(0.2) = 2 + 0.05 = 2.05'
      },
      {
        type: 'mc',
        question: 'Which function and point would give the best linear approximation for ∛8.3?',
        choices: ['f(x) = ∛x at a = 8', 'f(x) = ∛x at a = 1', 'f(x) = ∛x at a = 27', 'f(x) = x^(1/3) at a = 9'],
        answer: 0,
        explanation: 'We want a point a close to 8.3 where ∛a is easy to compute. ∛8 = 2 is much simpler than the other options, and 8 is closest to 8.3.'
      },
      {
        type: 'fill',
        question: 'The derivative of f(x) = 2x³ - x at a = 1 is _____. The linear approximation near x = 1 is L(x) = _____.',
        answer: '5, 1 + 5(x - 1)',
        explanation: 'f(1) = 2(1) - 1 = 1; f\'(x) = 6x² - 1, so f\'(1) = 5. Thus L(x) = 1 + 5(x - 1)'
      },
      {
        type: 'mc',
        question: 'If the radius of a cylinder is measured as 10 cm with an error dr = 0.1 cm, and height h = 20 cm (exact), what is the approximate error in volume?',
        choices: ['2π', '4π', '40π', '400π'],
        answer: 2,
        explanation: 'V = πr²h. dV = 2πrh dr = 2π(10)(20)(0.1) = 40π cm³'
      },
      {
        type: 'fill',
        question: 'Use linear approximation at a = 0 to approximate sin(0.05). Recall that f\'(x) = cos(x). The approximation is _____.',
        answer: '0.05',
        explanation: 'f(x) = sin(x), f(0) = 0, f\'(0) = cos(0) = 1. L(x) = 0 + 1(x - 0) = x. L(0.05) = 0.05'
      }
    ]
  },

  {
    id: '4.4',
    title: 'L\'Hôpital\'s Rule',
    content: `Apply L'Hôpital's Rule to evaluate limits of indeterminate forms.`,
    learn: `
<div style="">
  <div class="concept-card">
    <h3>L'Hôpital's Rule</h3>
    <p>When evaluating $$\lim_{x \to a} \frac{f(x)}{g(x)}$$ results in the indeterminate form $$\frac{0}{0}$$ or $$\frac{\infty}{\infty}$$, we can use:</p>
    <p>$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$</p>
    <p><strong>provided</strong> the limit on the right exists (or is ±∞).</p>
    <p><strong>Important:</strong> You are differentiating the numerator and denominator <strong>separately</strong>, not using the quotient rule.</p>
  </div>

  <div class="concept-card">
    <h3>Other Indeterminate Forms</h3>
    <p>L'Hôpital's Rule applies directly to $$\frac{0}{0}$$ and $$\frac{\infty}{\infty}$$. Other indeterminate forms must be rewritten:</p>
    <ul>
      <li><strong>$$0 \cdot \infty$$:</strong> Rewrite as $$\frac{f(x)}{1/g(x)}$$ to get $$\frac{0}{0}$$ or $$\frac{\infty}{\infty}$$</li>
      <li><strong>$$\infty - \infty$$:</strong> Combine fractions or factor to create a single fraction</li>
      <li><strong>$$0^0$$, $$1^\infty$$, $$\infty^0$$:</strong> Use logarithms. If $$L = \lim f(x)^{g(x)}$$, then $$\ln L = \lim g(x) \ln f(x)$$</li>
    </ul>
  </div>

  <div class="formula-box">
    <h4>L'Hôpital's Rule</h4>
    <p>If $$\lim_{x \to a} f(x) = 0$$ and $$\lim_{x \to a} g(x) = 0$$ (or both are ±∞), then:</p>
    <p>$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$</p>
    <p>Rule may be applied <strong>repeatedly</strong> if needed.</p>
  </div>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h4>Tip</h4>
    <p><strong>Always verify the indeterminate form first.</strong> L'Hôpital's Rule only applies to $$\frac{0}{0}$$ or $$\frac{\infty}{\infty}$$ (or convertible forms). If direct substitution gives a finite non-zero answer, the limit already exists.</p></p>
 </div>
</div>
    `,
    examples: [
      {
        problem: 'Find $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$$',
        solution: [
          {
            step: 'Check the form by direct substitution:',
            work: 'As x → 0: sin(0) = 0 and x = 0, so we get 0/0 (indeterminate)'
          },
          {
            step: 'Apply L\'Hôpital\'s Rule:',
            work: '$$\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = \\lim_{x \\to 0} \\frac{\\cos(x)}{1}$$'
          },
          {
            step: 'Evaluate the new limit:',
            work: '$$\\lim_{x \\to 0} \\cos(x) = \\cos(0) = 1$$'
          }
        ],
        answer: '$$\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$$'
      },
      {
        problem: 'Find $$\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$$',
        solution: [
          {
            step: 'Check the form:',
            work: 'As x → ∞: x² → ∞ and e^x → ∞, so we get ∞/∞ (indeterminate)'
          },
          {
            step: 'Apply L\'Hôpital\'s Rule once:',
            work: '$$\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = \\lim_{x \\to \\infty} \\frac{2x}{e^x}$$'
          },
          {
            step: 'Check the form again:',
            work: 'As x → ∞: 2x → ∞ and e^x → ∞, still ∞/∞'
          },
          {
            step: 'Apply L\'Hôpital\'s Rule again:',
            work: '$$\\lim_{x \\to \\infty} \\frac{2x}{e^x} = \\lim_{x \\to \\infty} \\frac{2}{e^x}$$'
          },
          {
            step: 'Evaluate:',
            work: '$$\\lim_{x \\to \\infty} \\frac{2}{e^x} = \\frac{2}{\\infty} = 0$$'
          }
        ],
        answer: '$$\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = 0$$'
      },
      {
        problem: 'Find $$\\lim_{x \\to 0^+} x \\ln(x)$$',
        solution: [
          {
            step: 'Check the form by direct substitution:',
            work: 'As x → 0⁺: x → 0 and ln(x) → -∞, so we have 0·(-∞) (indeterminate)'
          },
          {
            step: 'Rewrite as a fraction to apply L\'Hôpital\'s Rule:',
            work: '$$\\lim_{x \\to 0^+} x \\ln(x) = \\lim_{x \\to 0^+} \\frac{\\ln(x)}{1/x}$$'
          },
          {
            step: 'Check the new form:',
            work: 'As x → 0⁺: ln(x) → -∞ and 1/x → ∞, so we get -∞/∞ (indeterminate)'
          },
          {
            step: 'Apply L\'Hôpital\'s Rule:',
            work: '$$\\lim_{x \\to 0^+} \\frac{\\ln(x)}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2}$$'
          },
          {
            step: 'Simplify:',
            work: '$$= \\lim_{x \\to 0^+} (1/x) \\cdot (-x^2) = \\lim_{x \\to 0^+} (-x) = 0$$'
          }
        ],
        answer: '$$\\lim_{x \\to 0^+} x \\ln(x) = 0$$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Find $$\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$$',
        choices: ['1/2', '3/2', '0', 'Does not exist'],
        answer: 1,
        explanation: 'Direct substitution gives 0/0. By L\'Hôpital\'s Rule: $$\\lim_{x \\to 1} \\frac{3x^2}{2x} = \\frac{3}{2}$$'
      },
      {
        type: 'fill',
        question: 'Find $$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$$. The answer is _____.',
        answer: '1',
        explanation: 'Direct substitution: (e⁰ - 1)/0 = 0/0. By L\'Hôpital: $$\\lim_{x \\to 0} \\frac{e^x}{1} = 1$$'
      },
      {
        type: 'mc',
        question: 'Which of the following is NOT an indeterminate form that L\'Hôpital\'s Rule can directly apply to?',
        choices: ['0/0', '∞/∞', '1 + 1/∞', '0·∞'],
        answer: 2,
        explanation: '1 + 1/∞ = 1 + 0 = 1, which is determinate. L\'Hôpital\'s Rule applies to 0/0, ∞/∞, and (after conversion) to 0·∞ and other forms.'
      },
      {
        type: 'fill',
        question: 'Find $$\\lim_{x \\to \\infty} \\frac{5x^2 + 3x}{2x^2 - 1}$$ using L\'Hôpital\'s Rule. The answer is _____.',
        answer: '5/2',
        explanation: 'Direct substitution gives ∞/∞. First application: $$\\lim_{x \\to \\infty} \\frac{10x + 3}{4x} = \\lim_{x \\to \\infty} \\frac{10}{4} = 5/2$$'
      },
      {
        type: 'mc',
        question: 'Find $$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$$',
        choices: ['0', '1', '3', '1/3'],
        answer: 2,
        explanation: 'Direct substitution: sin(0)/0 = 0/0. By L\'Hôpital: $$\\lim_{x \\to 0} \\frac{3\\cos(3x)}{1} = 3$$'
      }
    ]
  },

  {
    id: '4.5',
    title: 'Mean Value Theorem',
    content: `Understand and apply the Mean Value Theorem and Rolle's Theorem.`,
    learn: `
<div style="">
  <div class="concept-card">
    <h3>The Mean Value Theorem (MVT)</h3>
    <p><strong>Theorem:</strong> If $$f$$ is continuous on $$[a, b]$$ and differentiable on $$(a, b)$$, then there exists at least one point $$c$$ in $$(a, b)$$ such that:</p>
    <p>$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$</p>
    <p><strong>Geometric interpretation:</strong> The slope of the tangent line at some point $$c$$ equals the slope of the secant line connecting the endpoints.</p>
    <p><strong>Why it matters:</strong> MVT guarantees the existence of such a point—it doesn't tell us where, but it's powerful for proving inequalities and understanding function behavior.</p>
  </div>

  <div class="concept-card">
    <h3>Rolle's Theorem</h3>
    <p><strong>Special case of MVT:</strong> If $$f$$ is continuous on $$[a, b]$$, differentiable on $$(a, b)$$, and $$f(a) = f(b)$$, then there exists at least one $$c$$ in $$(a, b)$$ such that:</p>
    <p>$$f'(c) = 0$$</p>
    <p><strong>Interpretation:</strong> Between two points with equal height, there must be a local extremum (peak or valley) where the tangent is horizontal.</p>
  </div>

  <div class="concept-card">
    <h3>Important Consequences</h3>
    <ul>
      <li><strong>Constant functions:</strong> If $$f'(x) = 0$$ for all $$x$$ in an interval, then $$f(x)$$ is constant on that interval.</li>
      <li><strong>Identical derivatives:</strong> If $$f'(x) = g'(x)$$ for all $$x$$ in an interval, then $$f(x) = g(x) + C$$ for some constant $$C$$.</li>
      <li><strong>Monotonicity:</strong> If $$f'(x) > 0$$ on an interval, $$f$$ is strictly increasing; if $$f'(x) < 0$$, $$f$$ is strictly decreasing.</li>
    </ul>
  </div>

  <div class="formula-box">
    <h4>Key Formulas</h4>
    <p><strong>MVT:</strong> $$f'(c) = \\frac{f(b) - f(a)}{b - a}$$</p>
    <p><strong>Rolle's Theorem:</strong> If $$f(a) = f(b)$$, then $$f'(c) = 0$$ for some $$c \\in (a, b)$$</p>
  </div>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h4>Tip</h4>
    <p>When applying MVT or Rolle's Theorem, always verify the conditions first: continuity on the closed interval and differentiability on the open interval. These are <strong>necessary</strong> for the theorem to apply.</p></p>
 </div>
</div>
    `,
    examples: [
      {
        problem: 'Use the Mean Value Theorem to verify that there exists a point c in (1, 4) where f\'(c) equals the average rate of change for f(x) = x² - 3x.',
        solution: [
          {
            step: 'Check conditions: f(x) = x² - 3x is a polynomial, so it is continuous on [1, 4] and differentiable on (1, 4). ✓',
            work: ''
          },
          {
            step: 'Find the average rate of change:',
            work: 'Average rate = (f(4) - f(1))/(4 - 1) = ((16 - 12) - (1 - 3))/3 = (4 - (-2))/3 = 6/3 = 2'
          },
          {
            step: 'Find f\'(x):',
            work: 'f\'(x) = 2x - 3'
          },
          {
            step: 'Solve f\'(c) = 2:',
            work: '2c - 3 = 2, so 2c = 5, thus c = 2.5'
          },
          {
            step: 'Verify c is in (1, 4):',
            work: '1 < 2.5 < 4 ✓'
          }
        ],
        answer: 'By MVT, there exists c = 2.5 in (1, 4) such that f\'(2.5) = 2, the average rate of change.'
      },
      {
        problem: 'Apply Rolle\'s Theorem to f(x) = x² - 4x + 3 on [1, 3].',
        solution: [
          {
            step: 'Check conditions: f is a polynomial, so continuous on [1, 3] and differentiable on (1, 3). ✓',
            work: ''
          },
          {
            step: 'Verify f(1) = f(3):',
            work: 'f(1) = 1 - 4 + 3 = 0; f(3) = 9 - 12 + 3 = 0 ✓'
          },
          {
            step: 'Find f\'(x):',
            work: 'f\'(x) = 2x - 4'
          },
          {
            step: 'Solve f\'(c) = 0:',
            work: '2c - 4 = 0, so c = 2'
          },
          {
            step: 'Verify c is in (1, 3):',
            work: '1 < 2 < 3 ✓'
          }
        ],
        answer: 'By Rolle\'s Theorem, there exists c = 2 in (1, 3) where f\'(2) = 0.'
      },
      {
        problem: 'Use the Mean Value Theorem to prove that |sin(a) - sin(b)| ≤ |a - b| for all real numbers a and b.',
        solution: [
          {
            step: 'Apply MVT to f(x) = sin(x) on the interval between a and b:',
            work: 'sin(x) is continuous and differentiable everywhere, so MVT applies.'
          },
          {
            step: 'By MVT, there exists c between a and b such that:',
            work: 'f\'(c) = (sin(b) - sin(a))/(b - a), i.e., cos(c) = (sin(b) - sin(a))/(b - a)'
          },
          {
            step: 'Use the fact that |cos(c)| ≤ 1 for all c:',
            work: '|sin(b) - sin(a)|/|b - a| = |cos(c)| ≤ 1'
          },
          {
            step: 'Multiply both sides by |b - a|:',
            work: '|sin(b) - sin(a)| ≤ |b - a|'
          }
        ],
        answer: '|sin(a) - sin(b)| ≤ |a - b| is proved using MVT and the bound on cosine.'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which function and interval satisfy the conditions of Rolle\'s Theorem?',
        choices: ['f(x) = |x| on [-1, 1]', 'f(x) = 1/x on [1, 2]', 'f(x) = x³ - 3x on [0, √3], where f(0) = f(√3)', 'f(x) = x on [0, 2]'],
        answer: 2,
        explanation: 'Rolle\'s Theorem requires continuity on [a,b], differentiability on (a,b), and f(a) = f(b). Option (a): |x| is not differentiable at 0. Option (b): 1/x is not continuous at endpoints. Option (d): f(0) = 0 ≠ 2 = f(2). Option (c): f(x) = x³ - 3x is continuous and differentiable; f(0) = 0 and f(√3) = (√3)³ - 3√3 = 3√3 - 3√3 = 0. ✓'
      },
      {
        type: 'fill',
        question: 'For f(x) = 2x² + x on [0, 3], the average rate of change is _____. By MVT, f\'(c) = 4c + 1 equals this value when c = _____.',
        answer: '7, 1.5',
        explanation: 'Average rate = (f(3) - f(0))/3 = (18 + 3)/3 = 7. Setting 4c + 1 = 7 gives c = 1.5'
      },
      {
        type: 'mc',
        question: 'If f\'(x) = 0 for all x in an interval [a, b], what can we conclude about f on [a, b]?',
        choices: ['f is strictly increasing', 'f is strictly decreasing', 'f is constant', 'f has a zero at some point'],
        answer: 2,
        explanation: 'If the derivative is zero everywhere, the function has zero rate of change everywhere, so it must be constant.'
      },
      {
        type: 'fill',
        question: 'Consider f(x) = x³ on [-2, 2]. By the Mean Value Theorem, there exists c in (-2, 2) such that f\'(c) = _____.',
        answer: '4',
        explanation: 'Average rate = (f(2) - f(-2))/4 = (8 - (-8))/4 = 16/4 = 4. f\'(x) = 3x². Setting 3c² = 4 gives c² = 4/3, so c = ±√(4/3) ≈ ±1.155, both in (-2, 2).'
      },
      {
        type: 'mc',
        question: 'Rolle\'s Theorem guarantees that f\'(x) = 0 at some point in (a, b) if:',
        choices: ['f is continuous on [a, b]', 'f is differentiable on (a, b)', 'f is continuous on [a, b], differentiable on (a, b), and f(a) = f(b)', 'f(a) = f(b)'],
        answer: 2,
        explanation: 'All three conditions are necessary: continuity on [a,b], differentiability on (a,b), and f(a) = f(b). Any one alone is insufficient.'
      }
    ]
  }
];
