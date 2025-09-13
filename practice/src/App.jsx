import ProductCard from "./ProductCard.jsx" 
function App() {
const productName = "car"
    const price = 1230
    const isAvailable = true
  return (
    <>
     <div>
            <p>productName:{productName}</p>
            <p>price:{price}</p>
            <p>isAvailable:{isAvailable}</p>
        </div>

    <ProductCard />
    </>
  
  )
}
export default App
