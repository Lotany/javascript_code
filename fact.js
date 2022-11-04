//factorial

function fact(n){
    if(n==0){
        return 1;
    }
    else
      return n * fact(n-1);
}

let num = 5;

result = fact(num)

console.log(result);