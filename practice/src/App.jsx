import ProductCard from "./ProductCard.jsx"
import Greeting from "./Greeting.jsx"
function App() {
  const productName = "car"
  const price = 1230
  const isAvailable = true
  const myname="trisha"
  return (
    <>
    

      <Greeting receivedname={myname} age={22}/>
    </>

  )
}
export default App
