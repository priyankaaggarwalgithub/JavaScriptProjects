function randompickerbtn() 
{
    var pickColor=document.querySelector("#randomValuePara");
    var bgColor=document.querySelector(".random-picker")
    const arrayofcolors="0123456789ABCDEF";
    let color="#";
    function generateColor()
    {
        for(let i=0;i<6;i++)
        {
            let index=Math.floor(Math.random()*16);
            let value=arrayofcolors[index];
            color=color+value;
        }
    pickColor.textContent=color;
    console.log(color);
    bgColor.style.backgroundColor=color;
    }
    generateColor();
}

function hexFindbtn() {
    var input=document.getElementById("hexInput").value;
    console.log(input);
    var colorBox=document.getElementById("color-box");
    colorBox.style.backgroundColor=input;
}

function RGBFindbtn() {
  var rgbColorBox=document.getElementById("rgb-color-box");
  var rInput=document.getElementById("RInput").value;
  var gInput=document.getElementById("GInput").value;
  var bInput=document.getElementById("BInput").value;
  var rgbColor=`rgb(${rInput},${gInput},${bInput})`;
  rgbColorBox.style.backgroundColor=rgbColor;
}

function RangeSelector() {
    var rrgbColorBox=document.getElementById("range-color-box");
    var raInput=document.getElementById("RrInput").value;
    var gaInput=document.getElementById("GrInput").value;
    var baInput=document.getElementById("BrInput").value;
    var rgbColor=`rgb(${raInput},${gaInput},${baInput})`;
    rrgbColorBox.style.backgroundColor=rgbColor;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
    if(this.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
};

function rgbConvbtn() {
    const hexCode = "0123456789ABCDEF";
	let hexValue = "";
	let value = [];
	let rValue = document.querySelector("#RCInput").value.toString(16);
    console.log(rValue);
	let gValue = document.querySelector("#GCInput").value.toString(16);
	let bValue = document.querySelector("#BCInput").value.toString(16);
    if (rValue.length == 1)
    rValue = "0" + rValue;
  if (gValue.length == 1)
  gValue = "0" + gValue;
  if (bValue.length == 1)
  bValue = "0" + bValue;

  hexValue= "#" + rValue + gValue + bValue;
  document.getElementById("rgbCOut").style.backgroundColor=hexValue;
  document.getElementById("rgbCOut").innerText=hexValue;
  

}


function hexConvbtn() {
    let hexColor = document.querySelector("#hexCInp").value;
   let hexColorValue= hexColor.convertToRGB();
    document.getElementById("hexCOut").textContent=`rgb(${hexColorValue[0]},${hexColorValue[1]},${hexColorValue[2]})`;
   document.getElementById("hexCOut").style.backgroundColor=`rgb(${hexColorValue[0]},${hexColorValue[1]},${hexColorValue[2]})`;
}


