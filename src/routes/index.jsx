import { Switch, Route } from "react-router-dom"
import { Login } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import ProductPage from "../pages/Product"
import Home from "../pages/Home"
import { PageNotFound } from "../pages/Error"
import { Footer } from "../components/Footer"

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


        </Switch>
    )
}