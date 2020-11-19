import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParentCompComponent
  },
  {
    path: 'products',
    component: AllproductsComponent
  },
  {
    path: 'singleproduct/:productname',
    component: SingleProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'wishlist',
    component: WishListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'singleproduct/:productID',
    component: SingleProductComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
