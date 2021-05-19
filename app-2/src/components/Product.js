

const Product = (props) => {

  console.log(props.searchArray);
  console.log(props.match.params.id);

  let product = null;

  product = props.searchArray.find(product => product.id === +props.match.params.id);
  console.log(product);

  return (
    <div>
      <p>Product ID: {product.id}</p>
      <p>BRAND: {product.brand}</p>
      <p>Product Name: {product.name}</p>
    </div>
  )
}

export default Product;