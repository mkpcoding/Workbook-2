var income, taxes; 
income = 95553; 
tax = (income / 100) * 23;
tax = parseFloat(tax.toFixed());
console.log(" Witheld for taxes is "+ tax);