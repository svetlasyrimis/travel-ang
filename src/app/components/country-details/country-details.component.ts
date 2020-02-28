import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country: any
  isEdit: boolean = false
  
  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.country = this.location.getState();
    console.log(this.location.getState())
    // this.countryService.cast.subscribe(country => this.country = country)
    
  }

  loadForm() {
    this.isEdit = !this.isEdit
    //  this.countryService.cast.subscribe(country => this.country = country)
  }

  removeForm() {
    this.isEdit = !this.isEdit
  }

  

}
