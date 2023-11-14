import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProudactsComponent} from "./products/components/all-products/all-proudacts.component";
import {ProudactsDetailsComponent} from "./products/components/products-details/proudacts-details.component";
import {CartComponent} from "./carts/components/cart/cart.component";
const routes: Routes = [
  {path:"products",component:AllProudactsComponent},
  {path:"details",component:ProudactsDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
