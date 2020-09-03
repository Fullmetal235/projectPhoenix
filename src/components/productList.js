import React, { Component } from "react";
import Product from "./product";
import Title from "./Title";
import { ProductConsumer } from "../context";
class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our " title="products" />
            <div className="filters-toolbar-wrapper filters-toolbar--has-filter">
              <div className="page-width">
                <div className="filters-toolbar">
                  <div className="filters-toolbar__item-wrapper">
                    <div className="filters-toolbar__item-child">
                      <label
                        className="filters-toolbar__label select-label"
                        for="FilterTags"
                      >
                        Filter by
                      </label>
                      <div className="filters-toolbar__input-wrapper select-group">
                        <select
                          className="filters-toolbar__input"
                          name="FilterTags"
                          id="FilterTags"
                          aria-describedby="a11y-refresh-page-message a11y-selection-message"
                          style={{ width: "132px" }}
                        >
                          <option value="/collections/all">All products</option>

                          <option value="/collections/all/clothes">
                            clothes
                          </option>

                          <option value="/collections/all/other">other</option>

                          <option value="/collections/all/raffles">
                            raffles
                          </option>

                          <option value="/collections/all/shoes">shoes</option>
                        </select>
                      </div>
                    </div>

                    <div className="filters-toolbar__item-child">
                      <label
                        className="filters-toolbar__label select-label"
                        for="SortBy"
                      >
                        Sort by
                      </label>
                      <div className="filters-toolbar__input-wrapper select-group">
                        <select
                          name="sort_by"
                          id="SortBy"
                          className="filters-toolbar__input"
                          aria-describedby="a11y-refresh-page-message a11y-selection-message"
                          data-default-sortby="title-ascending"
                          style={{ width: "174px" }}
                        >
                          <option value="manual">Featured</option>
                          <option value="best-selling">Best selling</option>
                          <option value="title-ascending" selected="selected">
                            Alphabetically, A-Z
                          </option>
                          <option value="title-descending">
                            Alphabetically, Z-A
                          </option>
                          <option value="price-ascending">
                            Price, low to high
                          </option>
                          <option value="price-descending">
                            Price, high to low
                          </option>
                          <option value="created-ascending">
                            Date, old to new
                          </option>
                          <option value="created-descending">
                            Date, new to old
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      //<Product />
    );
  }
}

export default ProductList;
