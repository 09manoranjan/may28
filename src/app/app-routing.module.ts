import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addRestaurant',component:AddRestaurantComponent},
  {path:'updateRestaurant',component:UpdateRestaurantComponent},
  {path:'updateRestaurant/:id',component:UpdateRestaurantComponent},
  {path:'listRestaurant',component:ListRestaurantComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
