import './App.css';
import Header from './Header/Header';
import {Footer} from './Header/Footer';
import ProductCard from "./ProductCard/ProductCard";
import React from "react";

function App() {
    return (
            <div className="App">
                <Header/>
                <ProductCard/>
                <Footer/>
            </div>
    );
}

export default App;
