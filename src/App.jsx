import './App.css'
import Navbar from './components/Navbar'
import Hero_Section from './components/Hero_Section'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import WinterDiscount from './components/WinterDiscount'
import All_Products from './components/All_Products'
import Footer from './components/Footer'


const product_arr = [
  {
    id: "Type 6",
    title: "Dummy text for title",
    price: 109.95,
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-6_c190a53e-caf1-43be-b19a-c2175eac50f3_90x.jpg?v=1566022570",
    
  },
  {
    id: "Type 8",
    title: "Product title here",
    price: 109.95,
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-10_ff072988-9f47-49e5-9af3-c41d4a05bc27_90x.jpg?v=1566022600",
    
  },
  {
    id: "Type 4",
    title: "Dummy product name",
    price: 19.95,
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-4_69cf84a3-cf18-4010-bcbd-4881091474bc_90x.jpg?v=1566022556",
    
  },
  {
    id: "Type 5",
    title: "Dummy product name",
    price: 50.15,
    description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-1_308ad088-4f3c-4b6f-9ba7-3f4496b831ba_90x.jpg?v=1566022533",
    
  },
  {
    id: "Type 6",
    title: "Product dummy title",
    price: 55.00,
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-8_90x.jpg?v=1566022587",
    
  },
  {
    id: "Type 7",
    title: "Product dummy title",
    price: 29.00,
    description: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-3_90x.jpg?v=1566022550",
    
  },
  {
    id: "Type 9",
    title: "Product dummy title",
    price: 29.00,
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-5_c6f444b7-a575-4409-afae-0c87eb1cc832_90x.jpg?v=1566022562",
    
  },
  {
    id: "Type 9",
    title: "Product dummy title",
    price: 29.00,
    description: "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that...",
    image: "https://daxone-demo.myshopify.com/cdn/shop/products/pro-hm4-7_b4d305ca-fc51-41ba-b41c-1de4ec715cac_90x.jpg?v=1566022576",
    
  },
]
function App() {

  const [current_data, setCurrent_data] = useState(null);

  const show_details_handle = (data) => {
    setCurrent_data(data);
  };

  const go_back_handle = () => {
    setCurrent_data(null);
  };

  




  return (
    <>
      <Navbar/>
      <Hero_Section/>
      <Section1/>
      <Section2/>
      <WinterDiscount />
      {/* {current_data ? (
        <div>
          <Details_Component
            go_back_handle={go_back_handle}
            title={current_data.title}
            price={current_data.price}
            image_url={current_data.image_url}
            description={current_data.description}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {product_arr.map((current_object, index) => {
            return (
              <Product_Card
                key={index}
                description={current_object.description}
                click_handle={show_details_handle}
                title={current_object.title}
                price={current_object.price}
                image_url={current_object.image}
              />
            );
          })}
        </div> */}
      
      <All_Products />
      <Footer />
    </>
  )
}

export default App
