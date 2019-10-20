//timer 
var mins = 2; 
var secs = mins * 60; 

function countdown() { 
      setTimeout('Decrement()', 60); 
 } 
 
 function Decrement() { 
     if (document.getElementById) { 
         minutes = document.getElementById("minutes"); 
          seconds = document.getElementById("seconds"); 
           if (seconds < 59) { 
                    seconds.value = secs; 
                } 
                else { 
                    minutes.value = getminutes(); 
                    seconds.value = getseconds(); 
                } 
                if (mins < 1) { 
                    minutes.style.color = "red"; 
                    seconds.style.color = "red"; 
                } 
                if (mins < 0) {  
                    minutes.value = 0; 
                    seconds.value = 0; 
                } 
                else { 
                    secs--; 
                    setTimeout('Decrement()', 1000); 
                } 
            } 
        } 
  
        function getminutes() {  
            mins = Math.floor(secs / 60); 
            return mins; 
        }

        function getseconds() { 
            return secs - Math.round(mins * 60); 
        }
        
        //question if else statements 
function check() { 
var question1 = document.quiz.question1.value; 
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;
var incorrect = 0; 

if (question1 == "1993") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question2 == "1hr40m") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question3 == "Laughing") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question4 == "Bus stop") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question5 == "Goat") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question6 == "False") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question7 == "True") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question8 == "True") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question9 == "True") { 
    correct++;
}
else { 
    incorrect++; 
}
if (question10 == "False") {  
    correct++;
}
else { 
    incorrect++; 
}
document.getElementById("after-submit").style.visibility = "visible";
document.getElementById("number-correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("number-incorrect").innerHTML = "You missed " + incorrect + ".";
}