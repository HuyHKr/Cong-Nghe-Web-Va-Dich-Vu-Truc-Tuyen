const ho=document.getElementById("ho");
const ten=document.getElementById("ten");
const emailorphone=document.getElementById("email");
const matkhau=document.getElementById("matkhau");
const ngay=document.getElementById("ngay");
const thang=document.getElementById("thang");
const nam=document.getElementById("nam");
const gioitinh=$("input[name='gioitinh']:checked");
const error=$("#error")
document.forms["form"].addEventListener("submit",(e)=>{
    e.preventDefault();
    if(ho.value==""||ten.value==""){
        reject("Vui lòng nhập đầy đủ họ tên!");
        return;
    }
    if(emailorphone.value==""){
        reject("Vui lòng nhập email hoặc số điện thoại");
        return;
    }
    if(!email(emailorphone.value)){
        return;
    }
    if(matkhau.value==""){
        reject("Vui lòng nhập mật khẩu!");
        return;
    }
    if(!dateCheck( Number(ngay.value), Number(thang.value),Number(nam.value))){
        return;
    }
    console.log("Hello")
    success()
  
})
$("input").focus(function(){
    console.log("click input")
    error.html("")
})
function success(){
    console.log("success")
    error.html(`<h1 class="success">Đăng kí thành công</h1>`)
}
function reject(message){
    console.log("reject")
    error.html(`<h1 class="error">${message}</h1>`)
}
function dateCheck(ngay,thang,nam){
    console.log(`ngay:${ngay}:${thang}:${nam}`)
    switch(thang){
        case 4:
        case 6:
        case 9:
        case 11:
            if(ngay>30)reject("Ngày không hợp lệ!");
            return false;
            
    }
    if(nam%4==0&&thang==2&&ngay!=29){reject("Ngày không hợp lệ !");return false};
    if(nam%4!=0&&thang==2&&ngay!=28){reject("Ngày không hợp lệ !"); return false;};
    console.log("return")
    return true;
}
function email(email){
    console.log(email);
    const arr=email.split("@");
    if(arr.length==1){
        for(let x of email){
            console.log(x)
            if(x.match(/[qwertyuiopasdfghjklzxcvbnm]/i)){
                flag=1;
                reject("Email phải chứa @!")
                return false
            }
        }
        if(email.length!=10){
                reject("Số điện thoại không hợp lệ!")
                return false;
            }
    }
    if(arr.length==2){
        if(arr[1]==''){
            reject("Email không hợp lệ!");
            return false;
        }
    }
    if(arr.length>2){
        reject("Email không hợp lệ!");
        return false;
    }
    return true;

    
}