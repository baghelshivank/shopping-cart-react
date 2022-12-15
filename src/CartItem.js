import React from "react";

// "cartItem" is a class based React component while "App" is a function based React component. 
class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "Phone" ,
            price : 999,
            qty : 1, 
            img : ""
        }
    }

    render(){
        // Instead of using this.state.blahblah everytime, we will destructure "this" and make things easier : 
        const {title, price, qty} = this.state ;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    {/* <div style={{fontSize:25}}>Phone</div> */}
                    {/* <div style={{fontSize:25}}>{this.state.title}</div> */}
                    <div style={{fontSize:25}}>{title}</div>
                    {/* <div style={{color:'#777'}}>Rs. 999</div> */}
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    {/* <div style={{color:'#777'}}>Qty. 01</div> */}
                    <div style={{color:'#777'}}>Qty : {qty}</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="Increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/8922/8922789.png"  />
                        <img alt="Decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/8922/8922772.png" />
                        <img alt="Delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/9153/9153963.png" />
                    </div>
                </div>
            </div>
        );
    }
}
export default CartItem;

// Styling with the help of Javascript Objects 
const styles = {
    image : {
        height : 140,
        width : 140,
        borderRadius : 5,
        background : '#ccc'
    }
}