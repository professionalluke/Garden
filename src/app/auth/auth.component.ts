import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: FormGroup
  private _user = []
  User: User

  constructor(
    private _fb: FormBuilder, 
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.login = this._fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onLogin(): void {
    this._user.push(this.login)
    this.authService.login(this._user[0].value).subscribe(
      User => localStorage.setItem('token', User['token'])
      );
  }
}