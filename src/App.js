import CartItem from './CartItem.js';

function App() {
  return (
    <div className="App">
      {/* <h1> Cart </h1> */}
        <CartItem/>
    </div>
  );
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