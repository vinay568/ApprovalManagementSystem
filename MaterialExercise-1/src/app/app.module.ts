import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module'
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { UrlComponent } from './Components/url/url.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUrlComponent } from './Components/add-url/add-url.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UrlComponent,
    AddUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddUrlComponent]
})
export class AppModule { }
