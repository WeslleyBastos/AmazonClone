import { Switch, Route } from "react-router-dom"
import { Login } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import ProductPage from "../pages/Product"
export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">

            </Route>

            <Route path="/register">
                <RegisterPage />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/products">
                <ProductPage />
            </Route>

        </Switch>
    )
}