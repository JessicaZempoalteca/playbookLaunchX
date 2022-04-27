// Ejemplo 5: Objeto con método que recibe parámetros
const myOtherOtherPet = {
  name: "Horchato",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myOtherOtherPet.sayHelloToMyPet("Popa")