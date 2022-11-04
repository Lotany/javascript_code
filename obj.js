//objects in javascript

//object animal
let animal = {
    name: 'Cats',
    kingdom: 'forest',
    sex: 'male',
    food: 'grass',
    mating: 'seasonal',
    cultue: 'none',
    lifespan: 5,
    domestic: {
        name: 'cow',
        keptfor: 'milk',
        span: 10,
    }
}

//looping through the object


for(let key in animal.domestic){
    console.log(key, animal.domestic[key]);

}
