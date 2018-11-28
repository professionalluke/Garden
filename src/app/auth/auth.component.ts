import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: FormGroup
  token = ''
  private user = []


  constructor(
    private fb: FormBuilder, 
    private authService: AuthenticationService) { }


  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onLogin() {
    if (this.login.invalid) {
      alert ('email or password does not match');
    }
    this.authService.login(this.login.value).subscribe((res: any) => {this.token = res.token; sessionStorage.setItem('token', this.token)})
  }
  
}