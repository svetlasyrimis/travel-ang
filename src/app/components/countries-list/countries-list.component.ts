import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/Country';
import { CountryService } from 'src/app/services/country.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  countries: Country[];
  // countries: Observable<Country[]>
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  
    
    // this.countryService.getCountries();
    this.countryService.getCountries().subscribe(countries =>
      
      this.countries = countries)
    //   .subscribe(countries => {
    //   this.countries = countries
    // });
    // this.countryService.getCountries()
    // this.countryService.loadAll().subscribe(countries => this.countries = countries)
    // this.countryService.loadAll();
    // this.countryService.allObservable.subscribe(d => this.countries = d);
   
    // this.countries = this.countryService.countries
    
  }

  deleteCountry(country: Country) {
    this.countries = this.countries.filter(del => del.id !== country.id);
    this.countryService.deleteCountry(country).subscribe();
  }

}
