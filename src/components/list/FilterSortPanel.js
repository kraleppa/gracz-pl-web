import React from "react";

class FilterSortPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            genre: "",
            sortBy: "",
            ascending: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target;
        if (type === "checkbox") {
            this.setState({[name]: !checked})
            return;
        }
        type === "number" ? this.setState({[name]: parseInt(value)}) : this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
        this.props.handleFilter(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-row">
                    <div className="col-12 col-md-6 offset-md-3 ">
                        <input type="text" className="form-control" id="form01" name="name" onChange={this.handleChange}
                               placeholder="Wpisz nazwe gry"/>
                    </div>

                    <div className="col-12 col-md-6 offset-md-3 mt-3">
                        <select className="custom-select" id="form02" onChange={this.handleChange} name="genre">
                            <option value="">Kategoria</option>
                            <option value="ACTION">Akcja</option>
                            <option value="RPG">RPG</option>
                            <option value="ADVENTURE">Przygodowa</option>
                            <option value="SHOOTING">Strzelanka</option>
                            <option value="STRATEGY">Strategia</option>
                            <option value="SIMULATOR">Symulator</option>
                            <option value="CASUAL">Casualowa</option>
                            <option value="SPORTS">Sport</option>
                            <option value="ARCADE">Arkadowa</option>
                            <option value="RACING">Wyścigowa</option>
                            <option value="HORROR">Horror</option>
                            <option value="MMO">MMO</option>
                            <option value="FIGHTING">Bijatyka</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-5 offset-md-3 mt-3">
                        <select className="custom-select" id="form03" onChange={this.handleChange} name="sortBy">
                            <option value="">Sortuj</option>
                            <option value="name">Tytuł</option>
                            <option value="price">Cena</option>
                        </select>
                    </div>
                    <div className="col-1 mt-4 ml-4">
                        <input type="checkbox" className="form-check-input" id="check" name="ascending"
                            onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="check">Malejąco</label>
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col-12 text-center">
                        <button className="btn button-standard" type="submit">Zatwierdź</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default FilterSortPanel