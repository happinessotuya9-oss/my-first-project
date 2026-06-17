// 1. Group all transactions into a single array
const transactions = [
   { id: 1, type: "deposit", amount: 50000, status: "completed" } ,
   { id: 2, type: "withdrawal", amount: 12000, status: "completed" } ,
   { id: 3, type: "deposit", amount: 0, status: "completed" } ,
   { id: 4, type: "withdrawal", amount: 15000, status: "completed" } ,
   { id: 5, type: "deposit", amount: 25000, status: "failed" } ,
   { id: 6, type: "deposit", amount: 3500, status: "completed" } ,
];
// 2. Select the HTML list element where data will go
const listElement = document.getElementById("transaction-list");
// 3. Filter for High-Value (>= 20000) AND Completed
const highValueCompleted = transactions.filter(transaction => {
    return transaction.amount >= 20000 && transaction.status === "completed";
});
highValueCompleted.forEach(transaction => {
    //Create a new blank <li> element in memory
    const listItem = document.createElement("li");
    //Fill it with text (e.g., "Deposite: 50000")
    listItem.textContent = `${transaction.type.toUpperCase()}: #${transaction.amount}`;
    //Push the <li> inside our <ul> container
    listElement.appendChild(listItem);