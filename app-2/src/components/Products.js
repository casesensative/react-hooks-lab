import {Link} from 'react-router-dom';

const Products = ({searchArray}) => {


  return (
    <div>
      {searchArray.map((product, i) => {
        return <Link key={i} to={`/product/${product.id}`}>
          <p>{product.name}</p>
        </Link>
      })}
    </div>
  )
}

export default Products