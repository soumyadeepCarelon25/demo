import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageCmpComponent } from './home-page-cmp/home-page-cmp.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [ 
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomePageCmpComponent},
  {path:'pagenotfound', component:PageNotFoundComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'allusers',component:AllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
