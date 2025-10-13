let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomInd = Math.floor(Math.random()*3);
    return options[randomInd];
};

const currUserScore = document.querySelector("#user-score");
const currCompScore = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const showWinner = (userWin) => {
    if(userWin) {
        console.log("You win!");
        userScore++;
        currUserScore.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = "You wins!🥳";
    }
    else {
        console.log("Computer wins.");
        compScore++;
        currCompScore.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = "You lose!🙁";
    }
};

const drawGame = () => {
    console.log("Game draws.");
    msg.innerText = "Game draws.";
    msg.style.backgroundColor = "darkblue";
};

const playGame = (userChoice) => {
    console.log("User choice =",userChoice);
    let compChoice = getCompChoice();
    console.log("Computer choice =",compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
})