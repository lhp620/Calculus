export const lessons = [
  {
    id: '5.1',
    title: 'Extreme Values',
    learn: `
      <div class="concept-card">
        <h3>Extreme Values: Absolute and Local Extrema</h3>
        <p>Extreme values are the highest and lowest points on a function. We distinguish between <strong>absolute (global) extrema</strong> and <strong>local (relative) extrema</strong>.</p>

        <div class="formula-box">
          <h4>Key Definitions</h4>
          <ul>
            <li><strong>Absolute Maximum:</strong> $f(c)$ is the largest value on the entire domain or interval</li>
            <li><strong>Absolute Minimum:</strong> $f(c)$ is the smallest value on the entire domain or interval</li>
            <li><strong>Local Maximum:</strong> $f(c)$ is the largest value in some neighborhood around $c$</li>
            <li><strong>Local Minimum:</strong> $f(c)$ is the smallest value in some neighborhood around $c$</li>
            <li><strong>Critical Number:</strong> A value $c$ in the domain where $f'(c) = 0$ or $f'(c)$ is undefined</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>Extreme Value Theorem (EVT)</h4>
          <p>If $f$ is continuous on a closed interval $[a,b]$, then $f$ attains both an absolute maximum and an absolute minimum on that interval.</p>
          <p><em>Key: This requires continuity and a closed interval!</em></p>
        </div>

        <div class="formula-box">
          <h4>Closed Interval Method</h4>
          <p>To find absolute extrema of $f$ on $[a,b]$:</p>
          <ol>
            <li>Find all critical numbers in $(a,b)$</li>
            <li>Evaluate $f$ at all critical numbers</li>
            <li>Evaluate $f$ at the endpoints $a$ and $b$</li>
            <li>The largest value is the absolute maximum; the smallest is the absolute minimum</li>
          </ol>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Tip:</strong> Critical points are <em>candidates</em> for local extrema, but not all critical points are extrema. Endpoints must always be checked for absolute extrema on a closed interval, even if they are not critical points.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Find the absolute maximum and minimum values of $f(x) = x^3 - 3x$ on $[-2, 3]$.',
        steps: [
          'Step 1: Find the derivative. $f\'(x) = 3x^2 - 3$',
          'Step 2: Find critical numbers by setting $f\'(x) = 0$. $3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = -1$ or $x = 1$',
          'Step 3: Both critical numbers are in $[-2, 3]$. Evaluate $f$ at critical points and endpoints:',
          '$f(-2) = (-2)^3 - 3(-2) = -8 + 6 = -2$',
          '$f(-1) = (-1)^3 - 3(-1) = -1 + 3 = 2$',
          '$f(1) = (1)^3 - 3(1) = 1 - 3 = -2$',
          '$f(3) = (3)^3 - 3(3) = 27 - 9 = 18$',
          'Step 4: Compare all values. The largest is $18$ (at $x = 3$), the smallest is $-2$ (at $x = -2$ and $x = 1$).',
          'Answer: Absolute maximum is $18$ at $x = 3$; absolute minimum is $-2$ at $x = -2$ and $x = 1$.'
        ],
        answer: 'Absolute maximum: $18$ (at $x = 3$); Absolute minimum: $-2$ (at $x = -2$ and $x = 1$)'
      },
      {
        problem: 'Find the absolute extrema of $f(x) = x^{2/3}$ on $[-1, 8]$.',
        steps: [
          'Step 1: Find the derivative. $f\'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$',
          'Step 2: Find critical numbers. $f\'(x) = 0$ has no solution. However, $f\'(x)$ is undefined at $x = 0$, so $x = 0$ is a critical number.',
          'Step 3: Evaluate $f$ at the critical number and endpoints:',
          '$f(-1) = (-1)^{2/3} = 1$',
          '$f(0) = 0^{2/3} = 0$',
          '$f(8) = 8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$',
          'Step 4: Compare values. Largest is $4$, smallest is $0$.',
          'Answer: Absolute maximum is $4$ at $x = 8$; absolute minimum is $0$ at $x = 0$.'
        ],
        answer: 'Absolute maximum: $4$ (at $x = 8$); Absolute minimum: $0$ (at $x = 0$)'
      },
      {
        problem: 'Find the absolute maximum and minimum of $f(x) = \\sin(x) + \\cos(x)$ on $[0, 2\\pi]$.',
        steps: [
          'Step 1: Find the derivative. $f\'(x) = \\cos(x) - \\sin(x)$',
          'Step 2: Set $f\'(x) = 0$. $\\cos(x) = \\sin(x) \\Rightarrow \\tan(x) = 1 \\Rightarrow x = \\frac{\\pi}{4}$ or $x = \\frac{5\\pi}{4}$',
          'Step 3: Evaluate $f$ at critical numbers and endpoints:',
          '$f(0) = \\sin(0) + \\cos(0) = 0 + 1 = 1$',
          '$f(\\frac{\\pi}{4}) = \\sin(\\frac{\\pi}{4}) + \\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}$',
          '$f(\\frac{5\\pi}{4}) = \\sin(\\frac{5\\pi}{4}) + \\cos(\\frac{5\\pi}{4}) = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = -\\sqrt{2}$',
          '$f(2\\pi) = \\sin(2\\pi) + \\cos(2\\pi) = 0 + 1 = 1$',
          'Step 4: Compare values. Largest is $\\sqrt{2} \\approx 1.414$, smallest is $-\\sqrt{2} \\approx -1.414$.',
          'Answer: Absolute maximum is $\\sqrt{2}$ at $x = \\frac{\\pi}{4}$; absolute minimum is $-\\sqrt{2}$ at $x = \\frac{5\\pi}{4}$.'
        ],
        answer: 'Absolute maximum: $\\sqrt{2}$ (at $x = \\frac{\\pi}{4}$); Absolute minimum: $-\\sqrt{2}$ (at $x = \\frac{5\\pi}{4}$)'
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'Find the absolute maximum of $f(x) = -x^2 + 4x$ on $[0, 3]$.',
        choices: ['0', '4', '3', '2'],
        answer: 1
      },
      {
        type: 'fill-blank',
        question: 'The absolute minimum of $f(x) = x^3 - 3x^2 + 2$ on $[0, 3]$ occurs at $x = \\underline{\\hspace{1cm}}$.',
        answer: '0 or 2'
      },
      {
        type: 'multiple-choice',
        question: 'Which of the following is NOT a critical number of $f(x) = \\frac{x}{x^2 + 1}$?',
        choices: ['$x = 1$', '$x = -1$', '$x = 0$', 'All are critical numbers'],
        answer: 2
      },
      {
        type: 'fill-blank',
        question: 'If $f$ is continuous on $[a,b]$ and has a local maximum at an interior point $c$, then the Extreme Value Theorem guarantees that $f$ has an absolute maximum on $[a,b]$. True or False? \\underline{\\hspace{1cm}}',
        answer: 'True'
      },
      {
        type: 'multiple-choice',
        question: 'The absolute extrema of $f(x) = |x - 2|$ on $[-1, 5]$ are:',
        choices: ['max = 3, min = 0', 'max = 3, min = 1', 'max = 5, min = 0', 'max = 4, min = 0'],
        answer: 0
      }
    ]
  },

  {
    id: '5.2',
    title: 'Increasing & Decreasing / First Derivative Test',
    learn: `
      <div class="concept-card">
        <h3>Increasing and Decreasing Functions</h3>
        <p>The sign of the first derivative tells us whether a function is increasing or decreasing.</p>

        <div class="formula-box">
          <h4>Increasing and Decreasing Test</h4>
          <ul>
            <li>If $f\'(x) > 0$ on an interval, then $f$ is <strong>increasing</strong> on that interval</li>
            <li>If $f\'(x) < 0$ on an interval, then $f$ is <strong>decreasing</strong> on that interval</li>
            <li>If $f\'(x) = 0$ throughout an interval, then $f$ is <strong>constant</strong> on that interval</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>First Derivative Test for Local Extrema</h4>
          <p>At a critical number $c$ where $f\'$ is defined on both sides:</p>
          <ul>
            <li>If $f\'$ changes from positive to negative at $c$, then $f$ has a <strong>local maximum</strong> at $c$</li>
            <li>If $f\'$ changes from negative to positive at $c$, then $f$ has a <strong>local minimum</strong> at $c$</li>
            <li>If $f\'$ does not change sign at $c$, then $f$ has <strong>neither</strong> a local maximum nor minimum at $c$ (possibly an inflection point)</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>Sign Chart Method</h4>
          <ol>
            <li>Find all critical numbers (where $f\'(c) = 0$ or $f\'(c)$ undefined)</li>
            <li>Place critical numbers on a number line</li>
            <li>Test a point in each interval to determine the sign of $f\'$</li>
            <li>Use the sign pattern to classify critical points</li>
          </ol>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Tip:</strong> The first derivative test is more reliable than the second derivative test when dealing with critical points where $f\'(c) = 0$. It always works, as long as $f\'$ is continuous near $c$.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Find the local extrema of $f(x) = x^3 - 12x + 5$ using the first derivative test.',
        steps: [
          'Step 1: Find the derivative. $f\'(x) = 3x^2 - 12$',
          'Step 2: Find critical numbers. $3x^2 - 12 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = -2$ or $x = 2$',
          'Step 3: Create a sign chart. Factor: $f\'(x) = 3(x-2)(x+2)$',
          'Step 4: Test intervals:',
          '  - For $x < -2$ (test $x = -3$): $f\'(-3) = 3(-5)(-1) = 15 > 0$ (increasing)',
          '  - For $-2 < x < 2$ (test $x = 0$): $f\'(0) = 3(-2)(2) = -12 < 0$ (decreasing)',
          '  - For $x > 2$ (test $x = 3$): $f\'(3) = 3(1)(5) = 15 > 0$ (increasing)',
          'Step 5: Apply the first derivative test:',
          '  - At $x = -2$: $f\'$ changes from $+$ to $-$ ⟹ local maximum',
          '  - At $x = 2$: $f\'$ changes from $-$ to $+$ ⟹ local minimum',
          'Step 6: Find the $y$-values. $f(-2) = (-2)^3 - 12(-2) + 5 = -8 + 24 + 5 = 21$',
          '$f(2) = (2)^3 - 12(2) + 5 = 8 - 24 + 5 = -11$',
          'Answer: Local maximum at $(-2, 21)$; local minimum at $(2, -11)$'
        ],
        answer: 'Local maximum at $(-2, 21)$; local minimum at $(2, -11)$'
      },
      {
        problem: 'Determine where $f(x) = x^4 - 4x^3$ is increasing and decreasing, and find local extrema.',
        steps: [
          'Step 1: Find the derivative. $f\'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$',
          'Step 2: Find critical numbers. $4x^2(x - 3) = 0 \\Rightarrow x = 0$ or $x = 3$',
          'Step 3: Test intervals:',
          '  - For $x < 0$ (test $x = -1$): $f\'(-1) = 4(1)(-4) = -16 < 0$ (decreasing)',
          '  - For $0 < x < 3$ (test $x = 1$): $f\'(1) = 4(1)(-2) = -8 < 0$ (decreasing)',
          '  - For $x > 3$ (test $x = 4$): $f\'(4) = 4(16)(1) = 64 > 0$ (increasing)',
          'Step 4: At $x = 0$: $f\'$ does not change sign (negative on both sides) ⟹ no local extremum (inflection point)',
          'At $x = 3$: $f\'$ changes from $-$ to $+$ ⟹ local minimum',
          'Step 5: Find $y$-values. $f(3) = (3)^4 - 4(3)^3 = 81 - 108 = -27$',
          'Answer: Decreasing on $(-\\infty, 3)$; increasing on $(3, \\infty)$. Local minimum at $(3, -27)$.'
        ],
        answer: 'Decreasing on $(-\\infty, 3)$; increasing on $(3, \\infty)$. Local minimum at $(3, -27)$'
      },
      {
        problem: 'Find the local extrema of $f(x) = xe^{-x}$.',
        steps: [
          'Step 1: Find the derivative using the product rule. $f\'(x) = e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1 - x)$',
          'Step 2: Find critical numbers. $e^{-x}(1 - x) = 0$. Since $e^{-x} > 0$ always, we need $1 - x = 0 \\Rightarrow x = 1$',
          'Step 3: Test intervals:',
          '  - For $x < 1$ (test $x = 0$): $f\'(0) = e^0(1) = 1 > 0$ (increasing)',
          '  - For $x > 1$ (test $x = 2$): $f\'(2) = e^{-2}(-1) = -e^{-2} < 0$ (decreasing)',
          'Step 4: At $x = 1$: $f\'$ changes from $+$ to $-$ ⟹ local maximum',
          'Step 5: Find $y$-value. $f(1) = 1 \\cdot e^{-1} = \\frac{1}{e}$',
          'Answer: Local maximum at $(1, \\frac{1}{e})$'
        ],
        answer: 'Local maximum at $(1, \\frac{1}{e})$'
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'On what intervals is $f(x) = \\frac{x}{x^2 + 1}$ increasing?',
        choices: ['$(-\\infty, \\infty)$', '$(-1, 1)$', '$(-\\infty, -1) \\cup (1, \\infty)$', 'Nowhere'],
        answer: 1
      },
      {
        type: 'fill-blank',
        question: 'If $f\'(x) = (x-1)^2(x+2)$, then $f$ has a local extremum at $x = \\underline{\\hspace{1cm}}$.',
        answer: '-2'
      },
      {
        type: 'multiple-choice',
        question: 'Which statement is true about $f(x) = x^3$ at $x = 0$?',
        choices: ['Local maximum', 'Local minimum', 'Neither (inflection point)', 'Undefined'],
        answer: 2
      },
      {
        type: 'fill-blank',
        question: 'Find the $x$-coordinate of the local maximum of $f(x) = 2x^3 - 3x^2 - 36x + 7$. Answer: $x = \\underline{\\hspace{1cm}}$',
        answer: '-2'
      },
      {
        type: 'multiple-choice',
        question: 'If $f\'$ changes from positive to negative at a critical point, then $f$ has a:',
        choices: ['Local minimum', 'Local maximum', 'Inflection point', 'Vertical asymptote'],
        answer: 1
      }
    ]
  },

  {
    id: '5.3',
    title: 'Concavity & Inflection Points',
    learn: `
      <div class="concept-card">
        <h3>Concavity and Inflection Points</h3>
        <p>Concavity describes the curvature of a function. The second derivative tells us whether a curve bends upward or downward.</p>

        <div class="formula-box">
          <h4>Concavity Test</h4>
          <ul>
            <li>If $f\'\'(x) > 0$ on an interval, then $f$ is <strong>concave up</strong> on that interval (the graph holds water, or looks like a smile)</li>
            <li>If $f\'\'(x) < 0$ on an interval, then $f$ is <strong>concave down</strong> on that interval (the graph spills water, or looks like a frown)</li>
            <li>If $f\'\'(x) = 0$ throughout an interval, then $f$ is <strong>linear</strong> on that interval</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>Inflection Points</h4>
          <p>An <strong>inflection point</strong> is a point where the concavity of $f$ changes. At an inflection point:</p>
          <ul>
            <li>$f\'\'$ must change sign (from positive to negative or vice versa)</li>
            <li>$f\'\'(c) = 0$ or $f\'\'(c)$ is undefined (necessary but not sufficient condition)</li>
            <li>The point $(c, f(c))$ must be on the curve of $f$</li>
          </ul>
          <p><strong>Important:</strong> If $f\'\'(c) = 0$ but $f\'\'$ does not change sign, then $c$ is NOT an inflection point.</p>
        </div>

        <div class="formula-box">
          <h4>Inflection Point Test</h4>
          <ol>
            <li>Find all candidates: points where $f\'\'(c) = 0$ or $f\'\'(c)$ is undefined</li>
            <li>Check if $f\'\'$ changes sign at each candidate</li>
            <li>If sign changes, it\'s an inflection point; if no sign change, it\'s not</li>
          </ol>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Memory Aid:</strong> Concave up = "holds water" = cup shape = U. Concave down = "spills water" = upside-down cup = arc. Think of the curve as a container!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Find the inflection points of $f(x) = x^4 - 6x^2$ and determine where $f$ is concave up/down.',
        steps: [
          'Step 1: Find the first and second derivatives. $f\'(x) = 4x^3 - 12x$',
          '$f\'\'(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$',
          'Step 2: Find candidates for inflection points. $f\'\'(x) = 0 \\Rightarrow x = -1$ or $x = 1$',
          'Step 3: Test the sign of $f\'\'$ in each interval:',
          '  - For $x < -1$ (test $x = -2$): $f\'\'(-2) = 12(4-1) = 36 > 0$ (concave up)',
          '  - For $-1 < x < 1$ (test $x = 0$): $f\'\'(0) = 12(-1) = -12 < 0$ (concave down)',
          '  - For $x > 1$ (test $x = 2$): $f\'\'(2) = 12(3) = 36 > 0$ (concave up)',
          'Step 4: Verify sign changes. At $x = -1$ and $x = 1$, $f\'\'$ changes sign, so both are inflection points.',
          'Step 5: Find $y$-coordinates. $f(-1) = 1 - 6 = -5$ and $f(1) = 1 - 6 = -5$',
          'Answer: Inflection points at $(-1, -5)$ and $(1, -5)$. Concave up on $(-\\infty, -1) \\cup (1, \\infty)$; concave down on $(-1, 1)$.'
        ],
        answer: 'Inflection points at $(-1, -5)$ and $(1, -5)$. Concave up on $(-\\infty, -1) \\cup (1, \\infty)$; concave down on $(-1, 1)$'
      },
      {
        problem: 'Determine the inflection points of $f(x) = xe^x$.',
        steps: [
          'Step 1: Find the first derivative using the product rule. $f\'(x) = e^x + xe^x = e^x(1 + x)$',
          'Step 2: Find the second derivative using the product rule. $f\'\'(x) = e^x(1 + x) + e^x = e^x(2 + x)$',
          'Step 3: Find candidates. $f\'\'(x) = 0 \\Rightarrow e^x(2 + x) = 0$. Since $e^x > 0$ always, $2 + x = 0 \\Rightarrow x = -2$',
          'Step 4: Test the sign of $f\'\'$:',
          '  - For $x < -2$ (test $x = -3$): $f\'\'(-3) = e^{-3}(-1) < 0$ (concave down)',
          '  - For $x > -2$ (test $x = 0$): $f\'\'(0) = e^0(2) = 2 > 0$ (concave up)',
          'Step 5: Sign changes at $x = -2$, so it\'s an inflection point. $f(-2) = -2e^{-2} = -\\frac{2}{e^2}$',
          'Answer: Inflection point at $(-2, -\\frac{2}{e^2})$. Concave down on $(-\\infty, -2)$; concave up on $(-2, \\infty)$.'
        ],
        answer: 'Inflection point at $(-2, -\\frac{2}{e^2})$. Concave down on $(-\\infty, -2)$; concave up on $(-2, \\infty)$'
      },
      {
        problem: 'Find all inflection points of $f(x) = \\sin(x)$ on $[0, 2\\pi]$.',
        steps: [
          'Step 1: Find derivatives. $f\'(x) = \\cos(x)$ and $f\'\'(x) = -\\sin(x)$',
          'Step 2: Find candidates. $f\'\'(x) = 0 \\Rightarrow -\\sin(x) = 0 \\Rightarrow x = 0, \\pi, 2\\pi$',
          'Step 3: Test the sign of $f\'\'$ in each interval:',
          '  - For $0 < x < \\pi$ (test $x = \\frac{\\pi}{2}$): $f\'\'(\\frac{\\pi}{2}) = -\\sin(\\frac{\\pi}{2}) = -1 < 0$ (concave down)',
          '  - For $\\pi < x < 2\\pi$ (test $x = \\frac{3\\pi}{2}$): $f\'\'(\\frac{3\\pi}{2}) = -\\sin(\\frac{3\\pi}{2}) = 1 > 0$ (concave up)',
          'Step 4: Check endpoints and interior. At $x = 0$ and $x = 2\\pi$: these are endpoints. At $x = \\pi$: $f\'\'$ changes sign.',
          'Step 5: Find $y$-coordinates. $f(\\pi) = \\sin(\\pi) = 0$',
          'Answer: Inflection point at $(\\pi, 0)$. Concave down on $(0, \\pi)$; concave up on $(\\pi, 2\\pi)$.'
        ],
        answer: 'Inflection point at $(\\pi, 0)$. Concave down on $(0, \\pi)$; concave up on $(\\pi, 2\\pi)$'
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'If $f\'\'(x) = (x-3)^2$, which statement is correct?',
        choices: ['$f$ has an inflection point at $x = 3$', '$f$ is concave up everywhere', '$f$ is concave down everywhere', '$f$ has a local maximum at $x = 3$'],
        answer: 1
      },
      {
        type: 'fill-blank',
        question: 'The inflection point of $f(x) = x^3 - 3x^2 + 2$ occurs at $x = \\underline{\\hspace{1cm}}$.',
        answer: '1'
      },
      {
        type: 'multiple-choice',
        question: 'On what interval is $f(x) = \\frac{1}{x}$ concave up?',
        choices: ['$(-\\infty, 0)$', '$(0, \\infty)$', 'Nowhere', '$(0, \\infty)$ only'],
        answer: 1
      },
      {
        type: 'fill-blank',
        question: 'If $f\'\'(c) = 0$ and $f\'\'$ does not change sign at $c$, then $c$ is \\underline{\\hspace{1cm}} an inflection point.',
        answer: 'not'
      },
      {
        type: 'multiple-choice',
        question: 'The graph of $y = x^4$ is:',
        choices: ['Concave up everywhere', 'Concave down everywhere', 'Has an inflection point at $x = 0$', 'Linear'],
        answer: 0
      }
    ]
  },

  {
    id: '5.4',
    title: 'Second Derivative Test',
    learn: `
      <div class="concept-card">
        <h3>Second Derivative Test for Local Extrema</h3>
        <p>The second derivative test provides a faster way to classify critical points, but it\'s not as universal as the first derivative test.</p>

        <div class="formula-box">
          <h4>Second Derivative Test</h4>
          <p>Suppose $f\'(c) = 0$ (so $c$ is a critical number). Then:</p>
          <ul>
            <li>If $f\'\'(c) > 0$, then $f$ has a <strong>local minimum</strong> at $c$ (concave up)</li>
            <li>If $f\'\'(c) < 0$, then $f$ has a <strong>local maximum</strong> at $c$ (concave down)</li>
            <li>If $f\'\'(c) = 0$, the test is <strong>inconclusive</strong> — use the first derivative test instead</li>
          </ul>
        </div>

        <div class="formula-box">
          <h4>Advantages and Disadvantages</h4>
          <p><strong>Advantages:</strong></p>
          <ul>
            <li>Faster than the first derivative test (no sign chart needed)</li>
            <li>Works well for most common functions</li>
          </ul>
          <p><strong>Disadvantages:</strong></p>
          <ul>
            <li>Fails when $f\'\'(c) = 0$ — must resort to the first derivative test</li>
            <li>Requires computing the second derivative</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Remember:</strong> When $f\'\'(c) = 0$, always use the first derivative test. The second derivative test is inconclusive in that case.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Use the second derivative test to find and classify local extrema of $f(x) = x^3 - 3x^2 - 9x + 5$.',
        steps: [
          'Step 1: Find the first derivative. $f\'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$',
          'Step 2: Find critical numbers. $f\'(x) = 0 \\Rightarrow x = 3$ or $x = -1$',
          'Step 3: Find the second derivative. $f\'\'(x) = 6x - 6 = 6(x - 1)$',
          'Step 4: Apply the second derivative test:',
          '  - At $x = 3$: $f\'\'(3) = 6(3-1) = 12 > 0$ ⟹ local minimum',
          '  - At $x = -1$: $f\'\'(-1) = 6(-1-1) = -12 < 0$ ⟹ local maximum',
          'Step 5: Find $y$-coordinates:',
          '$f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10$',
          '$f(3) = (3)^3 - 3(3)^2 - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$',
          'Answer: Local maximum at $(-1, 10)$; local minimum at $(3, -22)$'
        ],
        answer: 'Local maximum at $(-1, 10)$; local minimum at $(3, -22)$'
      },
      {
        problem: 'Use the second derivative test on $f(x) = x^4$ at the critical point $x = 0$.',
        steps: [
          'Step 1: Find the first derivative. $f\'(x) = 4x^3$',
          'Step 2: Find critical numbers. $f\'(x) = 0 \\Rightarrow x = 0$',
          'Step 3: Find the second derivative. $f\'\'(x) = 12x^2$',
          'Step 4: Apply the second derivative test:',
          '  - At $x = 0$: $f\'\'(0) = 0$ — the test is inconclusive!',
          'Step 5: Use the first derivative test instead. $f\'(x) = 4x^3$',
          '  - For $x < 0$: $f\'(x) < 0$ (decreasing)',
          '  - For $x > 0$: $f\'(x) > 0$ (increasing)',
          '  - $f\'$ changes from $-$ to $+$ at $x = 0$ ⟹ local minimum',
          'Answer: Local minimum at $(0, 0)$'
        ],
        answer: 'Local minimum at $(0, 0)$'
      },
      {
        problem: 'Find and classify the critical points of $f(x) = \\sin(x)$ on $(0, 2\\pi)$.',
        steps: [
          'Step 1: Find the first derivative. $f\'(x) = \\cos(x)$',
          'Step 2: Find critical numbers in $(0, 2\\pi)$. $f\'(x) = 0 \\Rightarrow \\cos(x) = 0 \\Rightarrow x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$',
          'Step 3: Find the second derivative. $f\'\'(x) = -\\sin(x)$',
          'Step 4: Apply the second derivative test:',
          '  - At $x = \\frac{\\pi}{2}$: $f\'\'(\\frac{\\pi}{2}) = -\\sin(\\frac{\\pi}{2}) = -1 < 0$ ⟹ local maximum',
          '  - At $x = \\frac{3\\pi}{2}$: $f\'\'(\\frac{3\\pi}{2}) = -\\sin(\\frac{3\\pi}{2}) = 1 > 0$ ⟹ local minimum',
          'Step 5: Find $y$-coordinates:',
          '$f(\\frac{\\pi}{2}) = \\sin(\\frac{\\pi}{2}) = 1$',
          '$f(\\frac{3\\pi}{2}) = \\sin(\\frac{3\\pi}{2}) = -1$',
          'Answer: Local maximum at $(\\frac{\\pi}{2}, 1)$; local minimum at $(\\frac{3\\pi}{2}, -1)$'
        ],
        answer: 'Local maximum at $(\\frac{\\pi}{2}, 1)$; local minimum at $(\\frac{3\\pi}{2}, -1)$'
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'If $f\'(2) = 0$ and $f\'\'(2) = 5 > 0$, then $f$ has a:',
        choices: ['Local maximum at $x = 2$', 'Local minimum at $x = 2$', 'Inflection point at $x = 2$', 'Cannot be determined'],
        answer: 1
      },
      {
        type: 'fill-blank',
        question: 'For $f(x) = -x^2 + 6x$, the second derivative test says there is a local \\underline{\\hspace{1cm}} at $x = 3$.',
        answer: 'maximum'
      },
      {
        type: 'multiple-choice',
        question: 'Which of the following makes the second derivative test inconclusive?',
        choices: ['$f\'(c) = 0$ and $f\'\'(c) > 0$', '$f\'(c) = 0$ and $f\'\'(c) < 0$', '$f\'(c) = 0$ and $f\'\'(c) = 0$', '$f\'(c) \\neq 0$'],
        answer: 2
      },
      {
        type: 'fill-blank',
        question: 'If $f\'(c) = 0$ and $f\'\'(c) = -8$, then $(c, f(c))$ is a local \\underline{\\hspace{1cm}}.',
        answer: 'maximum'
      },
      {
        type: 'multiple-choice',
        question: 'The second derivative test requires that:',
        choices: ['$f\'\'$ is continuous at $c$', '$f\'(c) = 0$', '$f\'\'(c) \\neq 0$', 'All of the above'],
        answer: 1
      }
    ]
  },

  {
    id: '5.5',
    title: 'Curve Sketching',
    learn: `
      <div class="concept-card">
        <h3>Systematic Curve Sketching</h3>
        <p>Curve sketching combines analysis of a function\'s properties (domain, intercepts, asymptotes, derivatives) to produce an accurate graph without a calculator.</p>

        <div class="formula-box">
          <h4>Curve Sketching Procedure</h4>
          <ol>
            <li><strong>Domain:</strong> Find all $x$ where $f$ is defined</li>
            <li><strong>Intercepts:</strong> Find $x$-intercepts (set $f(x) = 0$) and $y$-intercept (evaluate $f(0)$)</li>
            <li><strong>Symmetry:</strong> Check if $f$ is even ($f(-x) = f(x)$), odd ($f(-x) = -f(x)$), or neither</li>
            <li><strong>Asymptotes:</strong> Find vertical (undefined/discontinuity), horizontal (limits as $x \\to \\pm\\infty$), and oblique asymptotes</li>
            <li><strong>Intervals of Increase/Decrease:</strong> Find critical points from $f\'(x) = 0$, determine sign of $f\'$</li>
            <li><strong>Local Extrema:</strong> Identify local maxima and minima</li>
            <li><strong>Concavity and Inflection Points:</strong> Analyze $f\'\'$, find inflection points</li>
            <li><strong>Sketch:</strong> Plot all information on a graph</li>
          </ol>
        </div>

        <div class="formula-box">
          <h4>Connection Between $f$ and $f\'$ Graphs</h4>
          <ul>
            <li>Where $f\'(x) > 0$, the graph of $f$ is rising (increasing)</li>
            <li>Where $f\'(x) < 0$, the graph of $f$ is falling (decreasing)</li>
            <li>Where $f\'(x) = 0$, the graph of $f$ has a horizontal tangent (critical point)</li>
            <li>Where $f\'$ has a local max, $f$ has a steepest upward slope</li>
            <li>Where $f\'$ has a local min, $f$ has a steepest downward slope</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Tip:</strong> Always organize your work systematically. A clear, labeled sketch is more valuable than computational accuracy alone. Check that your sketch is consistent with all the information you\'ve gathered.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Sketch the curve $f(x) = \\frac{x^2 - 4}{x^2 - 1}$.',
        steps: [
          'Step 1: Domain. $x^2 - 1 \\neq 0 \\Rightarrow x \\neq \\pm 1$. Domain: $(-\\infty, -1) \\cup (-1, 1) \\cup (1, \\infty)$',
          'Step 2: Intercepts. $x$-intercepts: $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$. $y$-intercept: $f(0) = \\frac{-4}{-1} = 4$',
          'Step 3: Symmetry. $f(-x) = \\frac{(-x)^2 - 4}{(-x)^2 - 1} = \\frac{x^2 - 4}{x^2 - 1} = f(x)$ — $f$ is even',
          'Step 4: Asymptotes. Vertical: $x = \\pm 1$. Horizontal: $\\lim_{x \\to \\pm\\infty} \\frac{x^2 - 4}{x^2 - 1} = 1$, so $y = 1$',
          'Step 5: Derivatives. $f\'(x) = \\frac{(2x)(x^2-1) - (x^2-4)(2x)}{(x^2-1)^2} = \\frac{6x}{(x^2-1)^2}$',
          'Step 6: Critical points. $f\'(x) = 0 \\Rightarrow x = 0$. For $x < 0$: $f\'(x) < 0$; for $x > 0$: $f\'(x) > 0$. Local min at $(0, 4)$.',
          'Step 7: Concavity analysis shows the curve behavior near asymptotes and inflection behavior.',
          'Step 8: Sketch: Even function; vertical asymptotes at $\\pm 1$; horizontal asymptote at $y=1$; $x$-intercepts at $\\pm 2$; local min at $(0,4)$.'
        ],
        answer: 'Even function; vertical asymptotes at $x = \\pm 1$; horizontal asymptote $y = 1$; $x$-intercepts at $\\pm 2$; $y$-intercept at $4$; local minimum at $(0, 4)$'
      },
      {
        problem: 'Sketch $f(x) = x e^{-x^2}$.',
        steps: [
          'Step 1: Domain. All real numbers',
          'Step 2: Intercepts. $x$-intercept: $x e^{-x^2} = 0 \\Rightarrow x = 0$. $y$-intercept: $f(0) = 0$',
          'Step 3: Symmetry. $f(-x) = (-x)e^{-(-x)^2} = -x e^{-x^2} = -f(x)$ — $f$ is odd',
          'Step 4: Asymptotes. Horizontal: $\\lim_{x \\to \\pm\\infty} x e^{-x^2} = 0$, so $y = 0$. No vertical asymptotes.',
          'Step 5: Derivatives. $f\'(x) = e^{-x^2}(1 - 2x^2)$',
          'Step 6: Critical points. $f\'(x) = 0 \\Rightarrow x = \\pm \\frac{\\sqrt{2}}{2}$. Local max at $(\\frac{\\sqrt{2}}{2}, f(\\frac{\\sqrt{2}}{2}))$, local min at $(-\\frac{\\sqrt{2}}{2}, -f(\\frac{\\sqrt{2}}{2}))$',
          'Step 7: Concavity. $f\'\'(x) = 4xe^{-x^2}(2x^2 - 2)$. Inflection points at $x = 0, \\pm 1$.',
          'Step 8: Sketch: Odd function through origin; horizontal asymptote $y = 0$; local extrema symmetric about origin; inflection points at $x = 0, \\pm 1$.'
        ],
        answer: 'Odd function through origin; horizontal asymptote $y = 0$; local maximum at $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}e^{-1/2})$; local minimum at $(-\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}e^{-1/2})$; inflection points at $x = 0, \\pm 1$'
      },
      {
        problem: 'Given that $f\'(x) > 0$ on $(-\\infty, 1)$, $f\'(x) < 0$ on $(1, \\infty)$, $f\'\'(x) < 0$ on $(-\\infty, 0)$, and $f\'\'(x) > 0$ on $(0, \\infty)$, sketch a possible graph of $f$.',
        steps: [
          'Step 1: Analyze $f\'$: Increasing on $(-\\infty, 1)$ and decreasing on $(1, \\infty)$ means local maximum at $x = 1$',
          'Step 2: Analyze $f\'\'$: Concave down on $(-\\infty, 0)$ and concave up on $(0, \\infty)$ means inflection point at $x = 0$',
          'Step 3: Sketch the curve:',
          '  - As $x \\to -\\infty$, the function increases with downward curvature',
          '  - At $x = 0$, the curve transitions from concave down to concave up (inflection point)',
          '  - At $x = 1$, the curve reaches a local maximum',
          '  - For $x > 1$, the function decreases with upward curvature',
          'Step 4: The graph should show increasing behavior from left with a local max at $x=1$, then decreasing; concavity changes at $x=0$.',
          'Step 5: Example function behavior: rises to the left of $x=1$, peaks at $x=1$, then falls; curves bend downward until $x=0$, then upward.'
        ],
        answer: 'The graph shows: increasing and concave down on $(-\\infty, 0)$; inflection point at $(0, f(0))$; increasing and concave up on $(0, 1)$; local maximum at $(1, f(1))$; decreasing and concave up on $(1, \\infty)$'
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'When sketching $f(x) = \\frac{1}{(x-1)^2}$, which feature is NOT present?',
        choices: ['Vertical asymptote at $x = 1$', 'Horizontal asymptote at $y = 0$', 'Local maximum', 'Always positive'],
        answer: 2
      },
      {
        type: 'fill-blank',
        question: 'For an even function, the curve is symmetric about the \\underline{\\hspace{1cm}}.',
        answer: 'y-axis'
      },
      {
        type: 'multiple-choice',
        question: 'If $f$ is continuous on $[a,b]$ with $f\'(c) = 0$ at an interior point and no other critical points, then $f$ has:',
        choices: ['A local extremum at $c$', 'An inflection point at $c$', 'Either a local extremum or an inflection point at $c$', 'Cannot determine without more information'],
        answer: 2
      },
      {
        type: 'fill-blank',
        question: 'When sketching a curve, the inflection points are found by solving \\underline{\\hspace{1cm}} = 0 and checking where the solution gives a sign change.',
        answer: '$f\'\'(x)$'
      }
    ]
  },

  {
    id: '5.6',
    title: 'Optimization Problems',
    learn: `
      <div class="concept-card">
        <h3>Optimization: Maximizing and Minimizing</h3>
        <p>Optimization problems ask us to find the maximum or minimum value of a quantity. Calculus provides a systematic method using derivatives.</p>

        <div class="formula-box">
          <h4>General Optimization Strategy</h4>
          <ol>
            <li><strong>Understand the problem:</strong> Identify what quantity needs to be maximized or minimized (objective function)</li>
            <li><strong>Set up variables:</strong> Define variables for quantities in the problem</li>
            <li><strong>Write the objective function:</strong> Express the quantity to optimize as a function of a single variable</li>
            <li><strong>Identify constraints:</strong> Use constraints to eliminate variables and write a single-variable function</li>
            <li><strong>Find the domain:</strong> Determine realistic bounds for the variable</li>
            <li><strong>Find critical points:</strong> Compute the derivative and solve $f\'(x) = 0$</li>
            <li><strong>Classify extrema:</strong> Use the first or second derivative test, or evaluate at endpoints</li>
            <li><strong>Answer the question:</strong> State the maximum/minimum value and where it occurs</li>
          </ol>
        </div>

        <div class="formula-box">
          <h4>Common Optimization Problems</h4>
          <ul>
            <li><strong>Area problems:</strong> Maximize area of rectangles, gardens, inscribed figures</li>
            <li><strong>Volume problems:</strong> Maximize volume of boxes, cans, tanks with fixed surface area or materials</li>
            <li><strong>Distance problems:</strong> Minimize distance between a point and a curve</li>
            <li><strong>Cost/Revenue problems:</strong> Minimize cost or maximize profit in business settings</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Tip:</strong> Always sketch the problem if possible. Write out the constraint equation(s) clearly before substituting into the objective function. Check that your answer makes sense in the context of the original problem.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'A rectangle is inscribed in a circle of radius $r$. Find the dimensions that maximize the area of the rectangle.',
        steps: [
          'Step 1: Set up the problem. Let the rectangle have half-width $x$ and half-height $y$, centered at the circle\'s center.',
          'Step 2: Constraint. Points on the circle satisfy $x^2 + y^2 = r^2$, so $y = \\sqrt{r^2 - x^2}$',
          'Step 3: Objective function. Area $A = (2x)(2y) = 4xy = 4x\\sqrt{r^2 - x^2}$',
          'Step 4: Domain. Since $0 < x < r$, the domain is $(0, r)$',
          'Step 5: Find critical points. $\\frac{dA}{dx} = 4\\sqrt{r^2 - x^2} - \\frac{4x^2}{\\sqrt{r^2 - x^2}} = \\frac{4r^2 - 8x^2}{\\sqrt{r^2 - x^2}}$',
          'Step 6: Solve $\\frac{dA}{dx} = 0$. $4r^2 - 8x^2 = 0 \\Rightarrow x = \\frac{r\\sqrt{2}}{2}$',
          'Step 7: Find $y$. $y = \\sqrt{r^2 - \\frac{r^2}{2}} = \\frac{r\\sqrt{2}}{2}$',
          'Step 8: The rectangle is a square with side length $r\\sqrt{2}$, so maximum area is $A = 2r^2$'
        ],
        answer: 'The rectangle is a square with side length $r\\sqrt{2}$ and maximum area $2r^2$'
      },
      {
        problem: 'A farmer has 400 m of fencing to enclose a rectangular field adjacent to a barn (the barn forms one side, so no fence is needed there). What dimensions maximize the area?',
        steps: [
          'Step 1: Set up. Let $x$ = width (side parallel to barn), $y$ = depth (sides perpendicular to barn)',
          'Step 2: Constraint. Only three sides need fencing: $x + 2y = 400 \\Rightarrow x = 400 - 2y$',
          'Step 3: Objective function. Area $A = xy = (400 - 2y)y = 400y - 2y^2$',
          'Step 4: Domain. Since $x > 0$ and $y > 0$: $400 - 2y > 0 \\Rightarrow y < 200$. Domain: $(0, 200)$',
          'Step 5: Find critical points. $\\frac{dA}{dy} = 400 - 4y$',
          'Step 6: Solve $\\frac{dA}{dy} = 0$. $400 - 4y = 0 \\Rightarrow y = 100$ m',
          'Step 7: Find $x$. $x = 400 - 2(100) = 200$ m',
          'Step 8: Verify maximum. $\\frac{d^2A}{dy^2} = -4 < 0$ ✓ (concave down, local max)',
          'Maximum area: $A = 200 \\times 100 = 20000$ m²'
        ],
        answer: 'Dimensions: 200 m (parallel to barn) by 100 m (perpendicular); Maximum area: 20000 m²'
      },
      {
        problem: 'Find the dimensions of a closed cylinder with volume $V = 1000$ cm³ that minimize the surface area.',
        steps: [
          'Step 1: Set up. Let $r$ = radius, $h$ = height',
          'Step 2: Constraint. $\\pi r^2 h = 1000 \\Rightarrow h = \\frac{1000}{\\pi r^2}$',
          'Step 3: Objective function. Surface area $S = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + 2\\pi r \\cdot \\frac{1000}{\\pi r^2} = 2\\pi r^2 + \\frac{2000}{r}$',
          'Step 4: Domain. $r > 0$',
          'Step 5: Find critical points. $\\frac{dS}{dr} = 4\\pi r - \\frac{2000}{r^2}$',
          'Step 6: Solve $\\frac{dS}{dr} = 0$. $4\\pi r = \\frac{2000}{r^2} \\Rightarrow r^3 = \\frac{500}{\\pi} \\Rightarrow r = \\sqrt[3]{\\frac{500}{\\pi}}$',
          'Step 7: Find $h$. $h = \\frac{1000}{\\pi r^2} = 2\\sqrt[3]{\\frac{500}{\\pi}} = 2r$',
          'Step 8: Verify minimum. $\\frac{d^2S}{dr^2} = 4\\pi + \\frac{4000}{r^3} > 0$ ✓ (concave up, local min)',
          'The optimal cylinder has height equal to its diameter!'
        ],
        answer: '$r = \\sqrt[3]{\\frac{500}{\\pi}}$ cm; $h = 2\\sqrt[3]{\\frac{500}{\\pi}}$ cm (height = diameter)'
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'In an optimization problem, the constraint equation is used to:',
        choices: ['Maximize the objective function', 'Eliminate one variable to get a single-variable function', 'Find the domain', 'Check the answer'],
        answer: 1
      },
      {
        type: 'fill-blank',
        question: 'If a rectangular field with fixed perimeter $P$ has area $A = \\frac{P}{4}x - x^2$ where $x$ is one side length, then the maximum area occurs at $x = \\underline{\\hspace{1cm}}$.',
        answer: '$\\frac{P}{8}$'
      },
      {
        type: 'multiple-choice',
        question: 'To minimize the surface area of a can with fixed volume, the optimal height-to-diameter ratio is:',
        choices: ['1:1', '1:2', '2:1', 'Depends on the volume'],
        answer: 0
      },
      {
        type: 'fill-blank',
        question: 'A company wants to minimize cost $C(x) = 100 + 5x + \\frac{2000}{x}$ where $x > 0$. The minimum cost occurs at $x = \\underline{\\hspace{1cm}}$.',
        answer: '20'
      }
    ]
  }
];
