import React, {Component} from "react";
import Navbar from "./Navbar";
import GamesList from "./GamesList";

class App extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <GamesList />
            </div>
        )
    }
}

export default App;