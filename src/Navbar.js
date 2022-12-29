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
                <span style={styles.cartCount}>  {/* props.something  */}5   </span>
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

