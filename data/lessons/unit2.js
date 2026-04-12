export const lessons = [
  {
    id: '2.1',
    title: 'The Derivative at a Point',
    subtitle: 'Understanding the instantaneous rate of change',
    learn: `
<div style="">
  <h2>The Derivative at a Point</h2>

  <div class="formula-box">
    <h3>Definition of the Derivative at a Point</h3>
    <p>The derivative of $f$ at $x = a$, denoted $f'(a)$, is:</p>
    <div class="formula-box">$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$$</div>
    <p><strong>Alternate form:</strong></p>
    <div class="formula-box">$$f'(a) = \\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}$$</div>
  </div>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h3>Geometric Interpretation</h3>
    <p>The derivative $f'(a)$ represents the <strong>slope of the tangent line</strong> to the curve $y = f(x)$ at the point $(a, f(a))$. It is the instantaneous rate of change of $f$ at $x = a$.</p></p>
 </div>

  <h3>Differentiability and Continuity</h3>
  <p><strong>Key Fact:</strong> If $f$ is differentiable at $x = a$, then $f$ is continuous at $x = a$.</p>
  <p><strong>Converse (NOT true):</strong> If $f$ is continuous at $x = a$, $f$ may not be differentiable there.</p>

  <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
    <p><strong>Counter-example:</strong> $f(x) = |x|$ is continuous at $x = 0$ but not differentiable there because the left and right derivatives don't match (the graph has a corner).</p>
  </div>

  <h3>Where a Function Is NOT Differentiable</h3>
  <ul>
    <li><strong>Corners:</strong> Sharp turns in the graph (like $|x|$ at $x=0$)</li>
    <li><strong>Cusps:</strong> Sharp peaks (like $f(x) = |x|^{2/3}$ at $x=0$)</li>
    <li><strong>Vertical tangents:</strong> When the tangent line is vertical (like $f(x) = \\sqrt[3]{x}$ at $x=0$)</li>
    <li><strong>Jump discontinuities:</strong> Where the function "jumps"</li>
  </ul>

  <h3>The Process</h3>
  <p>To find $f'(a)$ from the definition:</p>
  <ol>
    <li>Write $\\frac{f(a+h)-f(a)}{h}$</li>
    <li>Substitute the function and simplify (often requires algebraic manipulation)</li>
    <li>Evaluate $\\lim_{h \\to 0}$ of the simplified expression</li>
  </ol>
</div>
    `,
    examples: [
      {
        problem: 'Find $f\'(3)$ if $f(x) = x^2$ using the definition of the derivative.',
        steps: [
          'Set up the limit definition: $f\'(3) = \\lim_{h \\to 0} \\frac{f(3+h)-f(3)}{h}$',
          'Compute $f(3+h) = (3+h)^2 = 9 + 6h + h^2$',
          'Compute $f(3) = 9$',
          'Substitute: $f\'(3) = \\lim_{h \\to 0} \\frac{(9+6h+h^2)-9}{h} = \\lim_{h \\to 0} \\frac{6h+h^2}{h}$',
          'Factor and cancel: $\\lim_{h \\to 0} \\frac{h(6+h)}{h} = \\lim_{h \\to 0} (6+h)$',
          'Evaluate the limit: $f\'(3) = 6$'
        ],
        answer: '$f\'(3) = 6$ (This is the slope of the tangent line to $y = x^2$ at $x = 3$.)'
      },
      {
        problem: 'Find $f\'(2)$ if $f(x) = \\frac{1}{x}$ using the definition of the derivative.',
        steps: [
          'Set up: $f\'(2) = \\lim_{h \\to 0} \\frac{f(2+h)-f(2)}{h}$',
          'Compute $f(2+h) = \\frac{1}{2+h}$ and $f(2) = \\frac{1}{2}$',
          'Write the difference: $\\frac{1}{2+h} - \\frac{1}{2} = \\frac{2 - (2+h)}{2(2+h)} = \\frac{-h}{2(2+h)}$',
          'Substitute: $f\'(2) = \\lim_{h \\to 0} \\frac{\\frac{-h}{2(2+h)}}{h}$',
          'Simplify: $\\lim_{h \\to 0} \\frac{-h}{2(2+h) \\cdot h} = \\lim_{h \\to 0} \\frac{-1}{2(2+h)}$',
          'Evaluate: $f\'(2) = \\frac{-1}{2(2)} = -\\frac{1}{4}$'
        ],
        answer: '$f\'(2) = -\\frac{1}{4}$'
      },
      {
        problem: 'Find $f\'(4)$ if $f(x) = \\sqrt{x}$ using the limit definition.',
        steps: [
          'Set up: $f\'(4) = \\lim_{h \\to 0} \\frac{\\sqrt{4+h}-\\sqrt{4}}{h}$',
          'Simplify: $f\'(4) = \\lim_{h \\to 0} \\frac{\\sqrt{4+h}-2}{h}$',
          'Rationalize by multiplying by $\\frac{\\sqrt{4+h}+2}{\\sqrt{4+h}+2}$:',
          '$= \\lim_{h \\to 0} \\frac{(\\sqrt{4+h}-2)(\\sqrt{4+h}+2)}{h(\\sqrt{4+h}+2)}$',
          'Expand numerator: $(\\sqrt{4+h})^2 - 4 = (4+h) - 4 = h$',
          '$= \\lim_{h \\to 0} \\frac{h}{h(\\sqrt{4+h}+2)} = \\lim_{h \\to 0} \\frac{1}{\\sqrt{4+h}+2}$',
          'Evaluate: $f\'(4) = \\frac{1}{\\sqrt{4}+2} = \\frac{1}{2+2} = \\frac{1}{4}$'
        ],
        answer: '$f\'(4) = \\frac{1}{4}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which of the following is the definition of the derivative at $x = a$?',
        choices: [
          {
            text: '$\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$',
            correct: true,
            explanation: 'This is the standard limit definition of the derivative at a point.'
          },
          {
            text: '$\\frac{f(a+h)-f(a)}{h}$',
            correct: false,
            explanation: 'This is the difference quotient, but the limit must be taken as $h \\to 0$.'
          },
          {
            text: '$f(a+h) - f(a)$',
            correct: false,
            explanation: 'This is just the change in $f$, not the rate of change.'
          },
          {
            text: '$\\lim_{x \\to a} f(x) - f(a)$',
            correct: false,
            explanation: 'This limit equals zero; it does not give the derivative.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'If $f(x) = 5x - 3$, then $f\'(1) = $ ______',
        answer: '5',
        explanation: 'Using the limit definition: $f\'(1) = \\lim_{h \\to 0} \\frac{(5(1+h)-3)-(5(1)-3)}{h} = \\lim_{h \\to 0} \\frac{5h}{h} = 5$. The derivative of a linear function is its slope.'
      },
      {
        type: 'mc',
        question: 'The function $f(x) = |x-1|$ is not differentiable at $x = 1$ because:',
        choices: [
          {
            text: 'The function is not continuous there',
            correct: false,
            explanation: '$|x-1|$ is continuous everywhere, including at $x=1$.'
          },
          {
            text: 'The graph has a corner at that point',
            correct: true,
            explanation: 'A corner (sharp turn) means the left and right derivatives don\'t match, so $f\'(1)$ does not exist.'
          },
          {
            text: 'The function value is zero',
            correct: false,
            explanation: 'A derivative can equal zero; that\'s different from not existing.'
          },
          {
            text: 'The derivative is undefined at all absolute value functions',
            correct: false,
            explanation: '$f(x) = |x|$ is differentiable for all $x \\neq 0$.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'If the derivative $f\'(a)$ exists, then the function $f$ must be ______ at $x = a$.',
        answer: 'continuous',
        explanation: 'Differentiability at a point implies continuity at that point. This is a fundamental theorem in calculus.'
      },
      {
        type: 'mc',
        question: 'Which scenario represents a function that is continuous but NOT differentiable?',
        choices: [
          {
            text: 'A function with a jump discontinuity',
            correct: false,
            explanation: 'A jump discontinuity means the function is not continuous, so it\'s not differentiable either.'
          },
          {
            text: 'A function with a cusp or corner',
            correct: true,
            explanation: 'A function can be continuous (no breaks) but have a sharp corner or cusp, making it non-differentiable there.'
          },
          {
            text: 'A function where $f\'(a) = 0$',
            correct: false,
            explanation: 'A derivative of zero means the function is differentiable with a horizontal tangent.'
          },
          {
            text: 'A function with a vertical asymptote',
            correct: false,
            explanation: 'A vertical asymptote indicates a discontinuity, so the function is not continuous there.'
          }
        ]
      }
    ]
  },
  {
    id: '2.2',
    title: 'The Derivative as a Function',
    subtitle: 'From a single point to a complete function',
    learn: `
<div style="">
  <h2>The Derivative as a Function</h2>

  <div class="formula-box">
    <h3>The Derivative Function</h3>
    <p>The derivative of $f$ is itself a function $f'(x)$ defined by:</p>
    <div class="formula-box">$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$$</div>
    <p>For each $x$ in the domain of $f'$, the value $f'(x)$ is the slope of the tangent line to $y = f(x)$ at that point.</p>
  </div>

  <h3>Graphical Relationships Between $f$ and $f'$</h3>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h3>Reading $f$ to Find Properties of $f'$</h3>
    <ul>
      <li><strong>Where $f$ is increasing:</strong> $f'(x) > 0$ (derivative is positive)</li>
      <li><strong>Where $f$ is decreasing:</strong> $f'(x) < 0$ (derivative is negative)</li>
      <li><strong>At local maxima and minima:</strong> $f'(x) = 0$ (critical points)</li>
      <li><strong>At corners or cusps in $f$:</strong> $f'$ has a jump discontinuity</li>
      <li><strong>The slope of $f$ is steepest:</strong> $|f'(x)|$ is largest</li>
    </ul></p>
 </div>

  <h3>Higher-Order Derivatives</h3>
  <p>Once we have $f'(x)$, we can differentiate again to get the <strong>second derivative</strong> $f''(x)$ (also written as $\\frac{d^2f}{dx^2}$).</p>
  <p>Similarly, we can find the <strong>third derivative</strong> $f'''(x)$, and so on.</p>

  <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
    <p><strong>Notation:</strong> $f'(x)$, $f''(x)$, $f'''(x)$, $f^{(4)}(x)$, ... or $\\frac{df}{dx}$, $\\frac{d^2f}{dx^2}$, $\\frac{d^3f}{dx^3}$, ...</p>
  </div>

  <h3>Interpreting Graphs of $f$ and $f'$</h3>
  <p>When comparing the graph of a function to its derivative:</p>
  <ul>
    <li>Peaks and valleys in $f$ correspond to zeros of $f'$</li>
    <li>Steep regions in $f$ correspond to large values of $|f'(x)|$</li>
    <li>Flat regions in $f$ correspond to $f'(x) \\approx 0$</li>
    <li>The graph of $f'$ shifts horizontally and vertically relative to $f$</li>
  </ul>
</div>
    `,
    examples: [
      {
        problem: 'Given $f(x) = x^3$, find $f\'(x)$ using the limit definition and verify that $f\'(-1) = 3$ and $f\'(2) = 12$.',
        steps: [
          'Set up the limit: $f\'(x) = \\lim_{h \\to 0} \\frac{(x+h)^3 - x^3}{h}$',
          'Expand $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$',
          'Substitute: $f\'(x) = \\lim_{h \\to 0} \\frac{x^3 + 3x^2h + 3xh^2 + h^3 - x^3}{h}$',
          'Simplify: $f\'(x) = \\lim_{h \\to 0} \\frac{3x^2h + 3xh^2 + h^3}{h}$',
          'Factor out $h$: $f\'(x) = \\lim_{h \\to 0} \\frac{h(3x^2 + 3xh + h^2)}{h}$',
          'Cancel: $f\'(x) = \\lim_{h \\to 0} (3x^2 + 3xh + h^2)$',
          'Evaluate limit: $f\'(x) = 3x^2$',
          'Verify: $f\'(-1) = 3(-1)^2 = 3$ ✓ and $f\'(2) = 3(2)^2 = 12$ ✓'
        ],
        answer: '$f\'(x) = 3x^2$'
      },
      {
        problem: 'For $f(x) = x^3 - 3x$, find all values of $x$ where $f\'(x) = 0$ (critical points).',
        steps: [
          'From the previous example, we know $\\frac{d}{dx}[x^3] = 3x^2$, so $f\'(x) = 3x^2 - 3$',
          'Set $f\'(x) = 0$: $3x^2 - 3 = 0$',
          'Solve: $3x^2 = 3$',
          'Divide by 3: $x^2 = 1$',
          'Take square root: $x = 1$ or $x = -1$'
        ],
        answer: 'Critical points are at $x = -1$ and $x = 1$. These are where the tangent line is horizontal (local max and local min).'
      },
      {
        problem: 'Sketch the derivative $f\'(x)$ if $f(x)$ is a parabola opening upward with vertex at $(0, -2)$.',
        steps: [
          'The function $f(x)$ opens upward with minimum at $x = 0$, so $f$ is decreasing for $x < 0$ and increasing for $x > 0$.',
          'Since $f$ is decreasing on $(-\\infty, 0)$, we have $f\'(x) < 0$ for $x < 0$.',
          'Since $f$ is increasing on $(0, \\infty)$, we have $f\'(x) > 0$ for $x > 0$.',
          'At the minimum $x = 0$, we have $f\'(0) = 0$.',
          'A parabola with vertex at origin and opening upward is $f(x) = ax^2$ for some $a > 0$, so $f\'(x) = 2ax$.',
          'The graph of $f\'(x) = 2ax$ is a line through the origin with positive slope.'
        ],
        answer: 'The derivative is a linear function passing through the origin with positive slope, crossing from negative to positive at $x = 0$.'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'If the graph of $f$ is increasing on an interval, then on that interval, the graph of $f\'$ is:',
        choices: [
          {
            text: 'Above the $x$-axis (positive)',
            correct: true,
            explanation: 'Where $f$ is increasing, the slope is positive, so $f\'(x) > 0$.'
          },
          {
            text: 'Below the $x$-axis (negative)',
            correct: false,
            explanation: 'Negative derivative means $f$ is decreasing, not increasing.'
          },
          {
            text: 'Always zero',
            correct: false,
            explanation: 'Zero derivative means $f$ has zero slope (horizontal), not necessarily increasing.'
          },
          {
            text: 'Decreasing',
            correct: false,
            explanation: 'The behavior of $f\'$ depends on the second derivative $f\'\'$, not directly on $f$ increasing.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'If $f$ has a local maximum at $x = c$, then $f\'(c) = $ ______',
        answer: '0',
        explanation: 'At a local maximum, the tangent line is horizontal, so the slope is zero: $f\'(c) = 0$. This is a critical point.'
      },
      {
        type: 'mc',
        question: 'The second derivative $f\'\'(x)$ measures:',
        choices: [
          {
            text: 'The rate of change of the derivative',
            correct: true,
            explanation: '$f\'\'(x) = \\frac{d}{dx}[f\'(x)]$, so it describes how $f\'$ is changing.'
          },
          {
            text: 'The original function value',
            correct: false,
            explanation: 'That\'s $f(x)$, not $f\'\'(x)$.'
          },
          {
            text: 'The value of the slope at $x$',
            correct: false,
            explanation: 'That\'s $f\'(x)$, not $f\'\'(x)$.'
          },
          {
            text: 'The integral of $f(x)$',
            correct: false,
            explanation: 'The integral is the opposite operation from differentiation.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'If $f(x) = 2x^2 - 8x + 5$, then the critical point is at $x = $ ______',
        answer: '2',
        explanation: 'Find $f\'(x) = 4x - 8$. Set to zero: $4x - 8 = 0 \\Rightarrow x = 2$.'
      },
      {
        type: 'mc',
        question: 'If the graph of $f\'(x)$ is always positive and always decreasing, then the graph of $f(x)$ is:',
        choices: [
          {
            text: 'Increasing and concave down',
            correct: true,
            explanation: '$f\'(x) > 0$ means $f$ is increasing. $f\'(x)$ decreasing means $f\'\'(x) < 0$, so $f$ is concave down.'
          },
          {
            text: 'Decreasing and concave up',
            correct: false,
            explanation: '$f\'(x) > 0$ means $f$ is increasing, not decreasing.'
          },
          {
            text: 'Increasing and concave up',
            correct: false,
            explanation: '$f\'(x)$ decreasing means $f\'\'(x) < 0$, so $f$ is concave down, not up.'
          },
          {
            text: 'Decreasing and concave down',
            correct: false,
            explanation: '$f\'(x) > 0$ means $f$ is increasing, not decreasing.'
          }
        ]
      }
    ]
  },
  {
    id: '2.3',
    title: 'Power & Constant Rules',
    subtitle: 'Differentiation made simple',
    learn: `
<div style="">
  <h2>Basic Differentiation Rules</h2>

  <div class="formula-box">
    <h3>Constant Rule</h3>
    <div class="formula-box">$$\\frac{d}{dx}[c] = 0$$</div>
    <p>The derivative of any constant is zero (constant functions have zero slope).</p>
  </div>

  <div class="formula-box">
    <h3>Power Rule</h3>
    <div class="formula-box">$$\\frac{d}{dx}[x^n] = nx^{n-1}$$</div>
    <p>For any real number $n$, the derivative of $x^n$ is $n$ times $x$ to the power of $n-1$.</p>
  </div>

  <div class="formula-box">
    <h3>Constant Multiple Rule (Scalar Multiplication)</h3>
    <div class="formula-box">$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$</div>
    <p>Constants factor out when taking derivatives.</p>
  </div>

  <div class="formula-box">
    <h3>Sum and Difference Rules</h3>
    <div class="formula-box">$$\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$</div>
    <div class="formula-box">$$\\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$</div>
    <p>The derivative of a sum is the sum of the derivatives.</p>
  </div>

  <h3>Combining the Rules</h3>
  <p>These rules work together to differentiate polynomials and other algebraic expressions. Apply the power rule to each term, then combine using addition and subtraction.</p>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h3>Common Exponent Forms</h3>
    <ul>
      <li>$\\sqrt{x} = x^{1/2}$, so $\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$</li>
      <li>$\\frac{1}{x} = x^{-1}$, so $\\frac{d}{dx}[\\frac{1}{x}] = -x^{-2} = -\\frac{1}{x^2}$</li>
      <li>$\\sqrt[3]{x} = x^{1/3}$, so $\\frac{d}{dx}[\\sqrt[3]{x}] = \\frac{1}{3}x^{-2/3}$</li>
    </ul></p>
 </div>

  <h3>Tangent Lines</h3>
  <p>Use the derivative to find equations of tangent lines:</p>
  <ol>
    <li>Find the slope: $m = f'(a)$</li>
    <li>Use point-slope form: $y - f(a) = m(x - a)$</li>
  </ol>
</div>
    `,
    examples: [
      {
        problem: 'Differentiate $f(x) = 3x^4 - 2x^2 + 5x - 7$.',
        steps: [
          'Apply the power rule and constant multiple rule to each term:',
          '- $\\frac{d}{dx}[3x^4] = 3 \\cdot 4x^3 = 12x^3$',
          '- $\\frac{d}{dx}[-2x^2] = -2 \\cdot 2x = -4x$',
          '- $\\frac{d}{dx}[5x] = 5 \\cdot 1 = 5$',
          '- $\\frac{d}{dx}[-7] = 0$',
          'Combine using the sum rule:'
        ],
        answer: '$f\'(x) = 12x^3 - 4x + 5$'
      },
      {
        problem: 'Find the equation of the tangent line to $y = x^3$ at the point where $x = 2$.',
        steps: [
          'Find the derivative: $\\frac{dy}{dx} = 3x^2$',
          'Find the slope at $x = 2$: $m = 3(2)^2 = 3(4) = 12$',
          'Find the $y$-coordinate: $y = (2)^3 = 8$, so the point is $(2, 8)$',
          'Use point-slope form: $y - 8 = 12(x - 2)$',
          'Simplify: $y - 8 = 12x - 24$',
          'Final form: $y = 12x - 16$'
        ],
        answer: 'The tangent line is $y = 12x - 16$'
      },
      {
        problem: 'Differentiate $f(x) = \\sqrt{x} + \\frac{1}{x} = x^{1/2} + x^{-1}$.',
        steps: [
          'Rewrite using exponent notation: $f(x) = x^{1/2} + x^{-1}$',
          'Apply the power rule to each term:',
          '- $\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{1/2-1} = \\frac{1}{2}x^{-1/2}$',
          '- $\\frac{d}{dx}[x^{-1}] = -1 \\cdot x^{-1-1} = -x^{-2}$',
          'Combine: $f\'(x) = \\frac{1}{2}x^{-1/2} - x^{-2}$',
          'Rewrite in standard form: $f\'(x) = \\frac{1}{2\\sqrt{x}} - \\frac{1}{x^2}$'
        ],
        answer: '$f\'(x) = \\frac{1}{2\\sqrt{x}} - \\frac{1}{x^2}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is $\\frac{d}{dx}[x^5]$?',
        choices: [
          {
            text: '$5x^4$',
            correct: true,
            explanation: 'By the power rule: $\\frac{d}{dx}[x^n] = nx^{n-1}$, so $\\frac{d}{dx}[x^5] = 5x^{5-1} = 5x^4$.'
          },
          {
            text: '$5x^5$',
            correct: false,
            explanation: 'The exponent decreases by 1 in the power rule, not increases or stays the same.'
          },
          {
            text: '$x^4$',
            correct: false,
            explanation: 'The coefficient of 5 must be included. The power rule is $nx^{n-1}$.'
          },
          {
            text: '$5x^6$',
            correct: false,
            explanation: 'The exponent should decrease to 4, not increase to 6.'
          }
        ]
      },
      {
        type: 'fill',
        question: '$\\frac{d}{dx}[\\sqrt[3]{x^2}] = \\frac{d}{dx}[x^{2/3}] = $ ______',
        answer: '\\frac{2}{3}x^{-1/3}',
        explanation: 'Using the power rule: $\\frac{d}{dx}[x^{2/3}] = \\frac{2}{3}x^{2/3-1} = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$'
      },
      {
        type: 'mc',
        question: 'Differentiate $g(x) = -4x^3 + 2x^2 - 6x + 9$.',
        choices: [
          {
            text: '$g\'(x) = -12x^2 + 4x - 6$',
            correct: true,
            explanation: 'Apply power rule and constant multiple rule to each term: $-12x^2 + 4x - 6 + 0$.'
          },
          {
            text: '$g\'(x) = -4x^2 + 2x - 6$',
            correct: false,
            explanation: 'You forgot to multiply by the exponents: $-4(3) = -12$, not $-4$.'
          },
          {
            text: '$g\'(x) = -12x^2 + 4x$',
            correct: false,
            explanation: 'Don\'t forget the constant term $-6$ from differentiating $-6x$.'
          },
          {
            text: '$g\'(x) = -12x^3 + 4x^2 - 6x$',
            correct: false,
            explanation: 'The exponents should decrease by 1 in each term, not stay the same or decrease to different powers.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'The slope of the tangent line to $y = 2x^3 - x$ at $x = 1$ is ______',
        answer: '5',
        explanation: 'Find $\\frac{dy}{dx} = 6x^2 - 1$. At $x = 1$: slope $= 6(1)^2 - 1 = 6 - 1 = 5$.'
      },
      {
        type: 'mc',
        question: 'Which of the following is correct?',
        choices: [
          {
            text: '$\\frac{d}{dx}[5] = 0$',
            correct: true,
            explanation: 'The constant rule: the derivative of any constant is 0.'
          },
          {
            text: '$\\frac{d}{dx}[5] = 5$',
            correct: false,
            explanation: 'That would be the value of the constant, not its derivative.'
          },
          {
            text: '$\\frac{d}{dx}[5] = 1$',
            correct: false,
            explanation: 'The constant rule gives 0, not 1.'
          },
          {
            text: '$\\frac{d}{dx}[5] = 5x$',
            correct: false,
            explanation: 'That would come from incorrectly applying the power rule to a constant.'
          }
        ]
      }
    ]
  },
  {
    id: '2.4',
    title: 'Product & Quotient Rules',
    subtitle: 'Differentiating composite expressions',
    learn: `
<div style="">
  <h2>Product and Quotient Rules</h2>

  <div class="formula-box">
    <h3>The Product Rule</h3>
    <div class="formula-box">$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$</div>
    <p><strong>Mnemonic:</strong> "First times the derivative of the second, plus the second times the derivative of the first."</p>
  </div>

  <div class="formula-box">
    <h3>The Quotient Rule</h3>
    <div class="formula-box">$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$</div>
    <p><strong>Mnemonic:</strong> "Low times the derivative of the high, minus high times the derivative of the low, over low squared."</p>
  </div>

  <h3>When to Use Which Rule</h3>
  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><ul>
      <li><strong>Product Rule:</strong> When the function is a product of two functions, like $f(x) = x^2 \\sin(x)$ or $f(x) = (x^2+1)e^x$</li>
      <li><strong>Quotient Rule:</strong> When the function is a quotient of two functions, like $f(x) = \\frac{x^2+1}{x-3}$ or $f(x) = \\frac{\\sin(x)}{\\cos(x)}$</li>
      <li><strong>Simplify first:</strong> Sometimes it\'s easier to rewrite a quotient using negative exponents and apply the power rule instead of using the quotient rule</li>
    </ul></p>
 </div>

  <h3>Key Insight</h3>
  <p>Both rules follow from the limit definition of the derivative. The quotient rule can be derived by writing $\\frac{f(x)}{g(x)} = f(x) \\cdot [g(x)]^{-1}$ and applying the product rule along with the chain rule (which we\'ll learn next).</p>
</div>
    `,
    examples: [
      {
        problem: 'Differentiate $f(x) = x^2 \\sin(x)$ using the product rule.',
        steps: [
          'Identify: $u(x) = x^2$ and $v(x) = \\sin(x)$',
          'Find derivatives: $u\'(x) = 2x$ and $v\'(x) = \\cos(x)$',
          'Apply the product rule: $(uv)\' = u\'v + uv\'$',
          '$f\'(x) = (2x)(\\sin x) + (x^2)(\\cos x)$',
          'Simplify: $f\'(x) = 2x \\sin(x) + x^2 \\cos(x)$'
        ],
        answer: '$f\'(x) = 2x \\sin(x) + x^2 \\cos(x)$'
      },
      {
        problem: 'Differentiate $f(x) = \\frac{x^2+1}{x-3}$ using the quotient rule.',
        steps: [
          'Identify numerator: $u(x) = x^2 + 1$ with $u\'(x) = 2x$',
          'Identify denominator: $v(x) = x - 3$ with $v\'(x) = 1$',
          'Apply the quotient rule: $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$',
          '$f\'(x) = \\frac{(2x)(x-3) - (x^2+1)(1)}{(x-3)^2}$',
          'Expand the numerator:',
          '  $(2x)(x-3) = 2x^2 - 6x$',
          '  $(x^2+1)(1) = x^2 + 1$',
          'Combine: $2x^2 - 6x - x^2 - 1 = x^2 - 6x - 1$',
          '$f\'(x) = \\frac{x^2 - 6x - 1}{(x-3)^2}$'
        ],
        answer: '$f\'(x) = \\frac{x^2 - 6x - 1}{(x-3)^2}$'
      },
      {
        problem: 'Differentiate $f(x) = x \\cdot e^x$.',
        steps: [
          'Use the product rule with $u(x) = x$ and $v(x) = e^x$',
          'Find derivatives: $u\'(x) = 1$ and $v\'(x) = e^x$ (the exponential derivative)',
          'Apply the product rule:',
          '$f\'(x) = (1)(e^x) + (x)(e^x)$',
          'Factor out $e^x$:',
          '$f\'(x) = e^x + x e^x = e^x(1 + x)$'
        ],
        answer: '$f\'(x) = e^x(1+x)$ or equivalently $f\'(x) = e^x + x e^x$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is $\\frac{d}{dx}[(3x^2)(5x+1)]$ using the product rule?',
        choices: [
          {
            text: '$(6x)(5x+1) + (3x^2)(5)$',
            correct: true,
            explanation: 'Product rule: $(uv)\' = u\'v + uv\'$ where $u = 3x^2$, $u\' = 6x$, $v = 5x+1$, $v\' = 5$.'
          },
          {
            text: '$(6x)(5)$',
            correct: false,
            explanation: 'You only multiplied the derivatives; the product rule requires $u\'v + uv\'$.'
          },
          {
            text: '$(3x^2 + 5x + 1) + (6x + 5)$',
            correct: false,
            explanation: 'This mixes different functions incorrectly. Use the correct product rule formula.'
          },
          {
            text: '$(6x)(5x) + (3x^2)(1)$',
            correct: false,
            explanation: 'The derivative of $5x + 1$ is $5$, not just the derivative of $5x$.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'If $h(x) = \\frac{3x}{x^2+1}$, then using the quotient rule, $h\'(x) = \\frac{3(x^2+1) - 3x(2x)}{(x^2+1)^2} = \\frac{______}{(x^2+1)^2}$',
        answer: '3 - 3x^2',
        explanation: 'Numerator: $3(x^2+1) - 3x(2x) = 3x^2 + 3 - 6x^2 = 3 - 3x^2 = 3(1 - x^2)$'
      },
      {
        type: 'mc',
        question: 'Differentiate $f(x) = \\frac{x}{2x+1}$ using the quotient rule.',
        choices: [
          {
            text: '$f\'(x) = \\frac{1 \\cdot (2x+1) - x \\cdot 2}{(2x+1)^2} = \\frac{1}{(2x+1)^2}$',
            correct: true,
            explanation: 'Quotient rule: numerator is $1(2x+1) - x(2) = 2x + 1 - 2x = 1$.'
          },
          {
            text: '$f\'(x) = \\frac{1}{2}$',
            correct: false,
            explanation: 'The derivative is not constant; it depends on $x$ in the denominator.'
          },
          {
            text: '$f\'(x) = \\frac{x}{2}$',
            correct: false,
            explanation: 'You need to apply the quotient rule, not simplify the original function.'
          },
          {
            text: '$f\'(x) = \\frac{2x+1}{x^2}$',
            correct: false,
            explanation: 'Check your application of the quotient rule and ensure the denominator is $(2x+1)^2$.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'The derivative of $f(x) = (x^3)(4x+1)$ is $f\'(x) = $ ______',
        answer: '16x^3 + 3x^2',
        explanation: 'Product rule: $(x^3)\' = 3x^2$, $(4x+1)\' = 4$. So $f\'(x) = 3x^2(4x+1) + x^3(4) = 12x^3 + 3x^2 + 4x^3 = 16x^3 + 3x^2$.'
      },
      {
        type: 'mc',
        question: 'Which of the following would be most efficiently differentiated using the quotient rule?',
        choices: [
          {
            text: '$f(x) = \\frac{2x^3 + 5}{x}$',
            correct: false,
            explanation: 'This could be simplified to $2x^2 + \\frac{5}{x} = 2x^2 + 5x^{-1}$ using the power rule, which is easier.'
          },
          {
            text: '$f(x) = \\frac{x^2 + 3x + 2}{x^2 - 1}$',
            correct: true,
            explanation: 'Both numerator and denominator are non-trivial polynomials, so the quotient rule is the most direct approach.'
          },
          {
            text: '$f(x) = \\frac{5}{x^2}$',
            correct: false,
            explanation: 'This is more easily written as $5x^{-2}$ and differentiated using the power rule.'
          },
          {
            text: '$f(x) = \\frac{x + 1}{1}$',
            correct: false,
            explanation: 'The denominator is just 1, so $f(x) = x + 1$ and $f\'(x) = 1$.'
          }
        ]
      }
    ]
  },
  {
    id: '2.5',
    title: 'Derivatives of Trigonometric Functions',
    subtitle: 'Differentiating sine, cosine, and beyond',
    learn: `
<div style="">
  <h2>Derivatives of Trigonometric Functions</h2>

  <div class="formula-box">
    <h3>The Basic Trig Derivatives (from limits)</h3>
    <div class="formula-box">$$\\frac{d}{dx}[\\sin x] = \\cos x$$</div>
    <div class="formula-box">$$\\frac{d}{dx}[\\cos x] = -\\sin x$$</div>
    <p><strong>Note:</strong> These can be derived from $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$.</p>
  </div>

  <div class="formula-box">
    <h3>The Other Four Trig Derivatives</h3>
    <div class="formula-box">$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$</div>
    <div class="formula-box">$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$$</div>
    <div class="formula-box">$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$$</div>
    <div class="formula-box">$$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$</div>
  </div>

  <h3>Derivation Example: Tangent</h3>
  <p>Since $\\tan x = \\frac{\\sin x}{\\cos x}$, we use the quotient rule:</p>
  <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
    <p>$\\frac{d}{dx}[\\tan x] = \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$</p>
  </div>

  <h3>Memory Aid</h3>
  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><p><strong>Signs pattern:</strong> Derivatives of "co-" functions (cosine, cotangent, cosecant) have a negative sign.</p>
    <ul>
      <li>$\\frac{d}{dx}[\\cos x] = -\\sin x$ (negative)</li>
      <li>$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$ (negative)</li>
      <li>$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$ (negative)</li>
    </ul></p>
 </div>
</div>
    `,
    examples: [
      {
        problem: 'Differentiate $f(x) = 3\\sin(x) - 2\\cos(x)$.',
        steps: [
          'Apply the sum rule and constant multiple rule:',
          '$f\'(x) = 3 \\cdot \\frac{d}{dx}[\\sin x] - 2 \\cdot \\frac{d}{dx}[\\cos x]$',
          'Use the basic trig derivatives:',
          '$f\'(x) = 3\\cos(x) - 2(-\\sin x)$',
          'Simplify:',
          '$f\'(x) = 3\\cos(x) + 2\\sin(x)$'
        ],
        answer: '$f\'(x) = 3\\cos(x) + 2\\sin(x)$'
      },
      {
        problem: 'Verify the quotient rule derivation: show that $\\frac{d}{dx}[\\tan x] = \\sec^2 x$.',
        steps: [
          'Write $\\tan x = \\frac{\\sin x}{\\cos x}$',
          'Apply the quotient rule with $u = \\sin x$, $v = \\cos x$:',
          '$\\frac{d}{dx}[\\tan x] = \\frac{(\\cos x)(\\cos x) - (\\sin x)(-\\sin x)}{(\\cos x)^2}$',
          'Simplify the numerator:',
          '$= \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$',
          'Use the Pythagorean identity $\\cos^2 x + \\sin^2 x = 1$:',
          '$= \\frac{1}{\\cos^2 x}$',
          'Recognize that $\\frac{1}{\\cos x} = \\sec x$, so:',
          '$= (\\sec x)^2 = \\sec^2 x$'
        ],
        answer: '$\\frac{d}{dx}[\\tan x] = \\sec^2 x$ ✓'
      },
      {
        problem: 'Differentiate $f(x) = x^2 \\cos(x)$ using the product rule.',
        steps: [
          'Identify $u(x) = x^2$ and $v(x) = \\cos(x)$',
          'Find derivatives: $u\'(x) = 2x$ and $v\'(x) = -\\sin(x)$',
          'Apply the product rule:',
          '$f\'(x) = (2x)(\\cos x) + (x^2)(-\\sin x)$',
          'Simplify:',
          '$f\'(x) = 2x\\cos(x) - x^2\\sin(x)$'
        ],
        answer: '$f\'(x) = 2x\\cos(x) - x^2\\sin(x)$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is $\\frac{d}{dx}[\\sin x]$?',
        choices: [
          {
            text: '$\\cos x$',
            correct: true,
            explanation: 'This is the fundamental trig derivative.'
          },
          {
            text: '$-\\cos x$',
            correct: false,
            explanation: 'That\'s the derivative of cosine, not sine. The derivative of $\\sin x$ is positive $\\cos x$.'
          },
          {
            text: '$-\\sin x$',
            correct: false,
            explanation: 'That\'s the derivative of cosine. Check your trig derivative formulas.'
          },
          {
            text: '$\\csc x$',
            correct: false,
            explanation: 'The derivative of $\\sin x$ is $\\cos x$, not related to cosecant.'
          }
        ]
      },
      {
        type: 'fill',
        question: '$\\frac{d}{dx}[\\tan x] = $ ______',
        answer: '\\sec^2 x',
        explanation: 'This is one of the six basic trig derivatives you must memorize.'
      },
      {
        type: 'mc',
        question: 'Differentiate $f(x) = \\sin(x) + \\tan(x)$.',
        choices: [
          {
            text: '$f\'(x) = \\cos(x) + \\sec^2(x)$',
            correct: true,
            explanation: 'Sum rule: $\\frac{d}{dx}[\\sin x] = \\cos x$ and $\\frac{d}{dx}[\\tan x] = \\sec^2 x$.'
          },
          {
            text: '$f\'(x) = \\cos(x) + \\cot(x)$',
            correct: false,
            explanation: 'The derivative of $\\tan x$ is $\\sec^2 x$, not $\\cot x$.'
          },
          {
            text: '$f\'(x) = -\\sin(x) - \\sec^2(x)$',
            correct: false,
            explanation: 'You incorrectly applied negative signs. The derivative of $\\sin x$ is $\\cos x$ (not $-\\sin x$).'
          },
          {
            text: '$f\'(x) = \\sin(x) + \\sec^2(x)$',
            correct: false,
            explanation: 'The derivative of $\\sin x$ is $\\cos x$, not $\\sin x$.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'The derivative of $f(x) = -5\\cos(x)$ is $f\'(x) = $ ______',
        answer: '5\\sin(x)',
        explanation: 'Apply the constant multiple rule and the trig derivative: $\\frac{d}{dx}[-5\\cos x] = -5 \\cdot (-\\sin x) = 5\\sin x$.'
      },
      {
        type: 'mc',
        question: 'Which of the following has a negative sign in its derivative?',
        choices: [
          {
            text: '$\\sin x$',
            correct: false,
            explanation: '$\\frac{d}{dx}[\\sin x] = \\cos x$ (positive).'
          },
          {
            text: '$\\cos x$',
            correct: true,
            explanation: '$\\frac{d}{dx}[\\cos x] = -\\sin x$ (negative sign). All "co-" functions have negative derivatives.'
          },
          {
            text: '$\\sec x$',
            correct: false,
            explanation: '$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$ (positive if $\\tan x > 0$).'
          },
          {
            text: '$\\cot x$',
            correct: true,
            explanation: '$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$ (negative sign). All "co-" functions have negative derivatives.'
          }
        ]
      }
    ]
  },
  {
    id: '2.6',
    title: 'Derivatives of Exponential & Logarithmic Functions',
    subtitle: 'Special functions with unique derivative properties',
    learn: `
<div style="">
  <h2>Derivatives of Exponential and Logarithmic Functions</h2>

  <div class="formula-box">
    <h3>Exponential Functions</h3>
    <div class="formula-box">$$\\frac{d}{dx}[e^x] = e^x$$</div>
    <p><strong>The unique property:</strong> The function $e^x$ is its own derivative! This makes $e$ special in calculus.</p>
    <div class="formula-box">$$\\frac{d}{dx}[a^x] = a^x \\ln(a)$$</div>
    <p>For any base $a > 0$, $a \\neq 1$.</p>
  </div>

  <div class="formula-box">
    <h3>Logarithmic Functions</h3>
    <div class="formula-box">$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$</div>
    <div class="formula-box">$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln(a)}$$</div>
  </div>

  <h3>Why $\\frac{d}{dx}[e^x] = e^x$?</h3>
  <p>The base $e$ is defined such that $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$. This special property ensures that the limit definition simplifies to give $f\'(x) = f(x)$.</p>

  <h3>Proof Sketch for $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$</h3>
  <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin:12px 0;border-left:3px solid var(--color-violet-light)">
    <p>Let $y = \\ln x$. Then $e^y = x$. Differentiating both sides implicitly with respect to $x$:</p>
    <p>$\\frac{d}{dx}[e^y] = \\frac{d}{dx}[x]$</p>
    <p>$e^y \\cdot \\frac{dy}{dx} = 1$ (chain rule on left, power rule on right)</p>
    <p>$x \\cdot \\frac{dy}{dx} = 1$ (substituting back $e^y = x$)</p>
    <p>$\\frac{dy}{dx} = \\frac{1}{x}$</p>
  </div>

  <div class="tip-box">
    <div class="tip-icon">💡</div>
   <p><h3>Key Points</h3>
    <ul>
      <li>The natural exponential $e^x$ is the only exponential function that equals its own derivative</li>
      <li>The natural logarithm $\\ln x$ is the inverse of $e^x$, and their derivatives are related</li>
      <li>For other bases, use the conversion factors: $\\ln(a)$ for exponentials, $\\frac{1}{\\ln(a)}$ for logarithms</li>
    </ul></p>
 </div>
</div>
    `,
    examples: [
      {
        problem: 'Differentiate $f(x) = e^x \\ln(x)$ using the product rule.',
        steps: [
          'Identify $u(x) = e^x$ and $v(x) = \\ln(x)$',
          'Find derivatives: $u\'(x) = e^x$ and $v\'(x) = \\frac{1}{x}$',
          'Apply the product rule: $(uv)\' = u\'v + uv\'$',
          '$f\'(x) = (e^x)(\\ln x) + (e^x)\\left(\\frac{1}{x}\\right)$',
          'Factor out $e^x$:',
          '$f\'(x) = e^x\\left(\\ln x + \\frac{1}{x}\\right)$'
        ],
        answer: '$f\'(x) = e^x\\left(\\ln x + \\frac{1}{x}\\right)$'
      },
      {
        problem: 'Differentiate $f(x) = 2^x$.',
        steps: [
          'Use the exponential rule: $\\frac{d}{dx}[a^x] = a^x \\ln(a)$',
          'Here, $a = 2$, so:',
          '$f\'(x) = 2^x \\ln(2)$'
        ],
        answer: '$f\'(x) = 2^x \\ln(2)$'
      },
      {
        problem: 'Differentiate $f(x) = \\ln(x^2+1)$ using the chain rule preview.',
        steps: [
          'We have a composite function: the natural log of $(x^2+1)$',
          'Using the chain rule (introduced next unit), the "outside" derivative of $\\ln(u)$ is $\\frac{1}{u}$',
          'So: $f\'(x) = \\frac{1}{x^2+1} \\cdot \\frac{d}{dx}[x^2+1]$',
          'Compute the "inside" derivative: $\\frac{d}{dx}[x^2+1] = 2x$',
          'Combine:',
          '$f\'(x) = \\frac{1}{x^2+1} \\cdot 2x = \\frac{2x}{x^2+1}$'
        ],
        answer: '$f\'(x) = \\frac{2x}{x^2+1}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is $\\frac{d}{dx}[e^x]$?',
        choices: [
          {
            text: '$e^x$',
            correct: true,
            explanation: 'The exponential function $e^x$ is its own derivative. This is the unique property of the base $e$.'
          },
          {
            text: '$1$',
            correct: false,
            explanation: 'That would be the derivative of $x$. The derivative of $e^x$ is $e^x$.'
          },
          {
            text: '$\\ln(e^x)$',
            correct: false,
            explanation: 'This simplifies to $x$, which is not the derivative. $\\frac{d}{dx}[e^x] = e^x$.'
          },
          {
            text: '$0$',
            correct: false,
            explanation: 'That\'s the derivative of a constant. $e^x$ is not constant, so its derivative is not 0.'
          }
        ]
      },
      {
        type: 'fill',
        question: '$\\frac{d}{dx}[\\ln x] = $ ______',
        answer: '\\frac{1}{x}',
        explanation: 'This is the fundamental logarithmic derivative. Remember it as "one over $x$".'
      },
      {
        type: 'mc',
        question: 'Differentiate $f(x) = 3e^x - 5\\ln(x)$.',
        choices: [
          {
            text: '$f\'(x) = 3e^x - \\frac{5}{x}$',
            correct: true,
            explanation: 'Apply constant multiple rule: $3 \\cdot \\frac{d}{dx}[e^x] - 5 \\cdot \\frac{d}{dx}[\\ln x] = 3e^x - \\frac{5}{x}$.'
          },
          {
            text: '$f\'(x) = 3e^x - 5$',
            correct: false,
            explanation: 'The derivative of $\\ln x$ is $\\frac{1}{x}$, so multiplied by $-5$ gives $-\\frac{5}{x}$, not $-5$.'
          },
          {
            text: '$f\'(x) = 3e^x + \\frac{5}{x}$',
            correct: false,
            explanation: 'Check the sign: $-5 \\cdot \\frac{1}{x} = -\\frac{5}{x}$, not $+\\frac{5}{x}$.'
          },
          {
            text: '$f\'(x) = e^x - \\ln(x)$',
            correct: false,
            explanation: 'You need to apply the constant multiple rule correctly: $3e^x - \\frac{5}{x}$.'
          }
        ]
      },
      {
        type: 'fill',
        question: 'The derivative of $f(x) = 5^x$ is $f\'(x) = $ ______',
        answer: '5^x \\ln(5)',
        explanation: 'For base $a$: $\\frac{d}{dx}[a^x] = a^x \\ln(a)$. So $\\frac{d}{dx}[5^x] = 5^x \\ln(5)$.'
      },
      {
        type: 'mc',
        question: 'Which of the following is true?',
        choices: [
          {
            text: 'The derivative of $e^x$ is $xe^{x-1}$',
            correct: false,
            explanation: 'That\'s the power rule incorrectly applied. $\\frac{d}{dx}[e^x] = e^x$.'
          },
          {
            text: 'The derivative of $\\ln x$ is $x$',
            correct: false,
            explanation: '$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$, not $x$.'
          },
          {
            text: 'The derivative of $2^x$ is $2^{x-1}$',
            correct: false,
            explanation: '$\\frac{d}{dx}[2^x] = 2^x \\ln(2)$, which is not $2^{x-1}$.'
          },
          {
            text: 'The function $e^x$ is its own derivative',
            correct: true,
            explanation: '$\\frac{d}{dx}[e^x] = e^x$. This is the unique and special property of the natural exponential function.'
          }
        ]
      }
    ]
  }
];
