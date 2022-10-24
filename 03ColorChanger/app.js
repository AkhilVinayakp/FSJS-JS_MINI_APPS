// change the color when the button cliced

const random = (number)=>{
    return Math.floor(Math.random()*(number+1))
}


const btn = document.getElementById("button");
const canvas = document.getElementById("canvas");
btn.addEventListener("click", (event)=>{
    const new_bgc = generateBgc(random(255), random(255), random(255));
    canvas.style.backgroundColor = new_bgc;
});

function generateBgc(c1, c2, c3){
    return `rgba(${c1},${c2}, ${c3}, ${Math.random()})`
}


