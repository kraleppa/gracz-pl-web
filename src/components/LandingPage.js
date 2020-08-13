import React from "react";
import BestSellersList from "./BestSellersList";

class LandingPage extends React.Component {
    render() {
        return(
            <div className="container console-pick-container " style={{textAlign: "center"}}>
                <h2>Wybierz swoją konsolę</h2>
                <div className="row console-pick mt-5 mb-5" >

                    <div className="col-6" style={{display: "flex", justifyContent: "flex-end"}}>
                        <img src="https://image.flaticon.com/icons/svg/588/588258.svg" />
                    </div>

                    <div className="col-6"  style={{display: "flex", justifyContent: "flex-start"}}>
                        <img src="https://image.flaticon.com/icons/svg/732/732260.svg" />
                    </div>

                    <div className="col-12 mt-4"  style={{display: "flex", justifyContent: "center"}}>
                        <img src="https://image.flaticon.com/icons/svg/871/871377.svg" />
                    </div>
                </div>

               <BestSellersList />

            </div>
        )
    }
}

export default LandingPage;