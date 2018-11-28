import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()

export class AuthenticationService {
  private userUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login'

  constructor(private http: HttpClient) { }

  login (user: User): Observable<User[]>{
    return this.http.post<User[]>(this.userUrl, user, httpOptions)
  }

}
