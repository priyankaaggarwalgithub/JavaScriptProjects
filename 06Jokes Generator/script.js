const jokeButton=document.querySelector(".btn");
const jokeHolder=document.querySelector(".joke");

async function fetchJoke()
{
    const response=await
    fetch("https://icanhazdadjoke.com",{
        headers:{
            Accept:"application/json",
           
        },
    });
    
    const joke= await response.json()
    jokeHolder.textContent = joke.joke;
}

async function handleClick()
{
    jokeHolder.textContent = "loading........."
   setTimeout( function(){
    fetchJoke();
   },500);
}

handleClick();

jokeButton.addEventListener("click", ()=>{
    handleClick()
});