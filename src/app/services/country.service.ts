import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../models/Country';
import { Observable,BehaviorSubject } from 'rxjs';

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
  private countries = new BehaviorSubject<Country[]>([]);
  
  constructor(private http:HttpClient) { }

  getCountries():Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/countries`);
  }


  addCountry(country: Country): Observable<Country> {
    // debugger;
    return this.http.post<Country>(`${this.apiURL}/countries`, country, httpOptions);
  }

  updateCountryData(newCountry) {
    this.countries.next(newCountry)
    
  }

  addCountryToList(newCountry) {
    debugger;
    this.countries.next(newCountry)
  }
  
  deleteCountry(country: Country): Observable<Country> {
    
    return this.http.delete<Country>(`${this.apiURL}/countries/${country.id}`);
  }

  updateCountry(country: Country):Observable<any> {
    const url = `${this.apiURL}/countries/${country.id}`;
    return this.http.put(url, country, httpOptions);
  }
}
