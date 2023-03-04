import { Component, OnInit } from '@angular/core';
import { Sale } from '../interfaces/sale';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent implements OnInit{
  displayedColumns: String[] = ['id', 'date', 'total', 'delete'];
  sales: Sale[] = [];

  constructor(private saleService: SaleService){}

  ngOnInit(){
    this.getSales();
  }

  getSales(): void{
    this.saleService.getSales()
    .subscribe(sales => this.sales = sales);
  }

  deleteSale(id: number){
    this.saleService.deleteSale(id)
    .subscribe(sale => console.log('Sale deleted: ', sale));
    this.sales = this.sales.filter(sale => sale.id !== id);
  }
}
