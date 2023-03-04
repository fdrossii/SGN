import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../interfaces/invoice';
import { Product } from '../interfaces/product';
import { SaleItem } from '../interfaces/saleItem';
import { ProductService } from '../services/product.service';
import { SaleService } from '../services/sale.service';
import { RequestQueue } from '../utils/requestqueue/RequestQueue';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-sale-view',
  templateUrl: './sale-view.component.html',
  styleUrls: ['./sale-view.component.scss']
})
export class SaleViewComponent implements OnInit {
  
  displayedColumns1: string[] = ['name', 'price' ,'units', 'delete',  'cost'];
  displayedColumns2: string[] = [ 'id', 'name', 'price', 'stock', 'units'];
  products: Product[] = [];
  
  productsSale: SaleItem[] = [];  


  constructor(private productService: ProductService, private saleService: SaleService, private requestQueue: RequestQueue,
    private router: Router, private dialog: MatDialog){
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  //Métodos para manejar la tabla

  addToSaleList(name: string, units: string, price: number): void{
    let newUnits: number = parseInt(units);
    let index: number = this.getIndex(name);    
      this.productsSale = [...this.productsSale, {
        name: name,
        price: price,
        units: newUnits,
        total: price * newUnits
      }];
    this.removeStock(index, newUnits);
  }
  
  deleteToSaleList(saleItem: SaleItem, units: number): void{
    this.productsSale = this.productsSale.filter(j => j != saleItem );
    let index = this.getIndex(saleItem.name);
    this.restoreStock(index, units);
  }

  getTotalCost(){
    return this.productsSale.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

  removeStock(index: number, units: number){
    this.products[index].stock = this.products[index].stock - units;
  }

  restoreStock(index: number, units: number): void{
    this.products[index].stock = this.products[index].stock + units;
  }

  getId(name: String): number{
    let id: number = 0;    
    this.products.forEach( j =>{
      if(j.name === name){
        id = j.id                   
      }
    });
    return id;
  }

  getIndex(name: string): number{
    let index: number = 0;
    this.products.forEach(j => {
      if(j.name === name){
        index = this.products.indexOf(j);
      }
    });
    return index;
  }

  getCurrentStock(name: string): number{
    let currentStock: number = 0;
    this.products.forEach( j =>{
      if(j.name === name){
        currentStock = j.stock            
      }
    });
    return currentStock;
  }
  
  openModal(): void{
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { title: '', message: 'VENTA REALIZADA CON ÉXITO', url:'/sales'}
    });
  } 
  
  //Método aceptar

  submit(): void{
    
    this.generateInvoicePdf();    
      this.saleService.addSale({date: 'hoy',total: this.getTotalCost()}).subscribe();
      this.productsSale.forEach( j =>{
        let id: number= this.getId(j.name);
        let currentStock: number = this.getCurrentStock(j.name);
        this.requestQueue.addRequest({url:`http://localhost:8080/api/products/${id}`, params: currentStock});
      });     
      this.requestQueue.proccesQueue();
      this.openModal();
            
  }

  //Métodos para generar facturar

  generateInvoicePdf(){
    this.getInvoicePdf(this.getInvoice());
  }

  getInvoice(): Invoice{      
      let saleItem = this.productsSale;
      let invoice: Invoice = {
      date : Date.now.toString(),
      saleItem : saleItem,
      total: this.getTotalCost()
    }
    return invoice
  }
  
  getInvoicePdf(invoice: Invoice){
    console.log(invoice.saleItem.length);
    this.saleService.generateInvoicePdf(invoice).subscribe(
      (data)=>{
        let downloadURL = window.URL.createObjectURL(data);
        let link = document.createElement('a');
        link.href = downloadURL;
        link.download = "Invoice.pdf";
        link.click();
      }
    );
  }
  
}
