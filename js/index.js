let arr = []

document.getElementById("themSo").onclick = function () {
    let soN = document.getElementById("soN").value;
    let newSoN = soN.split(",")
    let arrNew = []
    for (let i = 0; i < newSoN.length; i++) {
        arrNew.push(Number(newSoN))
    }
    arr = arr.concat(arrNew)
    document.querySelector(".inKetQua").innerHTML = `Mãng đã được lưu: ${arr}`
}


document.getElementById("tinhTongSoDuong").onclick = function () {
    let tong = 0;
    for (let i of arr) {
        if (i > 0) {
            tong += i
        }
    }
    document.getElementById("ketQua1").innerHTML = `Tổng các số dương: ${tong}`
}

document.getElementById("demSoDuong").onclick = function () {
    let count = 0;
    for (let i of arr) {
        if (i > 0) {
            count++
        }
    }
    document.getElementById("ketQua2").innerHTML = `Số dương đếm được: ${count}`
}

document.getElementById("timSoNhoNhat").onclick = function () {
    let soNhoNhat = Math.min(...arr)
    document.getElementById("ketQua3").innerHTML = `Số nhỏ nhất: ${soNhoNhat}`
}

document.getElementById("timSoDuongNhoNhat").onclick = function () {
    let arrSoDuong = []
    for(let i of arr){
        if(i>0){
            arrSoDuong.push(i);
        }
    } 
    let soDuongNhoNhat = Math.min(...arrSoDuong);
    
    document.getElementById("ketQua4").innerHTML = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
}

document.getElementById("timSoChan").onclick = function () {
    let soChanCuoiCung = -1
    for (let i of arr) {
        if (i % 2 == 0) {
            soChanCuoiCung = i
           
        }
    }
    document.getElementById("ketQua5").innerHTML = `Số chẵn cuối cùng: ${soChanCuoiCung}`
}

document.getElementById("doiCho").onclick = function() {
    let viTri1 = document.getElementById("viTri1").value;
    let viTri2 = document.getElementById("viTri2").value;

    if (viTri1 >= 0 && viTri1 < arr.length && viTri2 >= 0 && viTri2 < arr.length) {
        let vitri = arr[viTri1];
        arr[viTri1] = arr[viTri2];
        arr[viTri2] = vitri;
    } 
    document.getElementById("ketQua6").innerHTML = `Mảng đã được đổi chỗ: ${arr.join(", ")}`;
}
document.getElementById("sapXep").onclick=function(){
    let sapXep = arr.sort((a,b)=>a-b)
    document.getElementById("ketQua7").innerHTML=`Mãng đã được sắp xếp: ${sapXep}`
}
document.getElementById("timSoNguyenTo").onclick = function() {
    let ketQua = -1
    for(let i of arr){
        if(i <= 1){
            continue;
        }
        if(i<=3){
            ketQua = `Số nguyên tố đầu tiên: ${i}`
            break;
        }
        if(i % 2 == 0 || i% 3 == 0 ){
            continue;
        }
        let kiemTraSoNguyenTo = true;
        for (let j = 5; j * j <= i; j += 6) {
            if (i % j === 0 || i % (j + 2) === 0) {
                kiemTraSoNguyenTo = false;
                break;
            }
        }
        
        if (kiemTraSoNguyenTo) {
            ketQua = `Số nguyên tố đầu tiên: ${i}`;
            break;
        }
    }

    document.getElementById("ketQua8").innerHTML=ketQua
        
}
let arrNew1 = []
document.getElementById("themSo1").onclick=function(){
    let nhapSo = document.getElementById("nhapSo").value
    let newnhapSo = nhapSo.split(",")
    let arrNew2 = []
    for (let i = 0; i < newnhapSo.length; i++) {
        arrNew2.push(Number(newnhapSo))
    }
    arrNew1  = arrNew1.concat(arrNew2)
    document.getElementById("ketQua9").innerHTML = `Mãng đã được lưu: ${arrNew1}`
}

document.getElementById("demSoNguyen").onclick=function(){
    let count=0;
    for(let i of arrNew1){
        if(Number.isInteger(i)){
        count++;
        }
    }
    document.getElementById("ketQua10").innerHTML = `Mãng đã được lưu: ${count}`
}

document.getElementById("soSanh").onclick=function(){
    let countSoDuong = 0;
    let countSoAm = 0
    for(let i of arr){
        if(i > 0 ){
            countSoDuong ++;
        }else{
            countSoAm ++;
        }
    }
    if(countSoDuong > countSoAm){
        document.getElementById("ketQua11").innerHTML=`Số dương > số âm`
    }else
    if(countSoDuong < countSoAm){
        document.getElementById("ketQua11").innerHTML=`Số âm > số dương`
    }else
    if(countSoDuong = countSoAm){
        document.getElementById("ketQua11").innerHTML=`Số âm = số dương`
    }
}

