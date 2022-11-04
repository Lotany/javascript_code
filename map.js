//filter map and for each in action

let nums = [2,4,5,7,45,5,4,3,43,34,6];
    nums.filter(n => n>40)
     .map(n => n*2)
    .forEach(n =>{
        console.log(n);
    })