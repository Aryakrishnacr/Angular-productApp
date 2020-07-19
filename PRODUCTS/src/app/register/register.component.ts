import { Component, OnInit } from '@angular/core';
import { userModel } from '../register/register.model';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title:String="signup";
  constructor(private registerservice: RegisterService,private router: Router) {}
  user=new userModel(null,null,null,null,null);

  ngOnInit(): void {
  }
  adduser()
  {
    this.registerservice.newUser(this.user);
    console.log("called");
    alert("success");
    this.router.navigate(['/']);
  }

}
