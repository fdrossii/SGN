import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductSupplier } from '../interfaces/productSupplier';
import { ProductSupplierService } from '../services/product-supplier.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-prod-supplier',
  templateUrl: './form-add-prod-supplier.component.html',
  styleUrls: ['./form-add-prod-supplier.component.scss']
})
export class FormAddProdSupplierComponent {

  formProdSupplier: FormGroup;

  constructor(private productSupplierService: ProductSupplierService, private formBuilder: FormBuilder,
    private router: Router, private dialog: MatDialog){
    this.formProdSupplier = this.formBuilder.group({
      id: '',
      name: '',
      cuit: '',
      tel: '',
      address: '',
      city: '',
      province: ''
    })
  }

  addProductSupplier(productSupplier: ProductSupplier): void{
    this.productSupplierService.addProductSupplier(productSupplier)
    .subscribe(productSupplier => console.log('Product Supplier added: ', productSupplier));
    this.openModal();
  }

  openModal(): void{
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { title: '', message: 'PROVEEDOR CARGADO CON ÉXITO', url:'/productSuppliers'}
    });
  }  
}
