let _email;
let _id;
let _password;

class Employeepayroll{
    
    get email(){return _email;}
    set email(email){
        _email = email;
    }

    get id(){return _id;}
    set id(id){
        _id=id;
    }
    get password(){return _password;}
    set password(password){
        _password=password;
    }

}
const empData = new Employeepayroll();
function validate_signup(){

    empData.email=document.getElementById("email");
    empData.id=document.getElementById("phone");
    empData.password=document.getElementById("password");
   
    add();
}


function makeAjaxcall_add(methodType,url,callback,async=false,data=null){
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(xhttp.readyState==4){
                if(xhttp.status==200){
                    callback(xhttp.responseText);
                }
                else{
                    console.log("Failure response");
                }
                }
                
            }
            xhttp.open(methodType,url,async);
            if(data){
                xhttp.setRequestHeader("Content-Type","application/json");
                xhttp.send(JSON.stringify(data));
            }
            else{
                xhttp.send();
            }
            xhttp.send();
        }
function add(){
    console.log(empData.id.value);
    console.log(empData.email.value);
    console.log(empData.password.value);
         const baseUrl3='http://localhost:3000/credentials/';
        function adddata(data){
            console.log(data);
        }
        console.log(empData.name);
        let credentials ={
            "id": empData.id.value,
            "email": empData.email.value,
            "password": empData.password.value
          }
        makeAjaxcall_add("post",baseUrl3,adddata,false,credentials);
        }


