import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';

// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  // @Output() addCountryToList: EventEmitter<any> = new EventEmitter();
  countryForm;
  country;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private countryService: CountryService)
  {
    this.countryForm = this.formBuilder.group({
      name: '',
      capital: '',
      currency: '',
      best_season: '',
      meal_cost: null,
      hotel_cost: null,
      image_url: '',
      description: ''
    })
   }

  ngOnInit(): void {
    
  }


  addCountry() {
    debugger;
    let newCountry = this.countryService.addCountry(this.countryForm.value).subscribe(country => this.country = country);
    this.countryService.updateCountryData(newCountry);
    this.countryForm.reset();
    this.router.navigate([''])
  }
  


}
