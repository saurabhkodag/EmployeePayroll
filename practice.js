//<!-- <script>
        
//     function makeajaxcall(){
//         const xhttp=new XMLHttpRequest();
//         xhttp.onreadystatechange = function(){
//             if(xhttp.readyState==4){
//                 console.log(xhttp.responseText);
//             }
//         }
//         xhttp.open("get","hello.txt");
//         xhttp.send();
//     }
//     </script>  -->
    // function makeAjaxcall(methodType,url,callback,async=false,data=null){
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function(){
    //         if(xhttp.readyState==4){
    //         if(xhttp.status==200){
    //             callback(xhttp.responseText);
    //         }
    //         else{
    //             console.log("Failure response");
    //         }
    //         }
            
    //     }
    //     xhttp.open(methodType,url,async);
    //     xhttp.send();
    // } 
    // function discplayc(){
    // const baseUrl='http://localhost:3000/employees/';
    // function getUserDetails(data){
    //     console.log(data);
    // }
    // makeAjaxcall("get",baseUrl,getUserDetails,true);
    // } 
    // function deletec(){
    // const baseUrl2='http://localhost:3000/employees/1';
    // function deleteUser(data){
    //     console.log(data);
    // }
    //  makeAjaxcall("delete",baseUrl2,deleteUser,false);
    // }
    
     
// <!--               
//         <script>
//     function makeAjaxcall(methodType,url,callback,async=false,data=null){
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function(){
//             if(xhttp.readyState==4){
//             if(xhttp.status==200){
//                 callback(xhttp.responseText);
//             }
//             else{
//                 console.log("Failure response");
//             }
//             }
            
//         }
//         xhttp.open(methodType,url,async);
//         if(data){
//             xhttp.setRequestHeader("Content-Type","application/json");
//             xhttp.send(JSON.stringify(data));
//         }
//         else{
//             xhttp.send();
//         }
//         xhttp.send();
//     }
//      const baseUrl3='http://localhost:3000/employees/';
//     function adddata(data){
//         console.log(data);
//     }
//     let userdata ={
//        "name":"sachin",
//         "last_name":"kodag",
//         "email":"sourabh.kodag@morningstar.com"
//     }
//     makeAjaxcall("post",baseUrl3,adddata,false,userdata);
// </script>  -->
// <!-- Promise -->
// <!-- <script>
//     let makeAjaxcall=(methodType,url,async=false,data=null)=>{
//         return new Promise((resolve,reject)=>{
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function(){
            
//                 if(xhttp.readyState==4){
//             if(xhttp.status>=200 &&xhttp.status<=399){
                
//                 return resolve(xhttp.responseText);
//             }
//             else{
//                 console.log("Failure response");
//                 return reject(false);
//             }
//             }   
//             }
//             xhttp.open(methodType,url,async);
//         xhttp.send();
//         });
        
//     };
//     const baseUrl='http://localhost:3000/employees/';
//     makeAjaxcall("get",baseUrl,true).then((val)=>console.log(val)).then((val)=>console.log("true")).catch((val)=>console.log("false"));
//     const baseUrl2='http://localhost:3000/employees/3';
//      makeAjaxcall("delete",baseUrl2,false);
// </script> 
//     -->
    
// <!--               
//         <script>
//             function makeAjaxcall(methodType,url,async=false,data=null){
//                 return new Promise((resolve,reject)=>{
//                 let count=0;
//                 const xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = function(){
//                     if(xhttp.readyState==4 && count<=1){
//                         count++;
//                     if(xhttp.status==200){
//                         return resolve(xhttp.responseText);
//                     }
//                     else{
//                         return reject("Failure response");
//                     }
//                     }
                    
//                 }
//                 xhttp.open(methodType,url,async);
//                 if(data){
//                     xhttp.setRequestHeader("Content-Type","application/json");
//                     xhttp.send(JSON.stringify(data));
//                 }
//                 else{
//                     xhttp.send();
//                 }
               
//             });
//             }
//              const baseUrl3='http://localhost:3000/employees/';
            
//             let userdata ={
//                "name":"sachin",
//                 "last_name":"kodag",
//                 "email":"sourabh.kodag@morningstar.com"
//             }
//             makeAjaxcall("post",baseUrl3,false,userdata).then((val)=>console.log(val)).catch((val)=>console.log(val));
//         </script>  -->

    let makeAjaxcall=(methodType,url,async=false,data=null)=>{
        
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            
                if(xhttp.readyState==4){
            if(xhttp.status>=200 &&xhttp.status<=399){
                
                 console.log(xhttp.responseText);
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
     };
     document.querySelector(".display_a").addEventListener("click", async function (){
    const baseUrl='http://localhost:3000/employees/';
       await  makeAjaxcall("get",baseUrl,true);
     });
     async function delete_a(){
      const baseUrl2='http://localhost:3000/employees/4';
       await makeAjaxcall("delete",baseUrl2,false);
     }
     async function add_a(){
        const baseUrl3='http://localhost:3000/employees/';
        let userdata ={
            "profile_image": "../assets/profile/Ellipse -2.png",
            "name": "Sanket",
            "gender": "Male",
            "department": [
              "Engineering",
              "Finance",
              "HR"
            ],
            "salary": "2700",
            "date": [
              "20",
              "01",
              "1999"
            ]
          }
    await makeAjaxcall("post",baseUrl3,true,userdata)    
     }
    
// <!--        
//             <script>     
//             function makeAjaxcall(methodType,url,async=false,data=null){
//                 let count=0;
//                 const xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = async function(){
//                     if(xhttp.readyState==4 && count<=1){
//                         count++;
//                     if(xhttp.status>=200 &&xhttp.status<=399){
//                         await console.log(xhttp.responseText);
//                     }
//                     else{
//                         return reject("Failure response");
//                     }
//                     }
                    
//                 }
//                 xhttp.open(methodType,url,async);
//                 if(data){
//                     xhttp.setRequestHeader("Content-Type","application/json");
//                     xhttp.send(JSON.stringify(data));
//                 }
//                 else{
//                     xhttp.send();
//                 }
               
            
//             }
//              const baseUrl3='http://localhost:3000/employees/';
            
//             let userdata ={
//                "name":"demo",
//                 "last_name":"kodag",
//                 "email":"sourabh.kodag@morningstar.com"
//             }
//             makeAjaxcall("post",baseUrl3,false,userdata)
//         </script> 
//  -->