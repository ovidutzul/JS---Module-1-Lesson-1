// Display the total number of apples and grapes on the screen. The difference between apples and grapes.

const apples = prompt("Insert the number of apples");
const grapes = prompt("Insert the number of grapes");
const total = Number.parseInt(apples) + Number.parseInt(grapes);
console.log("total:", total);
const diff = Number.parseInt(apples) - Number.parseInt(grapes);
console.log("diff:", diff);

// Putem parsa direct stringul

// const apples = Number.parseInt(prompt("Insert the number of apples"));
// const grapes = Number.parseInt(prompt("Insert the number of grapes"));
// const total = apples + grapes;
// console.log("total:", total);
// const diff = apples - grapes;
// console.log("diff:", diff);