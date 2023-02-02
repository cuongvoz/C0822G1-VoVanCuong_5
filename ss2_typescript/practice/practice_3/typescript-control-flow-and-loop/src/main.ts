let count = 1;
let n = 2;
let sum = 0;
while (count <= 30) {
    let check = true;
    for (let i = 2;i < n;i++) {
        if (n % i == 0) {
            check = false;
            break
        }
    }
    if (check) {
        sum += n;
        count++;
    }
    n++;
}
console.log("Tổng của 30 số nguyên tố đầu tiên là " + sum);