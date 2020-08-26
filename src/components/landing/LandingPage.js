import React from "react";
import BestSellersList from "./BestSellersList";
import {Link} from "react-router-dom";
import Banner from "./Banner";

class LandingPage extends React.Component {
    render() {
        return(

            <div className="container console-pick-container " style={{textAlign: "center"}}>
                <div className="row d-none d-sm-block mb-4">
                    <Banner />
                </div>

                <h2>Wybierz swoją konsolę</h2>
                <div className="row console-pick mt-5 mb-5" >

                    <div className="col-12 offset-md-1 col-md-3">
                        <Link to="/shop/xbox_one">
                            <img src="https://image.flaticon.com/icons/svg/732/732260.svg" />
                        </Link>
                    </div>

                    <div className="col-12 col-md-4 ">
                        <Link to="/shop/playstation_4">
                            <img src="https://image.flaticon.com/icons/svg/588/588258.svg" />
                        </Link>
                    </div>

                    <div className="col-12 col-md-3"  style={{display: "flex", justifyContent: "center"}}>
                        <Link to="/shop/nintendo_switch">
                            <img src="https://image.flaticon.com/icons/svg/871/871377.svg" />
                        </Link>
                    </div>
                </div>

               <BestSellersList />
            </div>
        )
    }
}

export default LandingPage;