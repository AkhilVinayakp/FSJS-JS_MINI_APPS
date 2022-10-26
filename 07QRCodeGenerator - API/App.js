const data = document.getElementById("input");
const btn = document.getElementById("submit");
const main = document.getElementById("main");
const output = document.getElementById("img");

btn.addEventListener("click", ()=>{
    let content = data.value;
    if(!content){
        alert("Enter the content to generate the qrcode");
    }
    else{
        output.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=afsafsfssdfsfsfsdf")
    }
})
