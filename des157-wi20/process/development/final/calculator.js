(function(){
  "use strict";

  var myForm = document.querySelector("form");

  myForm.addEventListener("submit", function(e){
    e.preventDefault();
    var myForm = document.querySelector("form");
    var myAnswer = document.getElementById("answer");
    var paragraph = document.getElementById("paragraph");
    var co2 = document.getElementById("co2");
    co2.style.color = "green";
    var bottles = parseFloat(document.querySelector("input").value);
    var emissions = 3.76 * bottles;
    emissions = emissions.toFixed(1);

    if(bottles){
      myAnswer.setAttribute("class", "visible");
      co2.innerHTML = `${emissions} kg`;
      paragraph.innerHTML = `<p><strong>${bottles} plastic bottles</strong> used every week generates <strong>${emissions} kilograms</strong> of CO2 emissions.</p>`;
    }
    else {
      alert("Please enter a number.");
    }

  });

}());
