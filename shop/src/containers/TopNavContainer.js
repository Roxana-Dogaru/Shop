import React from "react";
import logo from "../assets/img/logo.jpg";
import home from "../assets/img/home.png";
import heart from "../assets/img/heart.png";
import shoppingCart from "../assets/img/shoppingCart.png";
import { Link} from "react-router-dom";
import MenuBarComponent from "../components/MenuBarComponent";

const TopNavContainer = ({ searchValue, handleInputChange, noSearchBar })  => {
    
    return (
    <div>
        <div className="d-flex justify-content-between p-2 sticky-top bg-white align-items-center">
            <div className="navbar-brand" style={{ width: "80px", height: "60px" }}>
                <Link to="/">
                    <img src={logo} className="img-fluid h-100"  alt="logo" />
                </Link>
                
                    
            </div>

            <Link to="/" style={{color:"black", textDecoration:"none",fontWeight:"bolder" }}>        
                <h3>Irishop</h3>
            </Link>

            <div className="d-flex">
                <div>
                {!noSearchBar ? (
                    <div className=" text-muted w-100">
                        <form className="form form-control-group d-flex">
                            <input
                            type="text"
                            className="form-control form-control-lg self-center border-bottom border rounded-50"
                            placeholder=" Search"
                            value={searchValue}
                            onChange={handleInputChange}
        
                            
                            ></input>
                        </form>
                    </div>
                ):("")}
                </div>
                
                <div className="btn bg-white " style={{ width: "60px", height: "40px" }}>
                    <Link to="/" >
                    <img src={home} className="img-fluid "  alt="home" />
                    </Link>
                
                </div>
                <div className="btn bg-white " style={{ width: "60px", height: "40px" }}>
                    <Link to="/favorites" >
                    <img src={heart} className="img-fluid "  alt="heart" />
                    </Link>
                
                </div>
                <div className="btn bg-white " style={{ width: "60px", height: "40px" }}>
                    <Link to="/shoppingCart" >
                    <img src={shoppingCart} className="img-fluid "  alt="shoppingCart" />
                    </Link>
                
                </div>

            </div>
        </div>
        <div>
            <MenuBarComponent />
        </div>
       
    </div>
        

    )
}

export default TopNavContainer