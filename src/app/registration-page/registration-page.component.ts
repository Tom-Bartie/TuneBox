import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})


export class RegistrationPageComponent implements OnInit{

  public signUpForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName: [""],
      password: ["", Validators.required],
      email: [""]
    })
  }

  signUp(){
   return this.http.post<any>("http://localhost:3000/signupUsersList", this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGN IN SUCCESFUL');
      this.signUpForm.reset()
      this.route.navigate(['Login'])
    },err=>{
      alert("Something went wrong")
    })
  }
  navigateToHomePage(){
    this.route.navigate(['Home'])
  }
}
