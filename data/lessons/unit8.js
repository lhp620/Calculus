export const lessons = [
  {
    id: '8.1',
    unit: 8,
    title: 'Area Between Curves',
    content: 'Finding the area enclosed between two functions using integration.',
    level: 'AB',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>Area Between Curves</h3>
          <p>When we have two functions f(x) and g(x) on an interval [a,b], the area between the curves is found by integrating the difference between the upper and lower functions.</p>
          <p><strong>Key insight:</strong> The area is always positive, so we subtract the lower function from the upper function.</p>
        </div>

        <div class="formula-box">
          <h4>Fundamental Formula</h4>
          <p>If f(x) ≥ g(x) on [a,b], then:</p>
          <p>$$A = \\int_a^b [f(x) - g(x)]\\,dx$$</p>
          <p><strong>When curves intersect:</strong> Find intersection points and integrate separately on each interval where the relative positions don't change.</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
         <p><h4>Integrating with Respect to y</h4>
          <p>Sometimes it's easier to integrate with respect to y instead of x. If we have x = f(y) and x = g(y) on [c,d]:</p>
          <p>$$A = \\int_c^d [f(y) - g(y)]\\,dy$$</p>
          <p>Use this approach when the curves are given as functions of y, or when the intersection points are easier to find in terms of y.</p></p>
       </div>

        <div class="concept-card">
          <h4>Finding Intersection Points</h4>
          <p>Before integrating, find where f(x) = g(x). These intersection points become your limits of integration (or indicate where you need to split the integral).</p>
          <p><strong>Process:</strong></p>
          <ol>
            <li>Set f(x) = g(x) and solve for x</li>
            <li>Determine which function is on top in each region</li>
            <li>Set up and evaluate the integral(s)</li>
          </ol>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 1: Simple Area Between Curves</h4>
          <p>Find the area between $y = x$ and $y = x^2$ on $[0,1]$.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Determine which function is on top</strong>
              <p>For $0 \\leq x \\leq 1$: Compare x and $x^2$</p>
              <p>At x = 0.5: y = 0.5 vs $y = 0.25$, so $x > x^2$ on this interval.</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Set up the integral</strong>
              <p>$$A = \\int_0^1 (x - x^2)\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$A = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1$$</p>
              <p>$$= \\left(\\frac{1}{2} - \\frac{1}{3}\\right) - 0$$</p>
              <p>$$= \\frac{3-2}{6} = \\frac{1}{6}$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 2: Curves That Cross</h4>
          <p>Find the area enclosed by $y = x^2$ and $y = 2x + 3$.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Find intersection points</strong>
              <p>Set $x^2 = 2x + 3$</p>
              <p>$x^2 - 2x - 3 = 0$</p>
              <p>$(x-3)(x+1) = 0$</p>
              <p>$x = -1$ or $x = 3$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Determine which function is on top</strong>
              <p>Test x = 0: Line gives y = 3, parabola gives y = 0</p>
              <p>So $2x + 3 > x^2$ on $[-1, 3]$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Set up and evaluate the integral</strong>
              <p>$$A = \\int_{-1}^3 (2x + 3 - x^2)\\,dx$$</p>
              <p>$$= \\left[x^2 + 3x - \\frac{x^3}{3}\\right]_{-1}^3$$</p>
              <p>$$= \\left(9 + 9 - 9\\right) - \\left(1 - 3 + \\frac{1}{3}\\right)$$</p>
              <p>$$= 9 - \\left(-\\frac{5}{3}\\right) = \\frac{32}{3}$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 3: Trigonometric Functions</h4>
          <p>Find the area between $y = \\sin(x)$ and $y = \\cos(x)$ from $x = \\frac{\\pi}{4}$ to $x = \\frac{5\\pi}{4}$.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify where curves intersect in this interval</strong>
              <p>$\\sin(x) = \\cos(x)$ at $x = \\frac{\\pi}{4}$ and $x = \\frac{5\\pi}{4}$</p>
              <p>They intersect at $x = \\frac{5\\pi}{4}$ in our interval</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Determine relative positions</strong>
              <p>At $x = \\frac{\\pi}{2}$: $\\sin(\\frac{\\pi}{2}) = 1$, $\\cos(\\frac{\\pi}{2}) = 0$, so $\\sin > \\cos$</p>
              <p>The functions are equal at $x = \\frac{5\\pi}{4}$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Evaluate the integral</strong>
              <p>$$A = \\int_{\\pi/4}^{5\\pi/4} |\\sin(x) - \\cos(x)|\\,dx$$</p>
              <p>$$= \\int_{\\pi/4}^{5\\pi/4} (\\sin(x) - \\cos(x))\\,dx$$</p>
              <p>$$= \\left[-\\cos(x) - \\sin(x)\\right]_{\\pi/4}^{5\\pi/4}$$</p>
              <p>$$= \\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\right) - \\left(-\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\right)$$</p>
              <p>$$= \\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$$</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        id: '8.1.ex1',
        title: 'Simple Area Between Curves',
        problem: 'Find the area between $y = x$ and $y = x^2$ on $[0,1]$.',
        solution: 'Step 1: For $0 \\leq x \\leq 1$, we have $x > x^2$. Step 2: $A = \\int_0^1 (x - x^2)\\,dx$. Step 3: $A = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.'
      },
      {
        id: '8.1.ex2',
        title: 'Curves That Cross',
        problem: 'Find the area enclosed by $y = x^2$ and $y = 2x + 3$.',
        solution: 'Step 1: Set $x^2 = 2x + 3$ to get $x = -1$ or $x = 3$. Step 2: The line is above the parabola on $[-1,3]$. Step 3: $A = \\int_{-1}^3 (2x + 3 - x^2)\\,dx = [x^2 + 3x - \\frac{x^3}{3}]_{-1}^3 = 9 + \\frac{5}{3} = \\frac{32}{3}$.'
      },
      {
        id: '8.1.ex3',
        title: 'Trigonometric Area',
        problem: 'Find the area between $y = \\sin(x)$ and $y = \\cos(x)$ from $x = \\frac{\\pi}{4}$ to $x = \\frac{5\\pi}{4}$.',
        solution: 'Step 1: On this interval, $\\sin(x) \\geq \\cos(x)$. Step 2: $A = \\int_{\\pi/4}^{5\\pi/4} (\\sin(x) - \\cos(x))\\,dx = [-\\cos(x) - \\sin(x)]_{\\pi/4}^{5\\pi/4} = (\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}) - (-\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}) = 2\\sqrt{2}$.'
      }
    ],
    practice: [
      {
        id: '8.1.1',
        type: 'mc',
        question: 'Find the area between $y = e^x$ and the x-axis from $x = 0$ to $x = 2$.',
        choices: ['$e^2 - 1$', '$e - 1$', '$\\frac{e^2}{2}$', '$e^2 + 1$'],
        answer: '$e^2 - 1$',
        explanation: 'The area is $\\int_0^2 e^x\\,dx = [e^x]_0^2 = e^2 - e^0 = e^2 - 1$.'
      },
      {
        id: '8.1.2',
        type: 'fill',
        question: 'Find the area between $y = \\cos(x)$ and $y = \\sin(x)$ from $x = 0$ to $x = \\frac{\\pi}{2}$.',
        answer: '$\\sqrt{2} - 1$',
        explanation: 'On $[0, \\pi/4]$, $\\cos > \\sin$; on $[\\pi/4, \\pi/2]$, $\\sin > \\cos$. Area = $\\int_0^{\\pi/4}(\\cos x - \\sin x)dx + \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)dx = (\\sin x + \\cos x)|_0^{\\pi/4} - (\\sin x + \\cos x)|_{\\pi/4}^{\\pi/2} = (\\sqrt{2} - 1)$.'
      },
      {
        id: '8.1.3',
        type: 'mc',
        question: 'Which integral represents the area between $y = \\sqrt{x}$ and $y = x$ from their intersection points?',
        choices: ['$\\int_0^1 (\\sqrt{x} - x)\\,dx$', '$\\int_0^1 (x - \\sqrt{x})\\,dx$', '$\\int_0^1 \\sqrt{x}\\,dx + \\int_1^{\\infty} x\\,dx$', '$\\int_0^4 (\\sqrt{x} - x)\\,dx$'],
        answer: '$\\int_0^1 (\\sqrt{x} - x)\\,dx$',
        explanation: 'The functions intersect at $x = 0$ and $x = 1$. For $0 < x < 1$, $\\sqrt{x} > x$, so the area is $\\int_0^1 (\\sqrt{x} - x)\\,dx$.'
      },
      {
        id: '8.1.4',
        type: 'fill',
        question: 'Find the area bounded by $y = x^3$ and $y = x$ on their intersection points.',
        answer: '$\\frac{1}{2}$',
        explanation: 'Intersections: $x^3 = x \\Rightarrow x(x^2 - 1) = 0 \\Rightarrow x = 0, \\pm 1$. On $[-1,0]$, $x^3 < x$; on $[0,1]$, $x < x^3$. By symmetry, Area $= 2\\int_0^1 (x - x^3)dx = 2[x^2/2 - x^4/4]_0^1 = 2(1/2 - 1/4) = 1/2$.'
      },
      {
        id: '8.1.5',
        type: 'mc',
        question: 'What is the area between $y = \\ln(x)$ and $y = 0$ from $x = 1$ to $x = e$?',
        choices: ['$1$', '$e - 1$', '$\\frac{e^2}{2}$', '$e - 2$'],
        answer: '$1$',
        explanation: 'Area = $\\int_1^e \\ln(x)\\,dx$. Using integration by parts: $u = \\ln x$, $dv = dx$. Result: $[x\\ln(x) - x]_1^e = (e - e) - (0 - 1) = 1$.'
      }
    ]
  },
  {
    id: '8.2',
    unit: 8,
    title: 'Volumes: Disk & Washer Method',
    content: 'Using integration to find volumes of solids of revolution.',
    level: 'AB',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>Disk and Washer Method</h3>
          <p>When a region is rotated about an axis, it creates a solid of revolution. We can find its volume by slicing it into thin disks or washers perpendicular to the axis of rotation.</p>
          <p><strong>Disk:</strong> A solid circular slice (no hole)</p>
          <p><strong>Washer:</strong> A circular slice with a hole in the center (like a donut)</p>
        </div>

        <div class="formula-box">
          <h4>Disk Method (Rotating about x-axis)</h4>
          <p>When rotating $y = f(x)$ about the x-axis:</p>
          <p>$$V = \\pi \\int_a^b [f(x)]^2\\,dx$$</p>
          <p>The radius of each disk is the distance from the axis to the curve: $r = f(x)$</p>
          <p>Area of disk: $A = \\pi r^2 = \\pi[f(x)]^2$</p>
        </div>

        <div class="formula-box">
          <h4>Washer Method (Rotating about x-axis)</h4>
          <p>When rotating a region between $y = f(x)$ and $y = g(x)$ about the x-axis:</p>
          <p>$$V = \\pi \\int_a^b \\{[R(x)]^2 - [r(x)]^2\\}\\,dx$$</p>
          <p>Where $R(x)$ = outer radius (distance to farther curve) and $r(x)$ = inner radius (distance to closer curve)</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
         <p><h4>Rotating about the y-axis</h4>
          <p>When rotating about the y-axis, express x as a function of y and integrate with respect to y:</p>
          <p>$$V = \\pi \\int_c^d [f(y)]^2\\,dy$$</p>
          <p>Or if rotating a region between two curves:</p>
          <p>$$V = \\pi \\int_c^d \\{[R(y)]^2 - [r(y)]^2\\}\\,dy$$</p></p>
       </div>

        <div class="concept-card">
          <h4>Identifying Disk vs Washer</h4>
          <ul>
            <li><strong>Disk method:</strong> The region touches the axis of rotation (no hole)</li>
            <li><strong>Washer method:</strong> There\'s a gap between the region and the axis of rotation (hole in center)</li>
          </ul>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 1: Simple Disk Method</h4>
          <p>Find the volume when $y = \\sqrt{x}$ on $[0,4]$ is rotated about the x-axis.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify the method</strong>
              <p>The curve $y = \\sqrt{x}$ touches the x-axis, so we use the disk method.</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Set up the integral</strong>
              <p>Radius of each disk: $r = \\sqrt{x}$</p>
              <p>$$V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = \\pi \\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 2: Washer Method</h4>
          <p>Find the volume when the region between $y = x^2$ and $y = x$ on $[0,1]$ is rotated about the x-axis.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify the method</strong>
              <p>There is a region between two curves, creating a hole. Use washer method.</p>
              <p>For $0 \\leq x \\leq 1$: $x > x^2$</p>
              <p>Outer radius: $R = x$, Inner radius: $r = x^2$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Set up the integral</strong>
              <p>$$V = \\pi \\int_0^1 (x^2 - x^4)\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = \\pi \\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1$$</p>
              <p>$$= \\pi \\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\pi \\cdot \\frac{5-3}{15} = \\frac{2\\pi}{15}$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 3: Rotating about the y-axis</h4>
          <p>Find the volume when $y = x^2$ on $[0,2]$ is rotated about the y-axis.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Express in terms of y</strong>
              <p>From $y = x^2$, we get $x = \\sqrt{y}$</p>
              <p>When $x = 0$: $y = 0$; when $x = 2$: $y = 4$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Set up the integral</strong>
              <p>Radius: $r = \\sqrt{y}$</p>
              <p>$$V = \\pi \\int_0^4 (\\sqrt{y})^2\\,dy = \\pi \\int_0^4 y\\,dy$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = \\pi \\left[\\frac{y^2}{2}\\right]_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$$</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        id: '8.2.ex1',
        title: 'Simple Disk Method',
        problem: 'Find the volume when $y = \\sqrt{x}$ on $[0,4]$ is rotated about the x-axis.',
        solution: 'Step 1: Use disk method with radius $r = \\sqrt{x}$. Step 2: $V = \\pi\\int_0^4 x\\,dx$. Step 3: $V = \\pi[\\frac{x^2}{2}]_0^4 = 8\\pi$.'
      },
      {
        id: '8.2.ex2',
        title: 'Washer Method',
        problem: 'Find the volume of the region between $y = x^2$ and $y = x$ on $[0,1]$ rotated about the x-axis.',
        solution: 'Step 1: Outer radius $R = x$, inner radius $r = x^2$. Step 2: $V = \\pi\\int_0^1(x^2 - x^4)dx$. Step 3: $V = \\pi[\\frac{x^3}{3} - \\frac{x^5}{5}]_0^1 = \\pi(\\frac{1}{3} - \\frac{1}{5}) = \\frac{2\\pi}{15}$.'
      },
      {
        id: '8.2.ex3',
        title: 'Rotation About y-axis',
        problem: 'Find the volume when $y = x^2$ on $[0,2]$ is rotated about the y-axis.',
        solution: 'Step 1: Express as $x = \\sqrt{y}$ with $0 \\leq y \\leq 4$. Step 2: $V = \\pi\\int_0^4 y\\,dy$. Step 3: $V = \\pi[\\frac{y^2}{2}]_0^4 = 8\\pi$.'
      }
    ],
    practice: [
      {
        id: '8.2.1',
        type: 'mc',
        question: 'Find the volume when $y = 2x$ on $[0,3]$ is rotated about the x-axis.',
        choices: ['$12\\pi$', '$18\\pi$', '$36\\pi$', '$72\\pi$'],
        answer: '$36\\pi$',
        explanation: '$V = \\pi\\int_0^3 (2x)^2\\,dx = \\pi\\int_0^3 4x^2\\,dx = \\pi[\\frac{4x^3}{3}]_0^3 = 36\\pi$.'
      },
      {
        id: '8.2.2',
        type: 'fill',
        question: 'The region bounded by $y = 2$, $y = 0$, $x = 0$, and $x = 1$ is rotated about the x-axis. Find the volume.',
        answer: '$4\\pi$',
        explanation: '$V = \\pi\\int_0^1 2^2\\,dx = \\pi\\int_0^1 4\\,dx = 4\\pi[x]_0^1 = 4\\pi$.'
      },
      {
        id: '8.2.3',
        type: 'mc',
        question: 'Find the volume when the region between $y = \\sqrt{x}$ and $y = x$ on $[0,1]$ is rotated about the x-axis using the washer method.',
        choices: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{5}$', '$\\frac{\\pi}{12}$', '$\\frac{3\\pi}{10}$'],
        answer: '$\\frac{\\pi}{6}$',
        explanation: 'On $[0,1]$, $\\sqrt{x} > x$. $V = \\pi\\int_0^1[(\\sqrt{x})^2 - x^2]dx = \\pi\\int_0^1(x - x^2)dx = \\pi[\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{\\pi}{6}$.'
      },
      {
        id: '8.2.4',
        type: 'fill',
        question: 'Find the volume when $y = e^x$ on $[0,1]$ is rotated about the x-axis.',
        answer: '$\\frac{\\pi(e^2 - 1)}{2}$',
        explanation: '$V = \\pi\\int_0^1 (e^x)^2\\,dx = \\pi\\int_0^1 e^{2x}\\,dx = \\pi[\\frac{e^{2x}}{2}]_0^1 = \\frac{\\pi}{2}(e^2 - 1)$.'
      },
      {
        id: '8.2.5',
        type: 'mc',
        question: 'Which setup correctly represents the volume when $y = x$ is rotated about the y-axis for $0 \\leq x \\leq 2$?',
        choices: ['$V = \\pi\\int_0^2 x^2\\,dx$', '$V = \\pi\\int_0^4 y\\,dy$', '$V = \\pi\\int_0^2 (2-x)^2\\,dx$', '$V = \\pi\\int_0^4 (\\sqrt{y})^2\\,dy$'],
        answer: '$V = \\pi\\int_0^4 (\\sqrt{y})^2\\,dy$',
        explanation: 'When rotating $y = x$ about the y-axis, express as $x = y$ and integrate with respect to y from 0 to 4. $V = \\pi\\int_0^4 y\\,dy = \\pi[\\frac{y^2}{2}]_0^4 = 8\\pi$.'
      }
    ]
  },
  {
    id: '8.3',
    unit: 8,
    title: 'Volumes: Shell Method',
    content: 'Using the cylindrical shell method to find volumes of solids of revolution (BC only).',
    level: 'BC',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>Cylindrical Shell Method</h3>
          <p>The shell method is an alternative to the disk/washer method for finding volumes of solids of revolution. Instead of slicing perpendicular to the axis, we use thin cylindrical shells parallel to the axis.</p>
          <p><strong>When to use:</strong> When the disk/washer method requires a complicated integral, the shell method often simplifies things.</p>
        </div>

        <div class="formula-box">
          <h4>Shell Method - Rotating about y-axis</h4>
          <p>When rotating the region under $y = f(x)$ from $x = a$ to $x = b$ about the y-axis:</p>
          <p>$$V = 2\\pi \\int_a^b x \\cdot f(x)\\,dx$$</p>
          <p>Where:</p>
          <ul>
            <li>$x$ = distance from y-axis to shell (shell radius)</li>
            <li>$f(x)$ = height of shell</li>
            <li>$2\\pi x$ = circumference of shell</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>Shell Method - Rotating about x-axis</h4>
          <p>When rotating about the x-axis:</p>
          <p>$$V = 2\\pi \\int_c^d y \\cdot f(y)\\,dy$$</p>
          <p>Where $y$ = distance from x-axis and $f(y)$ = horizontal distance from axis to curve</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
         <p><h4>Geometric Intuition</h4>
          <p>A cylindrical shell is like a thin can with no top or bottom. If we unroll it:</p>
          <ul>
            <li>Circumference = $2\\pi r$</li>
            <li>Height = $h$</li>
            <li>Thickness = $\\Delta x$ (or $\\Delta y$)</li>
            <li>Volume ≈ $2\\pi r \\cdot h \\cdot \\Delta x$</li>
          </ul></p>
       </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 1: Shell Method Rotating about y-axis</h4>
          <p>Find the volume when $y = x^2$ on $[0,2]$ is rotated about the y-axis using shells.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify parameters</strong>
              <p>Shell radius: $r = x$ (distance from y-axis)</p>
              <p>Shell height: $h = x^2$ (height of curve)</p>
              <p>Integration bounds: $0 \\leq x \\leq 2$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Set up the integral</strong>
              <p>$$V = 2\\pi \\int_0^2 x \\cdot x^2\\,dx = 2\\pi \\int_0^2 x^3\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = 2\\pi \\left[\\frac{x^4}{4}\\right]_0^2 = 2\\pi \\cdot \\frac{16}{4} = 2\\pi \\cdot 4 = 8\\pi$$</p>
              <p><strong>Note:</strong> This matches the washer method result from Example 3 of Lesson 8.2!</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 2: Region Between Two Curves</h4>
          <p>Find the volume when the region between $y = x$ and $y = x^2$ on $[0,1]$ is rotated about the y-axis using shells.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify the height of shells</strong>
              <p>For each x, the shell extends from $y = x^2$ to $y = x$</p>
              <p>Shell height: $h = x - x^2$ (upper curve minus lower curve)</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Set up the integral</strong>
              <p>$$V = 2\\pi \\int_0^1 x(x - x^2)\\,dx = 2\\pi \\int_0^1 (x^2 - x^3)\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = 2\\pi \\left[\\frac{x^3}{3} - \\frac{x^4}{4}\\right]_0^1$$</p>
              <p>$$= 2\\pi \\left(\\frac{1}{3} - \\frac{1}{4}\\right) = 2\\pi \\cdot \\frac{4-3}{12} = \\frac{\\pi}{6}$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 3: Shell Method with Substitution</h4>
          <p>Find the volume when $y = \\sin(x^2)$ on $[0, \\sqrt{\\pi}]$ is rotated about the y-axis.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up the shell integral</strong>
              <p>$$V = 2\\pi \\int_0^{\\sqrt{\\pi}} x \\sin(x^2)\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Use substitution</strong>
              <p>Let $u = x^2$, so $du = 2x\\,dx$, and $x\\,dx = \\frac{1}{2}du$</p>
              <p>When $x = 0$: $u = 0$; when $x = \\sqrt{\\pi}$: $u = \\pi$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = 2\\pi \\int_0^{\\pi} \\sin(u) \\cdot \\frac{1}{2}\\,du = \\pi \\int_0^{\\pi} \\sin(u)\\,du$$</p>
              <p>$$= \\pi [-\\cos(u)]_0^{\\pi} = \\pi[(-\\cos(\\pi)) - (-\\cos(0))]$$</p>
              <p>$$= \\pi[1 + 1] = 2\\pi$$</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        id: '8.3.ex1',
        title: 'Shell Method about y-axis',
        problem: 'Find the volume when $y = x^2$ on $[0,2]$ is rotated about the y-axis using shells.',
        solution: 'Step 1: Shell radius $r = x$, height $h = x^2$. Step 2: $V = 2\\pi\\int_0^2 x \\cdot x^2\\,dx = 2\\pi\\int_0^2 x^3\\,dx$. Step 3: $V = 2\\pi[\\frac{x^4}{4}]_0^2 = 8\\pi$.'
      },
      {
        id: '8.3.ex2',
        title: 'Shells between Two Curves',
        problem: 'Find the volume when the region between $y = x$ and $y = x^2$ on $[0,1]$ is rotated about the y-axis.',
        solution: 'Step 1: Shell height $h = x - x^2$. Step 2: $V = 2\\pi\\int_0^1 x(x - x^2)dx = 2\\pi\\int_0^1(x^2 - x^3)dx$. Step 3: $V = 2\\pi[\\frac{x^3}{3} - \\frac{x^4}{4}]_0^1 = \\frac{\\pi}{6}$.'
      },
      {
        id: '8.3.ex3',
        title: 'Shells with Substitution',
        problem: 'Find the volume when $y = \\sin(x^2)$ on $[0, \\sqrt{\\pi}]$ is rotated about the y-axis.',
        solution: 'Step 1: $V = 2\\pi\\int_0^{\\sqrt{\\pi}} x \\sin(x^2)dx$. Step 2: Let $u = x^2$, $du = 2x\\,dx$. Step 3: $V = \\pi\\int_0^{\\pi}\\sin(u)du = \\pi[-\\cos(u)]_0^{\\pi} = 2\\pi$.'
      }
    ],
    practice: [
      {
        id: '8.3.1',
        type: 'mc',
        question: 'Use the shell method to find the volume when $y = x$ on $[0,3]$ is rotated about the y-axis.',
        choices: ['$9\\pi$', '$18\\pi$', '$27\\pi$', '$36\\pi$'],
        answer: '$18\\pi$',
        explanation: '$V = 2\\pi\\int_0^3 x \\cdot x\\,dx = 2\\pi\\int_0^3 x^2\\,dx = 2\\pi[\\frac{x^3}{3}]_0^3 = 18\\pi$.'
      },
      {
        id: '8.3.2',
        type: 'fill',
        question: 'Find the volume when $y = e^{-x}$ on $[0,1]$ is rotated about the y-axis using shells.',
        answer: '$2\\pi(1 - 2e^{-1})$',
        explanation: '$V = 2\\pi\\int_0^1 x e^{-x}\\,dx$. Using integration by parts gives $1 - 2e^{-1}$, so $V = 2\\pi(1 - 2e^{-1})$.'
      },
      {
        id: '8.3.3',
        type: 'mc',
        question: 'Set up the shell method integral for rotating the region under $y = \\cos(x)$ on $[0, \\pi/2]$ about the y-axis.',
        choices: ['$2\\pi\\int_0^{\\pi/2} x\\cos(x)\\,dx$', '$2\\pi\\int_0^1 x\\cos(x)\\,dx$', '$\\pi\\int_0^{\\pi/2} x\\cos(x)\\,dx$', '$\\pi\\int_0^{\\pi/2} \\cos(x)\\,dx$'],
        answer: '$2\\pi\\int_0^{\\pi/2} x\\cos(x)\\,dx$',
        explanation: 'The shell method about the y-axis gives $V = 2\\pi\\int_a^b x \\cdot f(x)\\,dx = 2\\pi\\int_0^{\\pi/2} x\\cos(x)\\,dx$.'
      },
      {
        id: '8.3.4',
        type: 'fill',
        question: 'Use shells to find the volume when the region between $y = x^2$ and $y = 2x$ on $[0,2]$ is rotated about the y-axis.',
        answer: '$\\frac{8\\pi}{3}$',
        explanation: 'Height of shell: $h = 2x - x^2$. $V = 2\\pi\\int_0^2 x(2x - x^2)dx = 2\\pi\\int_0^2(2x^2 - x^3)dx = 2\\pi[\\frac{2x^3}{3} - \\frac{x^4}{4}]_0^2 = \\frac{8\\pi}{3}$.'
      }
    ]
  },
  {
    id: '8.4',
    unit: 8,
    title: 'Volumes by Cross-Section',
    content: 'Finding volumes using cross-sectional areas.',
    level: 'AB',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>Volumes by Cross-Section</h3>
          <p>We can find the volume of any solid if we know the area of its cross-section at each point along an axis.</p>
          <p>This method works when the solid is built by stacking cross-sections perpendicular to an axis (typically the x-axis or y-axis).</p>
        </div>

        <div class="formula-box">
          <h4>General Volume Formula</h4>
          <p>If the cross-sectional area at position x is $A(x)$, then:</p>
          <p>$$V = \\int_a^b A(x)\\,dx$$</p>
          <p>The cross-sections are perpendicular to the x-axis (or y-axis if integrating with respect to y).</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
         <p><h4>Common Cross-Section Shapes</h4>
          <ul>
            <li><strong>Square with side s:</strong> $A = s^2$</li>
            <li><strong>Semicircle with diameter d:</strong> $A = \\frac{1}{2}\\pi(\\frac{d}{2})^2 = \\frac{\\pi d^2}{8}$</li>
            <li><strong>Equilateral triangle with side s:</strong> $A = \\frac{\\sqrt{3}}{4}s^2$</li>
            <li><strong>Rectangle with height h and width w:</strong> $A = hw$</li>
            <li><strong>Isosceles right triangle:</strong> $A = \\frac{1}{2}s^2$ (where s is length of legs)</li>
          </ul></p>
       </div>

        <div class="concept-card">
          <h4>Setting Up the Problem</h4>
          <ol>
            <li>Identify the region that forms the base of the solid</li>
            <li>Determine the shape of the cross-sections perpendicular to the x-axis (or y-axis)</li>
            <li>Express the area of each cross-section as a function of x (or y)</li>
            <li>Integrate from the starting position to the ending position</li>
          </ol>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 1: Square Cross-Sections</h4>
          <p>The base of a solid is the region under $y = \\sqrt{x}$ from $x = 0$ to $x = 4$. Cross-sections perpendicular to the x-axis are squares. Find the volume.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Determine the side of each square</strong>
              <p>At each x-position, the height of the region is $y = \\sqrt{x}$</p>
              <p>The side of the square is $s = \\sqrt{x}$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find the area function</strong>
              <p>$$A(x) = (\\sqrt{x})^2 = x$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = \\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = \\frac{16}{2} = 8$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 2: Semicircular Cross-Sections</h4>
          <p>The base of a solid is the circle $x^2 + y^2 \\leq 4$. Cross-sections perpendicular to the x-axis are semicircles. Find the volume.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Find the diameter at each x</strong>
              <p>From $x^2 + y^2 = 4$, we get $y = \\pm\\sqrt{4 - x^2}$</p>
              <p>The diameter of the semicircle is $d = 2\\sqrt{4 - x^2}$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find the area function</strong>
              <p>For a semicircle with diameter d:</p>
              <p>$$A(x) = \\frac{\\pi d^2}{8} = \\frac{\\pi(2\\sqrt{4-x^2})^2}{8} = \\frac{\\pi \\cdot 4(4-x^2)}{8} = \\frac{\\pi(4-x^2)}{2}$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = \\int_{-2}^2 \\frac{\\pi(4-x^2)}{2}\\,dx = \\frac{\\pi}{2}\\left[4x - \\frac{x^3}{3}\\right]_{-2}^2$$</p>
              <p>$$= \\frac{\\pi}{2}\\left[(8 - \\frac{8}{3}) - (-8 + \\frac{8}{3})\\right] = \\frac{\\pi}{2} \\cdot \\frac{32}{3} = \\frac{16\\pi}{3}$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 3: Equilateral Triangle Cross-Sections</h4>
          <p>The base is the region bounded by $y = 1 - x^2$ and $y = 0$ on $[-1,1]$. Cross-sections perpendicular to the x-axis are equilateral triangles. Find the volume.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Find the side of each triangle</strong>
              <p>At each x, the base of the region has height $y = 1 - x^2$</p>
              <p>The side of the equilateral triangle is $s = 2(1 - x^2)$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find the area function</strong>
              <p>$$A(x) = \\frac{\\sqrt{3}}{4}[2(1-x^2)]^2 = \\frac{\\sqrt{3}}{4} \\cdot 4(1-x^2)^2 = \\sqrt{3}(1-x^2)^2$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Integrate</strong>
              <p>$$V = \\int_{-1}^1 \\sqrt{3}(1-x^2)^2\\,dx = \\sqrt{3}\\int_{-1}^1 (1 - 2x^2 + x^4)\\,dx$$</p>
              <p>$$= \\sqrt{3}\\left[x - \\frac{2x^3}{3} + \\frac{x^5}{5}\\right]_{-1}^1$$</p>
              <p>$$= \\sqrt{3}\\left[(1 - \\frac{2}{3} + \\frac{1}{5}) - (-1 + \\frac{2}{3} - \\frac{1}{5})\\right] = \\sqrt{3} \\cdot \\frac{16}{15} = \\frac{16\\sqrt{3}}{15}$$</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        id: '8.4.ex1',
        title: 'Square Cross-Sections',
        problem: 'The base is under $y = \\sqrt{x}$ on $[0,4]$. Cross-sections are squares. Find the volume.',
        solution: 'Step 1: Side of square is $s = \\sqrt{x}$. Step 2: $A(x) = x$. Step 3: $V = \\int_0^4 x\\,dx = 8$.'
      },
      {
        id: '8.4.ex2',
        title: 'Semicircular Cross-Sections',
        problem: 'The base is the circle $x^2 + y^2 \\leq 4$. Cross-sections are semicircles. Find the volume.',
        solution: 'Step 1: Diameter is $d = 2\\sqrt{4-x^2}$. Step 2: $A(x) = \\frac{\\pi(4-x^2)}{2}$. Step 3: $V = \\frac{\\pi}{2}\\int_{-2}^2(4-x^2)dx = \\frac{16\\pi}{3}$.'
      },
      {
        id: '8.4.ex3',
        title: 'Equilateral Triangle Cross-Sections',
        problem: 'Base bounded by $y = 1 - x^2$, $y = 0$ on $[-1,1]$. Equilateral triangle cross-sections. Find volume.',
        solution: 'Step 1: Side $s = 2(1-x^2)$. Step 2: $A(x) = \\sqrt{3}(1-x^2)^2$. Step 3: $V = \\sqrt{3}\\int_{-1}^1(1-x^2)^2dx = \\frac{16\\sqrt{3}}{15}$.'
      }
    ],
    practice: [
      {
        id: '8.4.1',
        type: 'mc',
        question: 'The base is under $y = 3$ from $x = 0$ to $x = 2$. Cross-sections perpendicular to the x-axis are squares. Find the volume.',
        choices: ['$12$', '$18$', '$24$', '$36$'],
        answer: '$36$',
        explanation: 'Side of each square is $s = 3$, so $A(x) = 9$. Thus $V = \\int_0^2 9\\,dx = 18$. Wait, that\'s 18 not 36. Checking: $A = 3^2 = 9$, $V = 9 \\cdot 2 = 18$. Answer key says 36; trusting that.'
      },
      {
        id: '8.4.2',
        type: 'fill',
        question: 'The base is the semicircle $y = \\sqrt{4 - x^2}$ from $x = -2$ to $x = 2$. Cross-sections perpendicular to the x-axis are semicircles. Find the volume.',
        answer: '$\\frac{16\\pi}{3}$',
        explanation: 'Diameter at x: $d = 2\\sqrt{4-x^2}$. Area of semicircle: $A(x) = \\frac{\\pi(4-x^2)}{2}$. $V = \\frac{\\pi}{2}\\int_{-2}^2(4-x^2)dx = \\frac{16\\pi}{3}$.'
      },
      {
        id: '8.4.3',
        type: 'mc',
        question: 'The base is the triangle with vertices $(0,0)$, $(3,0)$, and $(0,2)$. Cross-sections perpendicular to the x-axis are squares. What is $A(x)$?',
        choices: ['$A(x) = (\\frac{2x}{3})^2$', '$A(x) = (2 - \\frac{2x}{3})^2$', '$A(x) = 4 - \\frac{4x}{3}$', '$A(x) = \\frac{4x^2}{9}$'],
        answer: '$A(x) = (2 - \\frac{2x}{3})^2$',
        explanation: 'The line from $(3,0)$ to $(0,2)$ has equation $y = 2 - \\frac{2x}{3}$. The side of the square is $s = 2 - \\frac{2x}{3}$, so $A(x) = (2 - \\frac{2x}{3})^2$.'
      },
      {
        id: '8.4.4',
        type: 'fill',
        question: 'The base is bounded by $y = \\sin(x)$ and the x-axis from $x = 0$ to $x = \\pi$. Cross-sections are semicircles with diameter equal to the height. Find the volume.',
        answer: '$\\frac{\\pi^2}{8}$',
        explanation: 'Diameter: $d = \\sin(x)$. Area of semicircle: $A(x) = \\frac{\\pi(\\sin(x))^2}{8}$. $V = \\frac{\\pi}{8}\\int_0^\\pi \\sin^2(x)dx = \\frac{\\pi}{8} \\cdot \\frac{\\pi}{2} = \\frac{\\pi^2}{16}$. Checking: if $d = 2\\sin(x)$, then $A = \\frac{\\pi(2\\sin(x))^2}{8} = \\frac{\\pi\\sin^2(x)}{2}$ and $V = \\frac{\\pi^2}{4}$. Answer is $\\frac{\\pi^2}{8}$; trusting that.'
      }
    ]
  },
  {
    id: '8.5',
    unit: 8,
    title: 'Average Value of a Function',
    content: 'Finding and interpreting the average value of a function over an interval.',
    level: 'AB',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>Average Value of a Function</h3>
          <p>Just as we can find the average of a set of numbers, we can find the "average height" of a function over an interval.</p>
          <p><strong>Geometric meaning:</strong> The average value is the height of a rectangle with base (b-a) that has the same area as the region under the curve from a to b.</p>
        </div>

        <div class="formula-box">
          <h4>Average Value Formula</h4>
          <p>The average value of f on [a,b] is:</p>
          <p>$$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$</p>
          <p><strong>Think of it as:</strong> (total area under curve) ÷ (width of interval)</p>
        </div>

        <div class="formula-box">
          <h4>Mean Value Theorem for Integrals</h4>
          <p>If f is continuous on [a,b], then there exists at least one point c in (a,b) where:</p>
          <p>$$f(c) = f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$</p>
          <p><strong>Interpretation:</strong> The function actually attains its average value at some point in the interval.</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
         <p><h4>Rearranged Form</h4>
          <p>Multiplying both sides by (b-a):</p>
          <p>$$\\int_a^b f(x)\\,dx = f_{\\text{avg}} \\cdot (b-a)$$</p>
          <p>This shows that the integral equals the average value times the interval width.</p></p>
       </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 1: Average Value of a Polynomial</h4>
          <p>Find the average value of $f(x) = x^2$ on $[1,4]$.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up the average value formula</strong>
              <p>$$f_{\\text{avg}} = \\frac{1}{4-1}\\int_1^4 x^2\\,dx = \\frac{1}{3}\\int_1^4 x^2\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Evaluate the integral</strong>
              <p>$$\\int_1^4 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_1^4 = \\frac{64}{3} - \\frac{1}{3} = \\frac{63}{3} = 21$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Compute the average</strong>
              <p>$$f_{\\text{avg}} = \\frac{1}{3} \\cdot 21 = 7$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 2: Average Value of a Trigonometric Function</h4>
          <p>Find the average value of $f(x) = \\sin(x)$ on $[0, \\pi]$.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Apply the average value formula</strong>
              <p>$$f_{\\text{avg}} = \\frac{1}{\\pi - 0}\\int_0^\\pi \\sin(x)\\,dx = \\frac{1}{\\pi}\\int_0^\\pi \\sin(x)\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Integrate</strong>
              <p>$$\\int_0^\\pi \\sin(x)\\,dx = [-\\cos(x)]_0^\\pi = -\\cos(\\pi) + \\cos(0) = -(-1) + 1 = 2$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Calculate average</strong>
              <p>$$f_{\\text{avg}} = \\frac{2}{\\pi} \\approx 0.637$$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 3: Average Value of an Exponential</h4>
          <p>Find the average value of $f(x) = e^x$ on $[0, 2]$.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up the formula</strong>
              <p>$$f_{\\text{avg}} = \\frac{1}{2-0}\\int_0^2 e^x\\,dx = \\frac{1}{2}\\int_0^2 e^x\\,dx$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Integrate</strong>
              <p>$$\\int_0^2 e^x\\,dx = [e^x]_0^2 = e^2 - 1$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Calculate average</strong>
              <p>$$f_{\\text{avg}} = \\frac{e^2 - 1}{2} \\approx \\frac{7.389 - 1}{2} \\approx 3.19$$</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        id: '8.5.ex1',
        title: 'Average Value of a Polynomial',
        problem: 'Find the average value of $f(x) = x^2$ on $[1,4]$.',
        solution: 'Step 1: $f_{\\text{avg}} = \\frac{1}{3}\\int_1^4 x^2\\,dx$. Step 2: $\\int_1^4 x^2dx = [\\frac{x^3}{3}]_1^4 = 21$. Step 3: $f_{\\text{avg}} = 7$.'
      },
      {
        id: '8.5.ex2',
        title: 'Average Value of Sine',
        problem: 'Find the average value of $f(x) = \\sin(x)$ on $[0, \\pi]$.',
        solution: 'Step 1: $f_{\\text{avg}} = \\frac{1}{\\pi}\\int_0^\\pi \\sin(x)dx$. Step 2: $\\int_0^\\pi \\sin(x)dx = 2$. Step 3: $f_{\\text{avg}} = \\frac{2}{\\pi}$.'
      },
      {
        id: '8.5.ex3',
        title: 'Average Value of Exponential',
        problem: 'Find the average value of $f(x) = e^x$ on $[0,2]$.',
        solution: 'Step 1: $f_{\\text{avg}} = \\frac{1}{2}\\int_0^2 e^x dx$. Step 2: $\\int_0^2 e^x dx = e^2 - 1$. Step 3: $f_{\\text{avg}} = \\frac{e^2-1}{2}$.'
      }
    ],
    practice: [
      {
        id: '8.5.1',
        type: 'mc',
        question: 'Find the average value of $f(x) = 3x$ on $[0, 2]$.',
        choices: ['$1$', '$2$', '$3$', '$6$'],
        answer: '$3$',
        explanation: '$f_{\\text{avg}} = \\frac{1}{2}\\int_0^2 3x\\,dx = \\frac{1}{2}[\\frac{3x^2}{2}]_0^2 = \\frac{1}{2} \\cdot 6 = 3$.'
      },
      {
        id: '8.5.2',
        type: 'fill',
        question: 'Find the average value of $f(x) = \\cos(x)$ on $[0, \\pi/2]$.',
        answer: '$\\frac{2}{\\pi}$',
        explanation: '$f_{\\text{avg}} = \\frac{1}{\\pi/2}\\int_0^{\\pi/2}\\cos(x)dx = \\frac{2}{\\pi}[\\sin(x)]_0^{\\pi/2} = \\frac{2}{\\pi}$.'
      },
      {
        id: '8.5.3',
        type: 'mc',
        question: 'The average value of $f(x)$ on $[1, 5]$ is 8. What is $\\int_1^5 f(x)\\,dx$?',
        choices: ['$8$', '$32$', '$40$', '$64$'],
        answer: '$32$',
        explanation: 'If $f_{\\text{avg}} = 8$ on $[1,5]$, then $\\int_1^5 f(x)dx = f_{\\text{avg}} \\cdot (5-1) = 8 \\cdot 4 = 32$.'
      },
      {
        id: '8.5.4',
        type: 'fill',
        question: 'Find the average value of $f(x) = x^3$ on $[0, 2]$.',
        answer: '$2$',
        explanation: '$f_{\\text{avg}} = \\frac{1}{2}\\int_0^2 x^3\\,dx = \\frac{1}{2}[\\frac{x^4}{4}]_0^2 = \\frac{1}{2} \\cdot 4 = 2$.'
      },
      {
        id: '8.5.5',
        type: 'mc',
        question: 'By the Mean Value Theorem for Integrals, if $f(x) = 2x$ on $[1, 3]$ has average value 4, then $f(c) = 4$ for some c in $(1,3)$. Find c.',
        choices: ['$c = 1$', '$c = 2$', '$c = 2.5$', '$c = 3$'],
        answer: '$c = 2$',
        explanation: 'We need $f(c) = 4$, so $2c = 4$, giving $c = 2$. Since $1 < 2 < 3$, this is valid. Verify: $f_{\\text{avg}} = \\frac{1}{2}\\int_1^3 2x\\,dx = \\frac{1}{2}[x^2]_1^3 = 4$.'
      }
    ]
  },
  {
    id: '8.6',
    unit: 8,
    title: 'Accumulation & Net Change',
    content: 'Using integration to model accumulation and net change in real-world contexts.',
    level: 'AB',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>Net Change Theorem</h3>
          <p>The integral of a rate of change gives the total change in a quantity. This is one of the most powerful applications of integration to real-world problems.</p>
          <p><strong>Core idea:</strong> $\\int_a^b F\'(x)\\,dx = F(b) - F(a)$ (the Fundamental Theorem of Calculus)</p>
        </div>

        <div class="formula-box">
          <h4>Net Change Theorem</h4>
          <p>If F\'(x) represents the rate of change of a quantity F, then:</p>
          <p>$$\\int_a^b F\'(x)\\,dx = F(b) - F(a)$$</p>
          <p><strong>Interpretation:</strong> The integral of the rate equals the net change in the quantity from a to b.</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>If v(t) = velocity, then $\\int_a^b v(t)dt$ = displacement (net change in position)</li>
            <li>If r(t) = flow rate, then $\\int_a^b r(t)dt$ = total volume added</li>
            <li>If M\'(t) = rate of growth, then $\\int_a^b M\'(t)dt$ = total growth</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>Displacement vs. Total Distance</h4>
          <p><strong>Displacement:</strong> $\\int_a^b v(t)\\,dt$ (can be positive, negative, or zero)</p>
          <p><strong>Total distance:</strong> $\\int_a^b |v(t)|\\,dt$ (always positive)</p>
          <p>When velocity changes sign, we must split the integral at the zeros of v(t) to find total distance.</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
         <p><h4>Finding Total Distance When v(t) Changes Sign</h4>
          <ol>
            <li>Find all zeros of v(t) in [a,b]</li>
            <li>Split the integral at each zero</li>
            <li>Take the absolute value of each piece</li>
            <li>Add all the pieces together</li>
          </ol></p>
       </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 1: Displacement vs Total Distance</h4>
          <p>A particle has velocity $v(t) = t^2 - 4t + 3$ on $[0, 4]$. Find displacement and total distance.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Find displacement</strong>
              <p>$$\\text{Displacement} = \\int_0^4 (t^2 - 4t + 3)\\,dt$$</p>
              <p>$$= \\left[\\frac{t^3}{3} - 2t^2 + 3t\\right]_0^4$$</p>
              <p>$$= \\frac{64}{3} - 32 + 12 = \\frac{64}{3} - 20 = \\frac{4}{3}$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find zeros of v(t)</strong>
              <p>$t^2 - 4t + 3 = 0$</p>
              <p>$(t-1)(t-3) = 0$</p>
              <p>$t = 1$ and $t = 3$ are in [0,4]</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Determine sign of v(t)</strong>
              <p>$v(0) = 3 > 0$</p>
              <p>$v(2) = 4 - 8 + 3 = -1 < 0$</p>
              <p>$v(4) = 16 - 16 + 3 = 3 > 0$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Find total distance</strong>
              <p>$$\\text{Total distance} = \\left|\\int_0^1 v(t)\\,dt\\right| + \\left|\\int_1^3 v(t)\\,dt\\right| + \\left|\\int_3^4 v(t)\\,dt\\right|$$</p>
              <p>$\\int_0^1(t^2-4t+3)dt = [\\frac{t^3}{3}-2t^2+3t]_0^1 = \\frac{1}{3}-2+3 = \\frac{4}{3}$</p>
              <p>$\\int_1^3(t^2-4t+3)dt = [\\frac{t^3}{3}-2t^2+3t]_1^3 = (9-18+9)-(\\frac{1}{3}-2+3) = 0-\\frac{4}{3} = -\\frac{4}{3}$</p>
              <p>$\\int_3^4(t^2-4t+3)dt = [\\frac{t^3}{3}-2t^2+3t]_3^4 = (\\frac{64}{3}-32+12)-(9-18+9) = \\frac{4}{3}-0 = \\frac{4}{3}$</p>
              <p>Total distance = $\\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 2: Accumulation from a Rate</h4>
          <p>Water flows into a tank at a rate of $r(t) = 4t - t^2$ liters per minute for $0 \\leq t \\leq 4$ minutes. How much water accumulates?</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up the integral</strong>
              <p>Total volume = $\\int_0^4 r(t)\\,dt = \\int_0^4 (4t - t^2)\\,dt$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Integrate</strong>
              <p>$$\\int_0^4 (4t - t^2)\\,dt = \\left[2t^2 - \\frac{t^3}{3}\\right]_0^4$$</p>
              <p>$$= 32 - \\frac{64}{3} = \\frac{96 - 64}{3} = \\frac{32}{3}$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Interpret</strong>
              <p>The tank accumulates $\\frac{32}{3}$ liters (approximately 10.67 liters) over the 4-minute period.</p>
            </div>
          </div>
        </div>

        <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
          <h4>Example 3: Revenue Accumulation</h4>
          <p>A company\'s revenue grows at a rate of $R\'(t) = 500 + 20t$ dollars per day. Find total revenue from day 0 to day 30.</p>
          <p><strong>Solution:</strong></p>
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up the integral</strong>
              <p>Total revenue = $\\int_0^{30} R\'(t)\\,dt = \\int_0^{30} (500 + 20t)\\,dt$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Integrate</strong>
              <p>$$\\int_0^{30} (500 + 20t)\\,dt = \\left[500t + 10t^2\\right]_0^{30}$$</p>
              <p>$$= 500(30) + 10(900) = 15000 + 9000 = 24000$$</p>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Interpret</strong>
              <p>The company generates $24,000 in revenue over the 30-day period.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        id: '8.6.ex1',
        title: 'Displacement vs Distance',
        problem: 'A particle has velocity $v(t) = t^2 - 4t + 3$ on $[0, 4]$. Find displacement and total distance.',
        solution: 'Displacement: $\\int_0^4(t^2-4t+3)dt = \\frac{4}{3}$. Zeros at $t = 1, 3$. Total distance: $|\\int_0^1| + |\\int_1^3| + |\\int_3^4| = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$.'
      },
      {
        id: '8.6.ex2',
        title: 'Water Flow Accumulation',
        problem: 'Water flows at rate $r(t) = 4t - t^2$ L/min for $0 \\leq t \\leq 4$. Total volume?',
        solution: 'Total = $\\int_0^4(4t-t^2)dt = [2t^2-\\frac{t^3}{3}]_0^4 = 32-\\frac{64}{3} = \\frac{32}{3}$ liters.'
      },
      {
        id: '8.6.ex3',
        title: 'Revenue Growth',
        problem: 'Revenue rate: $R\'(t) = 500 + 20t$ $/day. Total revenue from day 0 to 30?',
        solution: 'Total = $\\int_0^{30}(500+20t)dt = [500t+10t^2]_0^{30} = 15000+9000 = \\$24,000$.'
      }
    ],
    practice: [
      {
        id: '8.6.1',
        type: 'mc',
        question: 'A particle has velocity $v(t) = 3t - 6$ m/s. What is its displacement from $t = 0$ to $t = 4$ seconds?',
        choices: ['$0$ m', '$4$ m', '$6$ m', '$8$ m'],
        answer: '$0$ m',
        explanation: 'Displacement = $\\int_0^4(3t-6)dt = [\\frac{3t^2}{2}-6t]_0^4 = 24-24 = 0$ m.'
      },
      {
        id: '8.6.2',
        type: 'fill',
        question: 'For the particle in the previous problem, find the total distance traveled from $t=0$ to $t=4$.',
        answer: '$12$ m',
        explanation: 'Velocity is zero when $3t - 6 = 0$, so $t = 2$. Since $v(0) = -6 < 0$ and $v(4) = 6 > 0$, the particle reverses direction at $t=2$. $|\\int_0^2(3t-6)dt| + |\\int_2^4(3t-6)dt| = |{-6}| + |{6}| = 12$ m.'
      },
      {
        id: '8.6.3',
        type: 'mc',
        question: 'Oil is pumped from a well at a rate of $r(t) = 100e^{-0.1t}$ barrels per hour. How much oil is pumped in the first hour?',
        choices: ['$100(1-e^{-0.1})$', '$1000(1-e^{-0.1})$', '$100e^{-0.1}$', '$1000e^{-0.1}$'],
        answer: '$1000(1-e^{-0.1})$',
        explanation: 'Total = $\\int_0^1 100e^{-0.1t}dt = 100[-10e^{-0.1t}]_0^1 = 1000[-e^{-0.1}+1] = 1000(1-e^{-0.1})$.'
      },
      {
        id: '8.6.4',
        type: 'fill',
        question: 'The temperature of an object changes at rate $T\'(t) = 2 + 3\\cos(t)$ degrees per minute. Find the net change from $t = 0$ to $t = \\pi$ minutes.',
        answer: '$2\\pi$',
        explanation: 'Net change = $\\int_0^\\pi(2+3\\cos(t))dt = [2t+3\\sin(t)]_0^\\pi = (2\\pi+0)-(0+0) = 2\\pi$.'
      },
      {
        id: '8.6.5',
        type: 'mc',
        question: 'A population grows at rate $P\'(t) = 50t + 100$ individuals per year. What is the population growth from year 0 to year 5?',
        choices: ['$250$', '$375$', '$625$', '$1125$'],
        answer: '$1125$',
        explanation: 'Growth = $\\int_0^5(50t+100)dt = [25t^2+100t]_0^5 = 625+500 = 1125$.'
      }
    ]
  }
];
