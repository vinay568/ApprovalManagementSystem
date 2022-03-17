import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUrlComponent } from './Components/add-url/add-url.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { UrlComponent } from './Components/url/url.component';

const routes: Routes = [

  {path:"",redirectTo:'url',pathMatch:"full"},
  {path:"url",component:UrlComponent},
  {path:"addUrl",component:AddUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
