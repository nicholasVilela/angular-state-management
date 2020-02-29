import { Product } from "../Models/Product.model";


export class AddToCart {
    static readonly type = 'ADD_TO_CART'

    constructor(public payload: Product) {}
}

export class RemoveFromCart {
    static readonly type = 'REMOVE_FROM_CART'

    constructor(public payload: Product) {}
}