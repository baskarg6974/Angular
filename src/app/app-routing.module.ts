import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { EmployeesComponent } from './employees/employees.component';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentaccessComponent } from './departmentaccess/departmentaccess.component';
import { EmployeesDepartmentsComponent } from './employees-departments/employees-departments.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { PutdialogComponent } from './putdialog/putdialog.component';
import { SpinnerComponent } from './spinner/spinner.component';



const routes: Routes = [
 {path:'', pathMatch:"full", redirectTo:"/login"},
  {path:"app",component:AppComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"employees",component:EmployeesComponent},
  {path:"department",component:DepartmentComponent},
  {path:"departmentaccess",component:DepartmentaccessComponent},
  {path:"departmentaccess",component:DepartmentaccessComponent},
  {path:"employees-departments",component:EmployeesDepartmentsComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},

  {path:"putdialog",component:PutdialogComponent},
  {path:"spinner",component:SpinnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
