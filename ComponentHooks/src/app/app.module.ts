import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './lifecycleHooks/child-component/child-component.component';
import { ParentComponentComponent } from './lifecycleHooks/parent-component/parent-component.component';
import { EmployeeListComponent } from './lifecycleHooks/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './lifecycleHooks/employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
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
