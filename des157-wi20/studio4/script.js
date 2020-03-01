(function(){
  "use strict";

  const close = document.getElementById("close");

  close.addEventListener("click", function(){
    container.style.display = "none";
  });

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
      const madlib = `${theWords[0]}! Your donation of $${theWords[2]} will be used to help clean plastic trash out of the ocean. Have a wonderful day and stay sustainable!`;
      const mlContainer = document.getElementById('madlib');
      mlContainer.innerHTML = `<h3>Thank you!</h3><p>${madlib}</p>`;
      mlContainer.setAttribute("class", "visible");
  }
}());
