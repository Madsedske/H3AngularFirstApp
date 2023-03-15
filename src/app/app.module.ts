import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeometriComponent } from './geometri/geometri.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VittighederComponent } from './vittigheder/vittigheder.component';
import { ECarsComponent } from './ecars/ecars.component';
import { FossilBilerComponent } from './fossil-biler/fossil-biler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataSource } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    GeometriComponent,
    VittighederComponent,
    ECarsComponent,
    FossilBilerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
