export const lessons = [
  {
    id: '6.1',
    title: 'Antiderivatives & Indefinite Integrals',
    unit: 6,
    level: 'AB',
    learn: `
      <div class="concept-card">
        <h2>Antiderivatives</h2>
        <p>An <strong>antiderivative</strong> (or indefinite integral) of a function $f(x)$ is a function $F(x)$ such that:</p>
        <p>$$F'(x) = f(x)$$</p>
        <p>Since the derivative of any constant is zero, if $F(x)$ is an antiderivative of $f(x)$, then so is $F(x) + C$ for any constant $C$. This is called the <strong>family of antiderivatives</strong>.</p>
      </div>

      <div class="formula-box">
        <h3>Indefinite Integral Notation</h3>
        <p>$$\\int f(x)\\,dx = F(x) + C$$</p>
        <p>where $F'(x) = f(x)$ and $C$ is the constant of integration.</p>
      </div>

      <div class="concept-card">
        <h2>Basic Antiderivative Rules</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 2px solid #ccc;">
            <th style="text-align: left; padding: 10px;">Function $f(x)$</th>
            <th style="text-align: left; padding: 10px;">Antiderivative $\\int f(x)\\,dx$</th>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$x^n$ (where $n \\neq -1$)</td>
            <td style="padding: 8px;">$\\dfrac{x^{n+1}}{n+1} + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$1$ (or $x^0$)</td>
            <td style="padding: 8px;">$x + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$\\dfrac{1}{x}$ (for $x > 0$)</td>
            <td style="padding: 8px;">$\\ln(x) + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$e^x$</td>
            <td style="padding: 8px;">$e^x + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$a^x$ (where $a > 0, a \\neq 1$)</td>
            <td style="padding: 8px;">$\\dfrac{a^x}{\\ln(a)} + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$\\sin(x)$</td>
            <td style="padding: 8px;">$-\\cos(x) + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$\\cos(x)$</td>
            <td style="padding: 8px;">$\\sin(x) + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$\\sec^2(x)$</td>
            <td style="padding: 8px;">$\\tan(x) + C$</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">$\\csc^2(x)$</td>
            <td style="padding: 8px;">$-\\cot(x) + C$</td>
          </tr>
        </table>
      </div>

      <div class="formula-box">
        <h3>Linearity of Antiderivatives</h3>
        <p>$$\\int [af(x) + bg(x)]\\,dx = a\\int f(x)\\,dx + b\\int g(x)\\,dx + C$$</p>
        <p>Antiderivatives respect addition and scalar multiplication.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Always remember the constant of integration $C$ when finding indefinite integrals. Checking: differentiate your answer—you should get the original function back.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find $\\int (3x^2 - 2x + 5)\\,dx$',
        steps: [
          'Apply the antiderivative rules term-by-term.',
          '$\\int 3x^2\\,dx = 3 \\cdot \\frac{x^3}{3} = x^3$',
          '$\\int (-2x)\\,dx = -2 \\cdot \\frac{x^2}{2} = -x^2$',
          '$\\int 5\\,dx = 5x$',
          'Combine all terms and add the constant: $x^3 - x^2 + 5x + C$'
        ],
        answer: '$x^3 - x^2 + 5x + C$'
      },
      {
        problem: 'Find $\\int (\\sqrt{x} + \\frac{1}{x^2})\\,dx$',
        steps: [
          'Rewrite using exponent notation: $\\int (x^{1/2} + x^{-2})\\,dx$',
          'For $x^{1/2}$: $\\int x^{1/2}\\,dx = \\frac{x^{3/2}}{3/2} = \\frac{2}{3}x^{3/2}$',
          'For $x^{-2}$: $\\int x^{-2}\\,dx = \\frac{x^{-1}}{-1} = -x^{-1} = -\\frac{1}{x}$',
          'Combine: $\\frac{2}{3}x^{3/2} - \\frac{1}{x} + C$'
        ],
        answer: '$\\frac{2}{3}x^{3/2} - \\frac{1}{x} + C$ or $\\frac{2}{3}\\sqrt{x^3} - \\frac{1}{x} + C$'
      },
      {
        problem: 'Find $f(x)$ such that $f\'(x) = \\cos(x)$ and $f(0) = 3$',
        steps: [
          'The general antiderivative of $\\cos(x)$ is $f(x) = \\sin(x) + C$',
          'Use the initial condition $f(0) = 3$ to find $C$',
          '$f(0) = \\sin(0) + C = 0 + C = 3$',
          'Therefore $C = 3$',
          'The solution is $f(x) = \\sin(x) + 3$'
        ],
        answer: '$f(x) = \\sin(x) + 3$'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Find $\\int (4x^3 - 6x)\\,dx$',
        answer: '$x^4 - 3x^2 + C$'
      },
      {
        type: 'fill',
        question: 'Find $\\int (e^x + \\frac{1}{x})\\,dx$ for $x > 0$',
        answer: '$e^x + \\ln(x) + C$'
      },
      {
        type: 'mc',
        question: 'Which of the following is an antiderivative of $f(x) = 5\\sin(x)$?',
        choices: [
          '$-5\\cos(x)$',
          '$5\\cos(x)$',
          '$5\\sin(x)$',
          '$\\frac{5\\sin(x)}{x}$'
        ],
        answer: 0
      },
      {
        type: 'fill',
        question: 'Find $f(x)$ such that $f\'(x) = 2x + 1$ and $f(1) = 4$',
        answer: '$f(x) = x^2 + x + 2$'
      },
      {
        type: 'mc',
        question: 'What is $\\int x^{-1/2}\\,dx$?',
        choices: [
          '$-2x^{1/2} + C$',
          '$2x^{1/2} + C$',
          '$-\\frac{1}{2}x^{1/2} + C$',
          '$\\frac{1}{2}x^{-1/2} + C$'
        ],
        answer: 1
      }
    ]
  },

  {
    id: '6.2',
    title: 'Riemann Sums',
    unit: 6,
    level: 'AB',
    learn: `
      <div class="concept-card">
        <h2>Approximating Area with Rectangles</h2>
        <p>The area under a curve $y = f(x)$ from $x = a$ to $x = b$ can be approximated by dividing the interval into $n$ subintervals of width $\\Delta x = \\frac{b-a}{n}$ and constructing rectangles.</p>
        <p>The height of each rectangle is determined by the function value at a specific point in each subinterval.</p>
      </div>

      <div class="formula-box">
        <h3>Riemann Sum Formula</h3>
        <p>$$\\sum_{i=1}^{n} f(x_i^*) \\cdot \\Delta x$$</p>
        <p>where $x_i^*$ is a sample point in the $i$-th subinterval and $\\Delta x = \\frac{b-a}{n}$</p>
      </div>

      <div class="concept-card">
        <h2>Types of Riemann Sums</h2>

        <h3>Left Riemann Sum</h3>
        <p>Uses the left endpoint of each subinterval: $x_i^* = x_{i-1}$</p>
        <p>$$L_n = \\sum_{i=1}^{n} f(x_{i-1}) \\cdot \\Delta x$$</p>
        <ul>
          <li><strong>If $f$ is increasing:</strong> Left sum underestimates the area</li>
          <li><strong>If $f$ is decreasing:</strong> Left sum overestimates the area</li>
        </ul>

        <h3>Right Riemann Sum</h3>
        <p>Uses the right endpoint of each subinterval: $x_i^* = x_i$</p>
        <p>$$R_n = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x$$</p>
        <ul>
          <li><strong>If $f$ is increasing:</strong> Right sum overestimates the area</li>
          <li><strong>If $f$ is decreasing:</strong> Right sum underestimates the area</li>
        </ul>

        <h3>Midpoint Riemann Sum</h3>
        <p>Uses the midpoint of each subinterval: $x_i^* = \\frac{x_{i-1} + x_i}{2}$</p>
        <p>$$M_n = \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right) \\cdot \\Delta x$$</p>
        <ul>
          <li>Generally provides the best approximation</li>
        </ul>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> As $n \\to \\infty$, all three types of Riemann sums converge to the same value—the exact area under the curve. This limit defines the definite integral.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Approximate the area under $f(x) = x^2$ on $[0, 2]$ using a left Riemann sum with $n = 4$ rectangles',
        steps: [
          'Calculate $\\Delta x = \\frac{2-0}{4} = 0.5$',
          'Subintervals: $[0, 0.5], [0.5, 1], [1, 1.5], [1.5, 2]$',
          'Left endpoints: $x_0 = 0, x_1 = 0.5, x_2 = 1, x_3 = 1.5$',
          'Evaluate $f$ at left endpoints:',
          '$f(0) = 0^2 = 0$',
          '$f(0.5) = 0.5^2 = 0.25$',
          '$f(1) = 1^2 = 1$',
          '$f(1.5) = 1.5^2 = 2.25$',
          'Left sum: $L_4 = 0.5(0 + 0.25 + 1 + 2.25) = 0.5(3.5) = 1.75$'
        ],
        answer: '$L_4 = 1.75$ square units'
      },
      {
        problem: 'Approximate the area under $f(x) = x^2$ on $[0, 2]$ using a right Riemann sum with $n = 4$ rectangles',
        steps: [
          'Calculate $\\Delta x = \\frac{2-0}{4} = 0.5$',
          'Right endpoints: $x_1 = 0.5, x_2 = 1, x_3 = 1.5, x_4 = 2$',
          'Evaluate $f$ at right endpoints:',
          '$f(0.5) = 0.25$',
          '$f(1) = 1$',
          '$f(1.5) = 2.25$',
          '$f(2) = 4$',
          'Right sum: $R_4 = 0.5(0.25 + 1 + 2.25 + 4) = 0.5(7.5) = 3.75$'
        ],
        answer: '$R_4 = 3.75$ square units'
      },
      {
        problem: 'Approximate the area under $f(x) = x^2$ on $[0, 2]$ using a midpoint Riemann sum with $n = 4$ rectangles',
        steps: [
          'Calculate $\\Delta x = 0.5$',
          'Midpoints: $0.25, 0.75, 1.25, 1.75$',
          'Evaluate $f$ at midpoints:',
          '$f(0.25) = 0.0625$',
          '$f(0.75) = 0.5625$',
          '$f(1.25) = 1.5625$',
          '$f(1.75) = 3.0625$',
          'Midpoint sum: $M_4 = 0.5(0.0625 + 0.5625 + 1.5625 + 3.0625) = 0.5(5.25) = 2.625$',
          'The exact area is $\\frac{8}{3} \\approx 2.667$, so $M_4$ is the closest'
        ],
        answer: '$M_4 = 2.625$ square units'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Use a left Riemann sum with $n=2$ to approximate the area under $f(x) = 2x$ on $[1, 3]$. (Answer as a decimal.)',
        answer: '8'
      },
      {
        type: 'mc',
        question: 'For an increasing function, which Riemann sum overestimates the area?',
        choices: [
          'Left Riemann sum',
          'Right Riemann sum',
          'Midpoint Riemann sum',
          'All three overestimate equally'
        ],
        answer: 1
      },
      {
        type: 'fill',
        question: 'For $f(x) = 4$ on $[0, 5]$ with $n = 5$, what is the value of $\\Delta x$?',
        answer: '1'
      },
      {
        type: 'mc',
        question: 'What happens to the accuracy of a Riemann sum as $n$ increases?',
        choices: [
          'It decreases',
          'It stays the same',
          'It increases',
          'It depends on the function'
        ],
        answer: 2
      },
      {
        type: 'fill',
        question: 'Use a right Riemann sum with $n=2$ to approximate the area under $f(x) = x^2$ on $[0, 2]$. (Answer as a decimal.)',
        answer: '2.5'
      }
    ]
  },

  {
    id: '6.3',
    title: 'The Definite Integral',
    unit: 6,
    level: 'AB',
    learn: `
      <div class="concept-card">
        <h2>The Definite Integral</h2>
        <p>The <strong>definite integral</strong> of $f(x)$ from $a$ to $b$ is the limit of Riemann sums as $n \\to \\infty$:</p>
        <p>$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\cdot \\Delta x$$</p>
        <p>It represents the <strong>signed area</strong> between the curve and the $x$-axis:</p>
        <ul>
          <li>Area above the $x$-axis: positive</li>
          <li>Area below the $x$-axis: negative</li>
        </ul>
      </div>

      <div class="formula-box">
        <h3>Key Properties of Definite Integrals</h3>

        <p><strong>1. Zero-width interval:</strong> $\\int_a^a f(x)\\,dx = 0$</p>

        <p><strong>2. Reversal of bounds:</strong> $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$</p>

        <p><strong>3. Linearity (sum):</strong> $\\int_a^b [f(x) + g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$</p>

        <p><strong>4. Linearity (scalar multiple):</strong> $\\int_a^b cf(x)\\,dx = c\\int_a^b f(x)\\,dx$ for any constant $c$</p>

        <p><strong>5. Additivity:</strong> $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$ for any $c$ between $a$ and $b$</p>

        <p><strong>6. Comparison:</strong> If $f(x) \\geq g(x)$ on $[a,b]$, then $\\int_a^b f(x)\\,dx \\geq \\int_a^b g(x)\\,dx$</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> The definite integral gives a signed area. To find the total area (ignoring sign), split the integral at zeros of the function and add the absolute values.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Given $\\int_0^3 f(x)\\,dx = 5$ and $\\int_0^3 g(x)\\,dx = 2$, find $\\int_0^3 [3f(x) - 2g(x)]\\,dx$',
        steps: [
          'Apply linearity: $\\int_0^3 [3f(x) - 2g(x)]\\,dx = 3\\int_0^3 f(x)\\,dx - 2\\int_0^3 g(x)\\,dx$',
          'Substitute the given values: $= 3(5) - 2(2)$',
          'Simplify: $= 15 - 4 = 11$'
        ],
        answer: '$11$'
      },
      {
        problem: 'Find $\\int_{-2}^2 \\sqrt{4 - x^2}\\,dx$',
        steps: [
          'Recognize that $y = \\sqrt{4 - x^2}$ is the upper half of the circle $x^2 + y^2 = 4$',
          'This circle has radius $r = 2$',
          'The integral from $x = -2$ to $x = 2$ is the area of a semicircle',
          'Area of semicircle: $A = \\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi(2)^2 = 2\\pi$'
        ],
        answer: '$2\\pi$'
      },
      {
        problem: 'Given $\\int_1^4 f(x)\\,dx = 10$ and $\\int_1^2 f(x)\\,dx = 3$, find $\\int_2^4 f(x)\\,dx$',
        steps: [
          'Use additivity: $\\int_1^4 f(x)\\,dx = \\int_1^2 f(x)\\,dx + \\int_2^4 f(x)\\,dx$',
          'Substitute known values: $10 = 3 + \\int_2^4 f(x)\\,dx$',
          'Solve: $\\int_2^4 f(x)\\,dx = 10 - 3 = 7$'
        ],
        answer: '$7$'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'If $\\int_0^5 f(x)\\,dx = 12$, what is $\\int_5^0 f(x)\\,dx$?',
        answer: '-12'
      },
      {
        type: 'mc',
        question: 'What does $\\int_2^2 f(x)\\,dx$ equal?',
        choices: [
          'The value of $f(2)$',
          '0',
          'Undefined',
          'The derivative of $f$ at $x=2$'
        ],
        answer: 1
      },
      {
        type: 'fill',
        question: 'If $\\int_0^4 f(x)\\,dx = 20$ and $\\int_0^2 f(x)\\,dx = 8$, find $\\int_2^4 f(x)\\,dx$',
        answer: '12'
      },
      {
        type: 'mc',
        question: 'For a continuous function on $[a,b]$, what does a negative definite integral indicate?',
        choices: [
          'The function is negative on $[a,b]$',
          'The area below the $x$-axis exceeds the area above',
          'The upper limit is less than the lower limit',
          'The function has no maximum'
        ],
        answer: 1
      },
      {
        type: 'fill',
        question: 'If $f(x) = 2x$ on $[1,3]$, then $\\int_1^3 f(x)\\,dx = \\int_1^2 f(x)\\,dx + \\int_2^3 f(x)\\,dx$. If $\\int_1^2 f(x)\\,dx = 3$, find $\\int_2^3 f(x)\\,dx$',
        answer: '5'
      }
    ]
  },

  {
    id: '6.4',
    title: 'Fundamental Theorem of Calculus Part 1',
    unit: 6,
    level: 'AB',
    learn: `
      <div class="concept-card">
        <h2>The Fundamental Theorem of Calculus (Part 1)</h2>
        <p>Let $f$ be continuous on $[a, b]$. If $F$ is defined by:</p>
        <p>$$F(x) = \\int_a^x f(t)\\,dt$$</p>
        <p>then $F$ is differentiable on $(a, b)$ and:</p>
        <p>$$F'(x) = f(x)$$</p>
        <p>In other words, $F$ is an antiderivative of $f$. Taking the derivative of an accumulated area gives the height of the function.</p>
      </div>

      <div class="formula-box">
        <h3>Chain Rule Version</h3>
        <p>If $g(x)$ is differentiable:</p>
        <p>$$\\frac{d}{dx}\\left[\\int_a^{g(x)} f(t)\\,dt\\right] = f(g(x)) \\cdot g'(x)$$</p>
      </div>

      <div class="concept-card">
        <h2>Interpretation</h2>
        <p>The rate of change of accumulated area equals the height of the function at that point. If $F(x)$ represents total accumulated change, then $F'(x)$ is the instantaneous rate of change.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> When differentiating under the integral sign, remember the chain rule: the derivative is the integrand evaluated at the upper limit, times the derivative of the upper limit.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find $\\frac{d}{dx}\\left[\\int_0^x \\sqrt{t^2 + 1}\\,dt\\right]$',
        steps: [
          'Apply Part 1 of the Fundamental Theorem of Calculus',
          'The integrand is $f(t) = \\sqrt{t^2 + 1}$',
          'Substitute $x$ for $t$: $f(x) = \\sqrt{x^2 + 1}$',
          'The derivative is: $\\sqrt{x^2 + 1}$'
        ],
        answer: '$\\sqrt{x^2 + 1}$'
      },
      {
        problem: 'Find $\\frac{d}{dx}\\left[\\int_2^{x^3} \\sin(t)\\,dt\\right]$',
        steps: [
          'Use the chain rule version: $\\frac{d}{dx}\\left[\\int_a^{g(x)} f(t)\\,dt\\right] = f(g(x)) \\cdot g\'(x)$',
          'Here, $f(t) = \\sin(t)$, $g(x) = x^3$, and $g\'(x) = 3x^2$',
          'Substitute $x^3$ for $t$: $f(x^3) = \\sin(x^3)$',
          'Apply the chain rule: $\\sin(x^3) \\cdot 3x^2$'
        ],
        answer: '$3x^2 \\sin(x^3)$'
      },
      {
        problem: 'Find $\\frac{d}{dx}\\left[\\int_x^5 \\cos(t^2)\\,dt\\right]$',
        steps: [
          'Rewrite with the variable limit at the bottom: $\\int_x^5 \\cos(t^2)\\,dt = -\\int_5^x \\cos(t^2)\\,dt$',
          'Now apply the chain rule version with upper limit $x$',
          '$\\frac{d}{dx}\\left[-\\int_5^x \\cos(t^2)\\,dt\\right] = -\\cos(x^2) \\cdot 1$',
          'Simplify: $-\\cos(x^2)$'
        ],
        answer: '$-\\cos(x^2)$'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Find $\\frac{d}{dx}\\left[\\int_0^x e^t\\,dt\\right]$',
        answer: '$e^x$'
      },
      {
        type: 'fill',
        question: 'Find $\\frac{d}{dx}\\left[\\int_1^{2x} t^2\\,dt\\right]$',
        answer: '$8x^2$'
      },
      {
        type: 'mc',
        question: 'What is $\\frac{d}{dx}\\left[\\int_0^{x^2} \\sin(t)\\,dt\\right]$?',
        choices: [
          '$\\sin(x^2)$',
          '$2x\\sin(x^2)$',
          '$\\cos(x^2)$',
          '$x^2\\sin(x^2)$'
        ],
        answer: 1
      },
      {
        type: 'fill',
        question: 'Find $\\frac{d}{dx}\\left[\\int_3^x \\frac{1}{t}\\,dt\\right]$',
        answer: '$\\frac{1}{x}$'
      },
      {
        type: 'mc',
        question: 'What does Part 1 of the FTC tell us about $F(x) = \\int_a^x f(t)\\,dt$?',
        choices: [
          '$F(x)$ is a derivative of $f(x)$',
          '$F\'(x) = f(x)$',
          '$F(x)$ is discontinuous',
          '$F(a) = f(a)$'
        ],
        answer: 1
      }
    ]
  },

  {
    id: '6.5',
    title: 'Fundamental Theorem of Calculus Part 2',
    unit: 6,
    level: 'AB',
    learn: `
      <div class="concept-card">
        <h2>The Fundamental Theorem of Calculus (Part 2)</h2>
        <p>Let $f$ be continuous on $[a, b]$, and let $F$ be any antiderivative of $f$ on $[a, b]$. Then:</p>
        <p>$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$</p>
        <p>This theorem connects the two main concepts of calculus: differentiation and integration. It shows that if you can find an antiderivative, you can evaluate the definite integral.</p>
      </div>

      <div class="formula-box">
        <h3>Evaluation Notation</h3>
        <p>$$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$$</p>
        <p>We often write the antiderivative in square brackets with the limits shown.</p>
      </div>

      <div class="concept-card">
        <h2>Net Change Theorem</h2>
        <p>If $F\'(x) = f(x)$, then:</p>
        <p>$$\\int_a^b F\'(x)\\,dx = F(b) - F(a)$$</p>
        <p>The definite integral of a rate of change equals the total change in the quantity. This is a powerful principle: distance traveled = integral of velocity, total growth = integral of growth rate, etc.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Step-by-step process: (1) Find the antiderivative $F(x)$, (2) Evaluate $F$ at the upper limit $b$, (3) Evaluate $F$ at the lower limit $a$, (4) Compute $F(b) - F(a)$.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Evaluate $\\int_1^3 (3x^2 - 2x)\\,dx$',
        steps: [
          'Find the antiderivative of $3x^2 - 2x$',
          '$F(x) = 3 \\cdot \\frac{x^3}{3} - 2 \\cdot \\frac{x^2}{2} = x^3 - x^2$',
          'Evaluate at the bounds: $[x^3 - x^2]_1^3$',
          'Upper limit: $F(3) = 3^3 - 3^2 = 27 - 9 = 18$',
          'Lower limit: $F(1) = 1^3 - 1^2 = 1 - 1 = 0$',
          'Compute the difference: $F(3) - F(1) = 18 - 0 = 18$'
        ],
        answer: '$18$'
      },
      {
        problem: 'Evaluate $\\int_0^{\\pi/2} \\cos(x)\\,dx$',
        steps: [
          'Find the antiderivative of $\\cos(x)$',
          '$F(x) = \\sin(x)$',
          'Evaluate at the bounds: $[\\sin(x)]_0^{\\pi/2}$',
          'Upper limit: $\\sin(\\pi/2) = 1$',
          'Lower limit: $\\sin(0) = 0$',
          'Compute: $1 - 0 = 1$'
        ],
        answer: '$1$'
      },
      {
        problem: 'Evaluate $\\int_1^4 \\frac{1}{\\sqrt{x}}\\,dx$',
        steps: [
          'Rewrite: $\\int_1^4 x^{-1/2}\\,dx$',
          'Find the antiderivative: $F(x) = \\frac{x^{1/2}}{1/2} = 2\\sqrt{x}$',
          'Evaluate at the bounds: $[2\\sqrt{x}]_1^4$',
          'Upper limit: $2\\sqrt{4} = 2(2) = 4$',
          'Lower limit: $2\\sqrt{1} = 2(1) = 2$',
          'Compute: $4 - 2 = 2$'
        ],
        answer: '$2$'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Evaluate $\\int_0^2 (2x + 3)\\,dx$',
        answer: '10'
      },
      {
        type: 'fill',
        question: 'Evaluate $\\int_1^2 e^x\\,dx$. (Round to three decimal places.)',
        answer: '3.695'
      },
      {
        type: 'mc',
        question: 'To evaluate $\\int_1^5 f(x)\\,dx$ using Part 2 of the FTC, what must you first find?',
        choices: [
          'The derivative of $f(x)$',
          'An antiderivative $F(x)$ of $f(x)$',
          'The limit of $f$ as $x \\to \\infty$',
          'The critical points of $f(x)$'
        ],
        answer: 1
      },
      {
        type: 'fill',
        question: 'Evaluate $\\int_0^{\\pi} \\sin(x)\\,dx$',
        answer: '2'
      },
      {
        type: 'fill',
        question: 'If $\\int_a^5 (x^2 + 1)\\,dx = [\\frac{x^3}{3} + x]_a^5 = (\\frac{125}{3} + 5) - (\\frac{a^3}{3} + a) = 24$, find $a$',
        answer: '2'
      }
    ]
  },

  {
    id: '6.6',
    title: 'u-Substitution',
    unit: 6,
    level: 'AB',
    learn: `
      <div class="concept-card">
        <h2>u-Substitution: The Reverse Chain Rule</h2>
        <p>u-substitution is a technique for evaluating integrals that contain a composite function. It reverses the chain rule of differentiation.</p>
        <p>If an integral has the form $\\int f(g(x)) \\cdot g\'(x)\\,dx$, we can simplify by setting $u = g(x)$ and $du = g\'(x)\\,dx$.</p>
      </div>

      <div class="formula-box">
        <h3>u-Substitution for Indefinite Integrals</h3>
        <p>$$\\int f(g(x)) \\cdot g\'(x)\\,dx = \\int f(u)\\,du = F(u) + C = F(g(x)) + C$$</p>
        <p>where $u = g(x)$ and $du = g\'(x)\\,dx$</p>
      </div>

      <div class="formula-box">
        <h3>u-Substitution for Definite Integrals</h3>
        <p>$$\\int_a^b f(g(x)) \\cdot g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$$</p>
        <p>When using u-substitution in a definite integral, <strong>change the limits of integration</strong> to the corresponding $u$ values.</p>
      </div>

      <div class="concept-card">
        <h2>Strategy for u-Substitution</h2>
        <ol>
          <li><strong>Identify the inner function.</strong> Look for a composite function $f(g(x))$ inside the integral.</li>
          <li><strong>Let $u$ equal the inner function.</strong> Set $u = g(x)$.</li>
          <li><strong>Find $du$.</strong> Compute $du = g\'(x)\\,dx$, so $dx = \\frac{du}{g\'(x)}$.</li>
          <li><strong>Rewrite the integral in terms of $u$.</strong> Substitute all instances of $g(x)$ with $u$ and $dx$ with the appropriate $du$ expression.</li>
          <li><strong>Integrate with respect to $u$.</strong></li>
          <li><strong>Back-substitute.</strong> Replace $u$ with $g(x)$ in the final answer (for indefinite integrals only).</li>
        </ol>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Choose $u$ to be the part whose derivative also appears (or is a constant multiple of what appears) in the integrand. This makes the integral simpler.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find $\\int 2x(x^2 + 1)^5\\,dx$',
        steps: [
          'Identify the composite function: the inner function is $x^2 + 1$',
          'Let $u = x^2 + 1$',
          'Compute the differential: $du = 2x\\,dx$',
          'Notice that $2x\\,dx$ appears in the integrand—perfect!',
          'Rewrite: $\\int 2x(x^2 + 1)^5\\,dx = \\int u^5\\,du$',
          'Integrate: $\\int u^5\\,du = \\frac{u^6}{6} + C$',
          'Back-substitute: $\\frac{(x^2 + 1)^6}{6} + C$'
        ],
        answer: '$\\frac{(x^2 + 1)^6}{6} + C$'
      },
      {
        problem: 'Find $\\int \\sin(3x)\\,dx$',
        steps: [
          'The inner function is $3x$',
          'Let $u = 3x$',
          'Compute: $du = 3\\,dx$, so $dx = \\frac{du}{3}$',
          'Rewrite: $\\int \\sin(3x)\\,dx = \\int \\sin(u) \\cdot \\frac{du}{3} = \\frac{1}{3}\\int \\sin(u)\\,du$',
          'Integrate: $\\frac{1}{3}\\int \\sin(u)\\,du = \\frac{1}{3}(-\\cos(u)) + C = -\\frac{1}{3}\\cos(u) + C$',
          'Back-substitute: $-\\frac{1}{3}\\cos(3x) + C$'
        ],
        answer: '$-\\frac{1}{3}\\cos(3x) + C$'
      },
      {
        problem: 'Evaluate $\\int_0^1 xe^{x^2}\\,dx$',
        steps: [
          'Let $u = x^2$',
          'Compute: $du = 2x\\,dx$, so $x\\,dx = \\frac{du}{2}$',
          'Change the limits: When $x = 0$: $u = 0$. When $x = 1$: $u = 1$',
          'Rewrite: $\\int_0^1 xe^{x^2}\\,dx = \\int_0^1 e^u \\cdot \\frac{du}{2} = \\frac{1}{2}\\int_0^1 e^u\\,du$',
          'Integrate: $\\frac{1}{2}[e^u]_0^1 = \\frac{1}{2}(e - 1)$'
        ],
        answer: '$\\frac{e - 1}{2}$'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Find $\\int 3x^2(x^3 + 2)^4\\,dx$',
        answer: '$\\frac{(x^3 + 2)^5}{5} + C$'
      },
      {
        type: 'fill',
        question: 'Find $\\int \\cos(2x)\\,dx$',
        answer: '$\\frac{1}{2}\\sin(2x) + C$'
      },
      {
        type: 'mc',
        question: 'When using u-substitution for the definite integral $\\int_a^b f(g(x))g\'(x)\\,dx$, what must you do with the limits?',
        choices: [
          'Leave them unchanged',
          'Change them to $g(a)$ and $g(b)$',
          'Change them to $a + C$ and $b + C$',
          'Ignore them until after integrating'
        ],
        answer: 1
      },
      {
        type: 'fill',
        question: 'Evaluate $\\int_0^2 (2x + 1)^3\\,dx$ using u-substitution',
        answer: '60'
      },
      {
        type: 'fill',
        question: 'Find $\\int e^{5x}\\,dx$',
        answer: '$\\frac{1}{5}e^{5x} + C$'
      }
    ]
  },

  {
    id: '6.7',
    title: 'Integration by Parts',
    unit: 6,
    level: 'BC',
    learn: `
      <div class="concept-card">
        <h2>Integration by Parts</h2>
        <p>Integration by parts is a technique for integrating products of functions. It is derived from the product rule for differentiation.</p>
        <p>If $u$ and $v$ are differentiable functions, then:</p>
        <p>$$\\int u\\,dv = uv - \\int v\\,du$$</p>
        <p>This formula transfers the differentiation from one function to another, often simplifying the integral.</p>
      </div>

      <div class="formula-box">
        <h3>Integration by Parts Formula</h3>
        <p>$$\\int u\\,dv = uv - \\int v\\,du$$</p>
        <p>For definite integrals:</p>
        <p>$$\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du$$</p>
      </div>

      <div class="concept-card">
        <h2>LIATE Rule for Choosing $u$</h2>
        <p>When you have a product of two functions, choose $u$ according to this priority (LIATE):</p>
        <ol>
          <li><strong>L</strong>ogarithmic functions: $\\ln(x)$, $\\log(x)$</li>
          <li><strong>I</strong>nverse trigonometric functions: $\\arcsin(x)$, $\\arccos(x)$, $\\arctan(x)$</li>
          <li><strong>A</strong>lgebraic functions: $x$, $x^2$, polynomials</li>
          <li><strong>T</strong>rigonometric functions: $\\sin(x)$, $\\cos(x)$</li>
          <li><strong>E</strong>xponential functions: $e^x$, $a^x$</li>
        </ol>
        <p>The function that comes first in this list should be chosen as $u$. The remaining function is $dv$.</p>
      </div>

      <div class="concept-card">
        <h2>Repeated Integration by Parts</h2>
        <p>Some integrals require applying integration by parts multiple times. The <strong>tabular method</strong> (or integration by parts table) efficiently handles repeated applications by setting up columns of derivatives and antiderivatives.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Check your answer by differentiating. The derivative of your result should equal the original integrand.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find $\\int x e^x\\,dx$',
        steps: [
          'Use LIATE to choose $u$: Algebraic ($x$) comes before Exponential ($e^x$)',
          'Let $u = x$ and $dv = e^x\\,dx$',
          'Then $du = dx$ and $v = e^x$',
          'Apply the formula: $\\int x e^x\\,dx = uv - \\int v\\,du = x e^x - \\int e^x\\,dx$',
          'Integrate: $x e^x - e^x + C$',
          'Factor: $e^x(x - 1) + C$'
        ],
        answer: '$e^x(x - 1) + C$ or $xe^x - e^x + C$'
      },
      {
        problem: 'Find $\\int x^2 \\sin(x)\\,dx$',
        steps: [
          'First application: $u = x^2$, $dv = \\sin(x)\\,dx$',
          'Then $du = 2x\\,dx$, $v = -\\cos(x)$',
          '$\\int x^2 \\sin(x)\\,dx = -x^2\\cos(x) - \\int (-\\cos(x))(2x)\\,dx = -x^2\\cos(x) + 2\\int x\\cos(x)\\,dx$',
          'Second application on $\\int x\\cos(x)\\,dx$: $u = x$, $dv = \\cos(x)\\,dx$',
          'Then $du = dx$, $v = \\sin(x)$',
          '$\\int x\\cos(x)\\,dx = x\\sin(x) - \\int \\sin(x)\\,dx = x\\sin(x) + \\cos(x)$',
          'Combine: $-x^2\\cos(x) + 2[x\\sin(x) + \\cos(x)] + C = -x^2\\cos(x) + 2x\\sin(x) + 2\\cos(x) + C$'
        ],
        answer: '$-x^2\\cos(x) + 2x\\sin(x) + 2\\cos(x) + C$'
      },
      {
        problem: 'Find $\\int \\ln(x)\\,dx$',
        steps: [
          'Let $u = \\ln(x)$ and $dv = dx$ (note: $dv$ is just $1\\,dx$)',
          'Then $du = \\frac{1}{x}\\,dx$ and $v = x$',
          'Apply the formula: $\\int \\ln(x)\\,dx = x\\ln(x) - \\int x \\cdot \\frac{1}{x}\\,dx$',
          'Simplify: $= x\\ln(x) - \\int 1\\,dx$',
          'Integrate: $= x\\ln(x) - x + C$'
        ],
        answer: '$x\\ln(x) - x + C$'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Find $\\int x\\cos(x)\\,dx$',
        answer: '$x\\sin(x) + \\cos(x) + C$'
      },
      {
        type: 'fill',
        question: 'Find $\\int xe^{2x}\\,dx$',
        answer: '$\\frac{1}{2}xe^{2x} - \\frac{1}{4}e^{2x} + C$'
      },
      {
        type: 'mc',
        question: 'According to LIATE, which should be chosen as $u$ for $\\int x\\ln(x)\\,dx$?',
        choices: [
          '$x$',
          '$\\ln(x)$',
          '$dx$',
          'Either $x$ or $\\ln(x)$ works equally'
        ],
        answer: 1
      },
      {
        type: 'fill',
        question: 'Find $\\int (x + 1)e^x\\,dx$',
        answer: '$xe^x + C$'
      },
      {
        type: 'fill',
        question: 'Evaluate $\\int_0^{\\pi/2} x\\sin(x)\\,dx$',
        answer: '1'
      }
    ]
  },

  {
    id: '6.8',
    title: 'Partial Fractions & Improper Integrals',
    unit: 6,
    level: 'BC',
    learn: `
      <div class="concept-card">
        <h2>Partial Fraction Decomposition</h2>
        <p>Partial fraction decomposition breaks a rational function into a sum of simpler fractions that are easier to integrate.</p>
        <p>For a rational function $\\frac{P(x)}{Q(x)}$ where the degree of $P$ is less than the degree of $Q$, we express it as a sum of fractions with linear or quadratic denominators.</p>
      </div>

      <div class="formula-box">
        <h3>Partial Fraction Form (Distinct Linear Factors)</h3>
        <p>$$\\frac{P(x)}{(x - a)(x - b)} = \\frac{A}{x - a} + \\frac{B}{x - b}$$</p>
        <p>Multiply both sides by $(x - a)(x - b)$ and solve for the constants $A$ and $B$ by substituting convenient values of $x$ or matching coefficients.</p>
      </div>

      <div class="concept-card">
        <h2>Improper Integrals</h2>
        <p>An improper integral is either:</p>
        <ul>
          <li><strong>Infinite limits:</strong> $\\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx$</li>
          <li><strong>Discontinuous integrand:</strong> The function has a vertical asymptote within the interval of integration</li>
        </ul>
        <p>An improper integral is <strong>convergent</strong> if the limit exists and is finite; otherwise, it is <strong>divergent</strong>.</p>
      </div>

      <div class="formula-box">
        <h3>Improper Integrals: Infinite Limits</h3>
        <p>$$\\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx$$</p>
        <p>$$\\int_{-\\infty}^b f(x)\\,dx = \\lim_{t \\to -\\infty} \\int_t^b f(x)\\,dx$$</p>
        <p>$$\\int_{-\\infty}^{\\infty} f(x)\\,dx = \\int_{-\\infty}^c f(x)\\,dx + \\int_c^{\\infty} f(x)\\,dx$$</p>
      </div>

      <div class="formula-box">
        <h3>Improper Integrals: Discontinuous Integrand</h3>
        <p>If $f$ has a vertical asymptote at $x = c$ where $a < c < b$:</p>
        <p>$$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx = \\lim_{t \\to c^-} \\int_a^t f(x)\\,dx + \\lim_{s \\to c^+} \\int_s^b f(x)\\,dx$$</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> For partial fractions, the number of constants equals the number of factors. For improper integrals, always evaluate the limit carefully—divergent integrals are common!</p>
      </div>
    `,
    examples: [
      {
        problem: 'Use partial fractions to find $\\int \\frac{dx}{(x - 1)(x + 2)}$',
        steps: [
          'Set up the partial fraction decomposition:',
          '$\\frac{1}{(x - 1)(x + 2)} = \\frac{A}{x - 1} + \\frac{B}{x + 2}$',
          'Multiply both sides by $(x - 1)(x + 2)$:',
          '$1 = A(x + 2) + B(x - 1)$',
          'Substitute $x = 1$: $1 = A(3) + 0 \\Rightarrow A = \\frac{1}{3}$',
          'Substitute $x = -2$: $1 = 0 + B(-3) \\Rightarrow B = -\\frac{1}{3}$',
          'The decomposition is: $\\frac{1}{3(x - 1)} - \\frac{1}{3(x + 2)}$',
          'Integrate: $\\frac{1}{3}\\ln|x - 1| - \\frac{1}{3}\\ln|x + 2| + C = \\frac{1}{3}\\ln\\left|\\frac{x - 1}{x + 2}\\right| + C$'
        ],
        answer: '$\\frac{1}{3}\\ln\\left|\\frac{x - 1}{x + 2}\\right| + C$'
      },
      {
        problem: 'Evaluate $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$',
        steps: [
          'This is an improper integral with an infinite upper limit',
          'Set up the limit: $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = \\lim_{t \\to \\infty} \\int_1^t x^{-2}\\,dx$',
          'Evaluate the antiderivative: $\\int x^{-2}\\,dx = -x^{-1} = -\\frac{1}{x}$',
          'Apply limits: $\\lim_{t \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^t = \\lim_{t \\to \\infty} \\left(-\\frac{1}{t} + 1\\right)$',
          'Evaluate the limit: $= 0 + 1 = 1$',
          'The integral converges to 1'
        ],
        answer: '$1$ (convergent)'
      },
      {
        problem: 'Evaluate $\\int_1^{\\infty} \\frac{1}{x}\\,dx$',
        steps: [
          'Set up the limit: $\\int_1^{\\infty} \\frac{1}{x}\\,dx = \\lim_{t \\to \\infty} \\int_1^t \\frac{1}{x}\\,dx$',
          'The antiderivative: $\\int \\frac{1}{x}\\,dx = \\ln(x)$',
          'Apply limits: $\\lim_{t \\to \\infty} [\\ln(x)]_1^t = \\lim_{t \\to \\infty} (\\ln(t) - \\ln(1))$',
          'Evaluate the limit: $= \\lim_{t \\to \\infty} \\ln(t) = \\infty$',
          'The integral diverges'
        ],
        answer: 'Divergent (diverges to $\\infty$)'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Use partial fractions to decompose $\\frac{5}{(x + 1)(x - 2)}$ as $\\frac{A}{x + 1} + \\frac{B}{x - 2}$. What is $A$?',
        answer: '$-\\frac{5}{3}$'
      },
      {
        type: 'mc',
        question: 'Is the improper integral $\\int_1^{\\infty} e^{-x}\\,dx$ convergent or divergent?',
        choices: [
          'Convergent',
          'Divergent',
          'Cannot be determined',
          'Both convergent and divergent'
        ],
        answer: 0
      },
      {
        type: 'fill',
        question: 'Evaluate $\\int_2^{\\infty} \\frac{1}{(x - 1)^2}\\,dx$',
        answer: '1'
      },
      {
        type: 'fill',
        question: 'For $\\frac{2}{(x - 1)(x + 3)} = \\frac{A}{x - 1} + \\frac{B}{x + 3}$, what is $B$?',
        answer: '$-\\frac{1}{2}$'
      },
      {
        type: 'mc',
        question: 'Which improper integral converges?',
        choices: [
          '$\\int_1^{\\infty} \\frac{1}{x}\\,dx$',
          '$\\int_1^{\\infty} \\frac{1}{x^{1.5}}\\,dx$',
          '$\\int_1^{\\infty} 1\\,dx$',
          '$\\int_1^{\\infty} x\\,dx$'
        ],
        answer: 1
      }
    ]
  }
];
