import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
const products = [
    { id: 1, name: 'black car', img: './img/Buoi2-products/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/Buoi2-products/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/Buoi2-products/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/Buoi2-products/steel-car.jpg', price: 4000 }
];
export default class ExerciseCarStore extends Component {
    state = {
        productsModal: { id: 3, name: 'silver car', img: './img/Buoi2-products/silver-car.jpg', price: 3000 }
    }

    xemchitiet = (newProductModal) => {
        console.log(newProductModal)
        this.setState({ productsModal: newProductModal })
    }
    render() {
        return (
            <div className='container'>
                <Modal productsModal={this.state.productsModal}></Modal>
                <ProductList products={products} xemchitiet={this.xemchitiet}></ProductList>
            </div>
        )
    }
}
