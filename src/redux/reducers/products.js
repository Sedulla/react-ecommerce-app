import { SET_PRODUCTS } from "./../actionTypes";

let initialState = []

export default function products(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}