import './Linear.css'
export default function Linear() {
    return (
        <div>
            <h2>Linear Optimizer</h2>
        </div>
    )
}
/*
A linear optimizer application, also known as linear programming, is used to compute the best solution to a problem modeled as a set of linear relationships³. Here are the expected inputs and outputs:

**Inputs:**
1. **Objective Function**: This is a linear function that needs to be maximized or minimized. For example, in a business context, you might want to maximize profit or minimize cost.
2. **Constraints**: These are the restrictions or limitations expressed as linear equations or inequalities. They represent the conditions that must be satisfied in the problem.
3. **Decision Variables**: These are the variables that decision-makers have control over. They represent the different choices that can be made.

**Outputs:**
1. **Optimal Solution**: This is the best possible outcome that satisfies all constraints and optimizes the objective function.
2. **Feasibility Status**: The optimizer will also indicate whether a feasible solution exists, i.e., a solution that satisfies all constraints.
3. **Optimal Values of Decision Variables**: The optimizer provides the values of decision variables that lead to the optimal solution.

Linear optimization can be applied to numerous fields, including business, economics, engineering, and more. It is useful in modeling diverse types of problems in planning, routing, scheduling, assignment, and design.


(1) Linear Optimization | OR-Tools | Google for Developers. https://developers.google.com/optimization/lp.
(2) 8.2: Linear Optimization - Engineering LibreTexts. https://eng.libretexts.org/Bookshelves/Industrial_and_Systems_Engineering/Chemical_Process_Dynamics_and_Controls_%28Woolf%29/08%3A_Optimization/8.02%3A_Linear_Optimization.
(3) Linear Algebra, Numerical Optimization, and Its Applications ... - Springer. https://link.springer.com/content/pdf/10.1007/978-981-10-6808-9_1.pdf.
(4) en.wikipedia.org. https://en.wikipedia.org/wiki/Linear_programming.
*/