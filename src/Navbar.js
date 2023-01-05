import React from "react";
import ReactDOM  from 'react-dom/client';
import HP from "./HomePage/ProductPage.js";
// class Navbar extends React.Component{ 
    // This currently is a class component, but since this doesn't have a state, we will change it to a funtional component. 
const Navbar = (props) => {
    // For every functional component, React passes props by default. 
  
    return(
        <div style={styles.nav}>

        <div style={styles.productbutton}>
                
          <button onClick={() => {
            console.log("go to product page");
            const root = ReactDOM.createRoot(document.getElementById('root')).render(

              <React.StrictMode>
                <HP />
              </React.StrictMode>
          );

          }}> Product </button>
            </div>
          

            <div style={styles.title}>
                {"My Cart"}
            </div>

            <div style={styles.cartIconContainer}>
                {/* Cart Icon for the Navbar */}
                <div style={styles.cartIcon} >
                  <img src="https://cdn-icons-png.flaticon.com/128/8181/8181590.png" alt="cart-icon" style={styles.image}/> 
                </div>
                {/* The count for the no. of items in our cart */}
                <div style={styles.cartCount}>  {/* props.something */} {/*5*/} {props.count}   </div>
                {/* The number 5 above is hardcoded. To make it dynamic, i.e., change it to no. of items in the cart, we would require the count from Cart.js which has state in which we have an array of products P1, P2, P3,... with quantities Q1, Q2, Q3,... and the net count is Q1+Q2+Q3+... Now we know that parent component can share data with child component directly via props(In React, data flows only in one direction, i.e., from parent to children), but siblings couldn't share data among themselves directly (Cart.js and Navbar.js happen to be siblings in this case with App.js as the common parent). So what we can do is whenever we need to share some data/state among siblings(in our case Cart.js and Navbar.js) or to any other component, we would move the state from a sibling component (in this case Cart.js) to the parent component (in this case App.js) which is common to both the siblings, and now parent will pass the data/state as props to another sibling component (in this case Navbar.js). Thus, App.js will ultimately have the state, and it will pass cartCount as props to Navbar.js and products as props to Cart.js.   */}

                {/* We can pass the information from a component to another component which is not a direct parent, child or sibling via local storage or via using Redux. However, it isn't recommended as it is a bad practice. */}
            </div>
               
        </div>
    );
}


const styles = {

  nav: {
    // display:'inline-block',
    position:'relative',
    // margin:0,
    // padding:0,
    height: 80,
    width: '100%',
    background: '#4267b2', //#ccc
    display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center'
  },

    title: {

      // display:'inline-block',
      // display: 'flex',
      height: '100%',
      // width: '25%',
      color:'aliceblue',
      position:'absolute',
      left:0,
      // textAlign:'center',
      fontSize:40, 
      fontWeight:'bold',
      // marginTop:15, 
      padding:10
    },

    productbutton: {

      textAlign:'center',
      marginLeft:'50vw',
    },
    
   
    cartIconContainer: {
      // display:'inline-block',
      // height:'100%',
        width: 70,
      position: 'fixed',
      right: 5,
      top: 25,
      // float:'right'
      // display: 'flex',
      // justifyContent: 'flex-end',
      // marginRight: 5
    },
    cartIcon: {
      // display:'inline-block',
      // height: '100%',
      // width: '100%'
      // padding: '4px 8px',
      position: 'absolute',
      // right:-25,
      // objectFit : "contain",

      // marginRight: 20
    },
    cartCount: {
      // display:'inline-block',
      background: 'yellow',
      borderRadius: 50,
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: 1
    },
    image: {
      width : "100%",
        height: "100%",
      // objectFit : "cover"
    }
  };

export default Navbar;

