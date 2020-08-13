import React, {Component} from "react";
import Navbar from "./Navbar";
import GamesList from "./GamesList";
import LandingPage from "./LandingPage";

class App extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <LandingPage />
            </div>
        )
    }
}

export default App;