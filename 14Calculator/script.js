let expression = "";
  function insert(num){
    expression += num;
    const textview = document.querySelector(".textview");
    textview.value = expression;
  }
  
  function equals(){
    const textview = document.querySelector(".textview");
    try{
      textview.value = eval(expression);
    }
    catch(err){
      textview.value = "ERROR";
    }
    expression = "";
  }
  
  function clean(){
    expression = "0";
    const textview = document.querySelector(".textview");
    textview.value = expression;
  }
  
  function back(){
    expression = expression.slice(0, -1);
    const textview = document.querySelector(".textview");
    textview.value = expression;
  }