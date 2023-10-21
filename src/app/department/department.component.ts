import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Department } from '../login/department';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public pageName:string="Departments"
  ColumnMode = ColumnMode;
  constructor(private taskservice:TaskServiceService) { 
    

      this.taskservice.getdepts().subscribe((data:Department[])=>{
    
        console.log(data);
        this.departments=data;
      }
      
      );
    }
    
  

  ngOnInit(): void {

    
  }

public departments:Department[]=[]

}