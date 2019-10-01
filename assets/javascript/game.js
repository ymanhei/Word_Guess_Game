var computerChoices = ["Ronaldo", "Messi", "Neymar"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usedLetters = [];

console.log(computerGuess);

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
       console.log(alpha_list);
     }

document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
     

      document.getElementById('guess').innerHTML = userGuess;
      usedLetters.push(userGuess);
      gen_underscore(computerGuess,userGuess);   
      gen_alphabets_list(alphabets);
      console.log(usedLetters);
}

function gen_underscore(playername,userGuess) {

 var us_html = "";
 var tmp_html = "";
 var tmpUS = "";
 var correctLetter = [];

    for (var i = 0; i < playername.length; i++) {
        if (playername[i]==userGuess) {
            tmpUS = tmpUS + "<li>" + userGuess + "</li><span> </span>";
            correctLetter.push(userGuess);
        }
        else {
            tmpUS = tmpUS + "<li>_</li><span> </span>";
        }
    }

    for (var i = 0; i < playername.length; i++) { 
        if (correctLetter.indexOf(playername[i])==-1) {
            var tmp_html =  "<li>_</li>";
        }
        else {

            var tmp_html =  "<li>" + correctLetter + "</li>";
        }
    }

    var us_html =  "<ul id='us_list'>" + tmpUS + "</ul>";

    

    
    document.getElementById('underscore').innerHTML = us_html;
  }