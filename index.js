const answer = Math.floor((Math.random() * 9) + 1);
let guesses = 0;

 document.getElementById("submitButton").onclick = function(){
    
    let guess = document.getElementById("playerGuess").value;
    guesses += 1;
    if (guess == answer) {
        window.alert(`${guess} is correct, it took you ${guesses} guesses`);
    } else if (guess > answer ) {
        window.alert(`${guess} is too large`);
    } else {
        alert(`${guess} is too small`);
    }
 }






// value = .5;
// value = value.toLocaleString(undefined, {style: "unit", unit: "celsius"});

// console.log(value);