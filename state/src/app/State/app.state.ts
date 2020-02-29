import { Product } from "../Models/Product.model"
import { State, Action, StateContext, Selector } from '@ngxs/store'
import { AddToCart } from "../Actions/app.action"

export class CartStateModel {
    products: Product[]
}

@State<CartStateModel>({
    name: 'cart',
    defaults: {
        products: []
    }
})

export class CartState {
    @Selector()
    static getCart(state: CartStateModel) {
        return state.products
    }

    @Action(AddToCart)
    add({getState, patchState}: StateContext<CartStateModel>, {payload}: AddToCart) {
        const state = getState()
        patchState({
            products: [...state.products, payload]
        })
    }
}