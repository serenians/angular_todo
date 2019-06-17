import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/controller/about/about.component'
import { HomeComponent } from '../app/controller/home/home.component'
import { ContactComponent } from '../app/controller/contact/contact.component'
import { fromEventPattern } from 'rxjs';
import { AppComponent } from './app.component';
const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
