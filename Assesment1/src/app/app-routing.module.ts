import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from 'src/Employeelist/EmployeeList.component';
import { EmployeeForm } from 'src/templateForm/templateForm.component';

const routes: Routes = [
  {path:'employee',component:EmployeeForm},
  {path:'employeelist',component:EmployeeListComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
