
async function displayJoke(){
    //
    const jokeData = await getJoke();
    // console.log(jokeData);
    if(jokeData.err){
        alert("check network/ API may down");
    }
    else{
        const jokeContainer = document.getElementById("joke");
        const context = document.createElement("p");
        context.textContent = jokeData.data.context;
        const line = document.createElement("p");
        line.textContent = jokeData.data.joke;
        jokeContainer.innerHTML = '';
        jokeContainer.append(context, line);
    }
}

async function getJoke(){
    const url = "https://official-joke-api.appspot.com/random_joke";
    let err = false;
    let data = {}
    try{
        const resp = await fetch(url);
        data = await resp.json();
    }
    catch(er) {
        console.log("error")
        err = true
    }
    return {
        data: {
            context: data.setup,
            joke: data.punchline
        },
        error: err
    }

}

window.onload = displayJoke;
const btn = document.getElementById("jokeBtn");
btn.addEventListener('click', ()=>displayJoke());