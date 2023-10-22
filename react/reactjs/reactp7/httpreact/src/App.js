import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  const url = "http://localhost:3000/products";

  useEffect(() => {
    const fetchRequest = async () => {
      const response = await fetch(url);
      const data = await response.json();
  
      setProducts(data)
    }

    fetchRequest();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductObject = {}
    newProductObject.name = newProduct;

    console.log(newProductObject);

    const fetchRequestSend = async () => {
      const responseSend = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProductObject),
      });
    }
    fetchRequestSend();
  }

  return (
    <div className='App'>
    <h1>Http request</h1>
    {
      products.map((item, index) => (
        <p style={{background: item.name, color: `light${item.name}`}} key={index}>{item.name}</p>
      ))
    }
    <form onSubmit={handleSubmit}>
      <label>
        <span>Adicione um novo produto:</span>
        <input type="text" onChange={(event) => {setNewProduct(event.target.value)}} value={newProduct}/>
      </label>
      <input type="submit" value="Novo produto" />
    </form>
    </div>
  );
}

export default App;
