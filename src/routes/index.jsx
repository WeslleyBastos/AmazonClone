import { Switch, Route } from "react-router-dom"
import { Login } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import ProductPage from "../pages/Product"
import { InfoClient } from "../components/InfoClient"
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

            <Route path="*">
                <InfoClient />
            </Route>

        </Switch>
    )
}