var computerChoices = ["Ronaldo", "Messi", "Neymar"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toLowerCase();
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usedLetters = [];
var correctLetter = [];
var pn_array = computerGuess.split("");
var failedguess = 11;


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
            alpha_list = alpha_list + "<li>"+alphabets[i]+"</li><span>  </span>";
           } 
           else {
            
            alpha_list = alpha_list + "<li><del>"+alphabets[i]+"</del></li><span>  </span>";
           }   
        
       }     
       document.getElementById('alphabet').innerHTML = alpha_list;

     }

document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      var userGuess = userGuess.toLowerCase();
      // Randomly chooses a choice from the options array. This is the Computer's guess.
     

      document.getElementById('guess').innerHTML = "Your guess: " + userGuess;
      
      if (failedguess>0) {
        gen_underscore(computerGuess,userGuess);   
        gen_alphabets_list(alphabets);

      }
      
      
}

function gen_underscore(playername,userGuess) {

 var us_html = "";
 var tmp_html = "";
 var tmpUS = "";
 var sucessfulguess = 0;
 
 //console.log(failedguess);

    for (var i = 0; i < pn_array.length; i++) {
        if ((pn_array[i]==userGuess) && (correctLetter.indexOf(userGuess)==-1)) {
            tmpUS = tmpUS + "<li>" + userGuess + "</li><span>  </span>";
            correctLetter.push(userGuess);        
        }
    }

    for (var i = 0; i < pn_array.length; i++) { 
        if (correctLetter.indexOf(pn_array[i])==-1) {
            var tmp_html = tmp_html + "<li>_</li> <span>  </span>";
            
        }
        else {
            var tmp_html =  tmp_html + "<li>" + pn_array[i] + "</li><span>  </span>";
            sucessfulguess++;
        }
 
    }

    var us_html =  "<ul id='us_list'>" + tmp_html + "</ul>";

    document.getElementById('underscore').innerHTML = us_html;

    if (pn_array.indexOf(userGuess) ==-1) {
        
/*         console.log("userGuess: " + userGuess);
        console.log("usedletters: " + usedLetters);
        console.log(usedLetters.indexOf(userGuess)); */
        if (usedLetters.indexOf(userGuess)==-1) {         
            failedguess--;
            usedLetters.push(userGuess);
            //console.log("failed: " + failedguess);           
        }

        /* if (usedLetters.indexOf(userGuess)==-1){
            usedLetters.push(userGuess);
          } */
          if (failedguess > 0) {
            document.getElementById('done').innerHTML =("You still have " + failedguess + "lives!");
          }
          else{
            document.getElementById('done').innerHTML =("You still have no lives left. Game Over!");
            return;
          }
                
    }
    else if (sucessfulguess == pn_array.length) {

        document.getElementById('done').innerHTML =("Well Done!");
        console.log(computerGuess);
        document.getElementById('pic').src = "assets/images/ronaldo.jpg";
        return;
    }
  }