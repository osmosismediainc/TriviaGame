// Doc Ready
$(document).ready(function(){
    // Timer Value
//setTimeout(timeUp, 1000 * 15);

// Variables for game scoring


// question & answer array

var quiz = [
    {
        question: "The Great Wall of China is visible from the moon.",
        choices: ["True", "False",],
        correctAnswer: "False",
    },
    {
        question: "Scotland voted to become an independent country during the referendum from September 2014.",
        choices: ["True", "False",],
        correctAnswer: "True",
    },
    {
        question: "Dihydrogen Monoxide was banned due to health risks after being discovered in 1983 inside swimming pools and drinking water.",
        choices: ["True", "False",],
        correctAnswer: "False",
    },
    {
        question: "Romanian belongs to the Romance language family, shared with French, Spanish, Portuguese and Italian.",
        choices: ["True", "False",],
        correctAnswer: "True",
    },
    {
        question: "The Lego Group was founded in 1932.",
        choices: ["True", "False",],
        correctAnswer: "True",
    },
    {
        question: "When you cry in space, your tears stick to your face.",
        choices: ["True", "False",],
        correctAnswer: "True",
    },
    {
        question: "On average, at least 1 person is killed by a drunk driver in the United States every hour.",
        choices: ["True", "False",],
        correctAnswer: "True",
    },
    {
        question: "You can legally drink alcohol while driving in Mississippi.",
        choices: ["True", "False",],
        correctAnswer: "True",
    },
    {
        question: "The Sun rises from the North",
        choices: ["True", "False",],
        correctAnswer: "False",
    },
    {
        question: "It is automatically considered entrapment in the United States if the police sell you illegal substances without revealing themselves.",
        choices: ["True", "False",],
        correctAnswer: "False",
    },
    {
        question: "The color orange is named after the fruit.",
        choices: ["True", "False",],
        correctAnswer: "True",
    },
    {
        question: "French is an official language in Canada.",
        choices: ["True", "False",],
        correctAnswer: "True",
    }];


// This line of jQuery selects the div with the matching id (#questions)
var questionsDiv = $("#questionsDiv");
// Loop de dupe
for (var i = 0; i < quiz.length; i++) {
    // It then creates a new div for each question. Note we create divs and add the content in the same line.
    let questionsDiv = $('<h2 class="col-4 text-center">' + quiz[i][0] + '</h2>');
    questionDiv = quiz[i][0];
    console.log(quiz[i][0]);
};
//Timer


});
