const input = document.querySelector(".data");
const submit = document.querySelector("#submit");
const displayQR = document.querySelector(".qr-code");


submit.addEventListener("click",()=>{
    var url='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(input.value)';
    if(input==""){
        alert("enter");
    }
    displayQR.src=url;
});