import React from "react";

// "cartItem" is a class based React component while "App" is a function based React component. 
class CartItem extends React.Component{ 
    // Here, the class "CartItem" is inheriting from the "Component" class of the "React" (This is required when we need to access some variables of the parent class); therefore in order to create the constructor for "CartItem" class, we need to call the constructor of the parent class first (i.e., Component class) using "super()" 
    constructor(){
        super();    // If super isn't called, we will have the error :- ReferenceError : Must call super constructor in derived class before accessing "this" or returning from derived constructor. 
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
        /*
        this.state.qty += 1;
        console.log("this.state", this.state); 
        // Increasing quantity like this results in "qty" being updated in the object "this.state" ; but the updated quantity doesn't show up in the UI. The reason being React not knowing that the state has been modified so that it can refresh/re-render the component. 
        */
        // In order to make sure that the React gets to know about the updates in the state, we have the function called "setState" which is inherited from the "React.Component" class. We have two ways of using it : - 

        // setState form 1 : via passing an object : Use this form when accessing of previous state isn't required to perform a change on the state. For instance, changing of "qty" does require the previous state but "title" doesn't.
        this.setState({
            // qty : this.state.qty + 1  //quantity should ideally be handled in the form 2
            // title : "Redmi Note 9 Pro" 
        });
        // Behind the scenes, React will take this object and will merge it to this.state via shallow merging (only making changes to the modified properties leaving other key value pairs untouched. In this case, title,price&img will remain untouched) and then will re-render our component with the updated state data.

        // setState form 2 : via passing a callback function : Use this form when you require the previous state to perform a change on the state. 
        this.setState( (prevState) => {
            return{
                qty : prevState.qty + 1
            } 
        });
        // The function being passed to the setState function will be called by React internally and meanwhile React will also pass it the previous state as an arguement. That internal function will again return an object that will shallow merge to this.state

        // NOTE : Calling of the setState function always results in re-rendering of the associated component.  
/*
    NOTE for setState form 1 : 
        this.setState({
            qty : this.state.qty + 3
        });
        this.setState({
            qty : this.state.qty + 4
        });
        this.setState({
            qty : this.state.qty + 1
        });

         //When we call this.setState (without previous state as a parameter) multiple times inside an event handler function, those all calls will be ignored by the React save by the last one (a process called batching) and thus rendering of the component will only happen once (with only a unit change in the value of "qty" in the above example which is reflective of the change made in the last call). 

*/

/* 
    NOTE for setState form 2 : 
        this.setState( (prevState) => {
            return{
                qty : prevState.qty + 3
            } 
        }); 
          this.setState( (prevState) => {
            return{
                qty : prevState.qty + 2
            } 
        }); 
        this.setState( (prevState) => {
            return{
                qty : prevState.qty + 1
            } 
        });

        //When we call this.setState (with previous state as a parameter) multiple times inside an event handler function, those all calls will be merged by the React into a single call (a process called batching) and thus rendering of the component will only happen once (but change in the value of "qty" in the above example will be +6, which is an aggregate effect of all the calls made. This happened because all the calls got lined up in a queue and then got executed one by one). 
*/
        // console.log(this.state);
        // Our setState call is asynchronous, i.e., we can't definitively know when a particular call actually finishes. So when we try to print something like this.state as we did above, the value that gets printed wouldn't necessarily be the latest one(in fact could be older one). The value printed could soon become the outdated one, as there might be a setState call in the queue pending to get executed which ones executed at some later time will alter the value of this.state. To tackle this issue, React gives us an option to pass two callback functions to this.setState() function (for both form 1 and form 2), where the second callback fxn gets executed only after the first callback fxn has been executed completely : 
        /* 
            this.setState( (prevState) => {
                return{
                    qty : prevState.qty + 1
                } 
            }, () => {
                console.log("this.state", this.state);
            });
        */
    }

    decreaseQuantity = () => {
        // console.log("minus testing");
        this.setState((prevState) => {
            if(prevState.qty>0) {
                return {
                    qty : prevState.qty - 1 
                }
            }
            return;
        });
    }

    deleteItem = () => {
        // console.log("delete testing");

    }

    render(){  
        // console.log("render");  //to keep track how many times our component got rendered while experimenting with this.State

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

