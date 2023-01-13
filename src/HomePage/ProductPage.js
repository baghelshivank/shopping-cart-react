import React from "react";
import ReactDOM from 'react-dom/client';
import App from "../App.js";

class HP extends React.Component {

    constructor() {
        super();
        this.state = {
            productsHP: [

                {
                    title: "Watch",
                    price: 999,
                    qty: 1,
                    img: "https://media.istockphoto.com/id/1403974074/photo/watch-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=iIp_OPf2U6omi_qaCoappr6j5K65QXu_yW7Ng1JmCjE=",
                    id: 1
                },
                {
                    title: "Phone",
                    price: 9999,
                    qty: 1,
                    img: "https://media.istockphoto.com/id/1211592281/photo/woman-holding-and-touching-blank-screen-template-smart-phone-smart-phone-screen-is-empty-with.jpg?b=1&s=170667a&w=0&k=20&c=WuhVgaUf6LGftlL7PnIgmTH6Nv84OoR3L7hsURsGO5g=",
                    id: 2
                },
                {
                    title: "Laptop",
                    price: 99999,
                    qty: 1,
                    img: "https://media.istockphoto.com/id/1165781006/photo/women-typing-on-keyboard-of-modern-laptop-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=gOZAQ3_WNy1l5J5Czx_P1Y9gMHUUXU3VbYVgn-vM5hY=",
                    id: 3
                },
                {
                    title: "Tablet",
                    price: 35000,
                    qty: 1,
                    img: "https://media.istockphoto.com/id/1304769628/photo/tablet-with-headphones-and-pencil-on-yellow-background-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=ZztrmyFcKCi1o0QtgEsHOjQ9Y1AlVRclKbwEPcIXbO8=",
                    id: 4
                },
                {
                    title: "Headphones",
                    price: 999,
                    qty: 1,
                    img: "https://media.istockphoto.com/id/1401030339/photo/wireless-headphones-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=xFfHJUtNls3qAxULzsUxYWgosxb9nLy-xfDj0tyzFb8=",
                    id: 5
                },
                {
                    title: "Smart TV",
                    price: 150000,
                    qty: 1,
                    img: "https://media.istockphoto.com/id/1182345601/photo/tv-on-cabinet-in-modern-living-room-on-yellow-wall-background.jpg?s=612x612&w=0&k=20&c=emzAQ852RQN29AAitmD0gEWbE4iFmkzBf0m3Mbuve_s=",
                    id: 6
                }
            ]
        }
    }
    render() {
        return (
            <div className="cart">

            
                {  
            productsHP.map((product)=>{})
                }
                <button onClick={() => {
                    // return App;
                    console.log("Hi");
                    const root = ReactDOM.createRoot(document.getElementById('root')).render(

                        <React.StrictMode>
                            <App />
                        </React.StrictMode>
                    );
                }}> My Cart </button>
            </div>
        )
    }
}
export default HP;

