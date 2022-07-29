// Bài 1: 
// INPUT : 
//     - sum
// HANDLE :
//     - Tạo biến lưu sum, initial
//     - loop (sum > 10000) - initial++
// OUTPUT :
//     - in initial

document.getElementById("btnResult1").onclick = () => {
    let result1 = document.getElementById("result1");
    let sum = 0, i = 0;
    while (sum < 10000) {
        i++; 
        sum += i;
    }
    result1.innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}

// ==================================
// Bài 2: 
// INPUT : 
//     - số x, n
// HANDLE :
//     - Tạo biến lưu x, n, sum
//     - loop i=0; i <= n; i++
//         sum += x^i 
// OUTPUT :
//     - in sum

document.getElementById("btnResult2").onclick = function () {
    let inputX = +document.getElementById("inputX").value;
    let inputN = +document.getElementById("inputN").value;
    let sum = 0;
    let result2 = document.getElementById("result2");

    for (let i = 1; i <= inputN; i++) {
        sum += Math.pow(inputX,i);
        console.log(sum);
    }
    console.log(sum);
}