import React, {Component} from "react";
import Navbar from "./basic/Navbar";
import LandingPage from "./landing/LandingPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GamesList from "./list/GamesList";
import Footer from "./basic/Footer";
import GameAddPanel from "./form/GameAddPanel";
import GameDetails from "./details/GameDetails";
import EditGamePanel from "./form/EditGamePanel";

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
                    </Switch>
                    {/*<Footer />*/}
                </Router>
            </div>
        )
    }
}

export default App;