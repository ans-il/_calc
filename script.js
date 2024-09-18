let isOperatorClicked = false;
let operator;
let oldValue;
let newValue;
let oldValueF;
let newValueF;
let result;

const display = document.getElementById("display");

const setOperator = (op) => {
    isOperatorClicked = true;
    operator = op;
    oldValue = display.value;

}

const btnclick = (val) => {
    if(isOperatorClicked) {
        display.value = val;
        isOperatorClicked = false;
    }else{
    if (val === '.' && display.value.includes('.')) return;
        display.value += val;
     }
}

const clearVal = () => {
    display.value = "";
    oldValue = "";
    isOperatorClicked = false;
    operator = "";
}

const calculate = () => {
    
    if(operator === "" || oldValue === "") {
        return;
    }

    newValue = display.value;

    try {
        oldValueF = parseFloat(oldValue);
        newValueF = parseFloat(newValue);
        result = 0;

        switch(operator) {
            case "+":
                result = oldValueF + newValueF;
                break;
            case "-":
                result = oldValueF - newValueF;
                break;    
            case "*":
                result = oldValueF * newValueF;
                break;
             case "/":
                if(newValueF !== 0) { 
                result = oldValueF / newValueF;
                } else {
                    display.value = "Error!";
                    return;
                }
                break;
                default:
                    display.value = "Error!";
                    return;        
        }

        display.value = String(result);
        oldValue = String(result); // Allow chaining operations
        operator = "";
        isOperatorClicked = false;

    }catch(error) {
        display.value = "Error!";
    }


}