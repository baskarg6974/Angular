import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';

import { Employees } from '../employees';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { PutdialogComponent } from '../putdialog/putdialog.component';
import { TaskServiceService } from '../task-service.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

public pageName:string="Employees";

  employees1: Employees = new Employees
  public employees: Employees[] = [];
  ColumnMode = ColumnMode;
  loadingIndicator=true;

  constructor(public router :Router,private allemp: TaskServiceService, public matdialog: MatDialog,public matconfirm:MatConfirmDialogComponent ,  public putdialog:PutdialogComponent) { }
  ngOnInit(): void {

    this.allemp.getemps().subscribe((data: Employees[]) => {

      console.log(data);
      this.employees = data;
    }

    );

  }
  public deleteopt: any;

  public deleteempid: any;
  deleteit(empid: any) {
    this.deleteempid = empid;


    for (var i = 0; i <= this.employees.length - 1; i++) {
      if (this.deleteempid !== this.employees[i].empid) {
        this.deleteopt = "yes";
        console.log(empid);
      }
    }
  }

  deletefirst(empid:any) {

    this.allemp.deleteemp(empid).subscribe((data: Employees[]) => {

      console.log(data);
      this.employees = data;
    ;

    }

    );
  }
  public addnew: any;
  addnewemployee() {

    this.addnew = "yes";
  }


  empformsubmit() {

    this.allemp.postemp(this.employees1).subscribe((employees1) => {

      console.log(employees1);

    }

    );
  }
  public putempid: any;
  empchangesubmit() {

    this.allemp.putemp(this.putempid, this.putemp).subscribe((employees1) => {

      console.log(employees1);

    }

    );
  }

  public putemp: Employees = new Employees

  public putempdata: any;
  public startedit: any;
  editbutton(empid: any) {
    this.startedit = "yes";
    console.log(empid);

    this.putempid = empid;
    this.allemp.getempbyid(empid).subscribe((data: Employees[]) => {

      console.log(data);
      this.putempdata = data;


    }

    );

  }

  public alltasks1: any;
  public username: any;
  public employee: any;
  public searchclick: any;


  getempbyids(id: any) {
    this.allemp.getempbyid(id).subscribe((data: Employees[]) => {

      console.log(data);
      this.employee = data;
      this.searchclick = "yes";

    }

    );

  }
public res1:any;
openDialog(empid:any){
  this.deleteempid = empid;
  this.matdialog.open(MatConfirmDialogComponent).afterClosed().subscribe(res =>{if(res){
this.deletefirst(empid);

  }})
  
  console.log(empid);

}


public thisempid:any;

openputdialog(empid:any){
  
 
  const editdialogbox=this.matdialog.open(PutdialogComponent, {
    width: '400px',
  
  });
 editdialogbox.afterClosed().subscribe(res =>{if(res){this.empchangesubmit();}})
this.putdialog.employeeid=empid;
console.log(empid);
this.thisempid=empid;
}

}

