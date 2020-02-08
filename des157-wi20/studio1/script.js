const myForm = document.querySelector("form");
const noun1 = document.getElementById("noun1").value;
const noun2 = document.getElementById("noun2").value;
const adjective = document.getElementById("adjective").value;
const verb = document.getElementById("verb").value;
const adverb = document.getElementById("adverb").value;



myForm.addEventListener("submit", function(e){
    e.preventDefault();
    

});

 // listen for the submission of the form
 document.getElementById("myform").addEventListener("submit", function(event){
    // prevent the default behavior
    event.preventDefault();

    // get all the text fields from the form
    var formData = document.querySelectorAll("input[type=text]");
    // create an array to hold values from the form
    var words = [];

    //loop through the fields and add the words to the array, one at a time.
    for( var i=0; i<formData.length; i++){
        words.push(formData[i].value);    
    }
    //You can see the array in the console, if you want...
    console.log(words);

    //run a function to put the words into the madlib... Function below...
    //Pass the array of words the user typed into the function
    makeMadLib(words);

});

//This function takes an array input, then constructs the madlib, peppering
//in the user's words where necessary.
function makeMadLib(theWords){
    var madlib = `Lorem ipsum dolor ${theWords[0]} sit amet consectetur adipisicing elit. Doloremque ${theWords[1]} iste  ratione cum amet! Vitae ${theWords[2]} earum dolorem nesciunt nam eos sunt, itaque alias, minima ${theWords[3]} explicabo repellendus animi sapiente nobis inventore doloremque? `;

    //Get the madlib container
    var mlContainer = document.getElementById('madlib');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`;

    //change the class on the madlib container so you can see it.
    mlContainer.setAttribute("class", "visible");
}

/*******************************
1. Add interesting graphics/fun madlib content/theme
2. Change styling (add fonts from google fonts, colors, etc)
3. Change the way the madlib appears (add a css animation?)
4. Adjust JS to suit your madlib
5. Refactor JS (put in external script file, put in enclosure, 
change var to const or let, etc.)
*********************************/ 