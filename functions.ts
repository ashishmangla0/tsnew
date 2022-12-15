
//Rest aarguments
function add2(num1: number, num2: number,...num3: number[]){
    return num1+num2+num3.reduce((a,b) => a+b,0)
}

let numberArray = [1,1,1,1,1,1]
console.log(add2(1,1,...numberArray));
console.log(add2(1,1,3,4,5,6,7,8));

// generic Function
function getItems<Type>(items: Type[]): Type[]{
return new Array<Type>().concat(items)
}

let concatNumber = getItems<number>([1,2,3,4,5,6,7,8,9]);
let concatString = getItems<string>(['a','b,','c','d','e']);
console.log(concatNumber);
console.log(concatString);
