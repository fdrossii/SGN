import { Component, OnInit } from '@angular/core';
import { ProductSupplier } from '../interfaces/productSupplier';
import { ProductSupplierService } from '../services/product-supplier.service';

@Component({
  selector: 'app-products-supplier-table',
  templateUrl: './products-supplier-table.component.html',
  styleUrls: ['./products-supplier-table.component.scss']
})
export class ProductsSupplierTableComponent implements OnInit{
  
  displayedColumns = ['id', 'name', 'cuit', 'tel', 'address', 'city', 'province', 'delete']
  productsSupplier: ProductSupplier[] = [];

  

  constructor(private productSupplierService: ProductSupplierService){

  }

  ngOnInit(): void {
    this.getProductSupplier();  
  }

  getProductSupplier(): void{
    this.productSupplierService.getProductSupplier()
    .subscribe(productsSupplier => this.productsSupplier = productsSupplier);
  }

  deleteProductSupplier(id: number): void{
    this.productSupplierService.deleteProductSupplier(id)
    .subscribe(product => console.log('Product deleted: ', product));

    this.productsSupplier = this.productsSupplier.filter(product => product.id !== id);
  }
}
