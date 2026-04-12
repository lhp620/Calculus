export const lessons = [
  {
    id: '9.1',
    unit: 9,
    title: 'Parametric Equations & Derivatives',
    learn: `
<div class="concept-card">
  <h3>What are Parametric Equations?</h3>
  <p>Instead of expressing $y$ as a function of $x$, we express both $x$ and $y$ as functions of a parameter $t$:</p>
  <div class="formula-box">
    $$x = f(t), \\quad y = g(t), \\quad a \\leq t \\leq b$$
  </div>
  <p>This allows us to trace curves that fail the vertical line test and represent motion over time.</p>
</div>

<div class="concept-card">
  <h3>First Derivative: Finding dy/dx</h3>
  <p>To find the slope of the parametric curve, use the chain rule:</p>
  <div class="formula-box">
    $$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}, \\quad \\text{provided } \\frac{dx}{dt} \\neq 0$$
  </div>
  <p>This gives the slope of the tangent line to the curve at any point.</p>
</div>

<div class="concept-card">
  <h3>Second Derivative: Finding d²y/dx²</h3>
  <p>The second derivative measures concavity of the parametric curve:</p>
  <div class="formula-box">
    $$\\frac{d^2y}{dx^2} = \\frac{d/dt[dy/dx]}{dx/dt}$$
  </div>
  <p>This tells us whether the curve is concave up or down at a given point.</p>
</div>

<div class="concept-card">
  <h3>Tangent Lines</h3>
  <p>To find the equation of the tangent line at a point where $t = t_0$:</p>
  <ul>
    <li>Find the point: $(x_0, y_0) = (f(t_0), g(t_0))$</li>
    <li>Find the slope: $m = \\frac{dy/dt}{dx/dt}$ evaluated at $t = t_0$</li>
    <li>Use point-slope form: $y - y_0 = m(x - x_0)$</li>
  </ul>
</div>

<div class="concept-card">
  <h3>Special Cases: Horizontal & Vertical Tangents</h3>
  <div class="formula-box">
    <strong>Horizontal tangent:</strong> $\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\neq 0$ \\\\
    <strong>Vertical tangent:</strong> $\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} \\neq 0$
  </div>
  <p>Horizontal tangents occur where the curve has slope 0. Vertical tangents occur where the slope is undefined.</p>
</div>

<div class="tip-box">
  <div class="tip-icon">💡</div>
  <p><strong>Tip:</strong> Always check that denominators are nonzero. For instance, horizontal tangents require $dx/dt \\neq 0$, otherwise the tangent is vertical or doesn\'t exist.</p>
</div>
    `,
    examples: [
      {
        number: 1,
        problem: 'For the parametric curve $x = t^2 - 1$, $y = t^3 - 3t$, find $\\frac{dy}{dx}$ and evaluate it at $t = 2$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$.
  $$\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^2 - 3$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Apply the formula $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.
  $$\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t} = \\frac{3(t^2 - 1)}{2t}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Evaluate at $t = 2$.
  $$\\frac{dy}{dx}\\bigg|_{t=2} = \\frac{3(4 - 1)}{2(2)} = \\frac{3 \\cdot 3}{4} = \\frac{9}{4}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> At $t = 2$, the slope is $\\frac{9}{4}$.
</div>
        `
      },
      {
        number: 2,
        problem: 'Find all points on the parametric curve $x = t^2 - 1$, $y = t^3 - 3t$ where the tangent is horizontal.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> For a horizontal tangent, we need $\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\neq 0$.
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Set $\\frac{dy}{dt} = 0$.
  $$3t^2 - 3 = 0$$
  $$3(t^2 - 1) = 0$$
  $$t = \\pm 1$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Check that $\\frac{dx}{dt} \\neq 0$ at these values.
  At $t = 1$: $\\frac{dx}{dt} = 2(1) = 2 \\neq 0$ ✓
  At $t = -1$: $\\frac{dx}{dt} = 2(-1) = -2 \\neq 0$ ✓
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Find the corresponding $(x, y)$ points.
  At $t = 1$: $x = 1 - 1 = 0$, $y = 1 - 3 = -2$, so point is $(0, -2)$
  At $t = -1$: $x = 1 - 1 = 0$, $y = -1 + 3 = 2$, so point is $(0, 2)$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> Horizontal tangents occur at $(0, 2)$ and $(0, -2)$.
</div>
        `
      },
      {
        number: 3,
        problem: 'For the parametric curve $x = t^2$, $y = t^3$, find $\\frac{d^2y}{dx^2}$ at $t = 1$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find the first derivatives.
  $$\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^2$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Find $\\frac{dy}{dx}$.
  $$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Find $\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right]$.
  $$\\frac{d}{dt}\\left[\\frac{3t}{2}\\right] = \\frac{3}{2}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Apply the second derivative formula.
  $$\\frac{d^2y}{dx^2} = \\frac{d/dt[dy/dx]}{dx/dt} = \\frac{3/2}{2t} = \\frac{3}{4t}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 5:</strong> Evaluate at $t = 1$.
  $$\\frac{d^2y}{dx^2}\\bigg|_{t=1} = \\frac{3}{4(1)} = \\frac{3}{4}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> $\\frac{d^2y}{dx^2}\\bigg|_{t=1} = \\frac{3}{4}$ (curve is concave up).
</div>
        `
      }
    ],
    practice: [
      {
        id: '9.1.1',
        type: 'fill',
        question: 'For $x = 3t - 1$ and $y = t^2 + 2$, find $\\frac{dy}{dx}$ in terms of $t$.',
        answer: '\\frac{2t}{3}',
        explanation: '$\\frac{dx}{dt} = 3$ and $\\frac{dy}{dt} = 2t$, so $\\frac{dy}{dx} = \\frac{2t}{3}$.'
      },
      {
        id: '9.1.2',
        type: 'mc',
        question: 'At what value of $t$ does the parametric curve $x = e^t$, $y = t^2 - t$ have a vertical tangent?',
        choices: ['$t = 0$', 'Never (since $e^t > 0$ always)', '$t = 1$', '$t = -1$'],
        answer: 'Never (since $e^t > 0$ always)',
        explanation: 'A vertical tangent requires $\\frac{dx}{dt} = 0$. But $\\frac{dx}{dt} = e^t$, which is always positive. Therefore, there is never a vertical tangent.'
      },
      {
        id: '9.1.3',
        type: 'fill',
        question: 'For $x = \\cos(t)$ and $y = \\sin(t)$, find $\\frac{dy}{dx}$ at $t = \\frac{\\pi}{4}$.',
        answer: '-1',
        explanation: '$\\frac{dx}{dt} = -\\sin(t)$ and $\\frac{dy}{dt} = \\cos(t)$. So $\\frac{dy}{dx} = -\\cot(t) = -\\cot(\\frac{\\pi}{4}) = -1$.'
      },
      {
        id: '9.1.4',
        type: 'mc',
        question: 'The parametric curve $x = t^3 - 3t$, $y = t^2$ has a horizontal tangent at which of these points?',
        choices: ['$(0, 0)$', '$(0, 1)$', '$(2, 1)$', '$(−2, 1)$'],
        answer: '$(0, 0)$',
        explanation: 'Horizontal tangent requires $\\frac{dy}{dt} = 0$. We have $\\frac{dy}{dt} = 2t = 0 \\Rightarrow t = 0$. At $t = 0$: $x = 0$, $y = 0$, and $\\frac{dx}{dt}|_{t=0} = 3(0)^2 - 3 = -3 \\neq 0$. So the point is $(0, 0)$.'
      },
      {
        id: '9.1.5',
        type: 'fill',
        question: 'For $x = 2t$ and $y = 4t^2$, express $y$ as a function of $x$ (eliminate the parameter).',
        answer: 'y = x^2',
        explanation: 'From $x = 2t$, we get $t = \\frac{x}{2}$. Substituting into $y = 4t^2$: $y = 4(\\frac{x}{2})^2 = 4 \\cdot \\frac{x^2}{4} = x^2$.'
      }
    ]
  },

  {
    id: '9.2',
    unit: 9,
    title: 'Arc Length (Parametric & Cartesian)',
    learn: `
<div class="concept-card">
  <h3>Parametric Arc Length Formula</h3>
  <p>The length of a parametric curve from $t = a$ to $t = b$ is:</p>
  <div class="formula-box">
    $$L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} \\, dt$$
  </div>
  <p>This comes from the distance formula applied to infinitesimal segments: $ds = \\sqrt{(dx)^2 + (dy)^2}$.</p>
</div>

<div class="concept-card">
  <h3>Cartesian Arc Length Formula</h3>
  <p>For a curve $y = f(x)$ from $x = a$ to $x = b$:</p>
  <div class="formula-box">
    $$L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} \\, dx$$
  </div>
  <p>This is a special case of the parametric formula where $x$ is the parameter.</p>
