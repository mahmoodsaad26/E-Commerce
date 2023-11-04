import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { signGuard } from './sign.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
  {path:'',canActivate:[authGuard],component:HomeComponent},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'about',canActivate:[authGuard],component:AboutComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent}, 
  {path:'brands',canActivate:[authGuard],component:BrandComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'checkOut/:cartId',canActivate:[authGuard],component:CheckOutComponent},
  {path:'allorders',canActivate:[authGuard],component:AllOrdersComponent},
  {path:'login',canActivate:[signGuard],component:SignInComponent},
  {path:'signup',canActivate:[signGuard],component:SignUpComponent},
  {path:'productDetails/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'setting',canActivate:[authGuard],loadChildren:()=>import('./setting/setting.module').then((x)=>x.SettingModule)},
  { path: 'cart',canActivate:[authGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },


  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
