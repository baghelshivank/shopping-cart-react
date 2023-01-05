import React from "react";
import ReactDOM  from 'react-dom/client';
import App from "../App.js";

const HP = () => {
return(
    <div>
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
export default HP;