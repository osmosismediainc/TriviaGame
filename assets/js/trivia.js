/*
_____________________ Plan ______________________
On the landing page there will be a simple header and button.
Upon the submit event of the button, the quiz will start.
#timerDigits DIV will display a timer.
#gameArea div will contain 2 nested for loops.
Loop 1 for the length of the array of questions
    write the html for the questions to the page
        Loop 2 for the length of the radio buttons
            $write the html of the buttons to the page
At the end of the loop $write a submit button
The game will end upon the countdown = 0 or if user hits submit.
$write the results to the html page
Provide option to reset the game and start over.
3 variables to
1) Right 
2) Wrong 
3) Unanswered 
4) Hold the user selection
An object 
Question 1 array
Radio Buttons 2 Array
Right Answer
*/

// Doc Ready
$(document).ready(function () {
    // Variables for player
    let right = 0;
    let wrong = 0;
    let unanswered = 12;
    let answer = "";
    // Object for questions

    let quiz = {
        questions: [
            'The Great Wall of China is visible from the moon.',
            'Scotland voted to become an independent country during the referendum from September 2014.',
            'Dihydrogen Monoxide was banned due to health risks after being discovered in 1983 inside swimming pools and drinking water.',
            'Romanian belongs to the Romance language family, shared with French, Spanish, Portuguese and Italian.',
            'The Lego Group was founded in 1932.',
            'When you cry in space, your tears stick to your face.',
            'On average, at least 1 person is killed by a drunk driver in the United States every hour.',
            'You can legally drink alcohol while driving in Mississippi.',
            'The Sun rises from the North',
            'It is automatically considered entrapment in the United States if the police sell you illegal substances without revealing themselves.',
            'The color orange is named after the fruit.',
            'French is an official language in Canada.',
        ],
        choices: ['False', 'True'
        ],
        answers: ['False',
            'True',
            'False',
            'True',
            'True',
            'True',
            'True',
            'True',
            'False',
            'False',
            'True'

        ],
    }

    // Display Questions & Answers
    // Loop de dupe
    for (var i = 0; i < quiz.length; i++) {
        console.log(quiz[i]);
        // 
        // $(askQuestion).text(quiz.question[i]);

        // 
    }


});
