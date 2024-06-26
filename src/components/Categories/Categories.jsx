import React, { useEffect, useState } from "react";
import './Categories.css'; // Import CSS file

function Categories({ onSelectCategory }) {
    const [categories, setCategories] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
            .then((response) => response.json())
            .then((res) => {
                setCategories(res);
            });
    }, []);

    useEffect(() => {
        const unique = [...new Set(categories.map(item => item.category))];
        setUniqueCategories(unique);
    }, [categories]);

    const handleCategoryClick = (category) => {
        onSelectCategory(category);
    };

    return (
        <div className="categories">
            {
                uniqueCategories.map((category, index) => (
                    <button 
                        key={index} 
                        className="category-button" 
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    );
}

export default Categories;
