import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl= 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login'

  constructor(private http: HttpClient) { }

  
}


