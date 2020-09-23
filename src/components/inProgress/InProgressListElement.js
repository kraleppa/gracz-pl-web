import React from "react";
import OrderElement from "../orderList/OrderElement";
import {statusToString} from "../util/EnumToString";
import host from "../util/API";
import {nextOrderState} from "../util/NextEnum";

class InProgressListElement extends React.Component {
    constructor() {
        super();
        this.state={
            elementsVisible: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
    }

    handleClick(){
        this.setState(prev => ({
            elementsVisible: !prev.elementsVisible
        }))
    }

    handleStateChange(){
        const nextState = nextOrderState(this.props.order.orderState)
        fetch(`${host}/api/v1/orders?orderState=${nextState}&orderId=${this.props.order.orderId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        })
            .then(response => response.json())
            .then(this.props.refresh)
    }



    render() {
        const orderElements = this.props.order.orderElements.map(element => <OrderElement game={element} />)
        return (
            <tbody>
                <tr>
                    <th scope="row">{this.props.order.orderId}</th>
                    <td>{this.props.order.creationDate.replace('T', ' ').slice(0, 19)}</td>
                    <td>{this.props.order.shipping}</td>
                    <td>{this.props.order.paymentOption}</td>
                    <td>{this.props.order.orderPrice} zł</td>
                    <td>{this.props.order.shippingPrice} zł</td>
                    <td>{statusToString(this.props.order.orderState)}</td>
                    <td><button className="btn-dark btn btn-sm" onClick={this.handleClick}>
                        {this.state.elementsVisible ? 'Schowaj' : 'Więcej'}
                    </button></td>
                    <td><button className="btn-danger btn btn-sm" onClick={this.handleStateChange}>
                        Zmień status
                    </button></td>
                </tr>
                    {this.state.elementsVisible && orderElements}

            </tbody>
        )
    }

}

export default InProgressListElement;