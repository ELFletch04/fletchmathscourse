// Function to toggle the visibility of the solution box
function toggleSolution(questionNumber) {
    var solutionBox = document.getElementById('solution' + questionNumber);
    var toggleButton = document.querySelector(`.question-box[data-question="${questionNumber}"] .toggle-solution`);
    
    if (solutionBox.style.display === 'none' || solutionBox.style.display === '') {
        solutionBox.style.display = 'block';
        toggleButton.innerText = 'Hide Solution';
    } else {
        solutionBox.style.display = 'none';
        toggleButton.innerText = 'Show Solution';
    }
}

// Function to check the answer and provide feedback
function checkAnswer(questionNumber, option) {
    // Get the feedback and solution elements for the specific question
    var feedback = document.getElementById('feedback' + questionNumber);
    var solutionBox = document.getElementById('solution' + questionNumber);
    var toggleButton = document.querySelector(`.question-box[data-question="${questionNumber}"] .toggle-solution`);
    
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
        case 7:
            correctOption = 'C'; 
            feedbackMessage = 'Correct! This is because \\(5^2-4(1)(6)=1\\), and \\(1>0\\).';
            break;
        case 8:
            correctOption = 'A'; 
            feedbackMessage = 'Correct! This is done by factorising the quadratic equation into \\((2x+1)(x+3)\\), and setting each bracket equal to \\(0\\), to solve for \\(x\\).';
            break;
        case 9:
            correctOption = 'D'; 
            feedbackMessage = 'Correct!';
            break;
        case 10:
            correctOption = 'A'; 
            feedbackMessage = 'Correct!';
            break;
        case 11:
            correctOption = 'B'; 
            feedbackMessage = 'Correct!';
            break;
        case 12:
            correctOption = 'C'; 
            feedbackMessage = 'Correct!';
            break;
        case 13:
                correctOption = 'D'; 
                feedbackMessage = 'Correct!';
                break;
        case 14:
            correctOption = 'D'; 
            feedbackMessage = 'Correct!';
            break;
        case 15:
            correctOption = 'C'; 
            feedbackMessage = 'Correct!';
            break;
        case 16:
                correctOption = 'A'; 
                feedbackMessage = 'Correct!';
                break;
        case 17:
            correctOption = 'B'; 
            feedbackMessage = 'Correct!';
            break;
        case 18:
            correctOption = 'A'; 
            feedbackMessage = 'Correct!';
            break;
        case 19:
                correctOption = 'B'; 
                feedbackMessage = 'Correct!';
                break;
        case 20:
                correctOption = 'D'; 
                feedbackMessage = 'Correct!';
                break;
        case 21:
                correctOption = 'A'; 
                feedbackMessage = 'Correct!';
                break;
        case 22:
                correctOption = 'A'; 
                feedbackMessage = 'Correct!';
                break;
        case 23:
                correctOption = 'C'; 
                feedbackMessage = 'Correct!';
                break;
        case 24:
                correctOption = 'B'; 
                feedbackMessage = 'Correct!';
                break;
        case 25:
                correctOption = 'A'; 
                feedbackMessage = 'Correct!';
                break;
        case 26:
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
    
    // Get the audio element for the ding sound
    var dingSound = document.getElementById('ding-sound');

    // Provide feedback based on the user’s answer
    if (option === correctOption) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = feedbackMessage;
        if (selectedBox) {
            selectedBox.classList.add('correct');
        }
        // Show the solution box and update button text
        if (solutionBox) {
            solutionBox.style.display = 'block';
        }
        if (toggleButton) {
            toggleButton.innerText = 'Hide Solution';
        }
        // Play the ding sound if the audio element exists
        if (dingSound) {
            dingSound.play();
        }
        // Ensure MathJax renders the contents
        if (typeof MathJax !== 'undefined') {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, feedback]);
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, solutionBox]);
        }
    } else {
        feedback.innerHTML = questionNumber === 4
            ? 'Incorrect. Remember to simplify the first term before adding it.'
            : 'Incorrect. Try again.';
        feedback.className = 'feedback incorrect';
        if (selectedBox) {
            selectedBox.classList.add('incorrect');
        }
        // Hide the solution box and update button text
        if (solutionBox) {
            solutionBox.style.display = 'none';
        }
        if (toggleButton) {
            toggleButton.innerText = 'Show Solution';
        }
    }
}

// Function to handle smooth scrolling
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easing = easeOutQuad(percentage); // Using a custom easing function
        window.scrollTo(0, startPosition + distance * easing);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    // Easing function: ease out quad
    function easeOutQuad(t) {
        return t * (2 - t);
    }
}

// Counter for reveal method button clicks
let revealCallCount = 0;

// Function to reveal method details
function revealMethod(id) {
    // Get the HTML element by its ID
    const methodDiv = document.getElementById(id);
    var revealButton = document.getElementById('reveal-method-btn');
    revealCallCount++;

    // Set the inner HTML of the element to the LaTeX method string
    if (revealCallCount % 2 === 1) {
        switch(id) {
            case 'surdsmethod':
                methodDiv.innerHTML = 'Here is the detailed method: \\( \\frac{3}{2 + \\sqrt{3}} \\times \\frac{2 - \\sqrt{3}}{2 - \\sqrt{3}} = \\frac{3(2 - \\sqrt{3})}{(2 + \\sqrt{3})(2 - \\sqrt{3})} = \\frac{3(2 - \\sqrt{3})}{4 - 3} = 3(2 - \\sqrt{3}) = 6 - 3\\sqrt{3} = 3(2-\\sqrt{3}) \\)';
                break;
        }
        revealButton.innerText = 'Hide Answer';
        methodDiv.style.display = 'block';

        // Ensure MathJax renders the new content
        if (typeof MathJax !== 'undefined') {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, methodDiv]);
        }
    } else {
        methodDiv.innerHTML = '';
        revealButton.innerText = 'Reveal Answer';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Get all buttons with the class 'toggle-steps-btn'
    const buttons = document.querySelectorAll('.toggle-steps-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target element ID from the button's data attribute
            const targetId = button.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);

            // Toggle the visibility of the target steps div
            if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
                targetDiv.style.display = 'block';
                button.textContent = 'Hide Steps';
            } else {
                targetDiv.style.display = 'none';
                button.textContent = 'Show Steps';
            }
        });
    });
});
