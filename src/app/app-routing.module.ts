import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {OrdersComponent} from './orders/orders.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {KidsComponent} from './kids/kids.component';
import {MenandwomenComponent} from './menandwomen/menandwomen.component';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"orders",component:OrdersComponent},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"kids",component:KidsComponent},
  {path:"menandwomen",component:MenandwomenComponent},
  {path:"login",component:LoginComponent},
  {path:"account",component:AccountComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
