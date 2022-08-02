import React, { Component } from 'react'

export default class ProductCard extends Component {
    // this.props:thuộc tính có sẵn của react class component dùng để nhận giá trị tuwg component
    // cha truyền vào
    // optional chaining: ? => nếu có thì làm không có thì bỏ qua

    render() {
        const { item } = this.props;
        return (
            <div className='card'>
                <img src="https://placehold.it/500x300" alt="" />
                <div className='card-body'>
                    <p>Name: {item?.name}</p>
                    <p>Age: {item?.age}</p>
                </div>
            </div>
        )
    }
}
