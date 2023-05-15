import logo from './logo.svg';
import './App.css';

function App() {

  const products =[
    {name: 'laptop', price: '75000'},
    {name: 'desktop', price: '115000'},
    {name: 'pendrive', price: '5000'},
    {name: 'Iphone', price: '85000'}
  ]

  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name='laptop'></Product> */}
    </div>
  );
}


function Product(props){

  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
