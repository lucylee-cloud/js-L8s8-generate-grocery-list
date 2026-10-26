// Part A: Create a function to remove duplicates
var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard",
];
console.log(groceries.length);

const deleteDuplicates = function (list) {
  const cleanList = [];
  for (const item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

// Part B: Check length of new array
const newGroceries = deleteDuplicates(groceries);
console.log(newGroceries.length);

// Part C: Create numbered list of unique remaining grocery items
newGroceries.forEach(function (item, index) {
  console.log(`#${index + 1}-${item}`);
});
