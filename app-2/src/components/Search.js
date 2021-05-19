import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Search = ({setSearchArray, searchArray}) => {

  const [searchInput, setSearchInput] = useState('');



  const searchProducts = async (input) => {
    const searchresult = await axios.get(`https://skincare-api.herokuapp.com/product?q=${input}`);

    setSearchArray(searchresult.data);
    setSearchInput('');

  }

  console.log(searchInput);

  return (
    <div>
      <input type='text' placeholder='search product...' value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)} />
      <Link to='/products'><button onClick={() => searchProducts(searchInput)}>SEARCH</button></Link>
    </div>
  )
}

export default Search;