</div>

<div class="concept-card">
  <h3>Speed in Parametric Motion</h3>
  <p>The speed (magnitude of velocity) of a particle following a parametric path is:</p>
  <div class="formula-box">
    $$|\\mathbf{v}(t)| = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}$$
  </div>
  <p>Arc length is the integral of speed over time: $L = \\int_a^b |\\mathbf{v}(t)| \\, dt$.</p>
</div>

<div class="tip-box">
  <div class="tip-icon">💡</div>
  <p><strong>Tip:</strong> Parametric arc length integrals often require substitution or careful simplification of the expression under the square root. Look for perfect squares and factorizations.</p>
</div>
    `,
    examples: [
      {
        number: 1,
        problem: 'Find the arc length of the circle $x = \\cos(t)$, $y = \\sin(t)$ for $0 \\leq t \\leq 2\\pi$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find the derivatives.
  $$\\frac{dx}{dt} = -\\sin(t), \\quad \\frac{dy}{dt} = \\cos(t)$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Compute $\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2$.
  $$\\left(-\\sin(t)\\right)^2 + (\\cos(t))^2 = \\sin^2(t) + \\cos^2(t) = 1$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Set up and evaluate the arc length integral.
  $$L = \\int_0^{2\\pi} \\sqrt{1} \\, dt = \\int_0^{2\\pi} 1 \\, dt = 2\\pi$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> The arc length is $2\\pi$ (the circumference of the unit circle).
</div>
        `
      },
      {
        number: 2,
        problem: 'Find the arc length of $y = x^{3/2}$ from $x = 0$ to $x = 4$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find $\\frac{dy}{dx}$.
  $$\\frac{dy}{dx} = \\frac{3}{2}x^{1/2} = \\frac{3\\sqrt{x}}{2}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Compute $1 + \\left(\\frac{dy}{dx}\\right)^2$.
  $$1 + \\left(\\frac{3\\sqrt{x}}{2}\\right)^2 = 1 + \\frac{9x}{4} = \\frac{4 + 9x}{4}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Set up the arc length integral.
  $$L = \\int_0^4 \\sqrt{\\frac{4 + 9x}{4}} \\, dx = \\frac{1}{2}\\int_0^4 \\sqrt{4 + 9x} \\, dx$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Use substitution $u = 4 + 9x$, so $du = 9dx$ and $dx = \\frac{du}{9}$.
  When $x = 0$: $u = 4$. When $x = 4$: $u = 40$.
  $$L = \\frac{1}{2} \\cdot \\frac{1}{9}\\int_4^{40} \\sqrt{u} \\, du = \\frac{1}{18}\\int_4^{40} u^{1/2} \\, du$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 5:</strong> Evaluate.
  $$L = \\frac{1}{18} \\cdot \\frac{2}{3}u^{3/2}\\bigg|_4^{40} = \\frac{1}{27}\\left[(40)^{3/2} - (4)^{3/2}\\right]$$
  $$= \\frac{1}{27}\\left[40\\sqrt{40} - 8\\right] = \\frac{1}{27}\\left[80\\sqrt{10} - 8\\right]$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> $L = \\frac{80\\sqrt{10} - 8}{27}$.
</div>
        `
      },
      {
        number: 3,
        problem: 'Find the arc length of $x = 3t^2$, $y = 2t^3$ from $t = 0$ to $t = 1$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find the derivatives.
  $$\\frac{dx}{dt} = 6t, \\quad \\frac{dy}{dt} = 6t^2$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Compute $\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2$.
  $$(6t)^2 + (6t^2)^2 = 36t^2 + 36t^4 = 36t^2(1 + t^2)$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Take the square root.
  $$\\sqrt{36t^2(1 + t^2)} = 6t\\sqrt{1 + t^2}$$
  (Note: $t \\geq 0$ on our interval, so $\\sqrt{t^2} = t$.)
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Set up the integral.
  $$L = \\int_0^1 6t\\sqrt{1 + t^2} \\, dt$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 5:</strong> Use substitution $u = 1 + t^2$, so $du = 2t \\, dt$ and $t \\, dt = \\frac{du}{2}$.
  When $t = 0$: $u = 1$. When $t = 1$: $u = 2$.
  $$L = 6 \\int_1^2 \\sqrt{u} \\cdot \\frac{du}{2} = 3\\int_1^2 u^{1/2} \\, du$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 6:</strong> Evaluate.
  $$L = 3 \\cdot \\frac{2}{3}u^{3/2}\\bigg|_1^2 = 2\\left[(2)^{3/2} - 1\\right] = 2(2\\sqrt{2} - 1) = 4\\sqrt{2} - 2$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> $L = 4\\sqrt{2} - 2$ or $L = 2(2\\sqrt{2} - 1)$.
</div>
        `
      }
    ],
    practice: [
      {
        id: '9.2.1',
        type: 'fill',
        question: 'Find the arc length of $x = t$, $y = \\frac{2}{3}t^{3/2}$ from $t = 0$ to $t = 3$.',
        answer: '\\frac{14}{3}',
        explanation: '$\\frac{dx}{dt} = 1$, $\\frac{dy}{dt} = t^{1/2}$. So $L = \\int_0^3 \\sqrt{1+t} \\, dt$. Use substitution $u = 1 + t$: $L = \\int_1^4 u^{1/2} du = \\frac{2}{3}u^{3/2}|_1^4 = \\frac{2}{3}(8-1) = \\frac{14}{3}$.'
      },
      {
        id: '9.2.2',
        type: 'mc',
        question: 'What is the arc length formula for a polar curve $r = f(\\theta)$ from $\\theta = a$ to $\\theta = b$?',
        choices: ['$\\int_a^b r \\, d\\theta$', '$\\int_a^b \\sqrt{r^2 + (dr/d\\theta)^2} \\, d\\theta$', '$\\frac{1}{2}\\int_a^b r^2 \\, d\\theta$', '$\\int_a^b r \\frac{dr}{d\\theta} \\, d\\theta$'],
        answer: '$\\int_a^b \\sqrt{r^2 + (dr/d\\theta)^2} \\, d\\theta$',
        explanation: 'The polar arc length formula mirrors the parametric formula, with $r$ and $\\theta$ as the "coordinates."'
      },
      {
        id: '9.2.3',
        type: 'fill',
        question: 'The arc length of $y = \\frac{1}{3}x^3$ from $x = 0$ to $x = 1$ is $\\frac{1}{27}\\sqrt{a} - \\frac{1}{27}$ where $a = $ ?',
        answer: '10',
        explanation: '$\\frac{dy}{dx} = x^2$. $L = \\int_0^1 \\sqrt{1 + x^4} dx$. Using substitution $u = 1 + x^4$, or evaluating numerically/by parts gives $L = \\frac{1}{27}(10\\sqrt{10} - 1)$, so $a = 10$.'
      },
      {
        id: '9.2.4',
        type: 'mc',
        question: 'The parametric curve $x = \\sin(t)$, $y = \\cos(t)$ traces which shape?',
        choices: ['An ellipse', 'A circle', 'A spiral', 'A line'],
        answer: 'A circle',
        explanation: '$x^2 + y^2 = \\sin^2(t) + \\cos^2(t) = 1$, which is the unit circle.'
      }
    ]
  },

  {
    id: '9.3',
    unit: 9,
    title: 'Polar Coordinates & Graphs',
    learn: `
<div class="concept-card">
  <h3>Polar Coordinate System</h3>
  <p>In polar coordinates $(r, \\theta)$, a point is located by:</p>
  <ul>
    <li>$r$: the distance from the origin (pole)</li>
    <li>$\\theta$: the angle measured counterclockwise from the positive $x$-axis</li>
  </ul>
  <p>Conversion to rectangular coordinates:</p>
  <div class="formula-box">
    $$x = r\\cos(\\theta), \\quad y = r\\sin(\\theta)$$
    $$r^2 = x^2 + y^2, \\quad \\tan(\\theta) = \\frac{y}{x}$$
  </div>
</div>

<div class="concept-card">
  <h3>Common Polar Curves</h3>
  <p><strong>Circle:</strong> $r = a$ (circle of radius $a$ centered at origin)</p>
  <p><strong>Line through origin:</strong> $\\theta = \\alpha$ (line at angle $\\alpha$)</p>
  <p><strong>Rose curve:</strong> $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$ (petals: $n$ if odd, $2n$ if even)</p>
  <p><strong>Cardioid:</strong> $r = a(1 + \\cos(\\theta))$ or $r = a(1 - \\cos(\\theta))$ (heart shape)</p>
  <p><strong>Limaçon:</strong> $r = a + b\\cos(\\theta)$ (various shapes depending on $a/b$ ratio)</p>
  <p><strong>Lemniscate:</strong> $r^2 = a^2\\cos(2\\theta)$ (figure-eight)</p>
</div>

<div class="concept-card">
  <h3>Symmetry in Polar Graphs</h3>
  <ul>
    <li><strong>Symmetry about the polar axis (x-axis):</strong> Replace $\\theta$ with $-\\theta$ and the equation is unchanged.</li>
    <li><strong>Symmetry about the $y$-axis:</strong> Replace $\\theta$ with $\\pi - \\theta$ and the equation is unchanged.</li>
    <li><strong>Symmetry about the origin:</strong> Replace $r$ with $-r$ (or $\\theta$ with $\\theta + \\pi$) and the equation is unchanged.</li>
  </ul>
</div>

<div class="tip-box">
  <div class="tip-icon">💡</div>
  <p><strong>Tip:</strong> When graphing polar curves, trace the curve as $\\theta$ increases through $[0, 2\\pi]$ or find the period of the curve. Note that negative values of $r$ mean the point is plotted in the opposite direction.</p>
</div>
    `,
    examples: [
      {
        number: 1,
        problem: 'Convert the polar coordinates $(r, \\theta) = (4, \\frac{\\pi}{3})$ to rectangular coordinates.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Use the conversion formulas.
  $$x = r\\cos(\\theta), \\quad y = r\\sin(\\theta)$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Substitute $r = 4$ and $\\theta = \\frac{\\pi}{3}$.
  $$x = 4\\cos\\left(\\frac{\\pi}{3}\\right) = 4 \\cdot \\frac{1}{2} = 2$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Find $y$.
  $$y = 4\\sin\\left(\\frac{\\pi}{3}\\right) = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> The rectangular coordinates are $(2, 2\\sqrt{3})$.
</div>
        `
      },
      {
        number: 2,
        problem: 'Convert the polar curve $r = 2\\cos(\\theta)$ to a rectangular equation.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Multiply both sides by $r$.
  $$r^2 = 2r\\cos(\\theta)$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Use the conversion formula $r^2 = x^2 + y^2$ and $x = r\\cos(\\theta)$.
  $$x^2 + y^2 = 2x$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Rearrange to standard form.
  $$x^2 - 2x + y^2 = 0$$
  $$x^2 - 2x + 1 + y^2 = 1$$
  $$(x - 1)^2 + y^2 = 1$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> This is a circle centered at $(1, 0)$ with radius $1$.
</div>
        `
      },
      {
        number: 3,
        problem: 'Describe the polar curve $r = 2 + 2\\cos(\\theta)$ and find where it passes through the origin.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Recognize the form. This is a cardioid: $r = a(1 + \\cos(\\theta))$ with $a = 2$.
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Identify key features. At $\\theta = 0$: $r = 2 + 2(1) = 4$ (rightmost point). At $\\theta = \\pi$: $r = 2 + 2(-1) = 0$ (cusp at origin).
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Find where the curve passes through the origin.
  $$r = 0$$
  $$2 + 2\\cos(\\theta) = 0$$
  $$\\cos(\\theta) = -1$$
  $$\\theta = \\pi$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> The cardioid passes through the origin at $\\theta = \\pi$. It is a heart-shaped curve with maximum distance 4 from the origin (at $\\theta = 0$) and a cusp at the origin.
</div>
        `
      }
    ],
    practice: [
      {
        id: '9.3.1',
        type: 'fill',
        question: 'Convert $(x, y) = (1, \\sqrt{3})$ to polar coordinates. Use $r > 0$ and $0 \\leq \\theta < 2\\pi$.',
        answer: '(2, \\frac{\\pi}{3})',
        explanation: '$r = \\sqrt{1^2 + (\\sqrt{3})^2} = 2$. $\\tan(\\theta) = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$, so $\\theta = \\frac{\\pi}{3}$.'
      },
      {
        id: '9.3.2',
        type: 'mc',
        question: 'Which polar equation represents a circle of radius 5 centered at the origin?',
        choices: ['$r = 5\\cos(\\theta)$', '$r = 5$', '$r = 5\\sin(\\theta)$', '$r^2 = 25\\cos(\\theta)$'],
        answer: '$r = 5$',
        explanation: 'A circle centered at the origin with radius $a$ has the simple equation $r = a$. Here, $r = 5$.'
      },
      {
        id: '9.3.3',
        type: 'fill',
        question: 'Convert $x^2 + y^2 = 9$ to polar form.',
        answer: 'r = 3',
        explanation: 'Since $r^2 = x^2 + y^2$, we have $r^2 = 9$, so $r = 3$ (taking $r > 0$).'
      },
      {
        id: '9.3.4',
        type: 'mc',
        question: 'The rose curve $r = 3\\sin(2\\theta)$ has how many petals?',
        choices: ['2 petals', '3 petals', '4 petals', '6 petals'],
        answer: '4 petals',
        explanation: 'For $r = a\\sin(n\\theta)$ with $n = 2$ (even), the number of petals is $2n = 4$.'
      },
      {
        id: '9.3.5',
        type: 'fill',
        question: 'At what angle $\\theta$ (in $[0, 2\\pi)$) does the cardioid $r = 1 + \\cos(\\theta)$ have its cusp?',
        answer: '\\theta = \\pi',
        explanation: 'The cusp occurs where $r = 0$: $1 + \\cos(\\theta) = 0 \\Rightarrow \\cos(\\theta) = -1 \\Rightarrow \\theta = \\pi$.'
      }
    ]
  },

  {
    id: '9.4',
    unit: 9,
    title: 'Area & Arc Length in Polar Form',
    learn: `
<div class="concept-card">
  <h3>Area in Polar Coordinates</h3>
  <p>The area enclosed by a polar curve $r = f(\\theta)$ from $\\theta = a$ to $\\theta = b$ is:</p>
  <div class="formula-box">
    $$A = \\frac{1}{2}\\int_a^b r^2 \\, d\\theta$$
  </div>
  <p>This formula comes from the fact that a small sector with angle $d\\theta$ and radius $r$ has area $\\frac{1}{2}r^2 d\\theta$.</p>
</div>

<div class="concept-card">
  <h3>Area Between Two Polar Curves</h3>
  <p>If two curves $r = f(\\theta)$ and $r = g(\\theta)$ intersect, with $f(\\theta) \\geq g(\\theta)$ on $[a, b]$, the area between them is:</p>
  <div class="formula-box">
    $$A = \\frac{1}{2}\\int_a^b [r_1^2 - r_2^2] \\, d\\theta$$
  </div>
  <p>First, find intersection points by setting the curves equal, then integrate.</p>
</div>

<div class="concept-card">
  <h3>Arc Length in Polar Form</h3>
  <p>The arc length of a polar curve $r = f(\\theta)$ from $\\theta = a$ to $\\theta = b$ is:</p>
  <div class="formula-box">
    $$L = \\int_a^b \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} \\, d\\theta$$
  </div>
  <p>This is similar to parametric arc length, with $r$ and $\\theta$ playing the roles of $x$ and $y$.</p>
</div>

<div class="tip-box">
  <div class="tip-icon">💡</div>
  <p><strong>Tip:</strong> When finding area, determine the limits of integration carefully. For instance, a full cardioid traced once requires $\\theta \\in [0, 2\\pi]$, but a rose curve may retrace itself, so identify the appropriate range.</p>
</div>
    `,
    examples: [
      {
        number: 1,
        problem: 'Find the area enclosed by the circle $r = 3\\cos(\\theta)$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Identify the curve. We know that $r = 3\\cos(\\theta)$ is a circle of radius $\\frac{3}{2}$ centered at $(\\frac{3}{2}, 0)$.
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Determine the limits of integration. The circle is traced completely as $\\theta$ goes from $-\\frac{\\pi}{2}$ to $\\frac{\\pi}{2}$.
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Set up the area integral.
  $$A = \\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} (3\\cos\\theta)^2 \\, d\\theta = \\frac{9}{2}\\int_{-\\pi/2}^{\\pi/2} \\cos^2\\theta \\, d\\theta$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Use the identity $\\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}$.
  $$A = \\frac{9}{2}\\int_{-\\pi/2}^{\\pi/2} \\frac{1 + \\cos(2\\theta)}{2} \\, d\\theta = \\frac{9}{4}\\int_{-\\pi/2}^{\\pi/2} [1 + \\cos(2\\theta)] \\, d\\theta$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 5:</strong> Evaluate.
  $$A = \\frac{9}{4}\\left[\\theta + \\frac{\\sin(2\\theta)}{2}\\right]_{-\\pi/2}^{\\pi/2} = \\frac{9}{4}\\left[\\left(\\frac{\\pi}{2} + 0\\right) - \\left(-\\frac{\\pi}{2} + 0\\right)\\right] = \\frac{9}{4} \\cdot \\pi = \\frac{9\\pi}{4}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> The area is $\\frac{9\\pi}{4}$. (Check: radius $= \\frac{3}{2}$, so area $= \\pi(\\frac{3}{2})^2 = \\frac{9\\pi}{4}$ ✓)
</div>
        `
      },
      {
        number: 2,
        problem: 'Find the area inside $r = 2\\sin(\\theta)$ and outside $r = 1$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Identify the curves. $r = 2\\sin(\\theta)$ is a circle of radius 1 centered at $(0, 1)$. $r = 1$ is a circle of radius 1 centered at the origin.
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Find intersection points. Set $2\\sin(\\theta) = 1$:
  $$\\sin(\\theta) = \\frac{1}{2}$$
  $$\\theta = \\frac{\\pi}{6} \\text{ or } \\theta = \\frac{5\\pi}{6}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> On the interval $[\\frac{\\pi}{6}, \\frac{5\\pi}{6}]$, we have $2\\sin(\\theta) \\geq 1$, so the area between them is:
  $$A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} [(2\\sin\\theta)^2 - 1^2] \\, d\\theta = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} [4\\sin^2\\theta - 1] \\, d\\theta$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Use $\\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}$.
  $$4\\sin^2\\theta - 1 = 4 \\cdot \\frac{1 - \\cos(2\\theta)}{2} - 1 = 2(1 - \\cos(2\\theta)) - 1 = 1 - 2\\cos(2\\theta)$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 5:</strong> Integrate.
  $$A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} [1 - 2\\cos(2\\theta)] \\, d\\theta = \\frac{1}{2}\\left[\\theta - \\sin(2\\theta)\\right]_{\\pi/6}^{5\\pi/6}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 6:</strong> Evaluate.
  At $\\theta = \\frac{5\\pi}{6}$: $\\sin(\\frac{5\\pi}{3}) = -\\frac{\\sqrt{3}}{2}$.
  At $\\theta = \\frac{\\pi}{6}$: $\\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$.
  $$A = \\frac{1}{2}\\left[\\left(\\frac{5\\pi}{6} - (-\\frac{\\sqrt{3}}{2})\\right) - \\left(\\frac{\\pi}{6} - \\frac{\\sqrt{3}}{2}\\right)\\right] = \\frac{1}{2}\\left[\\frac{5\\pi}{6} - \\frac{\\pi}{6} + \\sqrt{3}\\right]$$
  $$= \\frac{1}{2}\\left[\\frac{4\\pi}{6} + \\sqrt{3}\\right] = \\frac{1}{2}\\left[\\frac{2\\pi}{3} + \\sqrt{3}\\right] = \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> The area is $\\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$.
