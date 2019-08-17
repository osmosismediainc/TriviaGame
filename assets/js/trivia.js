// Doc Ready
$(document).ready(function () {
    // Hide The Quiz Area
    $('#quizArea').hide();
    $('#results').hide();
    $('#restart').click(function() {
        location.reload();
    });

    // Variables for player
    let right = 0;
    let wrong = 0;
    let unanswered = 12;
    let answer = "";
    
/*
    // Arays for questions (changed to hard-coded questions because I didnt figure out the )
    let questions = ['The Great Wall of China is visible from the moon.',
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
        'French is an official language in Canada.'
    ];
    */
    let answers = ["False",
        'False',
        'True',
        'True',
        'True',
        'True'
    ];
// Function to collect scores.
/*$( "#answer1" ).prop( "checked", true ); {
}

    alert($(this).val());
});

*/


    





// Display The Scores In the Hidden score Div
$("#unanswered").text(unanswered);
$("#right").text(right);
$("#wrong").text(wrong);

// Function to show the quiz div
    function displayQuestions() {
        $('#quizArea').show();
    }
    // 
    //  Start on click.
    $("#start").on("click", function () {
        // Hide the start button
        $("#start").hide();
        // Show The Quiz Area
        displayQuestions();
        var count = 60;
        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
        function timer() {
            count = count - 1;
            if (count < 0) {
                clearInterval(counter);
                //counter ended, do something here // Show the total hide the gameDiv
                $('#quizArea').hide();
                $('#results').show();
                $('#timerRow').hide();
                $('#instructions').hide();
                $('#start').hide();
                return;
            }
            $("#timerDigits").text(count);
        }
    });
});
