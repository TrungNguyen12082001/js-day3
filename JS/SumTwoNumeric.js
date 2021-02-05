/**
 * khối 1: Tạo 1 biến n có 2 ký số
 * 
 * khối 2: 
 * B1: tạo biến n có 2 ký số
 *     tạo biến tongHaiKySo
 *     tạo biến tb (thông báo) để hiện thông báo kết quả
 * 
 * B2: nhập công thức tính tongHaiKySo (tổng hai ký số)
 *     tongHaiKySo = parseFloat((n%10))+parseFloat(Math.floor(n/10));
 * 
 * B3: in kết quả
 * 
 * khối 3: in kết quả tính tổng 2 ký số
 * 
 */



var btnTinhTongHaiKySo = document.getElementById("btnTinhTongHaiKySo");
console.log(btnTinhTongHaiKySo);

btnTinhTongHaiKySo.addEventListener("click", function(e){
    e.preventDefault();
    var n = document.getElementById("inputN").value;
    
    var tongHaiKySo = parseFloat((n%10))+parseFloat(Math.floor(n/10));
    var tb = document.getElementById("txtThongBao");
    tb.innerHTML = "Tong hai ky so: "+tongHaiKySo;
});