</div>
        `
      },
      {
        number: 3,
        problem: 'Find the arc length of $r = e^{\\theta}$ from $\\theta = 0$ to $\\theta = \\pi$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find $\\frac{dr}{d\\theta}$.
  $$\\frac{dr}{d\\theta} = e^{\\theta}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Compute $r^2 + (\\frac{dr}{d\\theta})^2$.
  $$r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2 = (e^{\\theta})^2 + (e^{\\theta})^2 = 2e^{2\\theta}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Take the square root.
  $$\\sqrt{2e^{2\\theta}} = \\sqrt{2} \\cdot e^{\\theta}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Set up the arc length integral.
  $$L = \\int_0^{\\pi} \\sqrt{2} \\cdot e^{\\theta} \\, d\\theta$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 5:</strong> Evaluate.
  $$L = \\sqrt{2} \\int_0^{\\pi} e^{\\theta} \\, d\\theta = \\sqrt{2} [e^{\\theta}]_0^{\\pi} = \\sqrt{2}(e^{\\pi} - 1)$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> The arc length is $\\sqrt{2}(e^{\\pi} - 1)$.
</div>
        `
      }
    ],
    practice: [
      {
        id: '9.4.1',
        type: 'fill',
        question: 'Find the area enclosed by one petal of $r = 4\\cos(3\\theta)$.',
        answer: '\\frac{4\\pi}{3}',
        explanation: 'One petal corresponds to $\\theta \\in [-\\frac{\\pi}{6}, \\frac{\\pi}{6}]$. Area $= \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6} 16\\cos^2(3\\theta) d\\theta = 8\\int_{-\\pi/6}^{\\pi/6}[1 + \\cos(6\\theta)] d\\theta = 8[\\frac{\\pi}{3}] = \\frac{8\\pi}{3}$... let me recalculate. Using $\\cos^2(3\\theta) = \\frac{1+\\cos(6\\theta)}{2}$: $A = \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6} 16 \\cdot \\frac{1+\\cos(6\\theta)}{2} d\\theta = 4[\\theta + \\frac{\\sin(6\\theta)}{6}]_{-\\pi/6}^{\\pi/6} = 4 \\cdot \\frac{\\pi}{3} = \\frac{4\\pi}{3}$.'
      },
      {
        id: '9.4.2',
        type: 'mc',
        question: 'What is the area of the entire cardioid $r = 1 + \\cos(\\theta)$?',
        choices: ['$\\frac{3\\pi}{2}$', '$\\frac{3\\pi}{4}$', '$2\\pi$', '$\\frac{\\pi}{2}$'],
        answer: '$\\frac{3\\pi}{2}$',
        explanation: 'Area $= \\frac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^2 d\\theta = \\frac{1}{2}\\int_0^{2\\pi}[1 + 2\\cos\\theta + \\cos^2\\theta]d\\theta = \\frac{1}{2}[2\\pi + 0 + \\frac{\\pi}{2}] = \\frac{3\\pi}{2}$.'
      },
      {
        id: '9.4.3',
        type: 'fill',
        question: 'Find the area of the region inside $r = 2$ and outside $r = 2\\cos(\\theta)$.',
        answer: '\\pi',
        explanation: 'Intersection: $2 = 2\\cos\\theta \\Rightarrow \\theta = 0$. For $|\\theta| \\leq \\frac{\\pi}{2}$, $r = 2 \\geq 2\\cos\\theta$. Area $= \\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}[4 - 4\\cos^2\\theta]d\\theta = 2\\int_{-\\pi/2}^{\\pi/2}\\sin^2\\theta d\\theta = \\int_{-\\pi/2}^{\\pi/2}[1-\\cos(2\\theta)]d\\theta = [\\theta - \\frac{\\sin(2\\theta)}{2}]_{-\\pi/2}^{\\pi/2} = \\pi$.'
      },
      {
        id: '9.4.4',
        type: 'mc',
        question: 'What does the polar curve $r^2 = 4\\sin(2\\theta)$ represent?',
        choices: ['A cardioid', 'A lemniscate', 'A rose curve', 'A limaçon'],
        answer: 'A lemniscate',
        explanation: 'The equation $r^2 = a^2\\sin(2\\theta)$ (or $\\cos(2\\theta)$) is the standard form of a lemniscate, which looks like a figure-eight.'
      }
    ]
  },

  {
    id: '9.5',
    unit: 9,
    title: 'Vector-Valued Functions',
    learn: `
<div class="concept-card">
  <h3>Vector-Valued Functions</h3>
  <p>A vector-valued function (or parametric vector function) maps a scalar parameter $t$ to a vector in the plane:</p>
  <div class="formula-box">
    $$\\mathbf{r}(t) = \\langle x(t), y(t) \\rangle$$
  </div>
  <p>The position vector $\\mathbf{r}(t)$ represents the location of a particle at time $t$.</p>
</div>

<div class="concept-card">
  <h3>Velocity and Acceleration</h3>
  <p><strong>Velocity:</strong> The derivative of position with respect to time.</p>
  <div class="formula-box">
    $$\\mathbf{v}(t) = \\mathbf{r}\'(t) = \\langle x\'(t), y\'(t) \\rangle$$
  </div>
  <p><strong>Acceleration:</strong> The derivative of velocity (second derivative of position).</p>
  <div class="formula-box">
    $$\\mathbf{a}(t) = \\mathbf{v}\'(t) = \\mathbf{r}\'\'(t) = \\langle x\'\'(t), y\'\'(t) \\rangle$$
  </div>
</div>

<div class="concept-card">
  <h3>Speed and Distance</h3>
  <p><strong>Speed:</strong> The magnitude of velocity (always non-negative).</p>
  <div class="formula-box">
    $$|\\mathbf{v}(t)| = \\sqrt{[x\'(t)]^2 + [y\'(t)]^2}$$
  </div>
  <p><strong>Distance traveled:</strong> The integral of speed (arc length).</p>
  <div class="formula-box">
    $$\\text{Distance} = \\int_a^b |\\mathbf{v}(t)| \\, dt$$
  </div>
  <p><strong>Displacement:</strong> The vector from starting position to ending position (a vector, not a scalar).</p>
  <div class="formula-box">
    $$\\text{Displacement} = \\mathbf{r}(b) - \\mathbf{r}(a)$$
  </div>
</div>

<div class="concept-card">
  <h3>Slope of the Path</h3>
  <p>The slope of the curve traced by $\\mathbf{r}(t)$ at a given point is:</p>
  <div class="formula-box">
    $$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y\'(t)}{x\'(t)}$$
  </div>
  <p>This is the same formula as for parametric curves.</p>
</div>

<div class="tip-box">
  <div class="tip-icon">💡</div>
  <p><strong>Tip:</strong> Remember that speed is a scalar (magnitude), while velocity is a vector. Displacement is a vector, while distance is a scalar.</p>
</div>
    `,
    examples: [
      {
        number: 1,
        problem: 'For the vector-valued function $\\mathbf{r}(t) = \\langle t^2 - 1, 2t \\rangle$, find the velocity, acceleration, and speed at $t = 1$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find the velocity vector.
  $$\\mathbf{v}(t) = \\mathbf{r}\'(t) = \\langle 2t, 2 \\rangle$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Find the acceleration vector.
  $$\\mathbf{a}(t) = \\mathbf{v}\'(t) = \\langle 2, 0 \\rangle$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Evaluate at $t = 1$.
  $$\\mathbf{v}(1) = \\langle 2(1), 2 \\rangle = \\langle 2, 2 \\rangle$$
  $$\\mathbf{a}(1) = \\langle 2, 0 \\rangle$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Find the speed at $t = 1$.
  $$|\\mathbf{v}(1)| = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> $\\mathbf{v}(1) = \\langle 2, 2 \\rangle$, $\\mathbf{a}(1) = \\langle 2, 0 \\rangle$, speed $= 2\\sqrt{2}$.
</div>
        `
      },
      {
        number: 2,
        problem: 'A particle has velocity $\\mathbf{v}(t) = \\langle \\cos(t), -\\sin(t) \\rangle$ and initial position $\\mathbf{r}(0) = \\langle 1, 2 \\rangle$. Find the position function $\\mathbf{r}(t)$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Integrate the velocity to find position.
  $$\\mathbf{r}(t) = \\int \\mathbf{v}(t) \\, dt = \\int \\langle \\cos(t), -\\sin(t) \\rangle \\, dt = \\langle \\sin(t), \\cos(t) \\rangle + \\mathbf{C}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Use the initial condition $\\mathbf{r}(0) = \\langle 1, 2 \\rangle$.
  $$\\langle \\sin(0), \\cos(0) \\rangle + \\mathbf{C} = \\langle 1, 2 \\rangle$$
  $$\\langle 0, 1 \\rangle + \\mathbf{C} = \\langle 1, 2 \\rangle$$
  $$\\mathbf{C} = \\langle 1, 1 \\rangle$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Write the position function.
  $$\\mathbf{r}(t) = \\langle \\sin(t) + 1, \\cos(t) + 1 \\rangle$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Verify at $t = 0$: $\\mathbf{r}(0) = \\langle 1, 2 \\rangle$ ✓
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> $\\mathbf{r}(t) = \\langle \\sin(t) + 1, \\cos(t) + 1 \\rangle$.
</div>
        `
      },
      {
        number: 3,
        problem: 'Find the total distance traveled by a particle with $\\mathbf{r}(t) = \\langle t^3, t^2 \\rangle$ from $t = 0$ to $t = 2$.',
        solution: `
<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 1:</strong> Find the velocity.
  $$\\mathbf{v}(t) = \\langle 3t^2, 2t \\rangle$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 2:</strong> Find the speed.
  $$|\\mathbf{v}(t)| = \\sqrt{(3t^2)^2 + (2t)^2} = \\sqrt{9t^4 + 4t^2} = \\sqrt{t^2(9t^2 + 4)} = |t|\\sqrt{9t^2 + 4}$$
  Since $t \\in [0, 2]$, we have $t \\geq 0$, so $|t| = t$.
  $$|\\mathbf{v}(t)| = t\\sqrt{9t^2 + 4}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 3:</strong> Set up the distance integral.
  $$\\text{Distance} = \\int_0^2 t\\sqrt{9t^2 + 4} \\, dt$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 4:</strong> Use substitution $u = 9t^2 + 4$, so $du = 18t \\, dt$ and $t \\, dt = \\frac{du}{18}$.
  When $t = 0$: $u = 4$. When $t = 2$: $u = 9(4) + 4 = 40$.
  $$\\text{Distance} = \\int_4^{40} \\sqrt{u} \\cdot \\frac{du}{18} = \\frac{1}{18}\\int_4^{40} u^{1/2} \\, du$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Step 5:</strong> Evaluate.
  $$\\text{Distance} = \\frac{1}{18} \\cdot \\frac{2}{3}u^{3/2}\\bigg|_4^{40} = \\frac{1}{27}[(40)^{3/2} - (4)^{3/2}]$$
  $$= \\frac{1}{27}[40\\sqrt{40} - 8] = \\frac{1}{27}[40 \\cdot 2\\sqrt{10} - 8] = \\frac{80\\sqrt{10} - 8}{27}$$
</div>

<div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
  <strong>Answer:</strong> The total distance traveled is $\\frac{80\\sqrt{10} - 8}{27}$.
</div>
        `
      }
    ],
    practice: [
      {
        id: '9.5.1',
        type: 'fill',
        question: 'For $\\mathbf{r}(t) = \\langle e^t, t^2 \\rangle$, find $\\mathbf{v}(1)$.',
        answer: '\\langle e, 2 \\rangle',
        explanation: '$\\mathbf{v}(t) = \\langle e^t, 2t \\rangle$. At $t = 1$: $\\mathbf{v}(1) = \\langle e, 2 \\rangle$.'
      },
      {
        id: '9.5.2',
        type: 'mc',
        question: 'A particle has constant acceleration $\\mathbf{a}(t) = \\langle 0, -10 \\rangle$ and initial velocity $\\mathbf{v}(0) = \\langle 5, 20 \\rangle$. What is the velocity at $t = 1$?',
        choices: ['$\\langle 5, 10 \\rangle$', '$\\langle 0, 0 \\rangle$', '$\\langle 5, 30 \\rangle$', '$\\langle 10, 10 \\rangle$'],
        answer: '$\\langle 5, 10 \\rangle$',
        explanation: '$\\mathbf{v}(t) = \\mathbf{v}(0) + \\int_0^t \\mathbf{a}(s) \\, ds = \\langle 5, 20 \\rangle + \\langle 0, -10t \\rangle = \\langle 5, 20 - 10t \\rangle$. At $t = 1$: $\\mathbf{v}(1) = \\langle 5, 10 \\rangle$.'
      },
      {
        id: '9.5.3',
        type: 'fill',
        question: 'For $\\mathbf{r}(t) = \\langle \\cos(t), \\sin(t) \\rangle$, the speed is constant. What is it?',
        answer: '1',
        explanation: '$\\mathbf{v}(t) = \\langle -\\sin(t), \\cos(t) \\rangle$. Speed $= \\sqrt{\\sin^2(t) + \\cos^2(t)} = 1$.'
      },
      {
        id: '9.5.4',
        type: 'mc',
        question: 'A particle starts at $(0, 0)$ with velocity $\\mathbf{v}(t) = \\langle 1, 1 \\rangle$ (constant). Where is it at $t = 5$?',
        choices: ['$(1, 1)$', '$(5, 5)$', '$(0, 0)$', '$(2.5, 2.5)$'],
        answer: '$(5, 5)$',
        explanation: '$\\mathbf{r}(t) = \\mathbf{r}(0) + \\int_0^t \\mathbf{v}(s) \\, ds = \\langle 0, 0 \\rangle + \\langle t, t \\rangle = \\langle t, t \\rangle$. At $t = 5$: $\\mathbf{r}(5) = \\langle 5, 5 \\rangle = (5, 5)$.'
      }
    ]
  }
];
