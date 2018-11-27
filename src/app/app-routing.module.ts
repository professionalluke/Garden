import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
