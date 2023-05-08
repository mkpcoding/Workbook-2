var payRate, hoursWorked, grossPay;
payRate = 17.30;
hoursWorked = 45;
hrsOver = hoursWorked % 40;
console.log(hrsOver);
if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
} else {
    grossPay = ((payRate * 1.5) * hrsOver + (payRate * (hoursWorked - hrsOver)));
}

console.log(grossPay);