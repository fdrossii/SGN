import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'company', 'stock', 'editStock', 'delete'];
  products: Product[] = [];

  //Propiedad que se envía al formulario para que se muestre
  showFormProduct: boolean = false; 

  //Propiedades que se envian para actualizar el stock, vinculadas al formulario de stock
  stock: number = 0;
  id: number = 0;
  showFormUStock: boolean = false;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();    
  }

  getProducts(): void{
    this.productService.getProducts()
    .subscribe(products => this.products = products)
  }

  deleteProduct(id: number): void{
    this.productService.deleteProduct(id)
    .subscribe();
    this.products = this.products.filter(product => product.id !== id)
  }  

  //Métodos para mostrar/ocultar y manipular formulario de stock
  showFormStock(id: number, currentStock: number){
    this.showFormUStock = true;
    this.stock = currentStock;
    this.id = id;
  }

  hideFormStock($event: boolean): void{
    this.showFormUStock = $event;
  }

  restartId($event: number):void{
    this.id = $event;    
  }

  restartStock($event: number): void{
    this.stock = $event;
  }
  
  updateProductsList($event: boolean): void{
    if($event == true){
      this.getProducts();
    }    
  }  
  
}
