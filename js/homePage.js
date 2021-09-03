let empPayrollList = new Array();
let user=[];

window.addEventListener("DOMContentLoaded",(event)=>{
    makeAjaxcall("get",site_properties.json_host_server,true).then((val)=>{document.getElementById("table-count").innerText = JSON.parse(val).length;InnerHTML(JSON.parse(val))}).catch((val)=>console.log("false")); 
    makeAjaxcall("get",site_properties.json_host_server,true).then((val)=>setu(JSON.parse(val))).catch((val)=>console.log("false"));    
});

let _name;
let _gender;
let _profile_image;
let _department=[];
let _slider_value;
let _day;
let _month;
let _year;
let _notes;
let payrollOjectList = [];
let _salary;
let _id;
let EmployeePayrollList=[];
class Employeepayroll{
    get id(){return _id;}
    set id(id){
        _id = id;
    }
    get name(){return _name;}
    set name(name){
        let reg = /^(([A-Z])([a-zA-Z0-9_]+){2,})$/;
        if(reg.test(name.value)){
            _name = name.value;
            let input =document.getElementById("name");
            const formControl = input.parentElement;
            formControl.className = 'form_control_success';
            const small = formControl.querySelector('small');
            small.innerText = "";
            
        }else{
            let input =document.getElementById("name");
            const formControl = input.parentElement;
            formControl.className = 'form_control_error';
            const small = formControl.querySelector('small');
            small.innerText = "Invalid name";
            
        }
    }
    
    get profile_image(){return _profile_image;}
    set profile_image(profile_image){
        _profile_image = profile_image;
    }
    
    get gender(){return _gender;}
    set gender(gender){
        _gender = gender;
    }

    get department(){return _department;}
    set department(department){
        _department.push( department);
    }

    get day(){return _day;}
    set day(day){
        _day = day;
    }
    get month(){return _month;}
    set month(month){
        _month = month;
    }
    get year(){return _year;}
    set year(year){
        _year = year;
    }
    get date(){return [_day,_month,_year];}
    set date([day,month,year]){
        let c_day=21;
        let c_month=8;
        let c_year=2021;
        let count=1;
        if(c_year>year.value){
            _day=day.value;
            _month=month.value;
            _year=year.value;
            console.log("valid date");
            count=1;
        }
        else if(c_year==year.value){
            if(c_month>month.value){
                _day=day.value;
                _month=month.value;
                 _year=year.value;
                 count=1;
                console.log("valid date");  
            }
            else if(c_month==month.value){
                if(c_day>=day.value){
                    _day=day.value;
                    _month=month.value;
                     _year=year.value;
                     count=1;
                    console.log("valid date");
                }
                else{
                    count=0;
                    console.log("invalid date");
                }
            }
            else{
                count=0;
                console.log("invalid date");
            }
        }
        else{
            count=0;
            console.log("invalid date");
        }
        if(count==1){
            
            let input =document.getElementById("dt");
            const formControl = day.parentElement;
            formControl.className = 'form_control_success_date';
            const small = formControl.querySelector('small');
            small.innerText = "";
            
        }else{
            let input =document.getElementById("day");
            const formControl = input.parentElement;
            formControl.className = 'form_control_error_date';
            const small = formControl.querySelector('small');
            small.innerText = "Invalid Date";
            
        }
    }
    get salary(){return _salary;}
    set salary(salary){
        _salary = salary;
    }
    
