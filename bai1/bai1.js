function bai1() {
    let input = document.getElementById("input").value.trim();

    let arr = input.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            document.getElementById("arr").innerHTML = "Mảng nhập không hợp lệ"
            document.getElementById("max").innerHTML = " ";
            break;
        } else {
            document.getElementById("arr").innerHTML = `${arr}`;
            document.getElementById("max").innerHTML = thuattoan(arr);
        }
    }
}

function thuattoan(inputarr) {
    let arr1 = [];
    var i = 0;
    while (i < inputarr.length) {
        let x = inputarr[i] * inputarr[i + 1];
        arr1.push(x);
        if (i == (inputarr.length - 2)) {
            break;
        }
        i++;
    }
    arr1.sort(function (a, b) { return b - a; });
    return arr1[0];
}
document.getElementById("kiemtra"), addEventListener("click", bai1);