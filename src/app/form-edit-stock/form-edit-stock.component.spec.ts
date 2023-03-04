import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditStockComponent } from './form-edit-stock.component';

describe('FormEditStockComponent', () => {
  let component: FormEditStockComponent;
  let fixture: ComponentFixture<FormEditStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
