(function(){
  "use strict";

//listens for submission of form
  document.getElementById("myForm").addEventListener("submit", function(event){

//prevents default behavior
      event.preventDefault();

//gets all data from form
      const formData = document.querySelectorAll("input[type=text]");

//create an array to hold values from form
      const words = [];

//loops through the fields and adds the word to the array
      for(var i=0; i<formData.length; i++){
          words.push(formData[i].value);
      }

//pass the array of words the user type into the function
      makeMadLib(words);
  });

//takes an array input, then constructs the madLib
  function makeMadLib(theWords){
      const madlib = `My ${theWords[0]}. When we first met, you looked so ${theWords[1]} and ${theWords[2]}. I couldn't believe my eyes. You smelled like a ${theWords[3]}. You walked so ${theWords[4]}. I couldn't wait to ${theWords[5]} you.`;

//get madlib container
      const mlContainer = document.getElementById('madlib');

//change the guts of the madlib container
      mlContainer.innerHTML = `<p>${madlib}</p>`;

//change the class to visible in order to see it
      mlContainer.setAttribute("class", "visible");
  }
}());
