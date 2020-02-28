import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Country } from '../../models/Country';


@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {
  //accepting a prop
  @Input() country: Country;
  //sending the delete event to the parent via Event Emitter and we will go to the parent component to catch it
  @Output() deleteCountry: EventEmitter<Country> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(country) {
    
    this.deleteCountry.emit(country)
  }
}
