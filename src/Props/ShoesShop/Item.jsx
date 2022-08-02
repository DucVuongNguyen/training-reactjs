import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const { Shoes } = this.props
        return (

            <div div className='card' >
                <img src={Shoes?.image} alt="" />
                <div className='card-body'>
                    <h3>{Shoes?.name}</h3>
                    <p>{Shoes?.price}</p>
                    <button className='btn bg-dark text-white'>
                        Add to carts
                    </button>
                </div>
            </div >
        )
    }
}
