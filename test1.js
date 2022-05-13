//spread, rest

var myValue = Math.max(1,2,3,4,5,6,7,8);
//console.log(myValue);

function sum(...args){ //rest operator
let numSum = 0;
for(const arg of args){

numSum+=arg;
}
return numSum;
}

var myArray =[4,5,1,2];
console.log(sum(...myArray));//spread operation


//Design a function to return multiplication of first two arguments, and sum of the rest





/*function addMultiply(a,b,...args){
    let sum=0;
    let prod =1;
    sum = sum + a+ b;
    for(arg of args){
    prod = prod * arg
    }
    console.log(sum)
    console.log(prod)
    }*/



    function sumX(a,b,...args){
        let numSum = 0;
        let product = a*b;
        for(const arg of args){
        
        numSum+=arg;
        }
        return[product,numSum];
        }