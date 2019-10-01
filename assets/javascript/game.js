var computerChoices = ["Ronaldo", "Messi", "Neymar"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toLowerCase();
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usedLetters = [];
var correctLetter = [];
var pn_array = computerGuess.split("");
var failedguess = 10;


console.log("Name: " + computerGuess);

/* var tmp_html = "";
for (var i = 0; i < computerGuess.length; i++) {
    var tmp_html =  tmp_html + "<li>_</li>";    
}
console.log(tmp_html);
var us_html =  "<ul id='us_list'>" + tmp_html + "</ul>";
console.log(us_html);
document.getElementById('underscore').innerHTML = us_html; */


function gen_alphabets_list(alphabets) {

    var alpha_list = "";
       for (var i = 0; i < alphabets.length; i++) { 
           if (usedLetters.indexOf(alphabets[i])==-1) {
            alpha_list = alpha_list + "<li>"+alphabets[i]+"</li>";
           } 
           else {
            
            alpha_list = alpha_list + "<li><del>"+alphabets[i]+"</del></li>";
           }   
        
       }     
       document.getElementById('alphabet').innerHTML = alpha_list;

     }

document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      var userGuess = userGuess.toLowerCase();
      // Randomly chooses a choice from the options array. This is the Computer's guess.
     

      document.getElementById('guess').innerHTML = userGuess;
      usedLetters.push(userGuess);
      gen_underscore(computerGuess,userGuess);   
      gen_alphabets_list(alphabets);

}

function gen_underscore(playername,userGuess) {

 var us_html = "";
 var tmp_html = "";
 var tmpUS = "";
 var sucessfulguess = 0;
 
 console.log(failedguess);

    for (var i = 0; i < pn_array.length; i++) {
        if ((pn_array[i]==userGuess) && (correctLetter.indexOf(userGuess)==-1)) {
            tmpUS = tmpUS + "<li>" + userGuess + "</li><span> </span>";
            correctLetter.push(userGuess);        
        }
    }

    for (var i = 0; i < pn_array.length; i++) { 
        if (correctLetter.indexOf(pn_array[i])==-1) {
            var tmp_html = tmp_html + "<li>_</li>";
            
        }
        else {
            var tmp_html =  tmp_html + "<li>" + pn_array[i] + "</li>";
            sucessfulguess++;
        }
 
    }

    var us_html =  "<ul id='us_list'>" + tmp_html + "</ul>";

    document.getElementById('underscore').innerHTML = us_html;

    if (pn_array.indexOf(userGuess) ==-1 && failedguess > 0) {
        document.getElementById('done').innerHTML =("You still have" + failedguess + "lives!");
        failedguess--;
    }
    else if (failedguess == 0){
        document.getElementById('done').innerHTML =("You still have no lives left. Game Over!");
    }
    else if (sucessfulguess == pn_array.length) {

        document.getElementById('done').innerHTML =("Well Done!");
    }
  }