import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './views/datatable/datatable.component';
import {DataTablesModule} from 'angular-datatables';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { MediumComponent } from './views/medium/medium.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    HeaderComponent,
    HomeComponent,
    MediumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
