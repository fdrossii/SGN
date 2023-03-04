import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddProdSupplierComponent } from './form-add-prod-supplier/form-add-prod-supplier.component';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainComponent } from './main/main.component';
import { ProductsSupplierTableComponent } from './products-supplier-table/products-supplier-table.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { SaleViewComponent } from './sale-view/sale-view.component';
import { SalesTableComponent } from './sales-table/sales-table.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'menu',
    component: MainMenuComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu'
  },
  {
    path: 'products',
    component: ProductsTableComponent    
  },
  {
    path: 'productSuppliers',
    component: ProductsSupplierTableComponent
  },
  {
    path: 'sales',
    component: SalesTableComponent
  },
  {
    path: 'saleView',
    component: SaleViewComponent
  },
  {
    path: 'addProduct',
    component: FormAddProductComponent
  },  
  {
    path: 'addProductSupplier',
    component: FormAddProdSupplierComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
