import React from "react";

// class Navbar extends React.Component{ 
    // This currently is a class component, but since this doesn't have a state, we will change it to a funtional component. 
const Navbar = (props) => {
    // For every functional component, React passes props by default. 
  
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                {/* Cart Icon for the Navbar */}
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/8181/8181590.png" alt="cart-icon" />
                {/* The count for the no. of items in our cart */}
                <span style={styles.cartCount}>  {/* props.something */} {/*5*/} {props.count}   </span>
                {/* The number 5 above is hardcoded. To make it dynamic, i.e., change it to no. of items in the cart, we would require the count from Cart.js which has state in which we have an array of products P1, P2, P3,... with quantities Q1, Q2, Q3,... and the net count is Q1+Q2+Q3+... Now we know that parent component can share data with child component directly via props, but siblings couldn't share data among themselves directly (Cart.js and Navbar.js happen to be siblings in this case with App.js as the common parent). So what we can do is whenever we need to share some state among siblings (or any other component), we would move the state from a sibling component to a parent component which is common to both the siblings. And then that parent will transfer the data as props to the second sibling. */}
            </div>
               
        </div>
    );
}


const styles = {
    cartIcon: {
      height: 40,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

export default Navbar;

