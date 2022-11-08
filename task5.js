let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

// Task 5a - add catHorse to back of queue
const add = queue.push("catHorse")
console.log(queue)

// Task 5b - remove first item
const shift = queue.shift()
console.log(queue)

//Task 5c - add owlDonkey as first item
const unshift = queue.unshift('owlDonkey')
console.log(queue)

//Task 5d - remove last item
const remove = queue.pop()
console.log(queue)

//Task 5e - remove kangroo from middle
const middle = queue.splice(4,1)
console.log(queue)

//Task 5f
const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];
const merge = queue.concat(unofficialQueue)
console.log(merge)
