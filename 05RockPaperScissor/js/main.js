//


/**
 * main function 
 * -> update the ui
 * -> collect data  
 */

const compScore = document.getElementById("compScoreVal");
const userScore = document.getElementById("userScoreVal");
const currUserOption = document.getElementById("result-user-stat");
const currCompOption = document.getElementById("result-comp-stat");
const winnerOption = document.getElementById("result-final-stat");

let user = 0;
let computer = 0;
const choices = document.querySelectorAll(".choice");
const choice_container = document.querySelector(".choices");
choices.forEach(element => {
    element.addEventListener("click", ()=>{
        choice_container.classList.add('hidden');
        let options = ['r', 'p', 's'];
        const got_id = element.getAttribute("id");
        // alert(`id clicked ${got_id}`);
        // random picking the computer option.
        const comOption = options[Math.floor(Math.random()*options.length)];
        //updating the ui with the given options
        let optionCopy = element.cloneNode(true);// copy the child as well.
        optionCopy.setAttribute("style", "margin-left: 24px");
        currUserOption.append(optionCopy);
        // grab the computer selected element in the options list
        let compChoosenElemet = document.getElementById(comOption);
        compChoosenElemet = compChoosenElemet.cloneNode(true);
        compChoosenElemet.setAttribute("style", "margin-left: 24px");
        currCompOption.append(compChoosenElemet);
        // choosing the winner
        if(got_id === comOption){
            optionCopy.classList.add("choice-err");
            compChoosenElemet.classList.add("choice-err");
        }
        else {
            const isUserWinner = chooseWinner(got_id, comOption);
            if(isUserWinner){
                user += 1;
                userScore.textContent = user;
                winnerOption.textContent = "Winner: USER";
            }
            else{
                computer += 1;
                compScore.textContent = computer;
                winnerOption.textContent = "Winner: COMP";
            }
        }
        setTimeout(()=>{
            currCompOption.removeChild(compChoosenElemet);
            currUserOption.removeChild(optionCopy);
            winnerOption.textContent = "";
            choice_container.classList.remove("hidden");
        },800);
    })
});





function chooseWinner(uChoose, cChoose){
    const r_wins = 's';
    const p_wins = 'r';
    const s_wins = 'p';
    const result = (uChoose == 'r' && cChoose == r_wins) ? true :
                 (uChoose == 'p' && cChoose == p_wins) ? true :
                 (uChoose == 's' && cChoose == s_wins) ? true : false;
    return result;
}