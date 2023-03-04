import { SaleItem } from "./saleItem";

export interface Invoice{
    get date(): string,
    set date(value: string),
    get saleItem(): SaleItem[],
    set saleItem(value: SaleItem[]),
    get total(): number
    set total(value: number)
}