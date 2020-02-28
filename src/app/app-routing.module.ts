import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { UpdateCountryComponent } from './components/update-country/update-country.component';


const routes: Routes = [
  { path: '', component: CountriesListComponent },
  { path: 'countries/:countryId', component: CountryDetailsComponent },
  { path: 'new', component: AddCountryComponent },
  { path:'update', component: UpdateCountryComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
