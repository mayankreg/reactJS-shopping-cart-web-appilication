import React, { Component } from "react";
import { Provider } from "react-redux";
import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";

// importing components
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";

// rendering each component here & styles have been given in index.html file in public folder
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="float-start">
            <Notifications />
          </div>

          <h1>E-commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
