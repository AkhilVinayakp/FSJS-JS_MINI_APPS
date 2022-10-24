
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
    input_text.addEventListener("keydown", (e)=>{
        let content = input_text.value;
        content = content.split(" ");
        const content_camel = getCamel(content);
        camel.textContent = content_camel.join("");
        pascal.textContent = content.map((ele)=> ele[0].toUpperCase()+ele.substring(1)).join("");
        snake.textContent = content.map((ele)=> ele[0].toLowerCase()+ele.substring(1)).join("_");
    });

}

caseChanger();

function getCamel(content){
    content.map((ele, index_)=>{
        if(index_ !==0){
            return ele[0].toUpperCase()+ele.substring(1);
        }
        else {
            return ele[0].toLowerCase()+ele.substring(1);
        };
    });
}