    get notes(){return _notes;}
    set notes(notes){
        _notes = notes;
    }
}
function checkn(name){
    let reg = /^(([A-Z])([a-zA-Z0-9_]+){1,})$/;
    if(reg.test(name)){    
        let input =document.getElementById("name");
        const formControl = input.parentElement;
        formControl.className = 'form_control_success';
        const small = formControl.querySelector('small');
        small.innerText = "";
        
    }else{
        let input =document.getElementById("name");
        const formControl = input.parentElement;
        formControl.className = 'form_control_error';
        const small = formControl.querySelector('small');
        small.innerText = "Invalid name";
        
    }
}
let makeAjaxcalls=(methodType,url,async=false,data=null)=>{
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
const empData = new Employeepayroll();  
function validate_json(){
    
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        
    
    empData.id=uuid;
    

    empData.name=document.getElementById("name");
    var ele = document.getElementsByTagName('input');     
    
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].name=="profile_image"){
            if(ele[i].checked){
                    empData.profile_image=ele[i].value;
            }
        }
        else if(ele[i].name=="gender")  {
            
            if(ele[i].checked){
                empData.gender=ele[i].value;
                        
                }            
            }
        else if(ele[i].name=="department"){
            
            if(ele[i].checked){
                        empData.department=ele[i].value;
            }
        }       
    }
    empData.date=[document.getElementById("day"),document.getElementById("month"),document.getElementById("year")];
    empData.salary=document.getElementById("salary-input").value;
    empData.notes=document.getElementById("notes");
    add(empData);
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
function add(empData){
    console.log(empData);
         const baseUrl3='http://localhost:3000/employees/';
        function adddata(data){
            console.log(data);
        }
        let userdata ={
            "id":empData.id,
            "profile_image":empData.profile_image,
            "name": empData.name,
            "gender": empData.gender,
            "department": empData.department,
            "salary":empData.salary,
            "date": [empData.day,
                    empData.month,
                    empData.year
                    ],
            "notes":empData.notes.value
          }
        makeAjaxcall_add("post",baseUrl3,adddata,false,userdata);
        }
        function checkForUpdates(){
            let List=[];
            let tempdata = localStorage.getItem('id');
            let PayrollData =[];
            makeAjaxcalls("get",site_properties.json_host_server+tempdata,true).then((val)=>set(JSON.parse(val))).catch((val)=>console.log("false"));
            localStorage.removeItem('id');
        }
        function set(PayrollData){
            console.log(PayrollData.name);
            document.getElementById('name').value=PayrollData.name;
            
            let profile = document.getElementsByName('profile_image');
            
            for(let i=0;i<profile.length;i++){
               
                    if(profile[i].value == PayrollData.profile_image){
                       
                       document.getElementById("profile-photo-" +(i+1)).checked = true;
                }
            }
            let gender = document.getElementsByName('gender');
            for(let i=0;i<gender.length;i++){
                if(gender[i].value == PayrollData.gender){
                    document.getElementById(gender[i].id).checked = true;
                }
            }
            let department = document.getElementsByName('department');
            
            for(let i=0;i<department.length;i++){
                if(PayrollData.department.includes(department[i].value)){
                   document.getElementById(department[i].id).checked = true;
                   
                }
            }
            document.getElementById('day').value = PayrollData.date[0];
           document.getElementById('month').value = PayrollData.date[1];
           document.getElementById('year').value = PayrollData.date[2];
           document.getElementById('notes').value = PayrollData.notes;
           console.log(PayrollData.salary);
           document.getElementById('vol').value = PayrollData.salary;
           let sHTML = `${PayrollData.salary}`;
           document.getElementById('demo').innerHTML = sHTML;
           
       }
       function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        window.location = '../pages/login.html'; 
    }   
    function openForm() {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("p_email").innerHTML+=`${localStorage.getItem("email")}`;
        document.getElementById("p_phone").innerHTML+=`${localStorage.getItem("phone")}`;
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }    
let filterUsers = function(event){
 keyword = document.getElementById("filter_users").value;

 filtered_users = user.filter(function(user){
      return user.name.indexOf(keyword) > -1; 
 });
 InnerHTML(filtered_users);
}
function setu(val){
user=val;
console.log(user);
}
document.getElementById("filter_users").addEventListener('keyup', filterUsers);

let isUpdate =false;
let employeePayrollObj={};

function InnerHTML(val){
    const len=val.length;
    // document.getElementById("table-count").innerText = len;
    const headerHTML =
    `<thead>
    <tr style="color: white;">
        <th style="width: 1%; margin: 0%;padding: 0%;"> </th>
        <th>NAME</th>
        <th>GENDER</th>
        <th>DEPARTMENT</th>
        <th>SALARY</th>
        <th>START DATE</th>
        <th>ACTION</th>
    </tr>
    </thead>`

    let innerHTML =`${headerHTML}`;
    let empDataArray =val;
    console.log(empDataArray);
    for(const EmpData of empDataArray){
    innerHTML =`${innerHTML}
    <tbody>
    <tr>
     <td>
        <img src="${EmpData.profile_image}">
    </td>
    <td>
      ${EmpData.name}
    </td>
    <td>
     ${EmpData.gender}
    </td>
    <td>   
        ${display(EmpData.department)}  
    </td>
    <td>
    ${EmpData.salary}
    </td>
    <td>
    ${EmpData.date}
    </td>
    <td>
        <img id="${EmpData.id}" class="icon" src="../assets/logo/delete.png" onclick="remove(this)" >
        <img id="${EmpData.id}" class="icon" src="../assets/logo/write.png" onclick="update(this)" >
     </td>
     </tr>
    </tbody>`;
        
    }
    document.querySelector('#t').innerHTML=innerHTML;
}
function remove(val){
    console.log(val.id);
    const baseUrl2='http://localhost:3000/employees/${val}';
     makeAjaxcall("delete",site_properties.json_host_server+val.id,false);
}
function display(val){
    let d="";
    for(let i=0;i<val.length;i++){
        
           d=`${d} <div class="dept">${val[i]}</div>`; 
        
    }
    return d;
}
function update(val){
    
    window.location = '../pages/employee_wage.html';
    localStorage.setItem("id",val.id);
}
