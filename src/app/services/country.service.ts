import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../models/Country';
import { Observable, BehaviorSubject } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { tap, map,catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiURL: string = 'http://localhost:3000';
  public countries = new BehaviorSubject<Country[]>([])
  
  constructor(private http:HttpClient) { }
  
  // private handleError(errorResponse: HttpErrorResponse) {
  //   if (errorResponse.error instanceof ErrorEvent) {
  //       console.error('Client Side Error: ', errorResponse.error.message);
  //   } else {
  //       console.error('Server Side Error: ', errorResponse);
  //   }

  //   return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.');
  // }
  
  getCountries():Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/countries`)
    
  }

  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(`${this.apiURL}/countries`, country, httpOptions);
  }

  updateCountryData(newCountry) {
    this.countries.next(newCountry)
  }
  
  deleteCountry(country: Country): Observable<Country> {
    return this.http.delete<Country>(`${this.apiURL}/countries/${country.id}`);
  }

  updateCountry(country: Country): Observable<any> {
    const url = `${this.apiURL}/countries/${country.id}`;
    return this.http.put(url, country, httpOptions);
  }
}
