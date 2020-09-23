import React, {Component} from "react";
import Navbar from "./basic/Navbar";
import LandingPage from "./landing/LandingPage";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GamesList from "./list/GamesList";

import GameAddPanel from "./form/GameAddPanel";
import GameDetails from "./details/GameDetails";
import EditGamePanel from "./form/EditGamePanel";
import LoginPanel from "./form/LoginPanel";
import RegisterPanel from "./form/RegisterPanel";
import UserDetails from "./details/UserDetails";
import Basket from "./basket/Basket";
import OrderConfirm from "./basic/OrderConfirm";
import OrderList from "./orderList/OrderList";
import InProgressList from "./inProgress/InProgressList";
class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/"  component={LandingPage} />
                        <Route path="/shop/:console" component={GamesList} />
                        <Route exact path="/game/:id" component={GameDetails} />
                        {sessionStorage.getItem("role") === "ROLE_ADMIN" ?
                            <Route exact path="/add" component={GameAddPanel} /> :
                            <Redirect from="/add" to={"/"} />}

                        {sessionStorage.getItem("role") === "ROLE_ADMIN" ?
                            <Route exact path="/edit/:id" component={EditGamePanel} /> :
                            <Redirect from="/edit/:id" to={"/"} />}

                        {sessionStorage.getItem("role") === "ROLE_ADMIN" ?
                            <Route exact path="/inprogress" component={InProgressList} /> :
                            <Redirect from="/inprogress" to={"/"} />}

                        {sessionStorage.getItem("jwt") == null ?
                            <Route exact path="/login" component={LoginPanel} /> :
                            <Redirect from="/login" to={"/"} />}

                        {sessionStorage.getItem("jwt") == null ?
                            <Route exact path="/register" component={RegisterPanel} /> :
                            <Redirect from="/register" to={"/"} />}

                        {sessionStorage.getItem("jwt") != null ?
                            <Route exact path="/userdetails" component={UserDetails} /> :
                            <Redirect from="/userdetails" to={"/"} />}

                        {sessionStorage.getItem("jwt") != null ?
                            <Route exact path="/basket" component={Basket} /> :
                            <Redirect from="/basket" to={"/"} />}

                        {sessionStorage.getItem("jwt") != null ?
                            <Route exact path="/orders" component={OrderList} /> :
                            <Redirect from="/orders" to={"/"} />}

                        <Route exact path="/orderconfirm/:id/:paymentOption" component={OrderConfirm} />

                    </Switch>
                    {/*<Footer />*/}
                </Router>
            </div>
        )
    }
}

export default App;