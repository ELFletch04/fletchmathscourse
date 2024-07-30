// Define questions, options, and correct answers
const quizData = {
    questions: [
        {
            question: 'Simplify \\( \\sqrt{18} \\):',
            options: ['2√2', '3√2', '6√2', '9√2'],
            answer: '3root2',
            feedback: 'The correct answer is , \\(3\\sqrt{2}\\) as \\( \\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2} \\).'
        },
        {
            question: 'Evaluate and simplify the expression \(\sqrt{2}\times\sqrt{20}\)',
            options: [],
            answer: '2root10',
            feedback: 'The correct answer is \\(2\\sqrt{10}\\), as \\( 2^{3} \\times 2^{4} = 2^{(3+4)} = 2^{7} \\).'
        },
        // Add more questions here
    ]
};

// Function to submit the quiz and show results
function submitQuiz() {
  
    const form = document.getElementById('quiz-form');
    const result = document.getElementById('result');
    const feedback = document.getElementById('feedback');
    let score = 0;

    quizData.questions.forEach((question, index) => {
        const selectedAnswer = form.querySelector(`input[name="q${index + 1}"]:checked`);
        const answer = question.answer;

        if (selectedAnswer && selectedAnswer.value === answer) {
            score++;
        }
    });

    const totalQuestions = quizData.questions.length;
    const percentage = (score / totalQuestions) * 100;
    result.innerHTML = `<p>You scored ${score} out of ${totalQuestions} (${percentage.toFixed(2)}%).</p>`;
    if(percentage>40){result.style.color='green';}
    else{result.style.color='red';
    }
    
    feedback.innerHTML = quizData.questions.map((question, index) => `
        <h3>Question ${index + 1}</h3>
        <p>${question.feedback}</p>
    `).join('');
    feedback.style.display = 'block';

    // Render MathJax content
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, result]);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, feedback]);
}