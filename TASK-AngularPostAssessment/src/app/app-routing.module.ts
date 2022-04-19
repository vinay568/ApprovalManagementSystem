import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';

import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { AdminAccessGuard } from './Guards/admin-access.guard';

const routes: Routes = [

  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent },
  {path:'adminHome',component:AdminHomeComponent },
  {path:'mybooks',component:ViewBooksComponent },
  {path:'notfound',component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
