// happy coding 👻
console.log("happy coding 👻");
var fibonacci = function (num) {
    if (num == 0 || num == 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};
var sum = 0;
var count = 9;
var arr = [];
for (var i = 0; i < count; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(count + " số đầu tiên " + arr);
console.log("Tổng " + count + " số fibonacci đầu tiên là " + sum);
