let display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
function append(value) {
  if (value === '%') {
    display.value = parseFloat(display.value) / 100;
    return;
  }
  display.value += value;
}