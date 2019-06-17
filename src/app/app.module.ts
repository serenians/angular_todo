import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './controller/about/about.component';
import { ContactComponent } from './controller/contact/contact.component';
import { NavComponent } from './controller/nav/nav.component';
import { HomeComponent } from './controller/home/home.component';
import { TodoComponent } from './controller/todo/todo.component';
import { NotFoundComponent } from './controller/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    HomeComponent,
    TodoComponent,
    NotFoundComponent
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
