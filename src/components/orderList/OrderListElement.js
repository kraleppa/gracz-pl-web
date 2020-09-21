import React from "react";
import OrderElement from "./OrderElement";

class OrderListElement extends React.Component {
    constructor() {
        super();
        this.state={
            elementsVisible: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prev => ({
            elementsVisible: !prev.elementsVisible
        }))
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
                    <td>{this.props.order.orderState}</td>
                    <td><button className="btn-dark btn-sm" onClick={this.handleClick}>
                        {this.state.elementsVisible ? 'Schowaj' : 'Więcej'}
                    </button></td>
                </tr>
                    {this.state.elementsVisible && orderElements}

            </tbody>
        )
    }

}

export default OrderListElement;