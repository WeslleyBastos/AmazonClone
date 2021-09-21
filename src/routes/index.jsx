import { Switch, Route } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">

            </Route>

            <Route exact path="/register">
                <RegisterPage />
            </Route>


            <Route exact path="/login">
                
            </Route>
        </Switch>
    )
}