import React, { useContext } from "react";
import "./filter.css";
import Mycontext from "../../context/data/Mycontext";
const Filter = () => {
  const context = useContext(Mycontext);
  const {
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;
  return (
    <>
      <div className="container">
        <div className="search-filter-box">
          <div className="search-bar-container">
            <div className="search-icon">
              <svg
                className="search-icon-svg"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              name="searchkey"
              id="searchkey"
              placeholder="Search here"
              className="search-input"
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
            />
          </div>

          <div className="filters-header">
            <p className="filters-title">Filters</p>
            <button className="reset-button">Reset Filter</button>
          </div>

          <div className="filters">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              {product.map((item, index) => {
                return (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                );
              })}
            </select>
            <select
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              className="filter-select"
            >
              {product.map((item, index) => {
                return (
                  <option key={index} value={item.price}>
                    {item.price}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
