import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

function Products({ selectedCategory }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res);
            });
    }, []); 

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div className="product-card-menu">
            {
                filteredProducts.map((item, index) => (
                    <ProductCard key={index} product={item} />
                ))
            }
        </div>
    );
}

export default Products;
