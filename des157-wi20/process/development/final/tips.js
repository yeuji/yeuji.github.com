(function(){

  "use script";

//changes body background color
  const theBody = document.querySelector("body");
  let = currentClass = theBody.getAttribute("class");
  const colors = ["one", "two", "three"];
  let counter = 0;

  function classRotator(){

      setTimeout(function(){
              counter++;

              if(counter>colors.length-1){
                  counter = 0;
              }
              theBody.setAttribute("class", colors[counter]);
              classRotator();

          }, 1000);
  };

  classRotator();

//when you click on image, the description pops up
  const first = document.getElementById("one");
  const second = document.getElementById("two");
  const third = document.getElementById("three");
  const container = document.getElementById("container");
  const title = document.getElementById("title");
  const para = document.getElementById("para");
  const close = document.getElementById("close");

//pop up shows when you click on the images
  first.addEventListener("click", function(){
    container.style.display = "block";
    title.innerHTML = "Say no to plastic cutlery";
    para.innerHTML = "By carrying a spork, reusing your plastic cutlery or going for a compostable alternative, you could personally save 466 items of unnecessary plastic every year. It’s thought that we use plastic cutlery for just 3 minutes before throwing it away!";
  });

  second.addEventListener("click", function(){
    container.style.display = "block";
    title.innerHTML = "Use Resuable Straws";
    para.innerHTML = "Straws are sucking the life out of our oceans. But there is an easy fix to this one, if you don’t need one, don’t use one. Plastic straws and stirrers can take up to 200 years to decompose. Opt for paper straws or ditch them altogether and try the age-old sipping technique. Is it really worth taking a plastic straw with your Strawberry Daiquiri when the straw could remain in landfill long after your 100th birthday?";
  });

  third.addEventListener("click", function(){
    container.style.display = "block";
    title.innerHTML = "Bring your own bottle";
    para.innerHTML = "Plastic bottles are one of the most frequently found items on beach cleans globally. The lids commonly end up in seabirds’ stomachs.";
  });

//pop up closes when you click the x
  close.addEventListener("click", function(){
    container.style.display = "none";
  });


}());
