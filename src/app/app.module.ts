import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolComponent } from './Components/school/school.component';
import { FormsModule } from '@angular/forms';
import { School1Component } from './school1/school1.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    School1Component
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
