import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from '../models/plant.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PlantService {
  private plantUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
  
  constructor(private _http: HttpClient) { }

  getPlants() : Observable <Plant[]> {
    return this._http.get<Plant[]>(this.plantUrl)
  }
  

}
