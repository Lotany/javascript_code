let num = 55;
result = num%2===0 ? 0 : 1;
switch (result){
    case 0:
        while(result<=10){
            result++
            console.log("Ayeeeeee!");
        }
        
        break;
    case 1:
        do{

            console.log("Ahooo ahoo ahoo");
            result++
        }
        while(result<=20)
        
        break;
    default:
        console.log("Not wworking as expected");

}