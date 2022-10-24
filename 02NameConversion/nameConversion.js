
function caseChanger(){
    // text content
    const input_text = document.querySelector("#text");
    const convert_btn = document.querySelector("#convert-btn");
    // case outputs
    const camel = document.querySelector("#camel-case");
    const pascal = document.querySelector("#pascal-case");
    const snake = document.querySelector("#snake-case")
    const scr_snake = document.querySelector("#screaming-snake-case");
    const kebab = document.querySelector("#kebab-case");
    const scr_kebab = document.querySelector("#screaming-kebab-case");
    input_text.addEventListener("keyup", (e)=>{
        let content = input_text.value;
        content = content.split(" ");
        content = content.filter((item)=> item != "");
        const convertedObj = getConverted(content)
        camel.textContent = convertedObj.camel.join("");
        pascal.textContent = convertedObj.pascal.join("");
        snake.textContent = convertedObj.snake.join("_");
        scr_snake.textContent = convertedObj.sre_snake.join("_");
        kebab.textContent = convertedObj.snake.join("-");
        scr_kebab.textContent = convertedObj.sre_snake.join("-");
    });

}

caseChanger();

function getConverted(content){
    const conveted = {};
    const camel = content.map((ele, index_)=>{
        if(index_ !== 0){
            return ele[0].toUpperCase()+ele.substring(1);
        }
        else{
            return ele[0].toLowerCase()+ele.substring(1);
        }
    });
    const pascal = content.map((ele_)=> ele_[0].toUpperCase()+ ele_.substring(1));
    const snake = content.map((ele_)=> ele_.toLowerCase());
    const sre_snake = content.map((ele_)=> ele_.toUpperCase());


    return {
        camel,
        pascal,
        snake,
        sre_snake
    }
    
}
