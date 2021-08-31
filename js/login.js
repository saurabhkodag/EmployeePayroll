window.addEventListener("DOMContentLoaded",(event)=>{
    if(localStorage.getItem('token')!=undefined){
    window.location = '../pages/index.html'; 
   }
   else{
    window.location = '../pages/login.html';   
   }
   
});
let makeAjaxcall=(methodType,url,async=false,data=null)=>{
    return new Promise((resolve,reject)=>{
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
            if(xhttp.readyState==4){
        if(xhttp.status>=200 &&xhttp.status<=399){
            
            return resolve(xhttp.responseText);
        }
        else{
            console.log("Failure response");
            return reject(false);
        }
        }   
        }
        xhttp.open(methodType,url,async);
    xhttp.send();
    });
    
};
function validate_login(){
    let phone=document.getElementById("phone");
    let password=document.getElementById("password");
    let p;
    console.log(phone)
    makeAjaxcall("get",`//localhost:3000/credentials/${phone.value}`,true).then((val) =>accept(JSON.parse(val))).catch((val)=>reject(val));
    
    console.log(phone.value);
}
function accept(val){

if(val.password==password.value){
localStorage.setItem("token",1);
window.location = '../pages/index.html';
}
else{
    console.log("noo");
}
}
function reject(val){
    console.log(val);
    window.location = '../pages/signup.html';   
}
function checkn(val){
     let reg= /^[7-9][0-9]{8}$/;
    if(reg.test(val)){    
        let input =document.getElementById("phone");
        const formControl = input.parentElement;
        formControl.className = 'form_control_success';
        const small = formControl.querySelector('small');
        small.innerText = "";
        
    }else{
        let input =document.getElementById("phone");
        const formControl = input.parentElement;
        formControl.className = 'form_control_error';
        const small = formControl.querySelector('small');
        small.innerText = "Invalid phone";
        
    }
}