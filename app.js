let bill = Number(prompt("Enter Bill Amount"));

let ST = .07;
let T = .05;
let totalPrice = (bill)+(bill*ST)+(bill*T);


document.body.innerHTML=totalPrice;
