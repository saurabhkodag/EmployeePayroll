let _name;
let _gender;
let _profile_image;
let _department=[];
let _slider_value;
let _day;
let _month;
let _year;
let _notes;

class Employeepayroll{
    get name(){return _name;}
    set name(name){
        let reg = /^(([A-Z])([a-zA-Z0-9_]+){2,})$/;
        if(reg.test(name.value)){
            _name = name.value;
            /*const div = name.parentElement;
            div.className = 'inputs-div-name';
            const small = div.querySelector('small');
            small.innerText = ""*/
        }else{
            const div = name.parentElement;
            /*div.className = 'inputs-div-name error';
            const small = div.querySelector('small');*/
            console.log( "Name is invalid");
            
        }
    }

    get profileID(){return _profileID;}
    set profileID(profileID){
        _profileID = profileID;
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
        if(c_year>year.value){
            _day=day.value;
            _month=month.value;
            _year=year.value;
            console.log("valid date");
        }
        else if(c_year==year.value){
            if(c_month>month.value){
                _day=day.value;
                _month=month.value;
                 _year=year.value;
                console.log("valid date");  
            }
            else if(c_month==month.value){
                if(c_day>=day.value){
                    _day=day.value;
                    _month=month.value;
                     _year=year.value;
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
    get salary(){return _salary;}
    set salary(salary){
        _salary = salary;
    }
    
    get notes(){return _notes;}
    set notes(notes){
        _notes = notes;
    }
}

const validate=()=>{
    const empData = new Employeepayroll();

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
    empData.notes=document.getElementById("notes");
    
    console.log(empData.name);
    console.log(empData.profile_image);
    console.log(empData.gender);
    console.log(empData.department);
    console.log(empData.date);
    console.log(empData.day.value);
    console.log(empData.month.value);
    console.log(empData.year.value);
    console.log(empData.notes.value);
}


function createInnerHTML(){
   
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
    let empDataArray = createEmployeePayrollJSON();
    for(const EmpData of empDataArray){
        console.log(EmpData);
    innerHTML =`${innerHTML}
    <tbody>
<tr>
    <td>
        <img src="${EmpData._profilePic}">
    </td>
    <td>
      ${EmpData._name}
    </td>
    <td>
     ${EmpData._gender}
    </td>
    <td>
    <div class="dept">
    ${EmpData._department}
    </div>
    </td>
    <td>
    ${EmpData._salary}
    </td>
    <td>
    ${EmpData._startDate}
    </td>
    <td>
        <img id="$(EmpData._id)" class="icon" src="../assets/logo/delete.png" onclick="remove(this)" >
        <img id="$(EmpData._id)" class="icon" src="../assets/logo/write.png" onclick="update(this)" >
    </td>
    </tr>
    </tbody>
        `;
        
    }
    document.querySelector('#t').innerHTML=innerHTML;
}

function remove(node){
    let empPayrollData = EmployeePayrollList.find(EmpData => EmpData._id == node.id);
    if(!empPayrollData){
        console.log("No entry found !!");
        return;
    }
}
const createEmployeePayrollJSON = () =>{
    let EmployeePayrollList =[
        {
        _profilePic:"../assets/profile/Ellipse -1.png",
        _name:"sourabh",
        _gender:"male",
        _department:[
            'Engineering','Finance'
        ],
        _salary:"12000",
        _startDate:"12-2-2000",
        
        
    },
    {
        _profilePic:"../assets/profile/Ellipse -1.png",
        _name:"sourabh",
        _gender:"male",
        _department:[
            'Engineering','Finance'
        ],
        _salary:"10000",
        _startDate:"12-2-2000",
        

    },
    {
        _profilePic:"../assets/profile/Ellipse -1.png",
        _name:"sourabh",
        _gender:"male",
        _department:[
            'engineering','Finance'
        ],
        _salary:"12000",
        _startDate:"12-2-2000",
        
    }
    ]
   
    return EmployeePayrollList;
}

