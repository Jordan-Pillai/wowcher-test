import React, { useEffect, useState } from 'react';

import Header from './header';
import Loading from './loading';
import ProductTable from './tables/product-table';
import SearchInput from './search-input';

import { formatProductArray } from '../utils';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('/api/branch1.json'),
      fetch('/api/branch2.json'),
      fetch('/api/branch3.json'),
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        setProducts(formatProductArray(data));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="product-list">
          <SearchInput searchTerm={searchTerm} onChange={handleChange} />
          <ProductTable filteredProducts={filteredProducts} />
        </div>
      )}
    </>
  );
};

export default App;
