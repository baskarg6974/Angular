
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-departmentaccess',
  templateUrl: './departmentaccess.component.html',
  styleUrls: ['./departmentaccess.component.css']
})
export class DepartmentaccessComponent implements OnInit {


  constructor(public router :Router) { }

  ngOnInit(): void {
  }
public accessgranted: any;
public accessdenied:any;

deptdetailsaccess(password:any){
  if(password==1234){
    this.accessgranted="yes";
    this.router.navigate(['department']);
  }
else{
  this.accessdenied="yes";
}
}

}
