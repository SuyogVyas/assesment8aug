import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'employeeform-tag',
    templateUrl:'./templateForm.component.html'
})

export class EmployeeForm{

    age:number = 0;
    pincode:string = '';
    address:string = '';

    savePerson(form:NgForm)
    {
        console.log(form);
        console.log(this.age);
    }

    
}