// Compose a phrase using the template strings A has B bots in stock, where A, B = variables inserted into a line.

const companyName = "Cyberdine Systems";
const repairBoots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBoots + defenceBots} bots in stock`;
console.log(message); // Cyberdine Systems has 200 bots in stock