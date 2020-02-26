import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryItemComponent } from './components/country-item/country-item.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountryItemComponent,
    AddCountryComponent,
    CountryDetailsComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   { path: '', component: CountriesListComponent },
    //   { path: 'countries/:countryId', component: CountryDetailsComponent },
    //   { path: 'countries/new',pathMatch: 'full', component: AddCountryComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
