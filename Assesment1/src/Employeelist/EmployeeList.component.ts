import { Component,} from "@angular/core";

@Component({
    selector:'Employeelist-tag',
    templateUrl: './EmployeeList.component.html'
})

export class EmployeeListComponent
{
    employeelist:any[] = [
        {name:"Suyog", mdname: "Gopal" ,lastname: "vyas", gender:"male",age:23,DOB:'24 july 2003',address1:'gondia',address2:'Maharashtra'},
        {name:"Aman",mdname: "chandrashekar" ,lastname: "sahu", gender:"male",age:25,DOB:'2 jan 2000',address1:'wardha',address2:'Maharashtra'},
        {name:"viplav",mdname: "nitin" ,lastname: "khode", gender:"male",age:24,DOB:'2 feb 2000',address1:'pune',address2:'Maharashtra'},
        {name:"Chinmay",mdname: "Prashant" ,lastname: "deshkar", gender:"male",age:22,DOB:'7 june 2000',address1:'nagpur',address2:'Maharashtra'},
        {name:"saruabh",mdname: "sanjay" ,lastname: "agrawal", gender:"male",age:22,DOB:'8 july 2000',address1:'mumbai',address2:'Maharashtra'},
    ]
    
    
}