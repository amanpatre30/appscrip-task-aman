import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="product-card-container">
      {products.map((product) => {
        const { id, title, price, image, rating } = product;
        const { rate, count } = rating;

        return (
          <li key={id} className="product-card">
            <img
              src={image}
              alt={title}
              width={80}
              className="image-container"
            />
            <h3 className="product-card-title">{title}</h3>
            <div className="product-card-details">
              <p className="product-card-price">
                <span>$</span>
                {price}
              </p>
              <p className="product-card-rating">
                <span className="star">&#9733;</span> {rate}
              </p>
              <p>({count} reviews)</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCard;
