import './App.css';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Router>
            <div className='App'>
                <nav className='nav'>
                    <h1 className='shoppingcart'>Shopping Cart</h1>
                    <ul className='links'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route 
                        path="/products" 
                        element={
                            <>
                                <Categories onSelectCategory={handleCategorySelect} />
                                <Products selectedCategory={selectedCategory} />
                            </>
                        } 
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
