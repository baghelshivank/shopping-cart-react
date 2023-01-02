/*
In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. 
When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. 
What are props and state in React?
While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function). 
Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component. 
In the case of class components, when the state of the component is changed then the render method is called. Whereas, function components render the interface whenever the props are changed.

Should I use functional component or class components in React?
If you want consistency between all components in your codebase, go with classes. Class Components should be preferred whenever we have the requirement with the state of the component. 
Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks. You end up with less code. They help you to use best practices.

There is an opinion that functional components show a greater performance compared to class components. The point is that the React functional element is a simple object with 2 properties: type(string) and props(object). To render such a component React needs to call the function and pass props – that is all.
 */

import React from 'react';
// import CartItem from './CartItem.js';
import Cart from './Cart.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js'

// function App() {        // We are going to move state from Cart.js to App.js, therefore converting App.js to class component.
class App extends React.Component {

  constructor(){
    super();   
    this.state = {
       products : [
        {
            title : "Watch" ,
            price : 999,
            qty : 1, 
            img : "https://media.istockphoto.com/id/1403974074/photo/watch-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=iIp_OPf2U6omi_qaCoappr6j5K65QXu_yW7Ng1JmCjE=",
            id : 1
        },
        {
            title : "Phone" ,
            price : 9999,
            qty : 1, 
            img : "https://media.istockphoto.com/id/1211592281/photo/woman-holding-and-touching-blank-screen-template-smart-phone-smart-phone-screen-is-empty-with.jpg?b=1&s=170667a&w=0&k=20&c=WuhVgaUf6LGftlL7PnIgmTH6Nv84OoR3L7hsURsGO5g=",
            id : 2
        },
        {
            title : "Laptop" ,
            price : 99999,
            qty : 1, 
            img : "https://media.istockphoto.com/id/1165781006/photo/women-typing-on-keyboard-of-modern-laptop-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=gOZAQ3_WNy1l5J5Czx_P1Y9gMHUUXU3VbYVgn-vM5hY=",
            id : 3
        },
        {
            title : "Tablet" ,
            price : 35000,
            qty : 1, 
            img : "https://media.istockphoto.com/id/1304769628/photo/tablet-with-headphones-and-pencil-on-yellow-background-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=ZztrmyFcKCi1o0QtgEsHOjQ9Y1AlVRclKbwEPcIXbO8=",
            id : 4
        },
        {
            title : "Headphones" ,
            price : 999,
            qty : 1, 
            img : "https://media.istockphoto.com/id/1401030339/photo/wireless-headphones-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=xFfHJUtNls3qAxULzsUxYWgosxb9nLy-xfDj0tyzFb8=",
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

  getCartCount = () => {
      const { products } = this.state;
      let count = 0;
      products.forEach(product => {
          count += product.qty;
      });
      return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.forEach(product => {
        cartTotal += product.qty * product.price; 
    });
      return cartTotal;
  }


  render(){
    const {products} = this.state ;
    return (
      <div className="App">
        {/* <h1> Cart </h1> */}
        {/* <CartItem/> */} 

        <Navbar 
        count={this.getCartCount()}
        />
        <Cart
         products={products}
         onIncreaseQuantity={this.handleIncreaseQuantity} 
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteItem={this.handleDeleteItem}
        />
        <Footer
         cartTotal={this.getCartTotal}
        />
      </div>
    );
  }
}

export default App;

/* Handling Events in Vanilla/Plain/Pure JavaScript vs Handling Events in React : 
1)
  HTML Code : 
  <button id="btn" onclick="showAlert()"> Show Alert </button>
  Pure JavaScript : 
  function showAlert(){ alert("Holla");}

2)
  HTML Code : 
  <button id="btn"> Show Alert </button>
  Pure JavaScript : 
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    alert("Bonjour");
  });

3) In REACT : 

  Note: In react, use the attributes like "onclick" (that we used to use in HTML), but in camelCase, for e.g. "onClick". 
        Events in React (in JSX) are defined on elements. 

  import "./styles.css";
  export default function App(){
    function showAlert(){
      alert("Hello");
    }
    function handleInputChange(e){
      console.log(e.target.value);
    }
    return(
      <div className="App">
        <button onClick={showAlert}> Show Alert </button>
        {// Remember not to call the function as {showAlert()} and instead just pass the reference of it as we did above. Or else it will end up being called once while rendering (without the "Show Alert" button being clicked). }
        <input onChange={handleInputChange} />
      </div>
    );
  }

  NOTE : --
   For onChange(e.target.value), INPUT : hello
                 OUTPUT : h
                          he
                          hel
                          hell
                          hello
NOTE:- Unpaired/empty/singular tags(<img>, <br>, <input>) are without any closing tag, or can be closed within the opening tag itself.
 For e.g. <br/>.

*/