var computerChoices = ["Ronaldo", "Messi", "Neymar", "Pogba","Hazard"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toLowerCase();
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usedLetters_ap = [];
var usedLetters = [];
var correctLetter = [];
var correctLetter_us = [];
var pn_array = computerGuess.split("");
var failedguess = 11;
var sucessfulguess = 0;
var win =0;
var lose =0;



function reset() {
    usedLetters_ap = [];
    usedLetters = [];
    correctLetter = [];
    correctLetter_us = [];
    failedguess = 11;
    sucessfulguess = 0;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toLowerCase();
    pn_array = computerGuess.split("");
    document.getElementById('pic').src = "assets/images/question_mark.png";
    userGuess = "_";
    gen_alphabets_list(userGuess);
    gen_underscore(computerGuess,userGuess);  
    get_results(userGuess);
}

console.log("Name: " + computerGuess);
/* var tmp_html = "";
for (var i = 0; i < computerGuess.length; i++) {
    var tmp_html =  tmp_html + "<li>_</li>";    
}
console.log(tmp_html);
var us_html =  "<ul id='us_list'>" + tmp_html + "</ul>";
console.log(us_html);
document.getElementById('underscore').innerHTML = us_html; */

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    var userGuess = userGuess.toLowerCase();
    console.log(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.


    document.getElementById('guess').innerHTML = "Your guess: " + userGuess;

    if (failedguess>0) {
      gen_alphabets_list(userGuess);
      gen_underscore(computerGuess,userGuess);  
      get_results(userGuess);
      
    }
    
    if (usedLetters.indexOf(userGuess)==-1) {
      usedLetters.push(userGuess);
      }
    
}

function gen_alphabets_list(userGuess) {

    var alpha_list = "";
    usedLetters_ap.push(userGuess);
    console.log(usedLetters_ap);
       for (var i = 0; i < alphabets.length; i++) { 
           
           if (usedLetters_ap.indexOf(alphabets[i])==-1) {
            //console.log(" al " + usedLetters);
            alpha_list = alpha_list + "<li>"+alphabets[i]+"</li><span>  </span>";
            
           } 
           else {
            
            alpha_list = alpha_list + "<li><del>"+alphabets[i]+"</del></li><span>  </span>";
           }   
        
       }     

       document.getElementById('alphabet').innerHTML = alpha_list;

     }



function gen_underscore(playername,userGuess) {

 var us_html = "";
 var tmp_html = "";
 //var tmpUS = "";
 

 
 //console.log(failedguess);

    for (var i = 0; i < pn_array.length; i++) {
        if ((pn_array[i]==userGuess) && (correctLetter_us.indexOf(userGuess)==-1)) {
            //tmpUS = tmpUS + "<li>" + userGuess + "</li><span>  </span>";
            correctLetter_us.push(userGuess); 
             
            //console.log("sucessfulguess " + sucessfulguess);    
           // console.log("pn_array indexof  " + pn_array.indexOf(userGuess)); 
        }
    }
/* 
    for ( i=0; i < pn_array.length; i++ ){
        if ( pn_array[i] == userGuess ){
            results.push(i);
        }
    }

    if (correctLetter.indexOf(userGuess)==-1){
        sucessfulguess = sucessfulguess + results.length; 
    } */
    

    for (var i = 0; i < pn_array.length; i++) { 
        if (correctLetter_us.indexOf(pn_array[i])==-1) {
            var tmp_html = tmp_html + "<li>_</li> <span>  </span>";
            
        }
        else {
            var tmp_html =  tmp_html + "<li>" + pn_array[i] + "</li><span>  </span>";
            
        }
 
    }

    var us_html =  "<ul id='us_list'>" + tmp_html + "</ul>";
    document.getElementById('underscore').innerHTML = us_html;
  }

  function get_results(userGuess) {

    var results = [];

  if (pn_array.indexOf(userGuess) ==-1) {

    if (usedLetters.indexOf(userGuess)==-1) {
        failedguess--;
        }
                
        
                if (failedguess > 0) {
                    document.getElementById('done').innerHTML =("You still have " + failedguess + " lives!");
                  }
                  else{
                    document.getElementById('done').innerHTML =("You have no lives left. Game Over!");
                    document.getElementById('pic').src = "assets/images/gameover.jpg";
                    lose++;
                    document.getElementById('winlose').innerHTML =("Win: " + win + " Lose: " + lose);
                    setTimeout(reset, 5000);
                    //return;
                  }
       
        }
        else {
            //console.log("correctLetter " + correctLetter);

            //console.log("pn_array " + pn_array);
            for ( i=0; i < pn_array.length; i++ ){
                if ( pn_array[i] == userGuess ){
                    results.push(i);
                }
            }
            
            if (correctLetter.indexOf(userGuess)==-1){
                sucessfulguess = sucessfulguess + results.length; 
            }
                correctLetter.push(userGuess); 

            if (sucessfulguess == pn_array.length) {
                document.getElementById('done').innerHTML =("Well Done!");
                win++;
                document.getElementById('winlose').innerHTML =("Win: " + win + " Lose: " + lose);
                myPlay();
                setTimeout(reset, 5000);
           // console.log(computerGuess);
            document.getElementById('pic').src = "assets/images/"+ computerGuess +".jpg";
            //return;
            }
            else {
                
                
               //console.log("sucessfulguess" + sucessfulguess);
            }
            
        }
    }

    function myPlay(){
        var audio = new Audio("assets/sounds/goal.wav");
        audio.play();
    }