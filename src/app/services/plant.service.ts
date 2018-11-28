import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Plant } from '../models/plant.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})

export class PlantService {
  private plantUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';
  
  constructor(
    private _http: HttpClient) {}

  getPlants() : Observable<Plant[]> {
    return this._http.get<Plant[]>(this.plantUrl)
    .pipe(
      tap(_ => this.log('got plants')),
      catchError(this.handleError('getPlants', []))
    )
  }

  getPlant(id: number): Observable<Plant> {
    const url=`${this.plantUrl}`;
    return this._http.get<Plant>(url).pipe(
      catchError(this.handleError<Plant>(`getPlant id=${id}`))
    )
  }

  deletePlant(id: any): Observable<Plant> {
    let deleteUrl=`https://efa-gardenapp-backend.herokuapp.com/api/product/${id.id}`
    return this._http.delete<Plant>(deleteUrl, httpOptions)
  }

  private log(message: string) {  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error); 
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
    }
  }
}

