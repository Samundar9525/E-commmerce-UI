import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './widget/sidenav/sidenav.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';

const routes: Routes = [
   { path: 'dashboard/:id', component: SidenavComponent },
   { path: 'products', component: ProductsPageComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
