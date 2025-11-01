import Footer from "./components/Footer";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const visible = isVisible ? "HIDE FILTER" : "SHOW FILTER";

  const hideFilterSection = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="app-container">
      <Header />
      <div className="discover-product-container">
        <h1 className="discover-heading">Discover Our Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <hr />
      <div>
        <div className="item-filter-recommented-container">
          <div className="item-filter-container">
            <h1 className="item-count-heading">3689 Items</h1>
            <div className="filter-arrow-container">
              <button className="filer-button" onClick={hideFilterSection}>
                <span>&lt;</span>
                {visible}
              </button>
            </div>
          </div>
          <select className="select-option">
            <option value="RECOMMENDED" selected>
              RECOMMENDED
            </option>
            <option value="NEW FIRST">NEW FIRST</option>
            <option value="POPULAR">POPLULAR</option>
            <option value="PRICE: HIGH TO LOW">PRICE: HIGHT TO LOW</option>
            <option value="PRICE LOW TO HIGHT">PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <hr />
        <div className="filter-and-productcard-section">
          <Filters isVisible={isVisible} />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
