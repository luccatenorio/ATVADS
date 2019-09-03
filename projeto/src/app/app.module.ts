import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaliadinizComponent } from './taliadiniz/taliadiniz.component';

@NgModule({
  declarations: [
    AppComponent,
    TaliadinizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
