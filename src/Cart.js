import React from "react";
import CartItem from "./CartItem";

// class Cart extends React.Component {
const Cart = (props) => {


/*

    constructor(){
        super();   
        this.state = {
           products : [
            {
                title : "Watch" ,
                price : 999,
                qty : 1, 
                img : "",
                id : 1
            },
            {
                title : "Phone" ,
                price : 9999,
                qty : 1, 
                img : "",
                id : 2
            },
            {
                title : "Laptop" ,
                price : 99999,
                qty : 1, 
                img : "",
                id : 3
            },
            {
                title : "Tablet" ,
                price : 35000,
                qty : 1, 
                img : "",
                id : 4
            },
            {
                title : "Earpods" ,
                price : 999,
                qty : 1, 
                img : "",
                id : 5
            }
           ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log("hey please increase the quantity of ", product); 
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        });
    } 

    handleDecreaseQuantity = (product) => {
        console.log("hey please decrease the quantity of ", product);
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty > 1) {
            products[index].qty -= 1;
        }
        this.setState({
            products: products
        });
    }

    // handleDeleteItem = (id) => {
    //     const { products } = this.state;
    //     const items = products.filter((item) => item.id !== id);
    //     this.setState({
    //         products: items
    //     });
    // }

    handleDeleteItem = (product) => {
        console.log("hey please delete the item", product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products.splice(index, 1);
        this.setState({
            products: products
        });
    }
    
*/

    // render(){

        // const arrr = [1,2,"some string",4,5];
        // const arr = [1,2,3,4,5];
        // const {products} = this.state ;
        const {products} = props;
        return(
            // <div> CART </div>
            <div className="cart">
                {/* <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/> */}

                {/* {arr} */}
                {/* {arr.map( (item) => { return item+5;})} */}
                {/* Up until this point, all the CartItems are displaying just mobile phone, because we have set the local state of CartItem.js to act such. But ideally what should happen is our Cart.js should contain a list of products (say mobile phone, laptop, watch, etc.) and we should be able to pass each of these products to CartItem.js   */}

{/* We can easily pass data from parent Cart to child CartItem via props. Props (abbr. for properties) are analogous to arguments that we pass to functions. Props passed from Cart to CartItem can be used within CartItem. Props can be passed simply by specifying attributes as :  */}

                {/* <CartItem qty={1} price={99} title={"Watch"} img={" "} /> */}

                {
                    products.map((product) => {
                        return( <CartItem 
                            product={product} 
                            key={product.id} 
                            // We can pass pretty much anything(jsx,fxn,boolean,component,etc) as props from parent to children :
                            // jsx={<h3> * </h3>}
                            // func={() => {console.log("hello");}}
                            // isloggedin={false}
                            // comp={<CartItem/>}

                            // onIncreaseQuantity={this.handleIncreaseQuantity} 
                            // onDecreaseQuantity={this.handleDecreaseQuantity}
                            // onDeleteItem={this.handleDeleteItem}

                            onIncreaseQuantity={props.onIncreaseQuantity} 
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteItem={props.onDeleteItem}


                            />);
                    })
                }

            </div>

            // We are passing id as an attribute to our each CartItem. The reason being lets say we have thousand "product"/components to render and if we need to make change to only one of the component, React has no way of differentiating between components (as they all go with the common name "CartItem"). Therefore we are passing id as well to each of them which wouldn't be displayed on the client side but is just for internal react purposes.  
            // Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. 

    );
}

// }

export default Cart;

// Use Ctrl+Shift+L to select all occurences of a word. 