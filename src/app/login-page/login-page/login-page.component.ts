import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  title = 'Login';

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      userName: [""],
      password: ["", Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password 
      });
      if(user){
        this.route.navigate(['Home'])
        alert('Login Succesful');
        this.loginForm.reset()
      
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  
  }
  navigateToHomePage(){
    this.route.navigate(['Home'])
  }

  navigateToRegistrationPage(){
    this.route.navigate(['Register'])
  }
}
