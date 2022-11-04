//contructor function

function Animal(name,age,breed){
    this.name = name;
    this.age =age ;
    this.breed =breed;

}



let bushAnimal = new Animal("Lion",12,"deadly");
let domestic = new Animal("cat",2,"hairy")

console.log(bushAnimal, domestic);