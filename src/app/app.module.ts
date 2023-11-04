import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';

import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SliderWrapperComponent } from './slider-wrapper/slider-wrapper.component';
import { TrimPipe } from './trim.pipe';
import { SearchPipe } from './search.pipe';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    ProductsComponent,
    SignInComponent,
    SignUpComponent,
    FeaturedProductsComponent,
    ItemProductComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SliderWrapperComponent,
    TrimPipe,
    SearchPipe,
    CheckOutComponent,
    AllOrdersComponent,
    LoaderComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
