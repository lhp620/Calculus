export const lessons = [
  {
    id: '10.1',
    title: 'Sequences & Convergence',
    learn: `
      <div class="concept-card">
        <h3>Sequences and Limits</h3>
        <p>A <strong>sequence</strong> {aₙ} is an ordered list of numbers, typically indexed by positive integers: a₁, a₂, a₃, ...
        The general term aₙ defines the nth element.</p>
        <p>A sequence <strong>converges</strong> to a limit L if $\\lim_{n \\to \\infty} a_n = L$ (where L is finite). Otherwise, the sequence <strong>diverges</strong>.</p>
      </div>

      <div class="formula-box">
        <strong>Common Sequence Types:</strong>
        <ul>
          <li><strong>Arithmetic:</strong> aₙ = a₁ + (n-1)d (constant difference d)</li>
          <li><strong>Geometric:</strong> aₙ = a₁ · rⁿ⁻¹ (constant ratio r)</li>
        </ul>
        <p><strong>Convergence Criterion (Geometric):</strong></p>
        <p>For aₙ = a₁ · rⁿ⁻¹: converges to 0 if |r| < 1; diverges if |r| ≥ 1</p>
      </div>

      <div class="concept-card">
        <h3>Convergence Theorems</h3>
        <p><strong>Squeeze Theorem (for sequences):</strong> If aₙ ≤ cₙ ≤ bₙ for all n, and both {aₙ} and {bₙ} converge to L, then {cₙ} also converges to L.</p>
        <p><strong>Monotone Convergence Theorem:</strong> A sequence that is monotone (always increasing or always decreasing) and bounded converges.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> To find limits of sequences, use the same techniques as function limits: factor, divide by highest power, L\'Hôpital\'s rule, etc.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find the limit of aₙ = (3n² + 1)/(n² - 2) or determine if it diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> This is a rational function. For limits as n → ∞, divide numerator and denominator by the highest power of n, which is n².
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> aₙ = (3n² + 1)/(n² - 2) = (3 + 1/n²)/(1 - 2/n²)
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> As n → ∞, both 1/n² and 2/n² approach 0.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> lim(n→∞) aₙ = (3 + 0)/(1 - 0) = 3
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The sequence converges to 3.
          </div>
        `,
        answer: 'Converges to 3'
      },
      {
        problem: 'Determine if aₙ = (-1)ⁿ converges or diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Evaluate the first few terms: a₁ = -1, a₂ = 1, a₃ = -1, a₄ = 1, ...
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> The sequence oscillates between -1 and 1, never settling to a single value.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Since lim(n→∞) aₙ does not exist (the sequence doesn\'t approach a single value), the sequence diverges.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The sequence diverges (oscillates).
          </div>
        `,
        answer: 'Diverges'
      },
      {
        problem: 'Find lim(n→∞) of aₙ = n/eⁿ.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Both numerator and denominator approach ∞, so we have an ∞/∞ form.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Apply L\'Hôpital\'s rule to the continuous version: lim(x→∞) x/eˣ = lim(x→∞) 1/eˣ = 0.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Therefore, lim(n→∞) n/eⁿ = 0.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Exponential functions grow much faster than polynomials, so the denominator dominates.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The sequence converges to 0.
          </div>
        `,
        answer: 'Converges to 0'
      }
    ],
    practice: [
      {
        question: 'Does the sequence aₙ = (5n + 2)/(2n + 1) converge or diverge? If it converges, find the limit.',
        type: 'fill',
        answer: 'converges to 5/2'
      },
      {
        question: 'Find lim(n→∞) of aₙ = sin(1/n).',
        type: 'fill',
        answer: '0'
      },
      {
        question: 'Which of the following sequences converges?',
        type: 'mc',
        choices: [
          { text: 'aₙ = n', correct: false },
          { text: 'aₙ = (-1)ⁿ · n', correct: false },
          { text: 'aₙ = 1/(n + 1)', correct: true },
          { text: 'aₙ = 2ⁿ', correct: false }
        ]
      },
      {
        question: 'For the geometric sequence aₙ = 3 · (2/3)ⁿ⁻¹, does it converge? If so, to what value?',
        type: 'fill',
        answer: 'converges to 0'
      },
      {
        question: 'Find lim(n→∞) of aₙ = (n² + n)/(n² + 1).',
        type: 'fill',
        answer: '1'
      }
    ]
  },

  {
    id: '10.2',
    title: 'Geometric & Telescoping Series',
    learn: `
      <div class="concept-card">
        <h3>Geometric Series</h3>
        <p>A <strong>geometric series</strong> has the form: $$\\sum_{n=0}^{\\infty} ar^n = a + ar + ar^2 + ar^3 + ...$$
        where a is the first term and r is the common ratio.</p>
        <p><strong>Convergence:</strong> The series converges if and only if |r| < 1.</p>
      </div>

      <div class="formula-box">
        <strong>Geometric Series Formula:</strong>
        <p>If |r| < 1: $$\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}$$</p>
        <p><strong>Partial Sum:</strong> $$S_n = a \\cdot \\frac{1-r^n}{1-r}$$</p>
        <p>If |r| ≥ 1, the series diverges.</p>
      </div>

      <div class="concept-card">
        <h3>Telescoping Series</h3>
        <p>A <strong>telescoping series</strong> is one where consecutive terms cancel out, leaving only a few terms in the partial sum.</p>
        <p><strong>Strategy:</strong> Use partial fractions to decompose the general term, write out Sₙ, and find the limit as n → ∞.</p>
        <p><strong>Key Pattern:</strong> $$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Always check |r| when using the geometric series formula. For a series starting at n=1 instead of n=0, adjust the first term accordingly.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find the sum of the geometric series: $$\\sum_{n=0}^{\\infty} \\left(\\frac{2}{3}\\right)^n$$',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Identify the series as geometric with a = 1 (the first term when n=0) and r = 2/3.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Check convergence: |r| = |2/3| = 2/3 < 1, so the series converges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Apply the geometric series formula: $$\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> $$\\sum_{n=0}^{\\infty} \\left(\\frac{2}{3}\\right)^n = \\frac{1}{1 - 2/3} = \\frac{1}{1/3} = 3$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The sum is 3.
          </div>
        `,
        answer: '3'
      },
      {
        problem: 'Find the sum: $$\\sum_{n=1}^{\\infty} 3 \\cdot \\left(\\frac{1}{4}\\right)^n$$',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> This is a geometric series with r = 1/4. Since the series starts at n=1, the first term is 3 · (1/4)¹ = 3/4.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> We can write this as: $$\\sum_{n=1}^{\\infty} 3 \\cdot \\left(\\frac{1}{4}\\right)^n = 3 \\sum_{n=1}^{\\infty} \\left(\\frac{1}{4}\\right)^n$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> For a geometric series starting at n=1: $$\\sum_{n=1}^{\\infty} r^n = \\frac{r}{1-r}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> $$3 \\sum_{n=1}^{\\infty} \\left(\\frac{1}{4}\\right)^n = 3 \\cdot \\frac{1/4}{1 - 1/4} = 3 \\cdot \\frac{1/4}{3/4} = 3 \\cdot \\frac{1}{3} = 1$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The sum is 1.
          </div>
        `,
        answer: '1'
      },
      {
        problem: 'Evaluate the telescoping series: $$\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$$',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Use partial fractions to decompose: $$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Write out the partial sum Sₙ:
            $$S_n = \\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Expand the sum to see the cancellation:
            $$S_n = \\left(\\frac{1}{1} - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + ... + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Most terms cancel (telescoping), leaving: $$S_n = 1 - \\frac{1}{n+1}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> Take the limit: $$\\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n+1}\\right) = 1 - 0 = 1$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The sum is 1.
          </div>
        `,
        answer: '1'
      }
    ],
    practice: [
      {
        question: 'Find the sum of $$\\sum_{n=0}^{\\infty} \\left(-\\frac{1}{2}\\right)^n$$',
        type: 'fill',
        answer: '2/3'
      },
      {
        question: 'Does the geometric series $$\\sum_{n=1}^{\\infty} 5 \\cdot 2^n$$ converge or diverge?',
        type: 'mc',
        choices: [
          { text: 'Converges to 10', correct: false },
          { text: 'Diverges', correct: true },
          { text: 'Converges to 5', correct: false },
          { text: 'Converges to 5/2', correct: false }
        ]
      },
      {
        question: 'Evaluate $$\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n+1} - \\frac{1}{n+2}\\right)$$ using telescoping.',
        type: 'fill',
        answer: '1/2'
      },
      {
        question: 'What is the sum of the geometric series $$\\sum_{n=0}^{\\infty} \\frac{2^n}{3^n}$$?',
        type: 'fill',
        answer: '3'
      },
      {
        question: 'For the series $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 - 1}$$, use partial fractions to find the sum. Hint: $$\\frac{1}{n^2-1} = \\frac{1}{2}\\left(\\frac{1}{n-1} - \\frac{1}{n+1}\\right)$$',
        type: 'fill',
        answer: '1/2'
      }
    ]
  },

  {
    id: '10.3',
    title: 'Divergence & Integral Tests',
    learn: `
      <div class="concept-card">
        <h3>The nth-Term Test (Divergence Test)</h3>
        <p>For a series $$\\sum a_n$$, if $$\\lim_{n \\to \\infty} a_n \\neq 0$$, then the series <strong>diverges</strong>.</p>
        <p><strong>Important:</strong> If $$\\lim_{n \\to \\infty} a_n = 0$$, the test is <strong>inconclusive</strong>. The series may converge or diverge.</p>
      </div>

      <div class="formula-box">
        <strong>The Integral Test:</strong>
        <p>If f(x) is positive, continuous, and decreasing for x ≥ 1, then:</p>
        <p>$$\\sum_{n=1}^{\\infty} f(n) \\text{ and } \\int_1^{\\infty} f(x) \\, dx$$</p>
        <p>both converge or both diverge.</p>
      </div>

      <div class="concept-card">
        <h3>p-Series Test</h3>
        <p>A <strong>p-series</strong> has the form: $$\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$$</p>
        <p><strong>Convergence:</strong></p>
        <ul>
          <li>If p > 1, the series <strong>converges</strong></li>
          <li>If p ≤ 1, the series <strong>diverges</strong></li>
        </ul>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> The harmonic series $$\\sum \\frac{1}{n}$$ (p=1) diverges, but it diverges very slowly. The series $$\\sum \\frac{1}{n^2}$$ (p=2) converges.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Determine if $$\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$$ converges or diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Apply the nth-term test. Compute $$\\lim_{n \\to \\infty} \\frac{n}{n+1}$$.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Divide numerator and denominator by n: $$\\lim_{n \\to \\infty} \\frac{n}{n+1} = \\lim_{n \\to \\infty} \\frac{1}{1 + 1/n} = \\frac{1}{1} = 1$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Since $$\\lim_{n \\to \\infty} a_n = 1 \\neq 0$$, by the nth-term test, the series diverges.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The series diverges.
          </div>
        `,
        answer: 'Diverges'
      },
      {
        problem: 'Determine if $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$$ converges or diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Recognize this as a p-series with p = 2.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Apply the p-series test: since p = 2 > 1, the series converges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> We can verify using the integral test: $$\\int_1^{\\infty} \\frac{1}{x^2} \\, dx = \\left[-\\frac{1}{x}\\right]_1^{\\infty} = 0 - (-1) = 1$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Since the integral converges, the series converges.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The series converges.
          </div>
        `,
        answer: 'Converges'
      },
      {
        problem: 'Does $$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$$ converge or diverge?',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Recognize this as a p-series with p = 1/2 (since $$\\frac{1}{\\sqrt{n}} = n^{-1/2}$$).
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Apply the p-series test: since p = 1/2 ≤ 1, the series diverges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Verify with the integral test: $$\\int_1^{\\infty} x^{-1/2} \\, dx = \\left[2x^{1/2}\\right]_1^{\\infty} = \\infty$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Since the integral diverges, the series diverges.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The series diverges.
          </div>
        `,
        answer: 'Diverges'
      }
    ],
    practice: [
      {
        question: 'Does $$\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$$ converge or diverge?',
        type: 'mc',
        choices: [
          { text: 'Converges (p > 1)', correct: true },
          { text: 'Diverges (p ≤ 1)', correct: false },
          { text: 'Inconclusive', correct: false },
          { text: 'Converges (p < 1)', correct: false }
        ]
      },
      {
        question: 'Apply the nth-term test to $$\\sum_{n=1}^{\\infty} \\frac{2n}{3n + 1}$$. What do you conclude?',
        type: 'fill',
        answer: 'diverges (limit is 2/3, not 0)'
      },
      {
        question: 'For the series $$\\sum_{n=1}^{\\infty} e^{-n}$$, compute $$\\lim_{n \\to \\infty} e^{-n}$$ and determine convergence using the nth-term test.',
        type: 'fill',
        answer: 'limit is 0; test is inconclusive'
      },
      {
        question: 'Use the integral test to determine if $$\\sum_{n=1}^{\\infty} \\frac{1}{n(\\ln n)^2}$$ converges or diverges.',
        type: 'fill',
        answer: 'converges'
      },
      {
        question: 'Which p-value makes $$\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$$ converge?',
        type: 'mc',
        choices: [
          { text: 'p = 0.5', correct: false },
          { text: 'p = 1', correct: false },
          { text: 'p = 1.5', correct: true },
          { text: 'p = 0.9', correct: false }
        ]
      }
    ]
  },

  {
    id: '10.4',
    title: 'Comparison & Limit Comparison Tests',
    learn: `
      <div class="concept-card">
        <h3>Direct Comparison Test</h3>
        <p>If 0 ≤ aₙ ≤ bₙ for all n:</p>
        <ul>
          <li>If $$\\sum b_n$$ converges, then $$\\sum a_n$$ converges</li>
          <li>If $$\\sum a_n$$ diverges, then $$\\sum b_n$$ diverges</li>
        </ul>
        <p><strong>Strategy:</strong> Compare your series to a known series (geometric or p-series).</p>
      </div>

      <div class="formula-box">
        <strong>Limit Comparison Test:</strong>
        <p>If aₙ > 0 and bₙ > 0, and if $$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c$$ where 0 < c < ∞, then:</p>
        <p>$$\\sum a_n \\text{ and } \\sum b_n$$</p>
        <p>both converge or both diverge.</p>
      </div>

      <div class="concept-card">
        <h3>Choosing a Comparison Series</h3>
        <p>When using comparison tests, compare to series you know:</p>
        <ul>
          <li><strong>Geometric series:</strong> $$\\sum r^n$$ (converges if |r| < 1)</li>
          <li><strong>p-series:</strong> $$\\sum \\frac{1}{n^p}$$ (converges if p > 1)</li>
        </ul>
        <p>Look at the highest-degree terms in numerator and denominator to identify the dominant behavior.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> For limit comparison, choose a series bₙ that matches the "leading behavior" of aₙ. Ignore constants and lower-order terms.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Determine if $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$$ converges or diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Compare to the p-series $$\\sum \\frac{1}{n^2}$$, which converges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> For all n ≥ 1: $$\\frac{1}{n^2 + 1} < \\frac{1}{n^2}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Since $$\\sum \\frac{1}{n^2}$$ converges and $$\\frac{1}{n^2+1} < \\frac{1}{n^2}$$, by direct comparison, $$\\sum \\frac{1}{n^2+1}$$ converges.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The series converges.
          </div>
        `,
        answer: 'Converges'
      },
      {
        problem: 'Use limit comparison to determine if $$\\sum_{n=1}^{\\infty} \\frac{3n+1}{n^3 - 2}$$ converges or diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Identify the dominant behavior. The leading term in the numerator is 3n and in the denominator is n³, so compare to bₙ = 1/n².
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Compute the limit: $$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\lim_{n \\to \\infty} \\frac{(3n+1)/(n^3-2)}{1/n^2}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Simplify: $$\\lim_{n \\to \\infty} \\frac{(3n+1) \\cdot n^2}{n^3 - 2} = \\lim_{n \\to \\infty} \\frac{3n^3 + n^2}{n^3 - 2}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Divide by n³: $$\\lim_{n \\to \\infty} \\frac{3 + 1/n}{1 - 2/n^3} = \\frac{3}{1} = 3$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> Since the limit is c = 3 (where 0 < 3 < ∞), and $$\\sum \\frac{1}{n^2}$$ converges, $$\\sum \\frac{3n+1}{n^3-2}$$ also converges.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The series converges.
          </div>
        `,
        answer: 'Converges'
      },
      {
        problem: 'Determine if $$\\sum_{n=1}^{\\infty} \\sin\\left(\\frac{1}{n}\\right)$$ converges or diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> For small x, sin(x) ≈ x. As n → ∞, 1/n → 0, so sin(1/n) ≈ 1/n for large n.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Compare to bₙ = 1/n using limit comparison: $$\\lim_{n \\to \\infty} \\frac{\\sin(1/n)}{1/n}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Using the standard limit $$\\lim_{u \\to 0} \\frac{\\sin(u)}{u} = 1$$ with u = 1/n: $$\\lim_{n \\to \\infty} \\frac{\\sin(1/n)}{1/n} = 1$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Since the limit is c = 1 and $$\\sum \\frac{1}{n}$$ diverges (harmonic series), $$\\sum \\sin(1/n)$$ also diverges.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The series diverges.
          </div>
        `,
        answer: 'Diverges'
      }
    ],
    practice: [
      {
        question: 'Use direct comparison: is $$\\sum_{n=1}^{\\infty} \\frac{1}{n \\cdot 2^n}$$ convergent or divergent?',
        type: 'fill',
        answer: 'convergent (compare to 1/2^n)'
      },
      {
        question: 'For $$\\sum_{n=1}^{\\infty} \\frac{n^2 + 1}{n^4 + 1}$$, which series should you use for limit comparison?',
        type: 'mc',
        choices: [
          { text: '$$\\sum \\frac{1}{n^2}$$', correct: true },
          { text: '$$\\sum \\frac{1}{n}$$', correct: false },
          { text: '$$\\sum \\frac{1}{n^3}$$', correct: false },
          { text: '$$\\sum \\frac{1}{n^4}$$', correct: false }
        ]
      },
      {
        question: 'Use limit comparison to determine convergence of $$\\sum_{n=1}^{\\infty} \\frac{5n^2}{n^5 + 3}$$ with bₙ = 1/n³.',
        type: 'fill',
        answer: 'converges (limit = 5, p-series 1/n^3 converges)'
      },
      {
        question: 'Does $$\\sum_{n=2}^{\\infty} \\frac{1}{\\sqrt{n} - 1}$$ converge or diverge? (Hint: compare to 1/√n)',
        type: 'fill',
        answer: 'diverges'
      },
      {
        question: 'For $$\\sum_{n=1}^{\\infty} \\frac{\\ln(n)}{n^2}$$, does it converge or diverge?',
        type: 'mc',
        choices: [
          { text: 'Diverges', correct: false },
          { text: 'Converges', correct: true },
          { text: 'Inconclusive by comparison', correct: false },
          { text: 'Oscillates', correct: false }
        ]
      }
    ]
  },

  {
    id: '10.5',
    title: 'Ratio, Root & Alternating Series Tests',
    learn: `
      <div class="concept-card">
        <h3>The Ratio Test</h3>
        <p>For a series $$\\sum a_n$$, compute $$L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$$</p>
        <ul>
          <li>If L < 1, the series <strong>converges absolutely</strong></li>
          <li>If L > 1, the series <strong>diverges</strong></li>
          <li>If L = 1, the test is <strong>inconclusive</strong></li>
        </ul>
        <p><strong>Best for:</strong> Series with factorials (n!) or exponentials (aⁿ).</p>
      </div>

      <div class="formula-box">
        <strong>The Root Test:</strong>
        <p>Compute $$L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$$</p>
        <ul>
          <li>If L < 1, the series converges absolutely</li>
          <li>If L > 1, the series diverges</li>
          <li>If L = 1, the test is inconclusive</li>
        </ul>
      </div>

      <div class="concept-card">
        <h3>Alternating Series Test (AST)</h3>
        <p>For a series of the form $$\\sum_{n=1}^{\\infty} (-1)^n b_n$$ where bₙ > 0:</p>
        <p>The series converges if:</p>
        <ul>
          <li>(1) The sequence {bₙ} is decreasing: bₙ₊₁ ≤ bₙ</li>
          <li>(2) $$\\lim_{n \\to \\infty} b_n = 0$$</li>
        </ul>
        <p><strong>Absolute vs. Conditional:</strong> Converges absolutely if $$\\sum |a_n|$$ converges; conditionally if $$\\sum a_n$$ converges but $$\\sum |a_n|$$ diverges.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Error Bound (Alternating Series):</strong> If the alternating series converges, then $$|S - S_n| \\leq b_{n+1}$$, where S is the sum and Sₙ is the nth partial sum.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Use the ratio test on $$\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$$.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Set up the ratio: $$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Simplify: $$\\frac{a_{n+1}}{a_n} = \\frac{(n+1) \\cdot n!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\frac{(n+1) \\cdot n^n}{(n+1)^{n+1}}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Rewrite: $$\\frac{a_{n+1}}{a_n} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Compute the limit: $$L = \\lim_{n \\to \\infty} \\left(\\frac{n}{n+1}\\right)^n = \\lim_{n \\to \\infty} \\left(\\frac{1}{1 + 1/n}\\right)^n = \\frac{1}{e}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> Since L = 1/e ≈ 0.368 < 1, the series converges absolutely.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The series converges.
          </div>
        `,
        answer: 'Converges'
      },
      {
        problem: 'Determine if $$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$ converges or diverges.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> This is an alternating series with bₙ = 1/n.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Check condition (1): Is {1/n} decreasing? Yes, 1/(n+1) < 1/n for all n.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Check condition (2): $$\\lim_{n \\to \\infty} \\frac{1}{n} = 0$$ ✓
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> By the alternating series test, $$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$ converges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> Check absolute convergence: $$\\sum_{n=1}^{\\infty} \\left|\\frac{(-1)^n}{n}\\right| = \\sum_{n=1}^{\\infty} \\frac{1}{n}$$ (harmonic series) diverges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 6:</strong> The series converges <strong>conditionally</strong>.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            Converges conditionally.
          </div>
        `,
        answer: 'Converges conditionally'
      },
      {
        problem: 'Determine convergence of $$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}$$.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> This is an alternating series with bₙ = 1/n².
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Check condition (1): {1/n²} is decreasing. ✓
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Check condition (2): $$\\lim_{n \\to \\infty} \\frac{1}{n^2} = 0$$ ✓
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> By the alternating series test, the series converges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> Check absolute convergence: $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$$ is a p-series with p = 2 > 1, so it converges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 6:</strong> The series converges <strong>absolutely</strong>.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            Converges absolutely.
          </div>
        `,
        answer: 'Converges absolutely'
      }
    ],
    practice: [
      {
        question: 'Apply the ratio test to $$\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$$. What do you conclude?',
        type: 'fill',
        answer: 'converges (L = 1/2 < 1)'
      },
      {
        question: 'For $$\\sum_{n=1}^{\\infty} \\frac{(-1)^n \\sqrt{n}}{n+1}$$, does it satisfy the alternating series test?',
        type: 'mc',
        choices: [
          { text: 'Yes, it converges absolutely', correct: false },
          { text: 'Yes, it converges conditionally', correct: true },
          { text: 'No, it diverges', correct: false },
          { text: 'Inconclusive', correct: false }
        ]
      },
      {
        question: 'Use the root test on $$\\sum_{n=1}^{\\infty} \\left(\\frac{2n}{3n+1}\\right)^n$$.',
        type: 'fill',
        answer: 'converges (L = 2/3 < 1)'
      },
      {
        question: 'For the alternating series $$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^3}$$, estimate the error when using the first 5 terms.',
        type: 'fill',
        answer: '≤ 1/6³ = 1/216 ≈ 0.0046'
      },
      {
        question: 'Does $$\\sum_{n=1}^{\\infty} (-1)^n \\frac{n}{2n+1}$$ converge? Why or why not?',
        type: 'fill',
        answer: 'no; limit of b_n = 1/2 ≠ 0'
      }
    ]
  },

  {
    id: '10.6',
    title: 'Power Series & Radius of Convergence',
    learn: `
      <div class="concept-card">
        <h3>Power Series</h3>
        <p>A <strong>power series</strong> centered at x = a has the form:</p>
        <p>$$\\sum_{n=0}^{\\infty} c_n(x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + ...$$</p>
        <p>where {cₙ} are coefficients and a is the center.</p>
        <p>A power series converges for |x - a| < R (where R is the radius of convergence) and may or may not converge at the endpoints x = a ± R.</p>
      </div>

      <div class="formula-box">
        <strong>Finding the Radius of Convergence:</strong>
        <p>Use the ratio test on |cₙ₊₁(x-a)^(n+1) / (cₙ(x-a)ⁿ)| to get:</p>
        <p>$$|x-a| \\lim_{n \\to \\infty} \\frac{|c_{n+1}|}{|c_n|} < 1$$</p>
        <p>Therefore: $$R = \\frac{1}{\\lim_{n \\to \\infty} \\frac{|c_{n+1}|}{|c_n|}}$$</p>
        <p>Or equivalently: $$R = 1 / \\lim_{n \\to \\infty} \\sqrt[n]{|c_n|}$$</p>
      </div>

      <div class="concept-card">
        <h3>Interval of Convergence</h3>
        <p>The <strong>interval of convergence (IOC)</strong> is the set of all x for which the series converges. It has the form (a - R, a + R), [a - R, a + R), (a - R, a + R], or [a - R, a + R], depending on convergence at the endpoints.</p>
        <p><strong>Strategy:</strong> (1) Find R using the ratio test. (2) Test x = a + R and x = a - R separately using other convergence tests.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Differentiation and integration of power series have the same radius of convergence as the original series. The endpoints may change, so always recheck.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find the radius of convergence of $$\\sum_{n=0}^{\\infty} x^n/n!$$',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Identify cₙ = 1/n!. Apply the ratio test: $$\\lim_{n \\to \\infty} \\frac{|c_{n+1}|}{|c_n|} = \\lim_{n \\to \\infty} \\frac{1/(n+1)!}{1/n!} = \\lim_{n \\to \\infty} \\frac{1}{n+1} = 0$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Therefore, R = 1/0 = ∞.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> The series converges for all x ∈ ℝ.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            The radius of convergence is ∞; IOC = (-∞, ∞).
          </div>
        `,
        answer: 'R = ∞'
      },
      {
        problem: 'Find the radius and interval of convergence of $$\\sum_{n=1}^{\\infty} nx^n$$.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Identify cₙ = n. Use the ratio test: $$\\lim_{n \\to \\infty} \\frac{|c_{n+1}|}{|c_n|} = \\lim_{n \\to \\infty} \\frac{n+1}{n} = 1$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> The radius is R = 1/1 = 1.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Check x = 1: $$\\sum_{n=1}^{\\infty} n(1)^n = \\sum_{n=1}^{\\infty} n$$ diverges (nth-term test: lim n ≠ 0).
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Check x = -1: $$\\sum_{n=1}^{\\infty} n(-1)^n = -1 + 2 - 3 + 4 - ...$$  diverges (nth-term test: lim of |n|(-1)ⁿ fails).
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> The interval of convergence is the open interval (-1, 1).
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            R = 1; IOC = (-1, 1).
          </div>
        `,
        answer: 'R = 1; IOC = (-1, 1)'
      },
      {
        problem: 'Find the interval of convergence of $$\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n}$$.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> This is a power series centered at a = 2 with cₙ = 1/n. Find the radius: $$\\lim_{n \\to \\infty} \\frac{|c_{n+1}|}{|c_n|} = \\lim_{n \\to \\infty} \\frac{1/(n+1)}{1/n} = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Therefore, R = 1. The series converges for |x - 2| < 1, i.e., 1 < x < 3.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Check x = 3: $$\\sum_{n=1}^{\\infty} \\frac{(3-2)^n}{n} = \\sum_{n=1}^{\\infty} \\frac{1}{n}$$ (harmonic series) diverges.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Check x = 1: $$\\sum_{n=1}^{\\infty} \\frac{(1-2)^n}{n} = \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$ converges by the alternating series test.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> The interval of convergence is [1, 3).
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            IOC = [1, 3).
          </div>
        `,
        answer: '[1, 3)'
      }
    ],
    practice: [
      {
        question: 'Find the radius of convergence of $$\\sum_{n=0}^{\\infty} \\frac{x^n}{2^n}$$.',
        type: 'fill',
        answer: 'R = 2'
      },
      {
        question: 'For $$\\sum_{n=1}^{\\infty} \\frac{(x+1)^n}{n^2}$$, what is the radius of convergence?',
        type: 'mc',
        choices: [
          { text: 'R = 1', correct: true },
          { text: 'R = 2', correct: false },
          { text: 'R = 1/2', correct: false },
          { text: 'R = ∞', correct: false }
        ]
      },
      {
        question: 'Find the interval of convergence of $$\\sum_{n=0}^{\\infty} (-1)^n (x-1)^n$$.',
        type: 'fill',
        answer: '(0, 2)'
      },
      {
        question: 'For $$\\sum_{n=1}^{\\infty} \\frac{n!}{(2n)!} x^n$$, find the radius of convergence.',
        type: 'fill',
        answer: 'R = ∞'
      },
      {
        question: 'Determine the interval of convergence of $$\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 3^n}$$.',
        type: 'fill',
        answer: '[-3, 3)'
      }
    ]
  },

  {
    id: '10.7',
    title: 'Taylor & Maclaurin Series',
    learn: `
      <div class="concept-card">
        <h3>Taylor Series</h3>
        <p>The <strong>Taylor series</strong> for a function f(x) centered at x = a is:</p>
        <p>$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n$$</p>
        <p>where f⁽ⁿ⁾(a) is the nth derivative of f evaluated at x = a.</p>
        <p>When a = 0, this is called the <strong>Maclaurin series</strong>: $$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n$$</p>
      </div>

      <div class="formula-box">
        <strong>Key Maclaurin Series (Memorize):</strong>
        <p>$$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$$</p>
        <p>$$\\sin(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$$</p>
        <p>$$\\cos(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$$</p>
        <p>$$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + ... \\quad (|x| < 1)$$</p>
      </div>

      <div class="concept-card">
        <h3>Building New Series from Known Series</h3>
        <p><strong>Substitution:</strong> Replace x with an expression. E.g., eˣ series gives e^(-x²) by substituting -x² for x.</p>
        <p><strong>Differentiation/Integration:</strong> Differentiate or integrate term-by-term to find series for related functions.</p>
        <p><strong>Arithmetic:</strong> Multiply, add, or divide series (with caution on convergence).</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Start with a known series and apply algebraic operations. This is much faster than computing derivatives directly!</p>
      </div>
    `,
    examples: [
      {
        problem: 'Find the Maclaurin series for e^(-x²).',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Start with the known Maclaurin series: $$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Substitute -x² for x: $$e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Write out the first few terms: $$e^{-x^2} = 1 - x^2 + \\frac{x^4}{2!} - \\frac{x^6}{3!} + ...$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            $$e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$$
          </div>
        `,
        answer: '$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$$'
      },
      {
        problem: 'Find the Maclaurin series for sin(x)/x.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Start with the Maclaurin series for sin(x): $$\\sin(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Divide by x: $$\\frac{\\sin(x)}{x} = \\frac{1}{x} \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n+1)!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Write the first few terms: $$\\frac{\\sin(x)}{x} = 1 - \\frac{x^2}{3!} + \\frac{x^4}{5!} - \\frac{x^6}{7!} + ...$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            $$\\frac{\\sin(x)}{x} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n+1)!}$$
          </div>
        `,
        answer: '$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n+1)!}$$'
      },
      {
        problem: 'Find the Taylor series for ln(x) centered at a = 1.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> Compute derivatives of f(x) = ln(x):
            f(1) = 0
            f\'(x) = 1/x, f\'(1) = 1
            f\'\'(x) = -1/x², f\'\'(1) = -1
            f\'\'\'(x) = 2/x³, f\'\'\'(1) = 2
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> Identify the pattern: f⁽ⁿ⁾(1) = (-1)^(n+1) · (n-1)! for n ≥ 1.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> The Taylor series is: $$\\ln(x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}(n-1)!}{n!}(x-1)^n = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}(x-1)^n$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> First few terms: $$\\ln(x) = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - ...$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            $$\\ln(x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}(x-1)^n$$
          </div>
        `,
        answer: '$$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}(x-1)^n$$'
      }
    ],
    practice: [
      {
        question: 'Find the Maclaurin series for cos(x²).',
        type: 'fill',
        answer: '$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n}}{(2n)!}$$'
      },
      {
        question: 'What is the Maclaurin series for $$\\frac{1}{1+x^2}$$?',
        type: 'mc',
        choices: [
          { text: '$$\\sum_{n=0}^{\\infty} (-1)^n x^{2n}$$', correct: true },
          { text: '$$\\sum_{n=0}^{\\infty} x^{2n}$$', correct: false },
          { text: '$$\\sum_{n=0}^{\\infty} (-1)^n x^n$$', correct: false },
          { text: '$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{n}$$', correct: false }
        ]
      },
      {
        question: 'Find the first 4 nonzero terms of the Maclaurin series for e^(2x).',
        type: 'fill',
        answer: '$$1 + 2x + 2x^2 + \\frac{4x^3}{3}$$'
      },
      {
        question: 'Find the Maclaurin series for $$x \\sin(x)$$.',
        type: 'fill',
        answer: '$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+2}}{(2n+1)!}$$'
      },
      {
        question: 'What is the Taylor series for sin(x) centered at a = π/2?',
        type: 'fill',
        answer: '$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n)!}(x - \\pi/2)^{2n}$$'
      }
    ]
  },

  {
    id: '10.8',
    title: 'Taylor Polynomial Error Bounds',
    learn: `
      <div class="concept-card">
        <h3>Taylor Polynomials and Remainder</h3>
        <p>The <strong>nth Taylor polynomial</strong> Pₙ(x) is the sum of the first (n+1) terms of the Taylor series:</p>
        <p>$$P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$$</p>
        <p>The <strong>remainder</strong> (or error) is: $$R_n(x) = f(x) - P_n(x)$$</p>
        <p>Pₙ(x) approximates f(x), and Rₙ(x) measures how far off the approximation is.</p>
      </div>

      <div class="formula-box">
        <strong>Lagrange Error Bound:</strong>
        <p>$$|R_n(x)| \\leq \\frac{M |x-a|^{n+1}}{(n+1)!}$$</p>
        <p>where M is the maximum value of |f⁽ⁿ⁺¹⁾(t)| for t between a and x.</p>
        <p><strong>Alternating Series Error Bound:</strong></p>
        <p>If $$\\sum_{n=0}^{\\infty} (-1)^n b_n$$ converges by the alternating series test, then $$|S - S_n| \\leq b_{n+1}$$</p>
      </div>

      <div class="concept-card">
        <h3>Error Bound Strategy</h3>
        <p><strong>Steps:</strong></p>
        <ol>
          <li>Identify the function f(x), the center a, and the degree n of the polynomial.</li>
          <li>Find the (n+1)th derivative: f⁽ⁿ⁺¹⁾(x).</li>
          <li>Bound |f⁽ⁿ⁺¹⁾(t)| by M on the interval between a and x.</li>
          <li>Apply the formula: Error ≤ M|x-a|^(n+1) / (n+1)!.</li>
        </ol>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> For f(x) = eˣ, |f⁽ⁿ⁺¹⁾(t)| = eᵗ, which is bounded by e^max(a,x). Use the largest of |a| and |x| to estimate M.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Approximate e^0.1 using the Taylor polynomial P₃(x) for e^x centered at a = 0. Estimate the error.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> The Maclaurin series for eˣ is: $$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> The 3rd Taylor polynomial is: $$P_3(x) = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Evaluate at x = 0.1: $$P_3(0.1) = 1 + 0.1 + \\frac{(0.1)^2}{2} + \\frac{(0.1)^3}{6}$$
            $$= 1 + 0.1 + 0.005 + 0.000167 = 1.105167$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> For the error, the 4th derivative of eˣ is still eˣ. On the interval [0, 0.1], |f⁽⁴⁾(t)| ≤ e^0.1 < 1.11.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> Apply Lagrange error bound: $$|R_3(0.1)| \\leq \\frac{1.11 \\cdot (0.1)^4}{4!} = \\frac{1.11 \\cdot 0.0001}{24} \\approx 4.6 \\times 10^{-6}$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            e^0.1 ≈ 1.105167, with error ≤ 4.6 × 10⁻⁶.
          </div>
        `,
        answer: 'P₃(0.1) ≈ 1.105167, error ≤ 4.6 × 10⁻⁶'
      },
      {
        problem: 'Approximate sin(0.2) using P₃(x) for sin(x) at a = 0. Estimate the error.',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> The Maclaurin series for sin(x) is: $$\\sin(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> The 3rd Taylor polynomial (includes terms up to x³): $$P_3(x) = x - \\frac{x^3}{3!} = x - \\frac{x^3}{6}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> Evaluate at x = 0.2: $$P_3(0.2) = 0.2 - \\frac{(0.2)^3}{6} = 0.2 - \\frac{0.008}{6} \\approx 0.2 - 0.001333 = 0.198667$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> The next term in the series is x⁵. For the error bound on R₃, we use |f⁽⁴⁾(t)| where f⁽⁴⁾ = sin(x). Thus M = 1.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> $$|R_3(0.2)| \\leq \\frac{1 \\cdot (0.2)^4}{4!} = \\frac{0.0016}{24} \\approx 6.67 \\times 10^{-5}$$
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            sin(0.2) ≈ 0.198667, with error ≤ 6.67 × 10⁻⁵.
          </div>
        `,
        answer: 'P₃(0.2) ≈ 0.198667, error ≤ 6.67 × 10⁻⁵'
      },
      {
        problem: 'How many terms of the Maclaurin series for e^x are needed to approximate e^0.5 within 0.001?',
        solution: `
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 1:</strong> We need to find the smallest n such that $$|R_n(0.5)| \\leq 0.001$$.
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 2:</strong> For eˣ centered at 0, |f⁽ⁿ⁺¹⁾(t)| = eᵗ ≤ e^0.5 < 1.65 on [0, 0.5].
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 3:</strong> The Lagrange error bound is: $$|R_n(0.5)| \\leq \\frac{1.65 \\cdot (0.5)^{n+1}}{(n+1)!}$$
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 4:</strong> Test values of n:
            n=3: Error ≤ 1.65 · (0.5)⁴ / 4! = 1.65 · 0.0625 / 24 ≈ 0.00429 > 0.001
            n=4: Error ≤ 1.65 · (0.5)⁵ / 5! = 1.65 · 0.03125 / 120 ≈ 0.000429 < 0.001 ✓
          </div>
          <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
            <strong>Step 5:</strong> We need at least n = 4, meaning we use P₄(x) with 5 terms.
          </div>
          <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px;font-size:0.93rem">
            Use P₄(x) (5 terms) to achieve accuracy within 0.001.
          </div>
        `,
        answer: 'Use P₄(x) with 5 terms'
      }
    ],
    practice: [
      {
        question: 'Estimate the error when using P₂(x) to approximate ln(1.1) at a = 1.',
        type: 'fill',
        answer: '≤ (0.1)³ / 3 ≈ 0.000333'
      },
      {
        question: 'Using the first 4 terms of the Maclaurin series for cos(x), approximate cos(0.3). What is the Lagrange error bound?',
        type: 'fill',
        answer: '≤ (0.3)⁴ / 4! ≈ 3.75 × 10⁻⁴'
      },
      {
        question: 'How many terms of the Maclaurin series for sin(x) are needed to approximate sin(π/6) within 0.0001?',
        type: 'mc',
        choices: [
          { text: '2 terms', correct: false },
          { text: '3 terms', correct: true },
          { text: '4 terms', correct: false },
          { text: '5 terms', correct: false }
        ]
      },
      {
        question: 'For $$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$$, what is the error when approximating the sum with the first 10 terms?',
        type: 'fill',
        answer: '≤ 1/11 ≈ 0.0909'
      },
      {
        question: 'Using P₅(x) for eˣ centered at a = 0, approximate e^0.5. Then estimate the maximum possible error.',
        type: 'fill',
        answer: 'P₅(0.5) ≈ 1.6484375; error ≤ (0.5)⁶/(6!) ≈ 1.74 × 10⁻⁴'
      }
    ]
  }
];
