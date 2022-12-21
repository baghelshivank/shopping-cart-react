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
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

/*
    increaseQuantity(){
        // console.log("plus testing");
        /#
           console.log("this.state", this.state);
           OUTPUT in console : Cannot read property "state" of undefined
           console.log("this", this);
           OUTPUT in console : this undefined
           COMMENT : In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). 
            In an object method, this refers to the object.
            Alone, this refers to the global object.
            In a function, this refers to the global object.
            In a function, in strict mode, this is undefined.
            In an event, this refers to the element that received the event.
            Methods like call(), apply(), and bind() can refer this to any object.
            this is not a variable. It is a keyword. You cannot change the value of this.
            
            Further for understanding how to resolve this issue, lets go through this example (which you could cross check on console): 

            class Vehicle{
                constructor(company){
                    this.company = company;
                }
                getCompany(){
                    console.log("this", this);
                    console.log("this.company", this.company);
                }
            }
            var car = new Vehicle ("Audi");
            car.getCompany();    /#  OUTPUT : this > Vehicle {company : "Audi"}
                                              this.company Audi  #/
            var func = car.getCompany;
            func();     /#   OUTPUT :  this undefined
                                       Cannot read property "company" of undefined
            
            // This issue can be solved by binding. We will bind the "getCompany" function with the "car" object :
            
            var func = car.getCompany.bind(car);
            func();     /#   OUTPUT : this > Vehicle {company : "Audi"}
                                      this.company Audi  #/

            #/

        /# Thus in our case, one way to solve the "this" issue is by binding "this" to "increaseQuantity" function inside the onClick property of image tags as :   "onClick={this.increaseQuantity.bind(this)}"
        Another way to tackle the issue is by performing the binding inside the constructor function. But that would require hardcode binding of every EventHandler and thus a lot messier. 
        The best approach to tackle this issue is via use of arrow functions. Unlike regular functions, arrow functions do not have their own this . The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

        Thus, arrow function will automatically bind the value of "this" to the instance of the class "CartItem".
        #/
    }
*/

    increaseQuantity = () => {
        // console.log("this.state", this.state);
    }

    decreaseQuantity = () => {
        // console.log("minus testing");

    }

    deleteItem = () => {
        // console.log("delete testing");

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
                        <img 
                            alt="Increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/8922/8922789.png"  
                            // onClick={this.increaseQuantity.bind(this)}
                            onClick={this.increaseQuantity}

                        />
                        <img 
                            alt="Decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/8922/8922772.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img alt="Delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/9153/9153963.png" onClick={this.deleteItem}/>
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