function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i == 0 || number < 2) {
            return false;
        }
    }
    return true;
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var number = array_1[_i];
    if (isPrime(number)) {
        sum += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
