import React, { Component } from 'react'

const data = [
    { id: 1, name: "Red Car", price: 1000, img: "./img/Buoi2-products/red-car.jpg" },
    { id: 1, name: "Black Car", price: 1000, img: "./img/Buoi2-products/black-car.jpg" },
    { id: 1, name: "Silver Car", price: 1000, img: "./img/Buoi2-products/silver-car.jpg" },
    { id: 1, name: "Steel Car", price: 1000, img: "./img/Buoi2-products/steel-car.jpg" }

]

export default class RenderWithMAp extends Component {
    renderProduct = () => {
        const arrTrJSX = []
        for (let index = 0; index < data.length; index++) {
            let prod = data[index]
            let tr = <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td><img src={prod.img} alt="" width={50} /></td>
            </tr>;
            arrTrJSX.push(tr)
        }
        return arrTrJSX;
    }
    renderProductWithMap = () => {
        const arrTrJSX = data.map((prod, index) => {
            return <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td><img src={prod.img} alt="" width={50} /></td>
            </tr>;
        })
        return arrTrJSX;
    }

    render() {
        return (
            <div className='container'>
                <h3>Render table product</h3>
                <table className='table'>
                    <thead>
                        <td>id</td>
                        <td>name</td>
                        <td>price</td>
                        <td>img</td>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                        {this.renderProductWithMap()}

                    </tbody>

                </table>

            </div>
        )
    }
}
