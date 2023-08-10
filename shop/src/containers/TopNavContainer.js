import React from "react";
import logo from "../assets/img/Logo.png"


const TopNavContainer = () => {

  return (
    <div className="d-flex p-2 sticky-top bg-white align-items-center">
        <div className="navbar-brand" style={{ width: "250px", height: "60px" }}>
        
          <img src={logo} className="img-fluid h-100" alt="logo" />
       
        </div>
        <div>
            <h3>Irishop</h3>
        </div>
      
        <div className="text-muted w-100">
          <form className="form form-control-group d-flex">
                <input
                    type="text"
                    className="form-control form-control-lg self-center border-bottom border-0 rounded-0"
                    placeholder="🔎 Search"
             
                ></input>
            </form>
            
        </div>
        <div>
            <button>
                <img src="../assets/img/user.png" alt="user"></img>
            </button>
        
        </div>
     
       
    </div>
  );
};

export default TopNavContainer;