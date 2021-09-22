import { Switch, Route } from "react-router-dom"
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

            <Route path="/login">
                
            </Route>
            <Route path="/product">
                <ProductPage/>
            </Route>
        </Switch>
    )
}