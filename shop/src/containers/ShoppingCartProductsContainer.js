import React, { useState} from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const ShoppingCartProductsContainer = ({productsCart}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteSoppingCart = () => {
    localStorage.removeItem("productsCart")
  }

    if(productsCart.length === 1){
      return (
      <div className="px-4 py-5 my-5 text-center"> 
        <h1 className="display-5 fw-bold m-3">Your shopping list!</h1>
        <h1 className="display-6 fw-bold m-3"> No items added yet 😔</h1>
      </div>)
      
    }else {
        return (
            <>
              <div className="px-4 py-5 my-4 text-center">
                <h1 className="display-5 fw-bold">Your shopping list!</h1>
              </div> 
              <div className="m-3 w-50 m-auto">
              
                {productsCart.map((productCart) => (
                  <Link to={`/products/${productCart.id}`}>
                  <div className="d-flex justify-content-around m-3 ">
                    <img src={productCart.image} alt={productCart.title} 
                      style={{height: "150px",}}/>
                    <div>
                      <h3 className="fs-5 fw-bold text-end">{productCart.title}</h3>
                      <p className="fs-5 fw-bold text-end">{productCart.price} EUR</p>
                    </div>
                  </div>

                  </Link> 
                  
                 ))}
                 <hr></hr>
                
                 <div className="text-end">
                  <Button variant="success" onClick={handleShow}>Buy</Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Order completed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {productsCart.map((productCart) => (
                  
                  <div className="d-flex justify-content-around m-3 ">
                    <img src={productCart.image} alt={productCart.title} 
                      style={{height: "50px",}}/>
                    <div>
                      <p className="fs-6 fw-bold text-end">{productCart.title}</p>
                      <p className="fs-6 fw-bold text-end">{productCart.price} EUR</p>
                    </div>
                  </div>

                   
                  
                 ))}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose} onClickEvent={handleDeleteSoppingCart}>
                        Close
                      </Button>
                      
                    </Modal.Footer>
                  </Modal>
                 </div>
                 
                 
              </div>
              
              
                 
                
            </>
    )}
}

export default ShoppingCartProductsContainer