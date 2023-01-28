let bgColor="";
let canvas=document.querySelector("#canvas");
function generateColor() {
    let color = '#';
    let digits = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      
      let randomDigit = Math.floor(Math.random() * 16);
      
      color += digits[randomDigit];
    }
    bgColor=color;
}  
let button=document.querySelector("#button");
button.addEventListener("click",()=>{
generateColor();
canvas.style.backgroundColor=bgColor;

});