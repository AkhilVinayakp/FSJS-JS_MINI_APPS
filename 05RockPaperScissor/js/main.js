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

const choices = document.querySelectorAll(".choice");
choices.forEach(element => {
    element.addEventListener("click", ()=>{
        let options = ['r', 'p', 's'];
        const got_id = element.getAttribute("id");
        alert(`id clicked ${got_id}`);
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
        const winner = chooseWinner(got_id, comOption);



    })
});





function chooseWinner(uChoose, cChoose){
    const r_wins = ['p'];
    const p_wins = ['']

}