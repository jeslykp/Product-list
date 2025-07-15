import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from 'react';
import { fetchCategories, fetchProductByCategory, fetchProducts } from "../api/api";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Sort from "../components/Sort";
// import SearchBar from './components/SearchBar';
// import FilterBar from './components/FilterBar';
// import SortOptions from './components/SortOptions';
// import ProductList from './components/ProductList';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const fetchData = async () => {
    const productsRes = await fetchProducts();
    const categoriesRes = await fetchCategories();
    setProducts(productsRes.data);
    setCategories(categoriesRes.data);
  };
  const fetchProductByCat = async () => {
      const productsRes = await fetchProductByCategory(selectedCategory);
      setProducts(productsRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProductByCat(selectedCategory);
    } else {
      fetchData();
    }
  }, [selectedCategory]);

  const filteredProducts = products
    .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'priceLow') return a.price - b.price;
      if (sortOption === 'priceHigh') return b.price - a.price;
      if (sortOption === 'rating') return b.rating?.rate - a.rating?.rate;
      return 0;
    });

  return (
    <div className="w-screen h-screen mx-auto">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-2 mb-4 px-4">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Sort sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <h1 className="font-bold ms-4 mb-10 text-3xl text-center">{selectedCategory ? selectedCategory : 'All item categories'}</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
}
export default HomePage