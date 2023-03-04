import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Component's Import
import { ProductsTableComponent } from './products-table/products-table.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainComponent } from './main/main.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductsSupplierTableComponent } from './products-supplier-table/products-supplier-table.component';
import { FormAddProductComponent } from './form-add-product/form-add-product.component'
import { FormEditStockComponent } from './form-edit-stock/form-edit-stock.component';
import { FormAddProdSupplierComponent } from './form-add-prod-supplier/form-add-prod-supplier.component';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { SaleViewComponent } from './sale-view/sale-view.component';
import { ModalComponent } from './modal/modal.component';

//Imports from Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolBarComponent,
    FooterComponent,
    ProductsTableComponent,
    MainMenuComponent,
    ProductsSupplierTableComponent,
    FormAddProductComponent,
    FormEditStockComponent,
    FormAddProdSupplierComponent,
    SalesTableComponent,
    SaleViewComponent,    
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
