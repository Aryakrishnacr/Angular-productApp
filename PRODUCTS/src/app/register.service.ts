import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  
  newUser(user){
    return this.http.post("http://localhost:3000/signup",{"user":user})
    .subscribe(data=>{console.log(data)})
  }
}
