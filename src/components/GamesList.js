import React from "react";
import GamesListElement from "./GamesListElement";

class GamesList extends React.Component {
    constructor() {
        super();
        this.state = {
            games: [],
            currentPage: null,
            totalPages: null,
            btnState: "hidden",
            spinnerState: "visible"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

        fetch(`http://localhost:8080/api/v1/games?page=0&size=12&console=${this.props.match.params.console}`)
            .then(response => response.json())
            .then(data => this.setState({
                games: data.content,
                currentPage: 1,
                totalPages: data.totalPages,
                btnState: "visible",
                spinnerState: "hidden"
            }))
    }

    handleClick() {
        this.setState(previousState => {
            return {
                games: previousState.games,
                currentPage: previousState.currentPage,
                totalPages: previousState.totalPages,
                btnState: "hidden",
                spinnerState: "visible"
            }
        })

        fetch(`http://localhost:8080/api/v1/games?page=${this.state.currentPage}&size=12&console=${this.props.match.params.console}`)
            .then(response => response.json())
            .then(data => this.setState(previousState => {
                return {
                    games: previousState.games.concat(data.content),
                    currentPage: previousState.currentPage+1,
                    totalPages: data.totalPages,
                    btnState: previousState.currentPage+1 === data.totalPages ? "hidden" : "visible",
                    spinnerState: "hidden"
                }
            }))
    }


    render () {
        const htmlList = this.state.games.map(game =>
                <GamesListElement name={game.name} imageUrl={game.imageUrl} price={game.price} id={game.gameId}/>
            );

        return(
            <div className="container mt-4">
                <div className="row">
                    {htmlList}
                </div>

                <div className="row" style={{textAlign: "center"}}>
                    <div className="col-12">
                        <button type="button" className= "btn btn-primary button-standard" style={{visibility: this.state.btnState}}
                            onClick={this.handleClick}>Więcej</button>
                        <div className="spinner-border" role="status" style={{visibility: this.state.spinnerState, textAlign: "center"}}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GamesList