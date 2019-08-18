// Doc Ready
$(document).ready(function () {
    // Hide The Quiz Area
    function hideQuiz() {}
    $('#quizArea').hide();
    $('#results').hide();
    $('#restart').click(function () {
        location.reload();
    });

    // Variables for player
    let right = 0;
    let wrong = 0;
    let unanswered = 6;

    // Function to collect scores.

    /*$( "#answer1" ).prop( "checked", true ); {
        alert($(this).val());
    });
        $('#question1').on("click",function(){
            console.log($(this).val());
        });
    
    */
    function updateScore() {
        // Display The Scores In the Hidden score Div
        $("#unanswered").text(unanswered);
        $("#right").text(right);
        $("#wrong").text(wrong);
        $('#quizArea').hide();
        $('#results').show();
        $('#timerRow').hide();
        $('#instructions').hide();
        $('#start').hide();
        return;
    }
    $("#scoreIt").click(function () {
        updateScore()
    })

    // Answer Logic (lol)
    // There has to be an easier way to do this, but I dont know what it is
    $('input:radio[name=answer1]').click(function () {
        var ans1 = $(this).val();
        console.log(ans1);
        if (ans1 === "False") {
            right++;
            unanswered--;
            console.log(right);
            $('#question1div').fadeOut();
        } else {
            wrong++;
            unanswered--;
            $('#question1div').fadeOut();
        }
    });
    $('input:radio[name=answer2]').click(function () {
        var ans2 = $(this).val();
        if (ans2 === "False") {
            right++;
            unanswered--;
            $('#question2div').fadeOut();
        } else {
            wrong++;
            unanswered--;
            $('#question2div').fadeOut();
        }
    });
    $('input:radio[name=answer3]').click(function () {
        var ans3 = $(this).val();
        if (ans3 === "True") {
            right++;
            unanswered--;
            $('#question3div').fadeOut();
        } else {
            wrong++;
            unanswered--;
            $('#question3div').fadeOut();
        }
    });
    $('input:radio[name=answer4]').click(function () {
        var ans4 = $(this).val();
        if (ans4 === "True") {
            right++;
            unanswered--;
            $('#question4div').fadeOut();
        } else {
            wrong++;
            unanswered--;
            $('#question4div').fadeOut();
        }
    });
    $('input:radio[name=answer5]').click(function () {
        var ans5 = $(this).val();
        if (ans5 === "True") {
            right++;
            unanswered--;
            $('#question5div').fadeOut();
        } else {
            wrong++;
            unanswered--;
            $('#question5div').fadeOut();
        }
    });
    $('input:radio[name=answer6]').click(function () {
        var ans6 = $(this).val();
        if (ans6 === "True") {
            right++;
            unanswered--;
            $('#question6div').fadeOut();
        } else {
            wrong++;
            unanswered--;
            $('#question6div').fadeOut();
        }
    });




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
                updateScore()
            }
            $("#timerDigits").text(count);
        }
    });
});
