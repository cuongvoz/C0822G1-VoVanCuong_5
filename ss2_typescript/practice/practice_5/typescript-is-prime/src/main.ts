function isPrime(number : number) {
    if (number < 2) {
        return false;
    }
   for (let i = 2 ;i < number;i++) {
       if (number % i == 0 || number < 2) {
           return false;
       }
   }
    return true;
}
let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum = 0;
for (let number of array) {
    if (isPrime(number)) {
        sum += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);