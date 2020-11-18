import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import HomePage from "./components/HomePage"



const Routes = () => {
    return ( 
    <BrowserRouter>
    <div>
    <Link to = "/"> Plan Emlak </Link>
    <Link to = "/makeawish"> Make A Wish </Link>
    </div>
    <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
        <Route path="/makeawish"><div>Make A Wish</div></Route>
    </Switch>


    </BrowserRouter>
    )
}

export default Routes