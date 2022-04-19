import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { MaterialModule } from './material.module';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { EditBookComponent } from './Components/edit-book/edit-book.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './Pipes/filter.pipe';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { AdminAccessGuard } from './Guards/admin-access.guard';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    AdminHomeComponent,
    AddBookComponent,
    EditBookComponent,
    FilterPipe,
    ViewBooksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [AdminAccessGuard],
  bootstrap: [AppComponent],
  entryComponents :[AddBookComponent,EditBookComponent]
})
export class AppModule { }
