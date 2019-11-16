// Global variables
//  var questionList = 
//  var correct
//  var wrong
//  var timer
//  var intervalid
// Functions
// Main process

$(document).ready(function() {

    var questionList = [
        "What is the King of fruit?",
        "Is fortune cookie invented?",
        "What is an Aussie barbie?",
        "which chef has the most Michelin stars?"
    ];
    var optionList = [
        ["pineapple", "mango", "dragon fruit", "durian"],
        ["Hong Kong", "Canada", "USA", "Beijing"],
        ["doll", "barbeque", "pub", "shrimp"],
        ["Gordon Ramsey", "Anne-Sophie Pic", "Joel Robuichon", "Alain Ducasse"]
    ]
    var answerList = [
        "durian",
        "USA",
        "barbeque",
        "Joel Robuichon",        
    ]; 
    var imageList = [
        "<img class='center-block img-right src='../images/durian.jpg'>", 
        "<img class='center-block img-right src='../images/fortunecookie.jpg'>", 
        "<img class='center-block img-right src='../images/aussiebbq.jpg'>",
        "<img class='center-block img-right src='../images/joel_robuchon.png'>",
    ];
    var correctAnswer   = 0;
    var wrongAnswer     = 0;
    var noAnswer        = 0;
    var remainingTime   = 20;


    function introScreen() {
        initiateScreen = "<p class='text center main-button-container'><a class='btn btn-lg btn-block start-button' href='assets/images/startbutton.jpg'>START QUIZ</a></p>";
        $(".questions").html(initiateScreen);
        //console.log(initiateScreen);
    }
    
    introScreen();

    $("form").on("click", ".start-button", function(event) {
        event.preventDefault();
        $('.start-pg').empty()
        createHTML();
    });

    function createHTML() {
        gamePage = 
    };


}












)