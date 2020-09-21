import React from "react";
import host from "../util/API";

class BasketPanel extends React.Component{
    constructor() {
        super();
        this.state={
            shippingPrice: 0.0,
            shipping: "",
            paymentOption: "",
            isShipped: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target;
        console.log()
        this.setState({[name]: value})
        if (value === "Odbiór osobisty"){
            this.setState({isShipped: false})
            this.setState({shippingPrice: 0.0})
            this.setState({paymentOption: "Przelew"})
        }
        if (value === "GLS"){
            this.setState({isShipped: true})
            this.setState({shippingPrice: 19.99})
            this.setState({paymentOption: "Przelew"})
        }
        if (value === "Poczta Polska"){
            this.setState({isShipped: true})
            this.setState({shippingPrice: 9.99})
            this.setState({paymentOption: "Przelew"})
        }
    }

    handleSubmit(event){
        event.preventDefault()
        const json = {
            shippingPrice: this.state.shippingPrice,
            shipping: this.state.shipping,
            paymentOption: this.paymentOption
        }
        fetch(`${host}/api/v1/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
            .then(response => response.json())
            .then(data => window.location.href=`/orderconfirm/${data.orderId}`)
    }


    render() {
        return (
            <div className="col-12 col-md-4 text-center mt-5">
                <form onSubmit={this.handleSubmit}>
                    Sposób dostawy
                    <select className="form-control form-control-sm" onChange={this.handleChange}
                            value={this.state.shipping} name="shipping" required>
                        <option value="Odbiór osobisty">Odbiór osobisty</option>
                        <option value="GLS">GLS</option>
                        <option value="Poczta Polska">Poczta Polska</option>
                    </select>
                    <br/>
                    Płatność
                    <select className="form-control form-control-sm" onChange={this.handleChange}
                            value={this.state.paymentOption} name="paymentOption" required>
                        {!this.state.isShipped && <option value="Płatność przy odbiorze">Płatność przy odbiorze</option>}
                        <option value="Przelew">Przelew</option>
                        {this.state.isShipped && <option value="Pobranie">Pobranie</option>}
                    </select>
                    <h2 className="mt-4">Cena:</h2>
                    <h4 style={{color: "#3631C2"}}>{this.props.totalPrice} zł</h4>
                    <h5 style={{color: "#3631C2"}}>+{this.state.shippingPrice} zł</h5>
                    <h2>Razem:</h2>
                    <h1 style={{color: "#3631C2"}}>
                        {Math.round((this.props.totalPrice + this.state.shippingPrice) * 100) / 100} zł
                    </h1>
                    <button className="btn button-standard btn-lg mt-4">
                        Zamów
                    </button>
                </form>
            </div>
        )
    }
}

export default BasketPanel;