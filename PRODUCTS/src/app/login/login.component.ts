import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { loginModel } from './login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:String="Login";
  constructor(private registerservice: RegisterService,private router: Router) {}
  user=new loginModel(null,null);


  ngOnInit(): void {
  }

}
