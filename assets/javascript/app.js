// Global variables
//  var questionList = 
//  var correct
//  var wrong
//  var timer
//  var intervalid
// Functions
// Main process

var score = 0;
var currentQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var timer = 20;
var questionsList = [
    {
        title: "What is the King of fruit?",
        options: ["pineapple", "mango", "dragon fruit", "durian"],
        answer: 3,
        image: "<img class='center-block img-right src='../images/durian.jpg'>",
    },
    {
        title: "Is fortune cookie invented?",
        options: ["Hong Kong", "Canada", "USA", "Beijing"],
        answer: 2,
        image: "<img class='center-block img-right src='../images/fortunecookie.jpg'>",
    },
    {
        title: "What is an Aussie barbie?",
        options: ["doll", "barbeque", "pub", "shrimp"],
        answer: 1,
        image: "<img class='center-block img-right src='../images/aussiebbq.jpg'>",
    },
    {
        title: "which chef has the most Michelin stars?",
        options: ["Gordon Ramsey", "Anne-Sophie Pic", "Joel Robuichon", "Alain Ducasse"],
        answer: 2,
        image: "<img class='center-block img-right src='../images/joel_robuchon.png'>",
    }
];

$(document).ready(function() {

    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.wrapper').show();
        showQuestion();
    });

    




    function showQuestions() {
        var question = questionsList[currentQuestion];
        $('.Q&A h3').text(question.title);
        $('.Q&A p').html('');
        for(var i = 0; i < question.options.length; i++) {
            $('.Q&A');
        }
    };

    

    funtion resetState() {


    }

});












)