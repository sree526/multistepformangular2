import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  public email:string;
  public password:string;

  ngOnInit() {
  }
  active=true;
  login(){
    if(this.email=="test@test.com" && this.password=="test"){
     
       this.router.navigate(['/maindashboard']);
        console.log("hello");
    }
    }
  
}
