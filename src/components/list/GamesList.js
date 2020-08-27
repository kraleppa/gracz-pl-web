import React from "react";
import GamesListElement from "./GamesListElement";
import host from "../util/API";
import FilterSortPanel from "./FilterSortPanel";

class GamesList extends React.Component {
    constructor() {
        super();
        this.state = {
            games: [],
            currentPage: null,
            totalPages: null,
            btnState: "hidden",
            spinnerState: "visible",
            filterString: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleFilter = this.handleFilter.bind(this)
    }

    componentDidMount() {

        fetch(`${host}/api/v1/games?page=0&size=12&console=${this.props.match.params.console}`)
            .then(response => response.json())
            .then(data => this.setState({
                games: data.content,
                currentPage: 1,
                totalPages: data.totalPages,
                btnState: data.totalPages <= 1 ? "hidden" : "visible",
                spinnerState: "hidden",
                filterString: `${host}/api/v1/games?page=0&size=12&console=${this.props.match.params.console}`
            }))
    }

    handleClick() {
        this.setState(previousState => {
            return {
                games: previousState.games,
                currentPage: previousState.currentPage,
                totalPages: previousState.totalPages,
                btnState: "hidden",
                spinnerState: "visible",
                filterString: previousState.filterString
            }
        })

        fetch(this.state.filterString)
            .then(response => response.json())
            .then(data => this.setState(previousState => {
                return {
                    games: previousState.games.concat(data.content),
                    currentPage: previousState.currentPage+1,
                    totalPages: data.totalPages,
                    btnState: previousState.currentPage+1 === data.totalPages ? "hidden" : "visible",
                    spinnerState: "hidden",
                    filterString: previousState.filterString
                }
            }))
    }

    handleFilter(filter) {
        let filterString = `${host}/api/v1/games?page=${0}&size=12&console=${this.props.match.params.console}`
        if (filter.genre !== "") filterString += `&genre=${filter.genre}`
        if (filter.name !== "") filterString += `&name=${filter.name}`
        if (filter.sortBy !== "") filterString += `&sortBy=${filter.sortBy}&ascending=${filter.ascending}`


        fetch( filterString )
            .then(response => response.json())
            .then(data => this.setState({
                    games: data.content,
                    currentPage: 1,
                    totalPages: data.totalPages,
                    btnState: data.totalPages <= 1 ? "hidden" : "visible",
                    spinnerState: "hidden",
                    filterString: filterString
                }
            ))
            .catch(error => console.log(error))
    }


    render () {
        const htmlList = this.state.games.map(game =>
                <GamesListElement name={game.name} imageUrl={game.imageUrl} price={game.price} id={game.gameId}
                />
            );

        return(
            <div className="container mt-4">
                <FilterSortPanel handleFilter={this.handleFilter}/>
                <div className="row mt-5">
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

                <div className="row">
                    <div className="col-12 text-center" style={{visibility: this.state.games.length === 0 ? "visible" : "hidden"}}>
                        <h1>Brak gier</h1>
                        <small>Może poszukaj czegoś innego ;)</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default GamesList