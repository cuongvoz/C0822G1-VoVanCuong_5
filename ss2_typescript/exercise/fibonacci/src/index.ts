// happy coding 👻
console.log("happy coding 👻");
let fibonacci = function (num: number) : number {
 if (num == 0 || num == 1) {
     return num;
 }
 return fibonacci(num -1) + fibonacci(num - 2);
}
let sum :number = 0;
let count :number = 9;
let arr: Array<number> = [];
for (let i = 0; i < count; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(count + " số đầu tiên " + arr);
console.log("Tổng " + count + " số fibonacci đầu tiên là " + sum);