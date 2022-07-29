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
// Bài 2:  Tính tổng x ^ n
// INPUT : 
//     - số x, n
// HANDLE :
//     - Tạo biến lưu x, n, sum
//     - loop i=1; i <= n; i++
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
    }
    result2.innerHTML = "Tổng: " + sum;
}

// ==================================
// Bài 3: Tính giai thừ
// INPUT : 
//     - số n
// HANDLE :
//     - Tạo biến lưu n, factorial
//     - loop i=1; i <= n; i++
//         factorial = i * i
// OUTPUT :
//     - in n

document.getElementById("btnResult3").onclick = function () {
    let numberN = +document.getElementById("numberN").value;
    let result3 = document.getElementById("result3");
    let factorial = 1;
    for (let i = 1; i <= numberN; i++) {
        factorial *= i;
    }
    result3.innerHTML = "Giai thừa của " + numberN + "! : " + factorial;
}

// ==================================
// Bài 4: Tạo thẻ div
// INPUT : 
//     - số array
// HANDLE :
//     - Tạo biến lưu array
//     - loop i=0; i < array; i++
//         check i == chẳn in ra div xanh
//          ngược lại in div đỏ
// OUTPUT :
//     - in div xanh div đỏ sang kẻ

document.getElementById("btnResult4").onclick = function () {
    let numberN = +document.getElementById("numberN").value;
    let result4 = document.getElementById("result4");
    let myArr = [1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] % 2 === 0) {
            result4.innerHTML += "<div style='background-color: red; color: #fff'>"+myArr[i] + "chẳn" +"</div>"
        } 
        else {
            result4.innerHTML += "<div style='background-color: blue; color: #fff'>"+myArr[i]+ "lẻ" +"</div>"
        }
    }
    
}

// ==================================
// Bài 4: In số nguyên tố
// INPUT : 
//     - một số
// HANDLE :
//     - Tạo biến lưu số nhập
//     - tạo hàm kiểm tra số nguyên tố
//     - loop từ 2 > căn bặc 2 cùa số input
//     - check trong đoạn này số input mà chia cho số nào thì ko là snt false
//     - ngược lại là snt true.
//     - loop từ 2 tới số input 
//     - check nếu function kiểm tra số nguyên tố == true in ra
//     - ngược lại bỏ qua loop tiếp
// OUTPUT :
//     - in các só nguyên tố.

document.getElementById("btnResult5").onclick = function () {
    let inputNumber = +document.getElementById("inputNumber").value;
    let btnResult5 = document.getElementById("result5");
    for (let i = 2; i <= inputNumber; i++) {
        if (checkPrime(i)) {
            btnResult5.innerHTML += i + " "
        }        
    }
}

function checkPrime(numberCheck) {
    for (let i = 2; i <= Math.sqrt(numberCheck); i++) {
        if (numberCheck % i === 0)
            return false;
    }
    return true;
}