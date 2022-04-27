// Ejemplo 3: Objeto con diferentes propiedades
const myPet = {
    name: "Bill",
    age: 2,
    nicknames: [
     "Billchis",
      "Pistolero",
      "Billsito"
    ],
    address: {
      zip_code: "90001",
      street: "Venustiano Carranza",
      city: "Tlaxcala"
    }
  }
  console.log("\nEjemplo 3: Objeto con diferentes propiedades")
  console.log(myPet)
  console.log("Mi nombre es " + myPet.name + " y soy un perrito")
  console.log(myPet["address"])