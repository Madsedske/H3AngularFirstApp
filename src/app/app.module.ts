import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeometriComponent } from './geometri/geometri.component';
import { FormsModule } from '@angular/forms';
import { VittighederComponent } from './vittigheder/vittigheder.component';

@NgModule({
  declarations: [
    AppComponent,
    GeometriComponent,
    VittighederComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
