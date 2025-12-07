export interface Item {
    name: string;
    price: number;
    count: number;

    plus(item: Item): void;
    minus(item: Item): void;
    getSubTotal(item: Item): number;
}