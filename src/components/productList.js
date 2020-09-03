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
            <div class="filters-toolbar-wrapper filters-toolbar--has-filter">
              <div class="page-width">
                <div class="filters-toolbar">
                  <div class="filters-toolbar__item-wrapper">
                    <div class="filters-toolbar__item-child">
                      <label
                        class="filters-toolbar__label select-label"
                        for="FilterTags"
                      >
                        Filter by
                      </label>
                      <div class="filters-toolbar__input-wrapper select-group">
                        <select
                          class="filters-toolbar__input"
                          name="FilterTags"
                          id="FilterTags"
                          aria-describedby="a11y-refresh-page-message a11y-selection-message"
                          style="width: 132px;"
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
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-chevron-down"
                          viewBox="0 0 9 9"
                        >
                          <path
                            d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div class="filters-toolbar__item-child">
                      <label
                        class="filters-toolbar__label select-label"
                        for="SortBy"
                      >
                        Sort by
                      </label>
                      <div class="filters-toolbar__input-wrapper select-group">
                        <select
                          name="sort_by"
                          id="SortBy"
                          class="filters-toolbar__input"
                          aria-describedby="a11y-refresh-page-message a11y-selection-message"
                          data-default-sortby="title-ascending"
                          style="width: 174px;"
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
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-chevron-down"
                          viewBox="0 0 9 9"
                        >
                          <path
                            d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="filters-toolbar__item filters-toolbar__item--count">
                    <span class="filters-toolbar__product-count">
                      20 products
                    </span>
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
