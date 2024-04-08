let eyeicon=document.querySelector('#eyeicon');
let password=document.querySelector('#password');

eyeicon.onclick=function(){
    if(password.type == "password"){
        password.type="text";
    }else{
        password.type="password";
    }
}