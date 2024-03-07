let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = () => {
    msg.innerText = "It's a Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore = userScore + 1
        userScorePara.innerText = `${userScore}`;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "rgb(36, 215, 36)"
    }
    else {
        compScore = compScore + 1
        compScorePara.innerText = `${compScore}`;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "rgb(232, 29, 29)";
    }
}

const playGame = (userChoice) => {
    console.log("User choice is ", userChoice);
    const compChoice = getCompChoice();
    console.log("Comp choice is ", compChoice);

    if (userChoice === compChoice) {
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false
        }
        else { userWin = compChoice === "paper" ? true : false }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

