import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    render(){
        return(
            // <div> CART </div>
            <div className="cart">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>

            </div>

        );
    }
}

export default Cart;

// Use Ctrl+Shift+L to select all occurences of a word. 