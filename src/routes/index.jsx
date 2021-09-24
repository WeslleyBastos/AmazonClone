import { Switch, Route } from "react-router-dom"
import { Login } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import ProductPage from "../pages/Product"
import Home from "../pages/Home"
import { Cart } from "../components/Cart"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/register">
                <RegisterPage />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/products">
                <ProductPage />
            </Route>

            <Route path="*">
                <Cart />
            </Route>
        </Switch>
    )
}