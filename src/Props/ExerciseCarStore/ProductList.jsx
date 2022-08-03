import React, { Component } from 'react'
import ItemProduct from './ItemProduct'
export default class ProductList extends Component {
    renderProductItems = () => {
        let { products,xemchitiet } = this.props
        return products.map((product, index) => {
            return <ItemProduct ItemProduct={product} xemchitiet={xemchitiet} key={index} ></ItemProduct>

        }
        )
    }
    render() {
        return (
            <div>
                <h3>Danh sách xe</h3>
                <div className="row">
                    {this.renderProductItems()}
                </div>
            </div>
        )
    }
}
