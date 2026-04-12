export const lessons = [
  {
    id: '7.1',
    title: 'Slope Fields',
    difficulty: 'intermediate',
    estimate: '25 minutes',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>What is a Slope Field?</h3>
          <p>A <strong>slope field</strong> (or <strong>direction field</strong>) is a visual representation of a differential equation of the form <strong>dy/dx = f(x,y)</strong>. It consists of short line segments drawn at representative points (x,y) in the plane, each with slope equal to f(x,y).</p>
          <p><strong>Key idea:</strong> Solution curves to the DE are tangent to the slope field everywhere. If you draw a smooth curve through the slope field following the direction of the segments, that curve is a solution to the differential equation.</p>
        </div>

        <div class="formula-box">
          <h3>How to Sketch a Slope Field by Hand</h3>
          <ol>
            <li>Choose representative points (x,y) across your desired region (typically a grid).</li>
            <li>For each point, calculate the slope: <strong>m = f(x,y)</strong>.</li>
            <li>Draw a short line segment at (x,y) with that slope.</li>
            <li>Repeat for all points. Solution curves follow these segments tangentially.</li>
          </ol>
        </div>

        <div class="concept-card">
          <h3>Equilibrium Solutions</h3>
          <p>An <strong>equilibrium solution</strong> occurs where <strong>dy/dx = 0</strong> for all x. Graphically, these appear as horizontal line segments in the slope field. Equilibrium solutions are constant functions.</p>
          <p><strong>Example:</strong> If dy/dx = y(2-y), then equilibrium solutions are y = 0 and y = 2 (where the derivative is zero).</p>
        </div>

        <div class="formula-box">
          <h3>Matching a Slope Field to a DE</h3>
          <p>Look for key features:</p>
          <ul>
            <li><strong>Horizontal isoclines:</strong> If slopes depend only on y (not x), then vertical lines have the same slope.</li>
            <li><strong>Vertical behavior:</strong> If slopes depend only on x, then horizontal lines have the same slope.</li>
            <li><strong>Equilibrium solutions:</strong> Identify where slopes are zero.</li>
            <li><strong>Growth/decay:</strong> Are slopes positive (increasing) or negative (decreasing)?</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Pro Tip:</strong> Always test a few points. For dy/dx = x+y at (1,1): slope = 2. At (0,0): slope = 0. At (-1,0): slope = -1. These quickly confirm or eliminate possibilities.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Sketch the slope field for dy/dx = x and identify the family of solution curves.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Analyze the slope function</strong><br/>
              dy/dx = x depends only on x. This means:
              <ul>
                <li>For x < 0: slopes are negative (curves decreasing)</li>
                <li>For x = 0: slopes are zero (horizontal segments)</li>
                <li>For x > 0: slopes are positive (curves increasing)</li>
              </ul>
              <strong>Geometry:</strong> All points on the same vertical line x = a have the same slope a.
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Identify equilibrium solutions</strong><br/>
              dy/dx = 0 when x = 0. So the line x = 0 shows horizontal segments. However, since x varies, there is no single equilibrium solution (y-value that works for all x).
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Find the general solution</strong><br/>
              Integrate: y = ∫x dx = x²/2 + C
              <br/>
              The solution curves are <strong>parabolas</strong> of the form <strong>y = x²/2 + C</strong>.
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Sketch the slope field</strong><br/>
              <ul>
                <li>At x = -2: slopes ≈ -2 (steeply negative)</li>
                <li>At x = -1: slopes = -1 (moderately negative)</li>
                <li>At x = 0: slopes = 0 (horizontal)</li>
                <li>At x = 1: slopes = 1 (moderately positive)</li>
                <li>At x = 2: slopes ≈ 2 (steeply positive)</li>
              </ul>
              Draw short segments at these points, and notice parabolas form the solution curves.
            </div>
          </div>
        `
      },
      {
        problem: 'For the differential equation dy/dx = y - x, find where the slopes are zero and describe the behavior of solution curves above and below this line.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Find the equilibrium line</strong><br/>
              dy/dx = 0 when y - x = 0, so <strong>y = x</strong>.
              <br/>
              On the line y = x, all slope field segments are horizontal.
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Analyze regions</strong><br/>
              <ul>
                <li><strong>Above the line y = x:</strong> Here y > x, so dy/dx = y - x > 0. Slopes are positive → solution curves increase.</li>
                <li><strong>Below the line y = x:</strong> Here y < x, so dy/dx = y - x < 0. Slopes are negative → solution curves decrease.</li>
              </ul>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Describe solution behavior</strong><br/>
              <ul>
                <li>Solution curves above y = x curve upward (increasing, but bending toward the line).</li>
                <li>Solution curves below y = x curve downward (decreasing, but bending toward the line).</li>
                <li>The line y = x acts as an <strong>asymptotic solution:</strong> all other solution curves approach y = x as x → ∞.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        problem: 'Which slope field matches the differential equation dy/dx = 2y? Justify your answer.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Analyze the DE structure</strong><br/>
              dy/dx = 2y depends only on y (not x). This means:
              <ul>
                <li>All points with the same y-coordinate have the same slope.</li>
                <li>Horizontal lines have constant slope.</li>
              </ul>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Identify key features</strong><br/>
              <ul>
                <li><strong>At y = 0:</strong> dy/dx = 0 → horizontal segments (equilibrium solution y = 0).</li>
                <li><strong>For y > 0:</strong> dy/dx = 2y > 0 → positive slopes. Larger y → steeper positive slopes.</li>
                <li><strong>For y < 0:</strong> dy/dx = 2y < 0 → negative slopes. More negative y → steeper negative slopes.</li>
              </ul>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Match to a slope field</strong><br/>
              The correct slope field has:
              <ul>
                <li>Horizontal line segments along y = 0.</li>
                <li>Positive slopes that increase in steepness as y increases.</li>
                <li>Negative slopes that increase in steepness (more negative) as y decreases.</li>
              </ul>
              This excludes fields showing vertical isoclines or those that depend on x.
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Verify with solution curves</strong><br/>
              The general solution is <strong>y = Ce^(2x)</strong>. These are exponential curves:
              <ul>
                <li>If C > 0: curves increase as x increases (exponential growth).</li>
                <li>If C < 0: curves decrease as x increases (exponential decay).</li>
                <li>If C = 0: the line y = 0.</li>
              </ul>
            </div>
          </div>
        `
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'Which characteristic is true of a slope field for dy/dx = f(x) (depends only on x)?',
        choices: [
          'All points on the same horizontal line have the same slope',
          'All points on the same vertical line have the same slope',
          'Slopes increase as y increases',
          'There is an equilibrium solution for every value of x'
        ],
        correct: 1,
        explanation: 'Since dy/dx depends only on x, all points with the same x-coordinate (i.e., on the same vertical line) have the same slope. Answer: (B)'
      },
      {
        type: 'multiple-choice',
        question: 'For dy/dx = -y, which statement best describes the solution curves?',
        choices: [
          'They are vertical lines',
          'They are parabolas opening downward',
          'They are exponential curves that decay toward y = 0',
          'They are straight lines with slope -1'
        ],
        correct: 2,
        explanation: 'The solution to dy/dx = -y is y = Ce^(-x), which are exponential decay curves approaching y = 0 as x → ∞. Answer: (C)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'For the differential equation dy/dx = (y-3)(y+1), the equilibrium solutions are y = _____ and y = _____.',
        answer: '3, -1',
        explanation: 'Equilibrium solutions occur where dy/dx = 0. Setting (y-3)(y+1) = 0 gives y = 3 and y = -1.'
      },
      {
        type: 'fill-in-the-blank',
        question: 'A slope field for dy/dx = xy has the property that all points on the line y = 0 show _____ slope segments.',
        answer: 'zero or horizontal',
        explanation: 'When y = 0, dy/dx = x·0 = 0, so all segments on the x-axis are horizontal.'
      }
    ]
  },

  {
    id: '7.2',
    title: 'Separable Differential Equations',
    difficulty: 'intermediate',
    estimate: '30 minutes',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>What is a Separable DE?</h3>
          <p>A differential equation is <strong>separable</strong> if it can be written in the form:</p>
          <p style="text-align: center; font-weight: bold;">g(y) dy = f(x) dx</p>
          <p>In other words, the variables can be separated so that all y terms (including dy) are on one side and all x terms (including dx) are on the other.</p>
        </div>

        <div class="formula-box">
          <h3>Steps to Solve a Separable DE</h3>
          <ol>
            <li><strong>Separate variables:</strong> Rearrange so g(y) dy = f(x) dx.</li>
            <li><strong>Integrate both sides:</strong> ∫g(y) dy = ∫f(x) dx.</li>
            <li><strong>Simplify:</strong> Use integration techniques; you\'ll get G(y) = F(x) + C.</li>
            <li><strong>Solve for y if possible:</strong> This gives the general solution.</li>
            <li><strong>Apply initial condition:</strong> If y(x₀) = y₀ is given, substitute to find C, then write the particular solution.</li>
          </ol>
        </div>

        <div class="concept-card">
          <h3>General vs. Particular Solutions</h3>
          <p><strong>General solution:</strong> Contains an arbitrary constant C and represents a family of curves.</p>
          <p><strong>Particular solution:</strong> A specific member of the family, obtained by applying an initial condition to find C.</p>
          <p><strong>Example:</strong> For dy/dx = 2x with y(1) = 3:</p>
          <ul>
            <li>General: y = x² + C</li>
            <li>Particular: 3 = 1 + C → C = 2 → y = x² + 2</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Verification:</strong> Always check your answer by differentiating. If y = f(x), then dy/dx should equal the original right-hand side.</p>
        </div>

        <div class="formula-box">
          <h3>Common Integration Challenges</h3>
          <ul>
            <li><strong>Logarithmic form:</strong> ∫dy/y = ln|y| + C (not just ln y).</li>
            <li><strong>Exponential form:</strong> From ln|y| = x + C, we get |y| = e^(x+C) = e^C · e^x, so y = Ae^x (where A = ±e^C is an arbitrary constant).</li>
            <li><strong>Implicit form:</strong> Sometimes the best form is implicit, like x² + y² = C (circle family).</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve dy/dx = xy. Find the general solution and the particular solution with y(0) = 3.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Separate variables</strong><br/>
              dy/dx = xy
              <br/>
              Divide both sides by y and multiply by dx:
              <br/>
              dy/y = x dx
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Integrate both sides</strong><br/>
              ∫(1/y) dy = ∫x dx
              <br/>
              ln|y| = x²/2 + C₁
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Solve for y</strong><br/>
              Exponentiate both sides:
              <br/>
              |y| = e^(x²/2 + C₁) = e^(C₁) · e^(x²/2)
              <br/>
              Let A = ±e^(C₁) (arbitrary constant):
              <br/>
              <strong>General solution: y = Ae^(x²/2)</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Apply initial condition y(0) = 3</strong><br/>
              3 = Ae^0 = A · 1
              <br/>
              A = 3
              <br/>
              <strong>Particular solution: y = 3e^(x²/2)</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Verify</strong><br/>
              y = 3e^(x²/2)
              <br/>
              dy/dx = 3 · e^(x²/2) · x = 3x e^(x²/2) = x · (3e^(x²/2)) = xy ✓
            </div>
          </div>
        `
      },
      {
        problem: 'Solve dy/dx = (x+1)/(y+2) with initial condition y(0) = 0.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Separate variables</strong><br/>
              dy/dx = (x+1)/(y+2)
              <br/>
              Multiply both sides by (y+2) and dx:
              <br/>
              (y+2) dy = (x+1) dx
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Integrate both sides</strong><br/>
              ∫(y+2) dy = ∫(x+1) dx
              <br/>
              y²/2 + 2y = x²/2 + x + C
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Apply initial condition y(0) = 0</strong><br/>
              0²/2 + 2(0) = 0²/2 + 0 + C
              <br/>
              0 = 0 + C
              <br/>
              C = 0
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Write the particular solution</strong><br/>
              <strong>y²/2 + 2y = x²/2 + x</strong>
              <br/>
              This is an implicit solution. To solve for y explicitly, multiply by 2:
              <br/>
              y² + 4y = x² + 2x
              <br/>
              y² + 4y - x² - 2x = 0 (implicit form)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Verify (implicit differentiation)</strong><br/>
              Differentiate y²/2 + 2y = x²/2 + x with respect to x:
              <br/>
              y(dy/dx) + 2(dy/dx) = x + 1
              <br/>
              (dy/dx)(y + 2) = x + 1
              <br/>
              dy/dx = (x+1)/(y+2) ✓
            </div>
          </div>
        `
      },
      {
        problem: 'Solve dy/dx = y²sin(x) and find the general solution.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Separate variables</strong><br/>
              dy/dx = y²sin(x)
              <br/>
              Divide by y² and multiply by dx:
              <br/>
              dy/y² = sin(x) dx
              <br/>
              or: y^(-2) dy = sin(x) dx
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Integrate both sides</strong><br/>
              ∫y^(-2) dy = ∫sin(x) dx
              <br/>
              -y^(-1) = -cos(x) + C
              <br/>
              -1/y = -cos(x) + C
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Solve for y</strong><br/>
              Multiply both sides by -1:
              <br/>
              1/y = cos(x) - C
              <br/>
              <strong>General solution: y = 1/(cos(x) - C)</strong>
              <br/>
              or equivalently: y = 1/(cos(x) + K) where K = -C
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Note the singular solution</strong><br/>
              There is also the singular solution y = 0 (which makes dy/dx = 0·sin(x) = 0, satisfying the DE).
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Verify</strong><br/>
              y = 1/(cos(x) - C)
              <br/>
              dy/dx = -1/(cos(x) - C)² · (-sin(x)) = sin(x)/(cos(x) - C)²
              <br/>
              y²sin(x) = [1/(cos(x) - C)]² · sin(x) = sin(x)/(cos(x) - C)² ✓
            </div>
          </div>
        `
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'Which of the following differential equations is separable?',
        choices: [
          'dy/dx = x + y',
          'dy/dx = xy + x',
          'dy/dx = sin(x + y)',
          'dy/dx = x/(y + 1)'
        ],
        correct: 3,
        explanation: 'dy/dx = x/(y+1) can be separated as (y+1)dy = x dx. Option (A) and (C) have x and y mixed in ways that prevent separation. Option (B) can be factored as dy/dx = x(y+1) but separates only partially. Answer: (D)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'Solve dy/dx = 3x² with y(0) = 2. The particular solution is y = _____.',
        answer: 'x³ + 2',
        explanation: 'Integrate: y = ∫3x² dx = x³ + C. Apply y(0) = 2: 2 = 0 + C, so C = 2. Particular solution: y = x³ + 2.'
      },
      {
        type: 'multiple-choice',
        question: 'Solve dy/dx = e^(-y). The general solution is:',
        choices: [
          'y = e^(-x) + C',
          'y = ln(x + C)',
          'y = -ln(C - x)',
          'e^y = x + C'
        ],
        correct: 2,
        explanation: 'Separate: e^y dy = dx. Integrate: e^y = x + C. Solve for y: y = ln(x + C). Answer: (C)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'For dy/dx = (2x)/(3y²), the implicit general solution is 3y³ = x² + C. Using y(1) = 2, we get C = _____, and the implicit particular solution is _____.',
        answer: '23, 3y³ = x² + 23',
        explanation: 'Separate: 3y² dy = 2x dx. Integrate: y³ = x²/3 + C or 3y³ = x² + C. At (1,2): 3(8) = 1 + C → 24 = 1 + C → C = 23. Particular: 3y³ = x² + 23.'
      },
      {
        type: 'fill-in-the-blank',
        question: 'Solve dy/dx = 4y. The general solution is y = _____.',
        answer: 'Ce^(4x)',
        explanation: 'Separate: dy/y = 4 dx. Integrate: ln|y| = 4x + C₁. Exponentiate: y = Ae^(4x) where A = ±e^(C₁).'
      }
    ]
  },

  {
    id: '7.3',
    title: 'Exponential Growth & Decay',
    difficulty: 'intermediate',
    estimate: '30 minutes',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>The Exponential Growth/Decay Model</h3>
          <p>The differential equation dy/dt = ky (where k is a constant) models many real-world phenomena. Its general solution is:</p>
          <p style="text-align: center; font-weight: bold;">y(t) = y₀e^(kt)</p>
          <p>where y₀ = y(0) is the initial amount.</p>
          <ul>
            <li><strong>If k > 0:</strong> Exponential growth (unlimited)</li>
            <li><strong>If k < 0:</strong> Exponential decay (approaches 0)</li>
          </ul>
        </div>

        <div class="formula-box">
          <h3>Key Formulas for Growth/Decay</h3>
          <p><strong>Doubling Time</strong> (time for quantity to double, k > 0):</p>
          <p style="text-align: center;">T_d = ln(2) / k ≈ 0.693 / k</p>
          <p><strong>Half-Life</strong> (time for quantity to halve, k < 0):</p>
          <p style="text-align: center;">T_{1/2} = ln(2) / |k| ≈ 0.693 / |k|</p>
          <p><strong>Finding k from doubling time or half-life:</strong></p>
          <ul>
            <li>If doubling time = T_d, then k = ln(2) / T_d</li>
            <li>If half-life = T_{1/2}, then k = -ln(2) / T_{1/2}</li>
          </ul>
        </div>

        <div class="concept-card">
          <h3>Application: Radioactive Decay</h3>
          <p><strong>Carbon-14 dating:</strong> ¹⁴C has half-life ≈ 5,730 years. If a sample contains fraction p of its original ¹⁴C, its age is:</p>
          <p style="text-align: center; font-weight: bold;">t = -T_{1/2} · ln(p) / ln(2) = -(5730 years) · ln(p) / 0.693</p>
          <p>or: t = T_{1/2} · ln(2) / ln(1/p)</p>
        </div>

        <div class="formula-box">
          <h3>Newton\'s Law of Cooling</h3>
          <p>The temperature of an object approaches the ambient temperature exponentially:</p>
          <p style="text-align: center; font-weight: bold;">dT/dt = k(T - T_ambient)</p>
          <p>Solution: T(t) = T_ambient + (T₀ - T_ambient)e^(kt)</p>
          <p>where T₀ = T(0) is initial temperature and k < 0 for cooling.</p>
          <ul>
            <li>As t → ∞, T(t) → T_ambient (temperature equilibrates with surroundings).</li>
            <li>The larger |k|, the faster the cooling.</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Pro Tip:</strong> Always identify y₀ (initial value), k (growth/decay constant), and T_ambient (for cooling) before solving. Set up the equation carefully!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'A bacterial culture doubles every 3 hours. If the culture starts with 500 bacteria, find the growth rate k and the population at t = 9 hours.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up the exponential model</strong><br/>
              y(t) = y₀e^(kt) with y₀ = 500
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Use the doubling time to find k</strong><br/>
              Doubling time T_d = 3 hours.
              <br/>
              Formula: T_d = ln(2) / k
              <br/>
              3 = ln(2) / k
              <br/>
              k = ln(2) / 3 ≈ 0.693 / 3 ≈ 0.231 per hour
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Write the population function</strong><br/>
              y(t) = 500e^(0.231t)
              <br/>
              Or, using exact k: y(t) = 500e^(ln(2)·t/3) = 500 · 2^(t/3)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Find population at t = 9 hours</strong><br/>
              y(9) = 500 · 2^(9/3) = 500 · 2³ = 500 · 8 = <strong>4,000 bacteria</strong>
              <br/>
              (Alternative: y(9) = 500e^(0.231·9) ≈ 500e^2.08 ≈ 500 · 8 = 4,000)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Verify with doubling</strong><br/>
              At t = 0: y = 500
              <br/>
              At t = 3: y = 500 · 2 = 1,000 ✓ (doubled)
              <br/>
              At t = 6: y = 1,000 · 2 = 2,000 ✓ (doubled)
              <br/>
              At t = 9: y = 2,000 · 2 = 4,000 ✓ (doubled)
            </div>
          </div>
        `
      },
      {
        problem: 'Carbon-14 has a half-life of 5,730 years. A fossil contains 30% of its original ¹⁴C. How old is the fossil?',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify the decay model</strong><br/>
              y(t) = y₀e^(kt) with k < 0
              <br/>
              At time t, remaining fraction: y(t)/y₀ = e^(kt) = 0.30
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find the decay constant k</strong><br/>
              Half-life = 5,730 years means:
              <br/>
              0.5 = e^(k·5730)
              <br/>
              ln(0.5) = k · 5730
              <br/>
              k = ln(0.5) / 5730 = -ln(2) / 5730 ≈ -0.0001209 per year
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Solve for age when 30% remains</strong><br/>
              0.30 = e^(kt)
              <br/>
              ln(0.30) = kt
              <br/>
              t = ln(0.30) / k = ln(0.30) / (-ln(2)/5730)
              <br/>
              t = ln(0.30) · (-5730) / (-ln(2))
              <br/>
              t = 5730 · ln(0.30) / ln(2)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Calculate numerically</strong><br/>
              ln(0.30) ≈ -1.204
              <br/>
              ln(2) ≈ 0.693
              <br/>
              t = 5730 · (-1.204) / 0.693
              <br/>
              t = -6896 / 0.693 ≈ <strong>9,950 years old</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Sanity check</strong><br/>
              One half-life (5,730 years) → 50% remains
              <br/>
              Two half-lives (11,460 years) → 25% remains
              <br/>
              9,950 years is between these, and 30% is between 50% and 25%. ✓
            </div>
          </div>
        `
      },
      {
        problem: 'A cup of coffee at 90°C is placed in a room where the ambient temperature is 20°C. After 5 minutes, the coffee has cooled to 75°C. Assuming Newton\'s law of cooling, what will be the temperature after 10 minutes? When will the coffee reach 40°C?',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up Newton\'s law of cooling</strong><br/>
              T(t) = T_ambient + (T₀ - T_ambient)e^(kt)
              <br/>
              T(t) = 20 + (90 - 20)e^(kt) = 20 + 70e^(kt)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find k using T(5) = 75</strong><br/>
              75 = 20 + 70e^(5k)
              <br/>
              55 = 70e^(5k)
              <br/>
              e^(5k) = 55/70 = 11/14
              <br/>
              5k = ln(11/14)
              <br/>
              k = (1/5)ln(11/14) ≈ (1/5)(-0.2231) ≈ -0.0446 per minute
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Find T(10)</strong><br/>
              T(10) = 20 + 70e^(10k)
              <br/>
              Note: e^(10k) = e^(2·5k) = (e^(5k))² = (11/14)²
              <br/>
              e^(10k) = 121/196
              <br/>
              T(10) = 20 + 70 · (121/196)
              <br/>
              T(10) = 20 + 70 · 121 / 196
              <br/>
              T(10) = 20 + 8470/196 ≈ 20 + 43.22 ≈ <strong>63.2°C</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Find when T(t) = 40°C</strong><br/>
              40 = 20 + 70e^(kt)
              <br/>
              20 = 70e^(kt)
              <br/>
              e^(kt) = 20/70 = 2/7
              <br/>
              kt = ln(2/7)
              <br/>
              t = ln(2/7) / k = ln(2/7) / [ln(11/14)/5]
              <br/>
              t = 5 · ln(2/7) / ln(11/14)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Calculate numerically</strong><br/>
              ln(2/7) ≈ -1.253
              <br/>
              ln(11/14) ≈ -0.2231
              <br/>
              t = 5 · (-1.253) / (-0.2231) = 5 · 5.618 ≈ <strong>28.1 minutes</strong>
            </div>
          </div>
        `
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'If a radioactive substance has a half-life of 10 years and starts with 100 grams, approximately how much remains after 30 years?',
        choices: [
          '50 grams',
          '25 grams',
          '12.5 grams',
          '6.25 grams'
        ],
        correct: 2,
        explanation: 'After 10 years (1 half-life): 50 g. After 20 years (2 half-lives): 25 g. After 30 years (3 half-lives): 12.5 g. Answer: (C)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'A population grows according to y = 500e^(0.1t). The doubling time is approximately _____ time units.',
        answer: '6.93 or ln(2)/0.1',
        explanation: 'Doubling time = ln(2)/k = ln(2)/0.1 ≈ 0.693/0.1 = 6.93.'
      },
      {
        type: 'multiple-choice',
        question: 'Which differential equation models exponential growth with rate constant k > 0?',
        choices: [
          'dy/dt = -ky',
          'dy/dt = ky',
          'dy/dt = kty',
          'dy/dx = ky'
        ],
        correct: 1,
        explanation: 'dy/dt = ky with k > 0 models exponential growth: y(t) = y₀e^(kt). Answer: (B)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'A sample of wood is found to have 60% of its original ¹⁴C. Using half-life = 5730 years, the wood is approximately _____ years old.',
        answer: '4223 or 4224',
        explanation: 'Remaining fraction: 0.60 = e^(kt). With k = -ln(2)/5730: t = 5730·ln(0.60)/ln(2) ≈ 5730·(-0.5108)/0.693 ≈ 4223 years.'
      },
      {
        type: 'fill-in-the-blank',
        question: 'A cake cooling in a 70°F room starts at 210°F. After 15 minutes, it\'s 150°F. Using Newton\'s law of cooling, the temperature after 30 minutes is approximately _____ °F.',
        answer: '109.5 or 110',
        explanation: 'T(t) = 70 + 140e^(kt). From T(15) = 150: 80 = 140e^(15k), so e^(15k) = 80/140 = 4/7. Then T(30) = 70 + 140(4/7)² = 70 + 140·16/49 ≈ 70 + 45.7 ≈ 109.5°F.'
      }
    ]
  },

  {
    id: '7.4',
    title: 'Euler\'s Method',
    isBCOnly: true,
    difficulty: 'advanced',
    estimate: '30 minutes',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>What is Euler\'s Method?</h3>
          <p><strong>Euler\'s method</strong> is a numerical technique for approximating solutions to differential equations of the form dy/dx = f(x,y) when we know an initial condition y(x₀) = y₀.</p>
          <p><strong>Key idea:</strong> Instead of solving the DE analytically, we compute a sequence of points that approximate the solution curve by repeatedly following the tangent line.</p>
        </div>

        <div class="formula-box">
          <h3>Euler\'s Method Algorithm</h3>
          <p>Given: dy/dx = f(x,y), initial condition (x₀, y₀), step size h</p>
          <p><strong>Iterative formula:</strong></p>
          <p style="text-align: center; font-weight: bold;">
            x_(n+1) = x_n + h<br/>
            y_(n+1) = y_n + h·f(x_n, y_n)
          </p>
          <p><strong>Interpretation:</strong> At point (x_n, y_n), the slope is f(x_n, y_n). We move horizontally by h and vertically by h·f(x_n, y_n) to get (x_(n+1), y_(n+1)).</p>
        </div>

        <div class="concept-card">
          <h3>Step Size and Accuracy</h3>
          <p><strong>Smaller h → better approximation</strong> (but more steps needed)</p>
          <p><strong>Larger h → faster computation</strong> (but less accurate)</p>
          <p><strong>Example:</strong> To approximate y(1) with y(0)=1 using h=0.5, we need 2 steps. Using h=0.1, we need 10 steps.</p>
        </div>

        <div class="formula-box">
          <h3>Concavity and Euler\'s Method Error</h3>
          <ul>
            <li><strong>When the solution curve is concave up:</strong> Euler\'s method underestimates (stays below the true curve).</li>
            <li><strong>When the solution curve is concave down:</strong> Euler\'s method overestimates (stays above the true curve).</li>
          </ul>
          <p><strong>Why?</strong> Euler\'s method uses straight line segments (tangent lines). A concave up curve bends upward faster than a tangent line suggests, so we fall behind. A concave down curve bends downward slower than we expect.</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Pro Tip:</strong> Always organize Euler\'s method in a table:
          <br/>
          n | x_n | y_n | f(x_n,y_n) | h·f(x_n,y_n) | y_(n+1)
          <br/>
          This reduces arithmetic errors and makes the solution easy to follow.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Use Euler\'s method to approximate y(1) for dy/dx = x + y with y(0) = 1, using step size h = 0.5.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up the problem</strong><br/>
              dy/dx = f(x,y) = x + y
              <br/>
              Initial: (x₀, y₀) = (0, 1)
              <br/>
              Step size: h = 0.5
              <br/>
              Goal: estimate y(1.0)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Euler\'s method table</strong><br/>
              <table style="border-collapse: collapse; margin: 10px 0;">
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">x_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">y_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">f(x_n,y_n) = x_n+y_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">h·f(x_n,y_n)</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">y_(n+1)</td>
                </tr>
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">0</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0+1=1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.5·1=0.5</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1+0.5=1.5</td>
                </tr>
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.5</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.5</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.5+1.5=2</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.5·2=1.0</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.5+1.0=2.5</td>
                </tr>
              </table>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Interpret results</strong><br/>
              After n=0 (step 1): (x,y) ≈ (0.5, 1.5)
              <br/>
              After n=1 (step 2): (x,y) ≈ (1.0, 2.5)
              <br/>
              <strong>Euler\'s approximation: y(1) ≈ 2.5</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Compare to exact solution (if available)</strong><br/>
              The exact solution to dy/dx = x+y with y(0)=1 is y = 2e^x - x - 1.
              <br/>
              Exact value: y(1) = 2e - 1 - 1 = 2e - 2 ≈ 2(2.718) - 2 ≈ 3.436
              <br/>
              Euler approximation: 2.5
              <br/>
              Error: |3.436 - 2.5| ≈ 0.936
              <br/>
              <strong>Note:</strong> This is a large error because h = 0.5 is too large for good accuracy. Using smaller h (e.g., h=0.1) would give a better approximation.
            </div>
          </div>
        `
      },
      {
        problem: 'Use Euler\'s method with h = 0.25 to approximate y(0.75) for dy/dx = y with y(0) = 1. Compare to the exact solution y = e^x.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up</strong><br/>
              dy/dx = f(x,y) = y
              <br/>
              Initial: (x₀, y₀) = (0, 1)
              <br/>
              Step size: h = 0.25
              <br/>
              We need 3 steps to reach x = 0.75
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Apply Euler\'s method</strong><br/>
              <table style="border-collapse: collapse; margin: 10px 0;">
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">x_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">y_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">f(x_n,y_n)=y_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">h·f(x_n,y_n)</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">y_(n+1)</td>
                </tr>
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">0</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.25</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.25</td>
                </tr>
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.25</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.25</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.25</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.3125</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.5625</td>
                </tr>
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">2</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.5</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.5625</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.5625</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.390625</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">1.953125</td>
                </tr>
              </table>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Extract approximation</strong><br/>
              After 3 steps: y(0.75) ≈ <strong>1.953</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Compare to exact solution</strong><br/>
              Exact: y(0.75) = e^0.75 ≈ 2.117
              <br/>
              Euler (h=0.25): 1.953
              <br/>
              Error: |2.117 - 1.953| ≈ 0.164
              <br/>
              Percent error: (0.164/2.117) × 100% ≈ 7.75%
              <br/>
              <strong>Note:</strong> The Euler method underestimates here because dy/dx = y has a concave-up solution curve (exponential), so Euler\'s straight-line segments underestimate.
            </div>
          </div>
        `
      },
      {
        problem: 'Use Euler\'s method with h = 0.1 to approximate y(0.2) for dy/dx = -2y with y(0) = 4.',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Set up</strong><br/>
              dy/dx = f(x,y) = -2y
              <br/>
              Initial: (x₀, y₀) = (0, 4)
              <br/>
              Step size: h = 0.1
              <br/>
              We need 2 steps to reach x = 0.2
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Apply Euler\'s method</strong><br/>
              <table style="border-collapse: collapse; margin: 10px 0;">
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">x_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">y_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">f(x_n,y_n)=-2y_n</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">h·f(x_n,y_n)</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">y_(n+1)</td>
                </tr>
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">0</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">4</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">-8</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">-0.8</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">3.2</td>
                </tr>
                <tr style="border: 1px solid #ccc;">
                  <td style="padding: 8px; border: 1px solid #ccc;">1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">0.1</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">3.2</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">-6.4</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">-0.64</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">2.56</td>
                </tr>
              </table>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Extract approximation</strong><br/>
              After 2 steps: y(0.2) ≈ <strong>2.56</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Compare to exact solution</strong><br/>
              The exact solution to dy/dx = -2y with y(0) = 4 is y(t) = 4e^(-2t).
              <br/>
              Exact: y(0.2) = 4e^(-0.4) ≈ 4(0.6703) ≈ 2.681
              <br/>
              Euler (h=0.1): 2.56
              <br/>
              Error: |2.681 - 2.56| ≈ 0.121
              <br/>
              <strong>Note:</strong> Euler\'s method overestimates here because the solution curve is concave up (decaying exponential), so straight-line segments overshoot.
            </div>
          </div>
        `
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'In Euler\'s method, the recurrence relation is y_(n+1) = y_n + h·f(x_n, y_n). What does h represent?',
        choices: [
          'The value of the solution at step n',
          'The step size (horizontal distance between points)',
          'The vertical change in the approximation',
          'The slope of the differential equation'
        ],
        correct: 1,
        explanation: 'h is the step size: the horizontal distance we move from x_n to x_(n+1) = x_n + h. Answer: (B)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'Use Euler\'s method with h = 0.5 for dy/dx = 2x, y(0) = 1, to approximate y(1). The approximation is y(1) ≈ _____.',
        answer: '1.5 or 3/2',
        explanation: 'Step 1: y(0.5) = 1 + 0.5·(2·0) = 1 + 0 = 1. Step 2: y(1) = 1 + 0.5·(2·0.5) = 1 + 0.5 = 1.5.'
      },
      {
        type: 'multiple-choice',
        question: 'When using Euler\'s method to approximate a solution to a differential equation, which is true?',
        choices: [
          'Smaller step size always gives the exact solution',
          'Larger step size gives more accurate results',
          'Smaller step size generally gives more accurate results but requires more steps',
          'Step size does not affect the accuracy of the approximation'
        ],
        correct: 2,
        explanation: 'Smaller h means shorter distances between computed points, which better approximates the smooth solution curve. However, more steps are required. Answer: (C)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'For dy/dx = y with y(0) = 2 and h = 0.5, after two steps of Euler\'s method, y(1) ≈ _____.',
        answer: '4.5',
        explanation: 'Step 1: slope = y = 2, so y(0.5) = 2 + 0.5(2) = 3. Step 2: slope = y = 3, so y(1) = 3 + 0.5(3) = 4.5.'
      }
    ]
  },

  {
    id: '7.5',
    title: 'Logistic Growth',
    isBCOnly: true,
    difficulty: 'advanced',
    estimate: '30 minutes',
    learn: `
      <div style="">
        <div class="concept-card">
          <h3>The Logistic Differential Equation</h3>
          <p>Real populations cannot grow without bound. The <strong>logistic model</strong> accounts for limited resources (carrying capacity):</p>
          <p style="text-align: center; font-weight: bold;">dP/dt = kP(1 - P/M)</p>
          <p>where:</p>
          <ul>
            <li><strong>P</strong> = population size</li>
            <li><strong>k</strong> = intrinsic growth rate (positive)</li>
            <li><strong>M</strong> = carrying capacity (maximum sustainable population)</li>
          </ul>
          <p><strong>Biological interpretation:</strong> When P is small, the term (1 - P/M) ≈ 1, so dP/dt ≈ kP (exponential growth). When P approaches M, the term (1 - P/M) ≈ 0, so dP/dt ≈ 0 (growth slows).</p>
        </div>

        <div class="formula-box">
          <h3>Solution to the Logistic Equation</h3>
          <p>The general solution to dP/dt = kP(1 - P/M) is:</p>
          <p style="text-align: center; font-weight: bold;">P(t) = M / (1 + Ae^(-kt))</p>
          <p>where A is determined by the initial condition P(0) = P₀:</p>
          <p style="text-align: center; font-weight: bold;">A = (M - P₀) / P₀</p>
          <p><strong>Long-term behavior:</strong> As t → ∞, e^(-kt) → 0, so P(t) → M. The population approaches the carrying capacity.</p>
        </div>

        <div class="concept-card">
          <h3>Finding Maximum Growth Rate</h3>
          <p>Growth is fastest when d²P/dt² = 0. This occurs at:</p>
          <p style="text-align: center; font-weight: bold;">P = M/2 (half the carrying capacity)</p>
          <p>At this inflection point, the maximum growth rate is:</p>
          <p style="text-align: center; font-weight: bold;">dP/dt|_(max) = k·(M/2)·(1 - 1/2) = kM/4</p>
        </div>

        <div class="formula-box">
          <h3>Logistic vs. Exponential Growth</h3>
          <ul>
            <li><strong>Exponential:</strong> dP/dt = kP → P(t) = P₀e^(kt) → unbounded growth</li>
            <li><strong>Logistic:</strong> dP/dt = kP(1 - P/M) → P(t) = M/(1 + Ae^(-kt)) → bounded by M</li>
            <li><strong>When P is much smaller than M:</strong> Logistic and exponential are nearly identical (early growth is approximately exponential).</li>
            <li><strong>When P approaches M:</strong> Logistic growth slows dramatically while exponential would explode.</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Pro Tip:</strong> When solving logistic DE problems, always identify M (carrying capacity) first, then use the initial condition to find A, then answer questions about growth rate or time to reach a certain population.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'A population follows the logistic DE: dP/dt = 0.2P(1 - P/100) with initial condition P(0) = 10. Find P(t), then estimate P(10).',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify parameters</strong><br/>
              dP/dt = 0.2P(1 - P/100)
              <br/>
              k = 0.2 (growth rate)
              <br/>
              M = 100 (carrying capacity)
              <br/>
              P₀ = 10 (initial population)
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find the constant A</strong><br/>
              A = (M - P₀) / P₀ = (100 - 10) / 10 = 90 / 10 = 9
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Write the solution</strong><br/>
              <strong>P(t) = 100 / (1 + 9e^(-0.2t))</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Verify initial condition</strong><br/>
              P(0) = 100 / (1 + 9e^0) = 100 / (1 + 9) = 100 / 10 = 10 ✓
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Calculate P(10)</strong><br/>
              e^(-0.2·10) = e^(-2) ≈ 0.1353
              <br/>
              9e^(-2) ≈ 9(0.1353) ≈ 1.218
              <br/>
              P(10) = 100 / (1 + 1.218) = 100 / 2.218 ≈ <strong>45.1</strong>
              <br/>
              The population at t=10 is approximately 45 individuals.
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 6: Interpret the behavior</strong><br/>
              At t=0: P=10 (far below carrying capacity, rapid growth)
              <br/>
              At t=10: P≈45 (still growing, but slower than early on)
              <br/>
              As t→∞: P→100 (approaches carrying capacity)
            </div>
          </div>
        `
      },
      {
        problem: 'For the logistic equation dP/dt = 0.2P(1 - P/100), at what population is the growth rate maximum? What is the maximum growth rate?',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Recall the maximum growth property</strong><br/>
              For logistic growth dP/dt = kP(1 - P/M), maximum growth occurs at P = M/2.
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Calculate P at maximum growth</strong><br/>
              M = 100
              <br/>
              P = M/2 = 100/2 = <strong>50</strong>
              <br/>
              Maximum growth occurs when the population is 50 individuals.
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Find the maximum growth rate</strong><br/>
              At P = 50:
              <br/>
              dP/dt = 0.2(50)(1 - 50/100)
              <br/>
              dP/dt = 0.2(50)(1 - 0.5)
              <br/>
              dP/dt = 0.2(50)(0.5)
              <br/>
              dP/dt = <strong>5 individuals per unit time</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Verify using the formula</strong><br/>
              Maximum growth rate = kM/4 = (0.2)(100)/4 = 20/4 = 5 ✓
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Graphical interpretation</strong><br/>
              The solution curve P(t) has an inflection point at P=50. Below P=50, the curve is concave up (growth accelerating). Above P=50, the curve is concave down (growth decelerating).
            </div>
          </div>
        `
      },
      {
        problem: 'A population of fish in a lake grows logistically with dP/dt = 0.3P(1 - P/5000), starting with P(0) = 1000. When does the population reach 4000?',
        solution: `
          <div style="margin:10px 0">
            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 1: Identify parameters</strong><br/>
              k = 0.3
              <br/>
              M = 5000
              <br/>
              P₀ = 1000
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 2: Find constant A</strong><br/>
              A = (M - P₀) / P₀ = (5000 - 1000) / 1000 = 4000 / 1000 = 4
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 3: Write the solution</strong><br/>
              P(t) = 5000 / (1 + 4e^(-0.3t))
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 4: Set P(t) = 4000 and solve for t</strong><br/>
              4000 = 5000 / (1 + 4e^(-0.3t))
              <br/>
              Multiply both sides by (1 + 4e^(-0.3t)):
              <br/>
              4000(1 + 4e^(-0.3t)) = 5000
              <br/>
              4000 + 16000e^(-0.3t) = 5000
              <br/>
              16000e^(-0.3t) = 1000
              <br/>
              e^(-0.3t) = 1000/16000 = 1/16
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 5: Solve for t</strong><br/>
              -0.3t = ln(1/16)
              <br/>
              -0.3t = -ln(16)
              <br/>
              t = ln(16) / 0.3
              <br/>
              ln(16) = ln(2⁴) = 4ln(2) ≈ 4(0.693) ≈ 2.773
              <br/>
              t = 2.773 / 0.3 ≈ <strong>9.24 time units</strong>
            </div>

            <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;font-size:0.93rem;line-height:1.7;color:var(--color-text-secondary)">
              <strong>Step 6: Verify</strong><br/>
              P(9.24) = 5000 / (1 + 4e^(-0.3·9.24))
              <br/>
              = 5000 / (1 + 4e^(-2.772))
              <br/>
              ≈ 5000 / (1 + 4(0.0625))
              <br/>
              ≈ 5000 / (1 + 0.25)
              <br/>
              ≈ 5000 / 1.25
              <br/>
              = 4000 ✓
            </div>
          </div>
        `
      }
    ],
    practice: [
      {
        type: 'multiple-choice',
        question: 'For the logistic equation dP/dt = kP(1 - P/M), what happens to the growth rate dP/dt as P approaches the carrying capacity M?',
        choices: [
          'It increases exponentially',
          'It remains constant',
          'It approaches zero',
          'It becomes negative'
        ],
        correct: 2,
        explanation: 'As P → M, the factor (1 - P/M) → 0, so dP/dt → 0. Growth slows. Answer: (C)'
      },
      {
        type: 'fill-in-the-blank',
        question: 'For dP/dt = 0.15P(1 - P/500) with P(0) = 50, the carrying capacity is _____ and the constant A in the solution P(t) = M/(1+Ae^(-kt)) is _____.',
        answer: '500, 9',
        explanation: 'M = 500. A = (500-50)/50 = 450/50 = 9.'
      },
      {
        type: 'fill-in-the-blank',
        question: 'The inflection point of a logistic solution curve (where growth is fastest) occurs at P = _____.',
        answer: 'M/2 or half the carrying capacity',
        explanation: 'Maximum growth occurs when d²P/dt² = 0, which happens when P = M/2.'
      },
      {
        type: 'multiple-choice',
        question: 'Which statement best compares logistic and exponential growth?',
        choices: [
          'Logistic growth always grows faster than exponential',
          'Exponential growth is faster early on, but logistic growth eventually exceeds it',
          'Exponential growth is unbounded while logistic growth approaches a carrying capacity',
          'They are identical for all positive time'
        ],
        correct: 2,
        explanation: 'Exponential: P = P₀e^(kt) (unbounded). Logistic: P = M/(1+Ae^(-kt)) (bounded by M). Answer: (C)'
      }
    ]
  }
];
