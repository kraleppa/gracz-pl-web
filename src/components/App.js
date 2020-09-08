import React, {Component} from "react";
import Navbar from "./basic/Navbar";
import LandingPage from "./landing/LandingPage";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GamesList from "./list/GamesList";

import GameAddPanel from "./form/GameAddPanel";
import GameDetails from "./details/GameDetails";
import EditGamePanel from "./form/EditGamePanel";
import LoginPanel from "./form/LoginPanel";

class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/"  component={LandingPage} />
                        <Route path="/shop/:console" component={GamesList} />
                        <Route path="/add"  component={GameAddPanel} />
                        <Route exact path="/game/:id" component={GameDetails} />
                        <Route exact path="/edit/:id" component={EditGamePanel} />
                        {sessionStorage.getItem("jwt") == null ?
                            (<Route exact path="/login" component={LoginPanel} />) :
                            (<Redirect to={"/"} />)}

                    </Switch>
                    {/*<Footer />*/}
                </Router>
            </div>
        )
    }
}

export default App;