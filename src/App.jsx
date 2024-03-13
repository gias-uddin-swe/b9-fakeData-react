import { useEffect, useState } from "react";

import "./App.css";
import SingleProduct from "./SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCart = (pd) => {
    const isExists = cart.find((p) => p.id == pd.id);
    if (!isExists) {
      setCart([...cart, pd]);
    } else {
      alert("Cart already exists");
    }
  };

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleRemove = (id) => {
    const removeItem = cart.filter((item) => item.id != id);
    setCart(removeItem);
  };

  return (
    <>
      <div className="main-container">
        <div className="left-service-container">
          <div className="cards">
            {products.map((product) => (
              <SingleProduct
                handleCart={handleCart}
                product={product}
              ></SingleProduct>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <div className="cart">
            <h3>Total Added product 0</h3>

            <div className="cart-items">
              <h5>Name</h5>
              <h5>Price</h5>
            </div>
            <div className="added-item">
              {cart.map((cp) => (
                <>
                  <p>{cp.title.slice(0, 25)}</p>
                  <button onClick={(e) => handleRemove(cp.id)}>remove</button>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
