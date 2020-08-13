import React, {Component} from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GamesList from "./GamesList";

class App extends Component {
    render() {
        return(
            <div>

                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/shop" component={GamesList} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;