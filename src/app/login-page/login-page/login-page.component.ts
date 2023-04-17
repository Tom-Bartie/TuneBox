import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  title = 'Login';

  constructor(private route: Router){ }

  navigateToHomePage(){
    this.route.navigate(['Home'])
  }
}
