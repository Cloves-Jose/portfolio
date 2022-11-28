import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempoWidgetMainComponent } from './components/tempo-widget-main/tempo-widget-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TempoWidgetMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
