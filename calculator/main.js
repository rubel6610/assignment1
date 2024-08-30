
function calc(){
    const input1 = parseInt(document.querySelector(".inputFirstNum").value);
    const operator = document.querySelector(".operator").value;
    if(operator === '+'){
        const input1 = parseInt(document.querySelector(".inputFirstNum").value);
        const input2 = parseInt(document.querySelector(".inputSecondNum").value);
        document.querySelector(".result").value =`The result is : ${input1 + input2}`;
          
    };
    if(operator === '-'){
        const input1 = parseInt(document.querySelector(".inputFirstNum").value);
        const input2 = parseInt(document.querySelector(".inputSecondNum").value);
        document.querySelector(".result").value =`The result is : ${input1 - input2}`;
    };
    if(operator === '*'){
        const input1 = parseInt(document.querySelector(".inputFirstNum").value);
        const input2 = parseInt(document.querySelector(".inputSecondNum").value);
        document.querySelector(".result").value =`The result is : ${input1 * input2}`;
    };
    if(operator === '/'){
        const input1 = parseInt(document.querySelector(".inputFirstNum").value);
        const input2 = parseInt(document.querySelector(".inputSecondNum").value);
        document.querySelector(".result").value =`The result is : ${input1 / input2}`;
    }
    
}



    
