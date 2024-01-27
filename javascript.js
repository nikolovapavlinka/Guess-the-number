// function guessGame() {
//     let random = Math.floor(Math.random() * 11 );
//     let guess;

//     do {
//         guess = prompt("Guess a number betweeen 1-10");
//         console.log(guess, random);

//         if(random > guess) {
//             console.log(" You guessed Too low");
//         }
//         else if(random < guess) {
//             console.log(" You guessed Too high");
//         }
//     }
//     while(guess != random) {
//         console.log("YOU WON");
//     }
// }
// guessGame();

const guess_num = document.querySelector("#guess_number");
let random = Math.floor(Math.random() * 11);
let guess;
const enter_num = document.querySelector("#number");
const btn = document.querySelector("#enter");
const result = document.querySelector("#result");

guess_num.value = random;
console.log(random);

btn.addEventListener("click", function() {
    guess = parseInt(enter_num.value);
    console.log(guess);

    if (guess < random) {
        result.textContent = "You guessed too low";
    } else if (guess > random) {
        result.textContent = "You guessed too high";
    } else if(guess == random){
        //result.textContent = "You won! 🔥";
        result.textContent = "\uD83C\uDF89 YOU WON! \uD83C\uDF89"
        guess_num.value = guess;
    }
    else {
        result.textContent = "You must enter the number";
    }
});


