import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-edit-stock',
  templateUrl: './form-edit-stock.component.html',
  styleUrls: ['./form-edit-stock.component.scss']
})
export class FormEditStockComponent {

  @Input() showForm: boolean = false;
  @Output() hideFormEvent = new EventEmitter<boolean>();
  
  //Propiedad y eventos par actualizar stock
  stock: number = 0;
  @Input() id: number = 0;
  @Input() curretnStock: number = 0;
  @Output() restarStockEvent = new EventEmitter<number>();
  @Output() restarIdEvent = new EventEmitter<number>();
  @Output() updateStockEvent = new EventEmitter<boolean>();
  newStock: boolean = false;
  //

  formStock: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder){
    this.formStock = this.formBuilder.group({
      stock: ''
    })
  }

  editStock(): void{
    if(this.curretnStock + this.stock <= 0){
      this.productService.updateProductStock(this.id, 0)
      .subscribe(j =>{
        this.restarForm();
        this.updateStockEvent.emit(this.newStock = true);
      });      
    }else{
      this.productService.updateProductStock(this.id, (this.curretnStock + this.stock))
      .subscribe(j =>{
        this.restarForm();
        this.updateStockEvent.emit(this.newStock = true);
      });      
    }
  }

  hideForm(): void{
    this.hideFormEvent.emit(this.showForm = false);
  }

  restarForm(): void{
    this.formStock.reset();
    this.restarStockEvent.emit(this.curretnStock = 0);
    this.restarIdEvent.emit(this.id = 0);
    this.hideFormEvent.emit(this.showForm = false);
  }
}
