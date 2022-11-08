const cats = ['tony', 'daisy', 'socks', 'rockie']

// TASK 1: 1.a

// const capitalisedCats = function () {
//   // transform each string to upper case using the toUpperCase() method
//   // create for loop to interate over array
//   const result = []
//   for (let i = 0; i < cats.length; i++) {
//     // console.log(cats[i].toUpperCase())
//     result[i] = cats[i].toUpperCase()
//   }
//   console.log(result)
//   return result
// }

// capitalisedCats()

// ------
// TASK 1: 1.b

const capitalisedCats = cats.map(function (catName) {
  console.log(catName.toUpperCase())
})
