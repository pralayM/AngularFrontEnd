import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductCompComponent } from './product-comp/product-comp.component';
import { TipNtrickCompComponent } from './tip-ntrick-comp/tip-ntrick-comp.component';
import { CobUserpicsCompComponent } from './cob-userpics-comp/cob-userpics-comp.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { LandingCompComponent } from './landing-comp/landing-comp.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { InspirationsComponent } from './inspirations/inspirations.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { AllordersComponent } from './allorders/allorders.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { ChatComponent } from './chat/chat.component';
import { IssuesComponent } from './issues/issues.component';
import { ReviewComponent } from './review/review.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    ParentCompComponent,
    ProductCompComponent,
    TipNtrickCompComponent,
    CobUserpicsCompComponent,
    LandingCompComponent,
    InspirationsComponent,
    AllproductsComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    PaymentComponent,
    AllordersComponent,
    SingleOrderComponent,
    WishListComponent,
    ProfileComponent,
    SupportComponent,
    ChatComponent,
    IssuesComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    CarouselModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
