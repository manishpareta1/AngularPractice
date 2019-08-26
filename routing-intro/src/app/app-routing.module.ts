import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';


const routes: Route[] = [
  //redirecting by default to home compoenent
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'settings', 
    component: SettingsComponent,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {path: 'contact', component: ContactComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
