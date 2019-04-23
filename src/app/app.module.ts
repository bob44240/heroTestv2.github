import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatDesignComponent } from './components/mat-design/mat-design.component';
import { HandsOnComponent } from './components/hands-on/hands-on.component';


@NgModule({
  declarations: [
    AppComponent,
    MatDesignComponent

  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
