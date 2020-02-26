import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country: any
  
  constructor(
    private router: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.country = this.location.getState();
  }

}
