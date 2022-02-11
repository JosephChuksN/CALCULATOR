let outputScreen = document.getElementById("screen");


function display(num){
    outputScreen.value += num;
}



function calculate(){
    try{
        let input = outputScreen.value
        let output = eval(input);
        outputScreen.value = output;   
    } catch(err){
      outputScreen.value= "error";
    }
  
}

function Clr(){
    outputScreen.value = outputScreen.innerHTML;
}

