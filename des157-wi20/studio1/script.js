(function(){
  "use strict";

  document.getElementById("myForm").addEventListener("submit", function(event){
      event.preventDefault();

      const formData = document.querySelectorAll("input[type=text]");
      const words = [];

      for(var i=0; i<formData.length; i++){
          words.push(formData[i].value);
      }

      makeMadLib(words);
  });

  function makeMadLib(theWords){
      const madlib = `My ${theWords[0]}. When we first met, you looked so ${theWords[1]} and ${theWords[2]}. I couldn't believe my eyes. You smelled like a ${theWords[3]}. You walked so ${theWords[4]}. I couldn't wait to ${theWords[5]} you.`;

      const mlContainer = document.getElementById('madlib');

      mlContainer.innerHTML = `<p>${madlib}</p>`;

      mlContainer.setAttribute("class", "visible");
  }
}());
