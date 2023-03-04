import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSupplierTableComponent } from './products-supplier-table.component';

describe('ProductsSupplierTableComponent', () => {
  let component: ProductsSupplierTableComponent;
  let fixture: ComponentFixture<ProductsSupplierTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSupplierTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSupplierTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
