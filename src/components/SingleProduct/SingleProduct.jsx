import React from "react";

const SingleProduct = (props) => {
  const { product,index } = props;
  console.log(index);

  return (
    <div>
          <p>{product.title}</p>
    </div>
  );
};

export default SingleProduct;
