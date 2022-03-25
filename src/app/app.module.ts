import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OrdersComponent } from './orders/orders.component';
import { shoestoreService } from './shoestore.service';
import { MenandwomenComponent } from './menandwomen/menandwomen.component';
import { KidsComponent } from './kids/kids.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
// import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    OrdersComponent,
    MenandwomenComponent,
    KidsComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatIconModule
  ],
  providers: [shoestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
