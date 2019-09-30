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
      gen_underscore(computerGuess);     
      usedLetters.push(userGuess);
      gen_alphabets_list(alphabets);
      console.log(usedLetters);
}

function gen_underscore(playername) {

 var us_html = "";
 var tmpUS = "";
    // We then loop through the selected array.
    for (var i = 0; i < playername.length; i++) {     
      // Each time we print the value inside the array.
      tmpUS = tmpUS + "<li>_</li><span> </span>";
    }
   var us_html =  "<ul id='us_list'>" + tmpUS + "</ul>"

    

    
    document.getElementById('underscore').innerHTML = us_html;
  }