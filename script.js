

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
             } 
                else {
            feedback.textContent = 'Incorrect. Try again.';
             }


        feedback.className = 'feedback incorrect';
        if (selectedBox) {
            selectedBox.classList.add('incorrect');
        }
    }
}


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


let revealCallCount = 0;
function revealMethod(id) {
    // Get the HTML element by its ID
    const methodDiv = document.getElementById(id);
    var revealButton = document.getElementById('reveal-method-btn')
    revealCallCount++;

    // Set the inner HTML of the element to the LaTeX method string
switch(id){
        case 'surdsmethod':
        methodDiv.innerHTML = 'Here is the detailed method: \\( \\frac{3}{2 + \\sqrt{3}} \\times \\frac{2 - \\sqrt{3}}{2 - \\sqrt{3}} = \\frac{3(2 - \\sqrt{3})}{(2 + \\sqrt{3})(2 - \\sqrt{3})} = \\frac{3(2 - \\sqrt{3})}{4 - 3} = 3(2 - \\sqrt{3}) = 6 - 3\\sqrt{3} = 3(2-\\sqrt{3}) \\)';
        break;
}

    revealButton.innerText = 'Hide Answer'
    


    // Display the element by setting its display style to 'block'
    methodDiv.style.display = 'block';

    // Call MathJax to typeset the new content
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, methodDiv]);

    

    if (revealCallCount % 2===1) {
        // Perform action for the second call
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, methodDiv]);
        methodDiv.innerHTML = 'Here is the detailed method: \\( \\frac{3}{2 + \\sqrt{3}} \\times \\frac{2 - \\sqrt{3}}{2 - \\sqrt{3}} = \\frac{3(2 - \\sqrt{3})}{(2 + \\sqrt{3})(2 - \\sqrt{3})} = \\frac{3(2 - \\sqrt{3})}{4 - 3} = 3(2 - \\sqrt{3}) = 6 - 3\\sqrt{3} = 3(2-\\sqrt{3}) \\)';

    } else {
        methodDiv.innerHTML = '';
        revealButton.innerText = 'Reveal Answer'
        
    }

}

    


// script.js




