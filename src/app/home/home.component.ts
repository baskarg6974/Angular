import { Component, OnInit } from '@angular/core';

import { Employees } from '../employees';
import { LoginComponent } from '../login/login.component';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public pageName:string="Home";
public searchby:any []=["empid","name","deptno","yearjoined"];

public alltasks1:any;
public username:any;
public employee:any;
public searchclick:any;
public isLoading:any;
  constructor(public login:LoginComponent,public taskservice:TaskServiceService) { 
   
    this.username=login.username;
    
  }

  ngOnInit(): void {
    
  }

  public checkNullRecords:any;
  getempbyids(id:any){
    const timeout=setTimeout(()=>{this.isLoading=true;},1000);
    

    this.taskservice.getempbyid(id).subscribe((data:Employees[])=>{
this.isLoading=false;
clearTimeout(timeout);
      console.log(data);
      this.employee=data;
      this.searchclick="yes";
    }
        );

      

  }
public byempid:any;
public byname:any;
public bydeptno:any;
public byyearjoined:any;

empbyempid(){
  this.byempid="yes";
}
empbyname(){
  this.byname="yes";
}




}