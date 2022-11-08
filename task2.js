console.log('test connection')
let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(function(animal){
  // console.log(animal.startsWith("b", 0)===true)
  if(animal.startsWith("b", 0) === true){
    console.log(animal)
    return animal
  }


})

console.log(bListAnimals)
