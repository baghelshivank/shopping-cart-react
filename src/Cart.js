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

*/

/*

    constructor(){
        super();  
        console.log("CONSTRUCTOR");
        this.state = { count : 0 }
    }
    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
    }
    componentDidUpdate(prevProps, prevState){
           console.log("COMPONENT DID UPDATE");
        // console.log("prevProps", prevProps);
           console.log("prevState", prevState);
        // console.log("props", this.props);
           console.log("state", this.state);

        // this.setState({count:100});
        // the above line of code would lead to infinite loop. Therefore we need to be cautious when using setState inside componentDidUpdate. For e.g., we can use conditionals as below : 

        if(prevState.count===0 && this.state.count===1){
            this.setState({count:100});
        }
    }
    handleClick = () => {
        this.setState((prevState) => {
            return{
                count: prevState.count + 1;
            }
        })
    }
    render(){
        console.log("RENDER");
        // pure fxn therefore can't use this.setState() here.
        return(
            <div>
            {this.state.count}
            <button onClick={this.handleClick}> Increase Count </button>
            </div>
        );
    }


    // REACT COMPONENT LIFECYCLE : Every component in React goes through a lifecycle/phases right from when its born to when it dies (is removed from the DOM). So basically there are three phases that a React component goes through :   1) Mounting (when the component is rendered/mounted in the DOM)   2) Updating (when the component is updated)   3) Unmounting (when the component is destroyed or removed from the DOM). React gives us few methods that are triggered on each of these phases  

    // We have the three lifecycle methods (constructor, render, componentDidMount) in the first phase of the Component Lifecycle     (i.e., Mounting) : 

    // constructor() is called at first to set the initial state of the component. Then render() is called to define the UI of our component (using JSX) and mount/render the component in the DOM by returning JSX. Finally the componentDidMount() is called. componentDidMount() however is only called once, i.e., when the component is rendered for the first time. Later on, lets say when the state of the component is changed, re-rendering of the component will take place but componentDidMount() wouldn't be called again. 

    // componentDidMount() function is used to make API calls, to attach eventListeners, or to listen to some external source of data or one can use it to start some timers here.

    
   React Components LifeCycle : -----
Every component in React goes through a life-cycle/phases and some specific events, right from when the component is born up until the component dies (or is removed from the DOM).
Generally speaking, React component goes through three phases : 
1) Mounting Phase - when the component is rendered/mounted in the DOM. 
2) Updating Phase - when our component is updated. 
3) Unmounting Phase - when our component is destroyed/removed from the DOM. 
React gives us few methods that are triggered in every of these phases.
React gives us few methods that are triggered in each of these phases.
Let's start by exploring the very first phase (i.e., the mounting phase) and it's associated methods.
1. Mounting Phase :-----
A) constructor( ) method : 
This method is called the very first time in the component's life-cycle. We can use this method to define our default state. We can bind our functions as well here. 

B) render( ) method : 
This method is basically used to define the UI of a component, and is called after the constructor method.  Render method is compulsory when we are using class components. Inside render method, we can define our UI using JSX. React also wants this render method to be a pure function(can't perform side effects), therefore we can't use setState inside it. 

C) componentDidMount( ) method : This method is called after the render method. This method is called only once, i.e., the very first time our component got rendered. Even if our component re-renders again (say after using setState), this method wouldn't be called again. This function is basically used to make some API calls, to attach event listeners here or to listen to some external source of data, or else we can use it to start some timers over here.

2. Updating Phase :-----
A) componentDidUpdate() method : 
This method is called/triggered just after we updated a component. This method takes two arguments, the first being previous props and the second being previous state. We can use setState() inside componentDidUpdate(), though it should be done with caution (This will be the error if this is done directly without any conditionals applied first--> Error : maxm update depth exceeded. It means render fxn is stuck in an infinite loop. It generally happens when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops). 

Real life e.g. of componentDidUpdate is explained in the video where from a component containing friend list of a user, a friend is selected and then that friend's profile is loaded on that same component without unmounting/destroying the component.

B) shouldComponentUpdate() method : 
This is a react life cycle method that is rarely used when required. This method is used to override and stop the component from updating. This method is called(on change of some props or state)  before updating a component and if it returns false it does not update the component.
The shouldComponentUpdate() method is a lifecycle method of a React component that is called before the component re-renders. It takes in two arguments:
(i) nextProps: This argument is an object that represents the next set of props that the component will receive.
(ii) nextState: This argument is an object that represents the next state of the component.
The method should return a Boolean value, indicating whether the component should update or not. If the method returns true, the component will re-render, and if it returns false, the component will not update.
The default behavior of shouldComponentUpdate() is to return true and re-render the component whenever the props or state change.

C) getDerivedStateFromProps() method : 
This is a rarely used static method, which does not have access to "this" inside this method. It is generally used to return some new state depending upon the new props we get (or on the change of state).
D) getSnapshotBeforeUpdate() method : 
This is less common method which is called just before the React updates the DOM, and the value returned from it will be returned to componentDidUpdate method.

3. Unmounting Phase :-----
A) componentWillUnmount() method : 
We can use this method to perform some cleanups. This method is triggered just before our component is being removed/unmounted from the DOM. It then perform cleanups (we can remove here event listeners or other listeners, stop timers, cancel pending API calls).

*/


/*
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

        // console.log("RENDER");

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

            // We are passing id as an attribute to our each CartItem. The reason being lets say we have thousand "product"/components to render and if we need to make change to only one of the component, React has no way of differentiating between components (as they all go with the common name "CartItem"). Therefore we are passing id(key) as well to each of them which wouldn't be displayed on the client side but is just for internal react purposes.  
            // Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. 

    );
}

// }

export default Cart;

// Use Ctrl+Shift+L to select all occurences of a word. 

