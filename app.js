const guessBtn = document.getElementById('guess-button');
const resetButton = document.getElementById('reset-button');

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let randomLetterSelected = letters[Math.floor(Math.random()*letters.length)];
console.log(randomLetterSelected);
//function to validate the input and showing output//
let guess = 0;
const result = ()=>{
    const guessCount = document.getElementById("guess-count");
 const InputByUser= document.getElementById("letterInput").value.toUpperCase();  // input by user value to uppercase//

const output = document.querySelector(".output");
const wrongAlert = document.getElementById('wrong-alert');
const rightAlert = document.getElementById('right-alert');

    if(!InputByUser.match(/^[A-Z]$/)){
        wrongAlert.textContent = "Please enter a Valid letter";
        wrongAlert.style.backgroundColor = "white";
        wrongAlert.style.color = "red";
        rightAlert.textContent = "";
         

    }else if(InputByUser === randomLetterSelected){
        rightAlert.textContent = "You are Right!";
        rightAlert.style.backgroundColor = "white";
        rightAlert.style.color = "green";
        wrongAlert.textContent = "";
        
        //reset the count and generate a new random letter//
        guess =0;
        randomLetterSelected = letters[Math.floor(Math.random()*letters.length)];
        console.log(randomLetterSelected);
    }else{
        wrongAlert.textContent = "You are Wrong!";
        wrongAlert.style.backgroundColor = "white";
        wrongAlert.style.color = "red";
        rightAlert.textContent = "";
        guess +=1;
    }
    //updating guess count display//
    guessCount.textContent = guess;
    output.style.visibility = "visible";
};


//event listener to the guess button//
guessBtn.addEventListener('click', result);

//event listener to the reset button//
resetButton.addEventListener('click' , ()=>{
    document.getElementById('letterInput').value ="";
    document.getElementById('guess-count').textContent = "";
    document.querySelector('.output').style.visibility = "hidden";
    document.getElementById('wrong-alert').textContent = "";
    document.getElementById('right-alert').textContent = "";
    document.getElementById('right-alert').textContent = "";
    guess = 0;
    randomLetterSelected = letters[Math.floor(Math.random()*letters.length)];
});