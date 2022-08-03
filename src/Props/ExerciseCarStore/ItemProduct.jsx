import React, { Component } from 'react'
export default class ItemProduct extends Component {
    render() {
        let { ItemProduct, xemchitiet } = this.props;
        return (
            <div className='card col-3'>
                <img src={ItemProduct.img} alt="" className='w-100' />
                <div className='card-body'>
                    <h3>{ItemProduct.name}</h3>
                    <p>Price: {ItemProduct.price}</p>
                    <button className='btn btn-success text-white' data-bs-toggle="modal" data-bs-target="#modelId" onClick={() => { xemchitiet(ItemProduct) }}>Xem chi tiết</button>
            </div>
            </div >
        )
    }
}
