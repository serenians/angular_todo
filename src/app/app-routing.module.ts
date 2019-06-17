import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/controller/about/about.component'
import { HomeComponent } from '../app/controller/home/home.component'
import { ContactComponent } from '../app/controller/contact/contact.component'
import { TodoComponent } from '../app/controller/todo/todo.component'
import { NotFoundComponent } from '../app/controller/not-found/not-found.component'
import { fromEventPattern } from 'rxjs';
import { AppComponent } from './app.component';
const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'todo', component: TodoComponent},
{path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
