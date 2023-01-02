import React from "react";

const Footer = (props) => {
    return(
        <div style={styles}> TOTAL :  {props.cartTotal()} </div>
);
}
const styles = {
    // height: 80,
    marginTop:15, 
    padding:30,
    color:'aliceblue', 
    fontSize:30, 
    fontWeight:'bold', 
    textAlign: "center", 
    background:"#4267b2"

}
export default Footer;