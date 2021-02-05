/**
 * khối 1: 
 * chiều dài và chiều rộng
 * 
 * khối 2:
 * B1: tạo 2 biến chieuDai (chiều dài) và chieuRong (chiều rộng)
 *     tạo 2 biến chuVi (chu vi) và dienTich (diện tích)
 * 
 * 
 * B2: viết công thức tính chu vi và diện tích HCN cho mỗi function riêng
 *     chu vi = (parseFloat(chieuDai)+parseFloat(chieuRong))*2
 *     diện tích = (parseFloat(chieuDai)*parseFloat(chieuRong))
 * 
 * B3: in kết quả
 * 
 * 
 * khối 3: in kết quả diện tích, chu vi của HCN
 * 
 */



var btnTinhCV = document.getElementById("btnTinhCV");
var btnTinhDT = document.getElementById("btnTinhDT");
console.log(btnTinhCV,btnTinhDT);
 
btnTinhCV.addEventListener("click", function(e){
    e.preventDefault();
    var chieuDai = document.getElementById("inputCD").value;
    var chieuRong = document.getElementById("inputCR").value;


    var chuVi = (parseFloat(chieuDai)+parseFloat(chieuRong))*2;
    var tb = document.getElementById("txtThongBao");
    tb.innerHTML = "Chu vi HCN: "+chuVi;
    console.log(chuVi);
});

btnTinhDT.addEventListener("click", function(e){
    e.preventDefault();
    var chieuDai = document.getElementById("inputCD").value;
    var chieuRong = document.getElementById("inputCR").value;
    
    var dienTich = (parseFloat(chieuDai)*parseFloat(chieuRong));
    var tb = document.getElementById("txtThongBao");
    tb.innerHTML = "Dien tich HCN: "+dienTich;
    console.log(dienTich);
});