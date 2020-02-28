import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Country } from '../../models/Country';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {
  @Input() country;
 
  @Output() removeForm: EventEmitter<Country> = new EventEmitter();
  countryForm;

  
  constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
    // this.countryService.getCountries().subscribe(countries => {
    //   // debugger;
    //   // this.router.navigate(['']);
    // });
  }

  initializeForm() {
    this.countryForm = new FormGroup({
      name: new FormControl(''),
      capital: new FormControl(''),
      currency: new FormControl(''),
      best_season: new FormControl(''),
      meal_cost: new FormControl(''),
      hotel_cost: new FormControl(''),
      image_url: new FormControl(''),
      description: new FormControl(''),
      id: new FormControl('')
    
    })

    const { name, capital, currency, best_season, meal_cost, hotel_cost, image_url, description,id} = this.country
    
    this.countryForm.setValue({name, capital, currency, best_season, meal_cost, hotel_cost, image_url, description, id})
  }

  onSubmit() {
    let updated = this.countryService.updateCountry(this.countryForm.value).subscribe(country => this.country = country);
    this.countryService.updateCountryData(updated);
    this.countryForm.reset();
    this.router.navigate(['']);

  }

}
