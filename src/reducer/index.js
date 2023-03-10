import {combineReducers} from "redux";
import {LoginReducer} from "./LoginReducer";
import {SignupReducer} from "./SignupReducer"
import {ProductsReducer} from "./ProductsReducer";
import {ProductReducer} from "./ProductReducer";
import {WhishlistReducer} from "./WhishlistReducer";
export const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
    SignupReducer: SignupReducer,
    ProductsReducer: ProductsReducer,
    ProductReducer: ProductReducer,
    WhishlistReducer: WhishlistReducer
})