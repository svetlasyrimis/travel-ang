import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/Country';
import { CountryService } from 'src/app/services/country.service';



@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  countries: Country[];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries
    })

    // console.log(history.state.data)
  }

  // addCountryToList(country: Country) {
  //   debugger;
  //   this.countryService.addCountry(country).subscribe(country => {
  //     this.countries.push(country)
  //   })
  // }

  addCountryToList(country: Country) {
    this.countries.push(country)
    
  }

  

  deleteCountry(country: Country) {
    this.countries = this.countries.filter(del => del.id !== country.id);
    this.countryService.deleteCountry(country).subscribe();
  }

}
