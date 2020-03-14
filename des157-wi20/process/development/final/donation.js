(function(){
  "use strict";

  document.getElementById("myForm").addEventListener("submit", function(event){

      event.preventDefault();
      const userName = document.querySelector('#name').value;
      const formData = document.querySelectorAll("input[type=radio]");
      let amount;
      for(var i=0; i<formData.length; i++){
          if(formData[i].checked == true){
            amount = formData[i].value;
          }
      }

      if(!amount){
        amount = document.querySelector("#other").value;
      }

      makeMadLib(userName, amount);
  });

  function makeMadLib(userName, amount){
      const close = document.getElementById("close");
      const madlib = `${userName}! Your donation of $${amount} will be used to help clean plastic trash out of the ocean. Have a wonderful day and stay sustainable!`;
      const mlContainer = document.getElementById('madlib');
      const popupContainer = document.getElementById('popup');
      popupContainer.innerHTML = `<h3>Thank you!</h3><p>${madlib}</p>`;
      mlContainer.setAttribute("class", "visible");
      close.addEventListener("click", function(){
        mlContainer.style.display = "none";
      });
  }

}());
