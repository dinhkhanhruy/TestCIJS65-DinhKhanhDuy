function bai2() {
    let input = document.getElementById("input").value.trim();

    let arr = input.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            document.getElementById("arr").innerHTML = "Mảng nhập không hợp lệ"
            document.getElementById("output").innerHTML = " ";
            break;
        } else {
            document.getElementById("arr").innerHTML = `${arr}`;
            document.getElementById("output").innerHTML = thuattoan(arr);
        }
    }
}
function thuattoan(inputarr) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < inputarr.length; i++) {
        if (i % 2 == 0) {
            team1 += parseInt(inputarr[i]);
        } else {
            team2 += parseInt(inputarr[i]);
        }
    }
    return [team1, team2];

}

document.getElementById("kiemtra").addEventListener("click", bai2);