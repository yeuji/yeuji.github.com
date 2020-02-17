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
  const sunsetimg = document.getElementById("sunset");
  const bingsooimg = document.getElementById("bingsoo");
  const oceanimg = document.getElementById("ocean");
  const container = document.getElementById("container");
  const title = document.getElementById("title");
  const para = document.getElementById("para");
  const close = document.getElementById("close");

//pop up shows when you click on the images
  sunsetimg.addEventListener("click", function(){
    container.style.display = "block";
    title.innerHTML = "The Sunset";
    para.innerHTML = "I love the beautiful colors that that sky is filled with during the sunset. They make me feel happy. I really appreciate the aesthetic of vibrant pastel colors.";
  });

  bingsooimg.addEventListener("click", function(){
    container.style.display = "block";
    title.innerHTML = "Yummy Desserts";
    para.innerHTML = "I have a sweet tooth and bingsoo is one of my favorite desserts! I love eating these delicious foods with my friends as well.";
  });

  oceanimg.addEventListener("click", function(){
    container.style.display = "block";
    title.innerHTML = "The Ocean";
    para.innerHTML = "I love being around water. It makes me feel super relaxed. My favorite place to go is the beach.";
  });

//pop up closes when you click the x
  close.addEventListener("click", function(){
    container.style.display = "none";
  });


}());
