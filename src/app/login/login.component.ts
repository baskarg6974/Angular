import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(public router :Router) { }

  ngOnInit(): void {
  }
  
  public checksubmit1:any;
  public email:any;
  public password:any;
  public username:any;
  public loginaccessdenied:any;
  public loading:any;


  submitresponse(email:any, password:any){
  this.email=email;
  this.password=password;
  
  if(this.email.valueOf()=="xxx@gmail.com" && this.password=="yyy" ){

this.loginaccessdenied=false;
  this.checksubmit1="yes";
  this.router.navigate(['home']);
  this.username="xxx";
  this.loading="yes";
  }
  else{
    this.loginaccessdenied=true;
  }
  
  }
  


  public formopen:any;


  
  
  
  
}