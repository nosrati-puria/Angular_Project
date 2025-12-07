export interface Product {
    name: string;
    price: number;
    count: number;

    plus(item: Product): void;
    minus(item: Product): void;
    getSubTotal(item: Product): number;
}