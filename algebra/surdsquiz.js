function checkAnswers() {
    // Define correct answers
    const answers = {
        q1: "3root2",
        q2: "2root10",
        q3: "3root5",
        q4: "2minusroot3",
        q5: "3plus6root5",
        q6: "3",
        q7: "16",
        q8: "1over2^3",
        q9: "16x^6y^8",
        q10: "2+2sqrt(x)" // Updated correct answer
    };

    // Define feedback messages with MathJax formatting
    const feedbackMessages = {
        q1: "To simplify \\(\\sqrt{18}\\), break it down as \\(\\sqrt{9 \\times 2}\\). \\(\\sqrt{9}\\) is \\(3\\), so the result is \\(3\\sqrt{2}\\).",
        q2: "To evaluate \\(\\sqrt{2} \\times \\sqrt{20}\\), use the property \\(\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}\\). Therefore, \\(\\sqrt{2 \\times 20} = \\sqrt{40}\\), which simplifies to \\(2\\sqrt{10}\\).",
        q3: "To rationalize \\(\\frac{3}{\\sqrt{5}}\\), multiply the numerator and the denominator by \\(\\sqrt{5}\\): \\(\\frac{3 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{3\\sqrt{5}}{5}\\).",
        q4: "To rationalize \\(\\frac{2}{1 + \\sqrt{3}}\\), multiply the numerator and denominator by the conjugate \\(1 - \\sqrt{3}\\): \\(\\frac{2(1 - \\sqrt{3})}{(1 + \\sqrt{3})(1 - \\sqrt{3})} = \\frac{2 - 2\\sqrt{3}}{1 - 3} = \\frac{2 - 2\\sqrt{3}}{-2} = 1 - \\sqrt{3}\\).",
        q5: "To rationalize \\(\\frac{3}{2 + \\sqrt{5}}\\), multiply the numerator and denominator by the conjugate \\(2 - \\sqrt{5}\\): \\(\\frac{3(2 - \\sqrt{5})}{(2 + \\sqrt{5})(2 - \\sqrt{5})} = \\frac{6 - 3\\sqrt{5}}{4 - 5} = \\frac{6 - 3\\sqrt{5}}{-1} = -6 + 3\\sqrt{5}\\).",
        q6: "To simplify \\((3^2 \\times 3^3) \\div 3^4\\), use the property \\(\\frac{a^m \\times a^n}{a^p} = a^{m+n-p}\\). Therefore, \\((3^2 \\times 3^3) \\div 3^4 = 3^{2+3-4} = 3^1 = 3\\).",
        q7: "To simplify \\(\\frac{4^5}{4^3}\\), use the property \\(\\frac{a^m}{a^n} = a^{m-n}\\). Therefore, \\(\\frac{4^5}{4^3} = 4^{5-3} = 4^2 = 16\\).",
        q8: "To simplify \\(2^{-3}\\), use the property \\(a^{-n} = \\frac{1}{a^n}\\). Therefore, \\(2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}\\).",
        q9: "To simplify \\((4x^3y^4)^2\\), use the property \\((a \\times b)^n = a^n \\times b^n\\). Therefore, \\((4x^3y^4)^2 = 4^2 \\times (x^3)^2 \\times (y^4)^2 = 16x^6y^8\\).",
        q10: "To simplify \\(\\frac{6 + 4x - 2\\sqrt{x}}{2 - \\sqrt{x}}\\), factor the numerator: \\(6 + 4x - 2\\sqrt{x} = (2 - \\sqrt{x})(3 + 2\\sqrt{x})\\). Therefore, \\(\\frac{6 + 4x - 2\\sqrt{x}}{2 - \\sqrt{x}} = 3 + 2\\sqrt{x}\\)."
    };

    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        const feedback = document.querySelector(`.q${i}-feedback`);

        if (question) {
            if (question.value === answers[`q${i}`]) {
                feedback.textContent = "Correct!";
                feedback.style.color = "green";
            } else {
                feedback.innerHTML = `Incorrect. ${feedbackMessages[`q${i}`]}`;
                feedback.style.color = "red";
            }
        } else {
            feedback.textContent = "Please select an answer.";
            feedback.style.color = "red";
        }
    }

    // Render MathJax to display mathematical expressions correctly
    MathJax.typeset();
}
