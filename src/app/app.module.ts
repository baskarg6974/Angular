import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { TaskServiceService } from './task-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { DepartmentComponent } from './department/department.component';
import { DepartmentaccessComponent } from './departmentaccess/departmentaccess.component';
import { EmployeesDepartmentsComponent } from './employees-departments/employees-departments.component';
import {MatIconModule} from '@angular/material/icon';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { PutdialogComponent } from './putdialog/putdialog.component';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularSvgIconModule } from 'angular-svg-icon';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    LoginComponent,
    DepartmentComponent,
    DepartmentaccessComponent,
    EmployeesDepartmentsComponent,
    MatConfirmDialogComponent,
    ForgotPasswordComponent,
    
    PutdialogComponent,
    SpinnerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,MatCardModule,FlexLayoutModule,MatToolbarModule,MatButtonModule,MatSelectModule,MatDialogModule ,MatMenuModule
  ,BrowserAnimationsModule,ReactiveFormsModule,MatMenuModule ,MatIconModule,MatProgressSpinnerModule,NgxDatatableModule,AngularSvgIconModule],
  providers: [TaskServiceService,LoginComponent,DepartmentaccessComponent,MatConfirmDialogComponent,EmployeesDepartmentsComponent,PutdialogComponent],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent,PutdialogComponent],
  
})
export class AppModule { }
