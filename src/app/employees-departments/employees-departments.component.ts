import { Component, Injectable, OnInit } from '@angular/core';
import { Empdto } from '../empdto';
import { TaskServiceService } from '../task-service.service';


@Injectable()
@Component({
  selector: 'app-employees-departments',
  templateUrl: './employees-departments.component.html',
  styleUrls: ['./employees-departments.component.css']
})
export class EmployeesDepartmentsComponent implements OnInit {
  public pageName:string="Employees Department Info"


  public employeesdto:Empdto[]=[];
  constructor(private taskservice:TaskServiceService) { 

    this.taskservice.getempdto().subscribe((data:Empdto[])=>{

      console.log(data);
      this.employeesdto=data;
    }
    
    );


  }

  ngOnInit(): void {
  }

}






