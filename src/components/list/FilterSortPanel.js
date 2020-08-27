import React from "react";

class FilterSortPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            genre: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type} = event.target;
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
                            <option value="">Wszystkie</option>
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