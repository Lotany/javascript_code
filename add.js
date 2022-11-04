//add array
let n = [2,3,4,5,6,7,8,454,454,3];
let resu= n.filter(n => n>10)
            .map(n => n+1)
            .reduce((d,c) => d+c);

    console.log(resu);