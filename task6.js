const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

// Task 6a
const sort = broomCupboard.sort(function(b,a){
  return b-a
})
console.log(sort)

// Task 6b
const sort2 = potions.sort(function(b,a){
  return a.shelf-b.shelf
})
console.log(sort2)

//Task 6c
function alphabetizer(names) {
  return names.map(function(name) {
    var full = name.split(" "),
      last = full.pop();
    return last + " " + full.join(" ");
  }).sort();
}

console.log(alphabetizer(students));