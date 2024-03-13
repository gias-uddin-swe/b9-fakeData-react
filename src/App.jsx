import { useEffect, useState } from "react";

import "./App.css";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
  const [name, setName] = useState("gias");
  const [products, setProducts] = useState([]);

  let control = false;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // console.log(product);

  const handleChange = () => {
    setName("hero alom");
  };

  // const [stateCount, setStateCount] = useState(0);

  // let count = 0;

  // const handleVariableCount = () => {
  //   count = count + 1;
  // };
  // const handleStateCount = () => {
  //   const sum = stateCount + 1;
  //   setStateCount(sum);
  // };

  // console.log(count);

  return (
    <>
      <h1>Main APp js</h1>

      {products.map((item, index) => (
        <SingleProduct product={item} index={index}></SingleProduct>
      ))}
    </>
  );
}

export default App;
