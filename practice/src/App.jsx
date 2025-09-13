import ProductCard from "./ProductCard.jsx"
import Profile from "./Profile1.jsx"
import Greeting from "./Greeting.jsx"
import Id from "./Id.jsx"
import "./Product.css"
import BlogPost from "./BlogPost"
function App() {
  const productName = "iphone"
  const price = 2000
  const isAvailable = true
  const product = [{
    productName: "product1",
    price:4000,
    isAvailable: true
  }, {
    productName: "product2",
    price:6000,
    isAvailable: true
  }, {
    productName: "product3",
    price:8000,
    isAvailable: true
  }, {
    productName: "product4",
    price:7000,
    isAvailable: true
  }]

  const posts=[
    {
      id:1,
      author:"trisha",
      title:"nice",
      description:"trisha is very nice"
    },
    {
      id:2,
      author:"trisha",
      title:"nice",
      description:"trisha is very nice"
    },
    {
      id:3,
      author:"trisha",
      title:"nice",
      description:"trisha is very nice"
    },
    {
      id:4,
      author:"trisha",
      title:"nice",
      description:"trisha is very nice"
    }
  ]
  return (
    <div className="box" >
      {/* <ProductCard productName="Banana" price={30} isAvailable={true} /> */}
      {/* <ProductCard productName="Banana" price={30} isAvailable={false} /> */}
      {/* <Id course="B.Tech" rollnumber="23VV1A0505" /> */}
      {/* {
        products.maps((product)=>(
            <ProductCard
            productName={product.productName}
            price={product.price}
            isAvailable={product.isAvailable}
            />
        ))
      } */}
{
  posts.map((post)=>(
    <BlogPost
    key={post.id}
    author={post.author}
    title={post.title}
    description={post.description}
   />
  )
  )
}


    </div>
  )
}

export default App;
