let num1 = Number(prompt("Enter the number 1:"));
let num2 = Number(prompt("Enter the number 2:"));
let operation = prompt("Enter the type of operation (lower case):");

switch(operation){
    case 'addition':
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 'subtraction':
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 'multiplication':
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 'division':
        alert(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    case 'modulus':
        alert(`${num1} % ${num2} = ${num1 % num2}`);
        break;
    default:
        alert("Invalid operation. Valid Operations: addition, subtraction, multiplication, division and modulus");
}