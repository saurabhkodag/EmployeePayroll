window.addEventListener("DOMContentLoaded",(event)=>{
    if(localStorage.getItem('token')!=undefined){
    window.location = '../pages/index.html'; 
   }
   else{
    window.location = '../pages/login.html';   
   }
   
});