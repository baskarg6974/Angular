import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employees } from './employees';
import { NgForm } from '@angular/forms';
import { Department } from './login/department';
import { Empdto } from './empdto';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private baseUrl = "http://localhost:8079/api/emp/getallemp";
  private deleteUrl = "http://localhost:8079/api/deleteemp?id=";
  private getempbyids = "http://localhost:8079/api/getemp?id=";
  constructor(private http: HttpClient) { }
private baseApi="http://localhost:8079/api/emp";
private basedeptApi="http://localhost:8079/api/dept"

  getemps(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.baseUrl}`);
  }
  

  public getdepts() {


    return this.http.get<Department[]>(this.basedeptApi+'/getalldept');
  }

  public getempdto() {


    return this.http.get<Empdto[]>(this.baseApi+'/getallempdto');
  }

  public deleteemp(id: number) {
    return this.http.delete<Employees[]>(this.baseApi+'/deleteemp?empid=' + id);
  }


  public getempbyid(id: number) {


    return this.http.get<Employees[]>(this.baseApi+'/getemp?empid=' + id);
  }


public postemp(employees1:any)
{

  return this.http.post(this.baseApi+'/saveemp',employees1);
}

public putemp(empid:number,putemp:any)
{

  return this.http.put(this.baseApi+'/putemp?empid='+empid,putemp);
}




public getempbyname(name: string) {


  return this.http.get<Employees[]>(this.baseApi+'/getbyname?name=' + name);
}

}