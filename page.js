var player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");
var questionTurn = player1Name;
var answerTurn = player2Name;

document.getElementById("player1Name").innerHTML = player1Name+":";
document.getElementById("player2Name").innerHTML = player2Name+":";

var player1Score = 0;
var player2Score = 0;

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn: "+player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn: "+player2Name;

function send() {
    var word = document.getElementById("word").value;
    lowerCaseWord = word.toLowerCase();
    console.log(lowerCaseWord);

    var character1 = lowerCaseWord.charAt(1);
    var lengthDividedBy2 = Math.floor(lowerCaseWord.length/2);
    var character2 = lowerCaseWord.charAt(lengthDividedBy2);
    var character3 = lowerCaseWord.charAt(lowerCaseWord.length-1);
    var remove1 = lowerCaseWord.replace(character1, "_");
    var remove2 = remove1.replace(character2, "_");
    var remove3 = remove2.replace(character3, "_");
    console.log(remove3)
    var question = "<h4 id='questionWord'>Word: "+remove3+"</h4>";
    var input = "<br><br><input id='answer' type='text'>";
    var checkButton = "<br><br><button type='button' class='btn btn-info' onclick='check()'>Check Answer</button>";
    var questions = question+input+checkButton;
    document.getElementById("output").innerHTML = questions;
    document.getElementById("word").value = "";
}

function check() {
    var answerInput = document.getElementById("answer").value;
    lowerCaseAnswer = answerInput.toLowerCase();
    console.log("Answer: "+lowerCaseAnswer);
    
    if(lowerCaseAnswer == lowerCaseWord) {
        if(answerTurn == player1Name) {
            player1Score++;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        
        else {
            player2Score++;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }

    else {
        if(answerTurn == player1Name) {
            player2Score++;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
        
        else {
            player1Score++;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
    }

    if(questionTurn == player1Name) {
        questionTurn = player2Name;
        document.getElementById("playerQuestion").innerHTML = "Question Turn: "+questionTurn;
    }
    
    else {
        questionTurn = player1Name;
        document.getElementById("playerQuestion").innerHTML = "Question Turn: "+questionTurn;
    }

    if(answerTurn == player1Name) {
        answerTurn = player2Name;
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: "+answerTurn;
    }

    else {
        answerTurn = player1Name;
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: "+answerTurn;
    }

    document.getElementById("output").innerHTML = "";
}