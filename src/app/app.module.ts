import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexboxComponent } from './pages/flexbox/flexbox.component';
import { BootstrapComponent } from './pages/bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexboxComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
