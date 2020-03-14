(function(){
  "use strict";

  const myForm = document.querySelector("form");

  myForm.addEventListener("submit", function(e){
    e.preventDefault();
    const myForm = document.querySelector("form");
    const myAnswer = document.getElementById("answer");
    const paragraph = document.getElementById("paragraph");
    const co2 = document.getElementById("co2");
    co2.style.color = "green";
    const bottles = parseFloat(document.querySelector("input").value);
    let emissions = 3.76 * bottles;
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
