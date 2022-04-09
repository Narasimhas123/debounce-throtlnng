
import "./styles.css";

function getProduct(query){
  console.log(query)
}
function debounce(callback, delay){

  let timeOutId;
  return function(...args){
    if(!timeOutId){
    clearTimeout(timeOutId);
    
    }
    
    timeOutId=setTimeout(()=>
    
    
    callback(...args),
    
     delay)
  }


}
const debouncGetProduct=debounce(getProduct, 2000)
export default function App() {
  // const [bounce, setBounce]= useState("")
  // function handle(e){
  //   setBounce(e.target.value)
  // }
  // useEffect(()=>{
  //   // console.log("set")
  //   id=setTimeout(()=>getProduct(bounce), 1000)
    
  //   return ()=>{
  //     // console.log("clear")
  //     clearTimeout(id)
  //   }
  // },[bounce])
  function handle(e){
    debouncGetProduct(e.target.value)
  }
  return (
    <div className="App">
      <input type="text"   onChange={handle} />
    </div>
  );
}
