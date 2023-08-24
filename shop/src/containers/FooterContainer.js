import React from "react";
import MenuBarComponent from "../components/MenuBarComponent";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import youtube from "../assets/img/youtube.png";
import { Link } from "react-router-dom";

const FooterContainer= () => {
    return (
        <div className="d-flex justify-content-around m-5">
            <div className="d-flex align-items-center">
                <MenuBarComponent />
            </div>
            <div>
                <h5>Hey, follow us on:</h5>
                <Link to="https://www.facebook.com/">
                    <img src={facebook} className="img-fluid "  alt="logo" />
                </Link>
                <Link to="https://www.instagram.com/">
                    <img src={instagram} className="img-fluid "  alt="logo" />
                </Link>
                <Link to="https://www.youtube.com/">
                    <img src={youtube} className="img-fluid "  alt="logo" />
                </Link>
            </div>
           
        </div>

    )
}

export default FooterContainer