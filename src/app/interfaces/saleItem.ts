export interface SaleItem{
    get name(): string,
    set name(value: string),
    get price(): number,
    set price(value: number),
    get units(): number,
    set units(value: number),
    get total(): number,
    set total(value: number)   
}