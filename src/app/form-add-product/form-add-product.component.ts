import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrls: ['./form-add-product.component.scss']
})
export class FormAddProductComponent{

  formProduct: FormGroup;
  
  constructor(private productService: ProductService, private formBuilder: FormBuilder, private router: Router){
    this.formProduct = this.formBuilder.group({
      name: '',
      price: '',
      company: '',
      stock: ''
    });
  }  

  addProduct(product: Product): void{
    this.productService.addProduct(product)
    .subscribe(product =>{
      console.log('Product added: ', product);
      this.formProduct.reset();
      this.router.navigate(['/products']);     
    });    
  }
  
  cancel(): void{
    this.formProduct.reset();    
  }
}
