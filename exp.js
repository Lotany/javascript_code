let add = (num,num2) =>{
    if(num + num2 < 0){
        console.log("Cant return a negative value");
    }
    else
    return num + num2;
}

let sum = add(3,5);

console.log(sum);