window.addEventListener("DOMContentLoaded",(event) =>{
    createInnerHTML();
    let empData=createEmployeePayrollJSON();
    console.log("hi");
});

const val=document.getElementById("name");
let gender;
let profile_image;
let department=[];
let slider_value;
let day;
let month;
let year;
let notes;

var slider = document.getElementById("vol");
var output = document.getElementById("demo");
/*output.innerHTML = slider.value;
               
slider.oninput = function() {
slider_value = this.value;
output.innerHTML = this.value;
}*/
function checkename(input){
    let eregx=/^(([A-Z])([a-zA-Z0-9_]+){2,})$/;
    if(!eregx.test(input.value)){
        console.log("Not valid name");
    }
    else{
        console.log("valid name");
    }
}
function checkdate(day,month,year){
    let c_day=21;
    let c_month=8;
    let c_year=2021;
    if(c_year>year){
        console.log("valid date");
    }
    else if(c_year==year){
        if(c_month>month){
            console.log("valid date");  
        }
        else if(c_month==month){
            if(c_day>=day){
                console.log("valid date");
            }
            else{
                console.log("invalid date");
            }
        }
        else{
            console.log("invalid date");
        }
    }
    else{
        console.log("invalid date");
    }
}

const validate=()=>{
    let name=document.getElementById("name");
    var ele = document.getElementsByTagName('input');     
    
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].name=="profile_image"){
            if(ele[i].checked){
                    profile_image=ele[i].value;
            }
        }
        else if(ele[i].name=="gender")  {
            
            if(ele[i].checked){
                gender=ele[i].value;
                        
                }            
            }
        else if(ele[i].name=="department"){
            
            if(ele[i].checked){
                        department.push(ele[i].value);
            }
        }       
    }
    day=document.getElementById("day");
    month=document.getElementById("month");
    year=document.getElementById("year");
    notes=document.getElementById("notes");
    console.log(name.value);
    console.log(profile_image);
    console.log(gender);
    console.log(department);
    console.log(notes.value);
    console.log(day.value);
    console.log(month.value);
    console.log(year.value);
    checkename(name);
    checkdate(day.value,month.value,year.value);
    
}

function createInnerHTML(){
    console.log("hii");
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

    let innerHTML =`${headerHTML}`
    innerHTML =`${innerHTML}
    <tbody>
<tr>
    <td>
        <img src="../assets/profile/Ellipse -1.png">
    </td>
    <td>
      Amarpa Shashanka Keerthi Kodag
    </td>
    <td>
    Female
    </td>
    <td>
        <div class="dept">
            Sales
        </div>
        <div class="dept">
            HR
        </div>
        <div class="dept">
            Finance
        </div> 
         
    </td>
    <td>
    10,000
    </td>
    <td>
    29 Oct 2019
    </td>
    <td>
        <img class="icon" src="../assets/logo/delete.png">
        <img class="icon" src="../assets/logo/write.png">
    </td>
    </tr>
    </tbody>
        `
        document.querySelector('#t').innerHTML=innerHTML;
}

/*
function createInnerHTML(){
    console.log("hii");
    const headerHTML =
    "<th></th>" +
    "<th> Emp Name</th>"+
    "<th> Gender</th>"+
    "<th> Department</th>"+
    "<th> PhoneNo</th>"+
    "<th> Salary</th>"+
    "<th> Start Date</th>"+
    "<th> Actions</th>";

    let innerHTML =`${headerHTML}`
    innerHTML =`${innerHTML}
    <tr>
        <td><img class="profile" src="../assets/profile/Ellipse -1.png"</td>
        <td> ${empData.name}</td>
        <td> ${empData.gender}</td>
        <td>
        <div>Finance</div>
        <div>Engineer</div>
        </td>
        <td>7032456782</td>
        <td>${empData.salary}</td>
        <td>19-2-2000</td>
        <td>
        <img id =""
        `
}
const createEmployeePayrollJSON = () =>{
    let EmployeePayrollList =[
        {
        name:"sourabh",
        gender:"male",
        department:[
            'engineering','Finance'
        ],
        salary:"10000",
        startDate:"12-2-2000",
        note:'',
        id:1,
        profilePic:'../assets/profile/profile -1.png'
    }
    ]
    return EmployeePayrollList;
}
*/
/*
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
</thead>
<tbody>
<tr>
    <td>
        <img src="../assets/profile/Ellipse -1.png">
    </td>
    <td>
      Amarpa Shashanka Keerthi Kumar
    </td>
    <td>
    Female
    </td>
    <td>
        <div class="dept">
            Sales
        </div>
        <div class="dept">
            HR
        </div>
        <div class="dept">
            Finance
        </div> 
         
    </td>
    <td>
    10,000
    </td>
    <td>
    29 Oct 2019
    </td>
    <td>
        <img class="icon" src="../assets/logo/delete.png">
        <img class="icon" src="../assets/logo/write.png">
    </td>
    */