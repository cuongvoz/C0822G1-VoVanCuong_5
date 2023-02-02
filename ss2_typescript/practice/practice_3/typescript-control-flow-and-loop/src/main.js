var count = 1;
var n = 2;
var sum = 0;
while (count <= 30) {
    var check = true;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        sum += n;
        count++;
    }
    n++;
}
console.log("Tổng của 30 số nguyên tố đầu tiên là " + sum);
