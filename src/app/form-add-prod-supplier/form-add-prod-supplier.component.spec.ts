import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddProdSupplierComponent } from './form-add-prod-supplier.component';

describe('FormAddProdSupplierComponent', () => {
  let component: FormAddProdSupplierComponent;
  let fixture: ComponentFixture<FormAddProdSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddProdSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddProdSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
