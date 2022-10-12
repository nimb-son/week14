let op; 

function сalculator() {
	let result;

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if (op == '+') {
        result = num1 + num2;
    } else if (op == '-') { 
        result = num1 - num2;
    }
    else if (op == '*') { 
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }
	    document.getElementById("result").textContent = result;
    }