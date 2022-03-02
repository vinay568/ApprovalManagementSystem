import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { IdFilterPipe } from './Pipes/id-filter.pipe';
import { CustomDirectiveDirective } from './Pipes/custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    IdFilterPipe,
    CustomDirectiveDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
