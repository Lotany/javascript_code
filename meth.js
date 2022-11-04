let animal1 = {
    name: 'cat',
    territory: 'house',
    age: 12,
    compare: function(other){
        if (this.age > other.age){
            console.log(this);
        }
            
        else{
            console.log(other);
        }
            
    }
}

let animal2 = {
    name: 'dog',
    territory: 'house',
    age: 2,
    greet: function(){
        console.log("Dogs provide security");
    }
}

let animal3 = {
    name: 'sheep',
    territory: 'house',
    age: 5,
    getGoat: function(){
        console.log("Goats are for meet");
    }
}


let animal4 = {
    name: 'cow',
    territory: 'zizi',
    age: 6,
    getcow: function(){
        console.log("Cows produce milk");
    }
}

animal1.compare(animal3);