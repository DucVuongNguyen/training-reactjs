import React, { Component } from 'react'

export default class Databinding extends Component {
    product = {
        id: 1,
        price: 1000,
        img: `https://picsum.photos/id/2/200/200`

    }
    renderCardProduct = () => {
        return (
            <div className='card'>
                <img src={this.product.img} alt="" />
            </div>
        )
    }
    render() {
        const title = "Cybersoft"
        const person = {
            name: 'mr.Dam',
            age: 25
        }
        const renderText = (tenLop) => {
            return `hello ${tenLop}`
        }
        return (
            <div className='container'>
                <p id='pText'>{title}</p>
                <hr></hr>
                <div className='card w-25 mt-2'>
                    <div className='card-body'>
                        <p>NAME: {person.name}</p>
                        <p>AGE: {person.age}</p>
                    </div>

                </div>
                <hr></hr>
                {renderText(17040101)}
                <hr></hr>
                <div className='alert alert-success'>
                    <p>id: {this.product.id}</p>
                    <p>price: {this.product.price}</p>
                    <img src={this.product.img} alt="" />
                </div>
                <hr></hr>
                {this.renderCardProduct()}
            </div>
        )
    }
}
