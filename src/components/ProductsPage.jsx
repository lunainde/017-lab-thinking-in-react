// src/components/ProductsPage.js
import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import FilterCheckbox from './FilterCheckbox';

function ProductsPage () {
  // state for starting point, ' ' & false
  const [products, setProducts] = useState(jsonData);
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  //adjust filter
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };
  const filteredProducts = products.filter(product => {
    const searchMatch = product.name.toLowerCase().includes(filterText.toLowerCase())
    const stockMatch = !inStockOnly || product.inStock;
    return searchMatch && stockMatch;
  });
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterText={filterText} onFilterChange={(e) => setFilterText(e.target.value)} />
        <FilterCheckbox inStockOnly={inStockOnly} onInStockChange={(e) => setInStockOnly(e.target.checked)} />
        <hr></hr>
        <ProductTable products={filteredProducts}/> 
      </div>    
  );
}
export default ProductsPage;

//==========================================
// const filterProducts = (wordToSeach) => {
  //   setProducts(jsonData.filter((product)=>{
  //       return product.name.includes(wordToSearch)
  //   }))
  // }