import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [state, setState] = useState({
    name: '',
    description: '',
    brand: '',
    price: ''
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await fetch('/products');
        const products = await res.json();
        setProducts(products);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  });

  const handleDelete = (id) => {
    const deleteItem = async () => {
      try {
        const res = await axios.delete(`/products/${id}`)
        const product = await res.json();
        console.log(product);
      } catch (e) {
        console.log(e);
      }
    }
    deleteItem();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/products', {
      name: state.name,
      brand: state.brand,
      description: state.description,
      price: state.price
    }).then(res => {
      setState({
        name: '',
        description: '',
        brand: '',
        price: ''
      });
    })
    .catch(e => console.log(e));
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="App">
      <div>
        <h2>Product List</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div><input type="text" name="name" value={state.name} onChange={handleChange} /><span>Name</span></div>
            <div><input type="text" name="brand" value={state.brand} onChange={handleChange} /><span>Brand</span></div>
            <div><input type="inputfield" name="description" value={state.description} onChange={handleChange} /><span>Description</span></div>
            <div><input type="number" name="price" value={state.price} onChange={handleChange} /><span>Price</span></div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <div>
        <div>
          {products.length > 0 &&
            products.map(p => (
              <div key={p._id}>
                <div>
                  <h3>{p.name}</h3>
                  <div>{p.brand}</div>
                  <div>{p.description}</div>
                  <div>{p.price}</div>
                </div>
                <div><button onClick={() => handleDelete(p._id)}>Delete</button></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
