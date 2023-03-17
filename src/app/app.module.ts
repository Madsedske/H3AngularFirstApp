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
import { MorsePipe } from './morse.pipe';
import { MorseCodeComponent } from './morse-code/morse-code.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent, },
  {
    path: 'product', component: ProductComponent,
    children: [
      { path: 'blue', component: BlueComponent, outlet: 'Nora' },
      { path: 'red', component: RedComponent, outlet: 'Theo' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    GeometriComponent,
    VittighederComponent,
    ECarsComponent,
    FossilBilerComponent,
    MorsePipe,
    MorseCodeComponent,
    BlueComponent,
    RedComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
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
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
