let operator = "";
let operand1 = null;
let operand2 = null;
let decimal_in_use = false;

const prevText = document.querySelector("#prevText");
const curText = document.querySelector("#currentText");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");

const btn_plus = document.querySelector("#btn_plus");
const btn_minus = document.querySelector("#btn_minus");
const btn_multiply = document.querySelector("#btn_multiply");
const btn_divide = document.querySelector("#btn_divide");
const btn_decimal = document.querySelector("#btn_decimal");
const btn_equal = document.querySelector("#btn_equal");

// Let buttons add digits
let btns = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
for(let i=0;i<10;i++){
    btns[i].onclick = () => {
        curText.textContent += i.toString();
    };
}

function evaluate(){
    if(operator == "+"){
        return operand1 + operand2;
    }else if(operator == "-"){
        return operand1 - operand2;
    }else if(operator == "*"){
        return operand1 * operand2;
    }else if(operator == "/"){
        return operand1 / operand2;
    }else{
        return operand1;
    }
}

//Plus Code
btn_plus.onclick = () => {
    // If empty add 0
    if(curText.textContent == "")
        curText.textContent = "0";

    if(operand1 === null)
        operand1 = parseFloat(curText.textContent);
    else{
        operand2 = parseFloat(curText.textContent);
        operand1 = evaluate();
    }
    operator = "+";

    prevText.textContent = operand1.toString() + " + ";
    curText.textContent = "";

    // Allow decimal for next input
    decimal_in_use = false;
};

//minus Code
btn_minus.onclick = () => {
    // If empty subtract 0
    if(curText.textContent == "")
        curText.textContent = "0";

    if(operand1 === null)
        operand1 = parseFloat(curText.textContent);
    else{
        operand2 = parseFloat(curText.textContent);
        operand1 = evaluate();
    }
    operator = "-";

    prevText.textContent = operand1.toString() + " - ";
    curText.textContent = "";

    // Allow decimal for next input
    decimal_in_use = false;
};

//multiply Code
btn_multiply.onclick = () => {
    // If empty subtract 0
    if(curText.textContent == "")
        curText.textContent = "1";

    if(operand1 === null)
        operand1 = parseFloat(curText.textContent);
    else{
        operand2 = parseFloat(curText.textContent);
        operand1 = evaluate();
    }
    operator = "*";

    prevText.textContent = operand1.toString() + " * ";
    curText.textContent = "";

    // Allow decimal for next input
    decimal_in_use = false;
};

//divide Code
btn_divide.onclick = () => {
    // If empty subtract 0
    if(curText.textContent == "")
        curText.textContent = "1";

    if(operand1 === null)
        operand1 = parseFloat(curText.textContent);
    else{
        operand2 = parseFloat(curText.textContent);
        operand1 = evaluate();
    }
    operator = "/";

    prevText.textContent = operand1.toString() + " / ";
    curText.textContent = "";

    // Allow decimal for next input
    decimal_in_use = false;
};

// Decimal code
btn_decimal.onclick = () => {
    if(!decimal_in_use){
        if(curText.textContent == ""){
            curText.textContent = "0";
        }
        curText.textContent += ".";
        decimal_in_use = true;
    }
}

//Equal Code
btn_equal.onclick = () => {
    if(prevText.textContent != ""){
        // Set curText to default values if empty
        if(curText.textContent == ""){
            if(operator=="+" || operator=="-")
                curText.textContent = "0";
            if(operator=="*" || operator=="/")
                curText.textContent = "1";
        }

        operand2 = parseFloat(curText.textContent);
        operand1 = evaluate();

        prevText.textContent += operand2.toString() + " = ";
        curText.textContent = operand1.toString();

        // Set the operand1 to null so that it restarts calculation from there
        operand1 = null;
        operator = "";
        
    }
}





