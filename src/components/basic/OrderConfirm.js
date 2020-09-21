import React from "react";
import img from "../../img/kurier.jpg"

class OrderConfirm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12" style={{fontSize: 20}}>
                        <img src={img} className="float-right"/>
                        Dziękujemy że obdarzyłeś nasz sklep zaufaniem. Zapewniamy Cie że Twoje zamówienie
                        zostanie dostarczone najszybciej jak to jest możliwe. Cieszymy się że spośród wielu
                        sklepów wybrałeś nasz. Jesteśmy pasjonatami takimi jak Ty i chcemy żeby jak najwięcej
                        ludzi grało w gry. Dlatego jeszcze raz dziękujemy Ci za to że zdecydowałeś się
                        skorzystać z usług naszego sklepu.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat porttitor lorem, et dapibus odio mollis nec. Proin odio mauris, luctus in placerat ac, fermentum et lorem. Quisque dapibus lacinia porta. Pellentesque porta rhoncus sapien et gravida. Etiam eget vulputate nisi, sed rhoncus mauris. Sed id vulputate eros. Nulla malesuada pharetra vulputate. Vivamus feugiat faucibus viverra. Duis pretium lacus non felis malesuada ultrices. Pellentesque molestie nibh accumsan ipsum fringilla egestas. Vestibulum lacinia eget tortor sit amet aliquam.
                    </div>
                    <div className="mt-5">
                        {this.props.match.params.paymentOption === "Przelew" && <div>
                            <h4>Aby opłacić zamówienie dokonaj przelewu na numer konta 1234123512321321 </h4>
                            <h4>Jako temat wpisz "Zamównienie numer {this.props.match.params.id}"</h4>
                        </div>
                        }

                        {this.props.match.params.paymentOption === "Płatność przy odbiorze" && <div>
                            <h4>Zapraszamy w godzinach 10 - 18 po odbiór zamówienia</h4>
                        </div>
                        }
                    </div>

                </div>



            </div>
        )
    }
}

export default OrderConfirm;