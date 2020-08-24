import React, {Component} from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GamesList from "./GamesList";
import Footer from "./Footer";
import GameAddPanel from "./GameAddPanel";
import GameDetails from "./GameDetails";

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
                    </Switch>
                    {/*<Footer />*/}
                </Router>
            </div>
        )
    }
}

export default App;