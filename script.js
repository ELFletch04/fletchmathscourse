function revealMethod() {
    const methodDiv = document.getElementById('method');
    methodDiv.innerHTML = 'Here is the detailed method: \\( \\frac{3}{2 + \\sqrt{3}} \\times \\frac{2 - \\sqrt{3}}{2 - \\sqrt{3}} = \\frac{3(2 - \\sqrt{3})}{(2 + \\sqrt{3})(2 - \\sqrt{3})} = \\frac{3(2 - \\sqrt{3})}{4 - 3} = 3(2 - \\sqrt{3}) = 6 - 3\\sqrt{3} = 3(2-\\sqrt{3}) \\)';
    // Show the method div
    methodDiv.style.display = 'block';

     // Call MathJax to typeset the new content
     MathJax.Hub.Queue(["Typeset", MathJax.Hub, methodDiv]);
}

function checkAnswer(questionNumber, option) {
    // Get the feedback element for the specific question
    var feedback = document.getElementById('feedback' + questionNumber);
    
    // Determine the correct option and feedback message based on the question number
    var correctOption;
    var feedbackMessage;
    var answerBoxes = document.querySelectorAll(`.question-box[data-question="${questionNumber}"] .answer-box`);

    // Remove previous feedback and styles
    answerBoxes.forEach(box => {
        box.classList.remove('correct', 'incorrect');
    });

    // Determine correct option and feedback message based on the question number
    switch (questionNumber) {
        case 1:
            correctOption = 'A';
            feedbackMessage = 'Correct! This is because 16 is a square number.';
            break;
        case 2:
            correctOption = 'D';
            feedbackMessage = 'Correct!';
            break;
        case 3:
            correctOption = 'B';
            feedbackMessage = 'Correct!';
            break;
        case 4:
            correctOption = 'A'; 
            feedbackMessage = 'Correct!';
            break;
        case 5:
            correctOption = 'C'; 
            feedbackMessage = 'Correct!';
            break;
        case 6:
            correctOption = 'A'; 
            feedbackMessage = 'Correct!';
            break;
        default:
            correctOption = '';
            feedbackMessage = 'Incorrect. Try again.';
            break;
    }

    // Find the selected answer box
    var selectedBox = Array.from(answerBoxes).find(box => box.textContent.trim().startsWith(option));
    
    // Provide feedback based on the user’s answer
    if (option === correctOption) {
        feedback.textContent = feedbackMessage;
        feedback.className = 'feedback correct';
        if (selectedBox) {
            selectedBox.classList.add('correct');
        }
    } else {
        if (questionNumber === 4) {
            feedback.textContent = 'Incorrect. Remember to simplify the first term before adding it.';
        } else {
            feedback.textContent = 'Incorrect. Try again.';
        }
        feedback.className = 'feedback incorrect';
        if (selectedBox) {
            selectedBox.classList.add('incorrect');
        }
    }
}