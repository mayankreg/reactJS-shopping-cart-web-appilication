import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";

//  importing actions
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";

class Products extends Component {

  // executes after rendering
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    //  rendering each product
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-primary"
            onClick={(e) => this.props.handleAddToCart(e, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}

// updating state & sendin it to store
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
