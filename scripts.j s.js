// 1. Group all transactions into a single array
Const transactions = [
   { id: 1, type: "deposit", amount: 50000, status: "completed" } ,
   { id: 2, type: "withdrawal", amount: 12000, status: "completed" } ,
   { id: 3, type: "deposit", amount: 0, status: "completed" } ,
   { id: 4, type: "withdrawal", amount: 15000, status: "completed" } ,
   { id: 5, type: "deposit", amount: 25000, status: "failed" } ,
   { id: 6, type: "deposit", amount: 3500, status: "completed" } ,
];
// 2. Calculate the sum of all transaction amounts automatically
let totalAmount = 0;
transactions.forEach(transaction => {
    totalAmount += transaction.amount;
});
// 3. Double the total as requested
const Double_total = totalAmount * 2;
// 4. See your results in the console
console. log("Total sum of transactions:", totalAmount); // 105500
console.log("Double Total:", Double_total); // 211000