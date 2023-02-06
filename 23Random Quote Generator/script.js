let input=document.querySelector(".textArea");
input.addEventListener("mouseover",getQuote);
function getQuote() {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        input.innerHTML= data.quote;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }