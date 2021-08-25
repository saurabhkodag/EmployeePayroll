let _name;
let _gender;
let _profile_image;
let _department=[];
let _slider_value;
let _day;
let _month;
let _year;
let _notes;
let _salary;
let _id;
class Employeepayroll{
    get id(){return _id;}
    set id(id){
        _id = id;
    }
    get name(){return _name;}
    set name(name){
        _name = name.value;
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
        _day=day.value;
        _month=month.value;
        _year=year.value; 
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
var slider = document.getElementById("vol");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
let slider_value;              
slider.oninput = function() {
slider_value = this.value;
output.innerHTML = this.value;
}

const empData = new Employeepayroll();
const validate=()=>{
    
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
    empData.salary=slider_value;
    empData.notes=document.getElementById("notes");
    
    console.log(slider_value);
    createPayrollObject();
}
