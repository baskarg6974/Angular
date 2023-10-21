import { Component, Injectable, Input, OnInit,  } from '@angular/core';
import { Employees } from '../employees';
import { TaskServiceService } from '../task-service.service';

@Injectable()
@Component({
  selector: 'app-putdialog',
  templateUrl: './putdialog.component.html',
  styleUrls: ['./putdialog.component.css']
})
export class PutdialogComponent implements OnInit {
  @Input() employeeid:any;
  public putemp: Employees = new Employees;
  mployees1: Employees = new Employees;
  public putempdata: any;
  public putempid: any;
  
  constructor(public allemp:TaskServiceService) { }

  ngOnInit(): void {
    
    

    this.putempid = this.employeeid;
    console.log(this.putempid);
    this.allemp.getempbyid(this.putempid).subscribe((data: Employees[]) => {

      console.log(data);
      this.putempdata = data;


    }

    );
  }
 
  empchangesubmit() {

    this.allemp.putemp(this.putempid, this.putemp).subscribe((employees1) => {

      console.log(employees1);

    }

    );
  }
}