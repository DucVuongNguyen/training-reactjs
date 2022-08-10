import React, { Component } from 'react'

export default class TableProduct extends Component {
    renderArrProduct = (arrProduct) => {
        return arrProduct.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td><img src={product.img} alt="" /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.type}</td>

                <td>{product.description}</td>
                <td>
                    <button className="btn btn-danger mx-2" onClick={() => { this.props.delProduct(product.id) }}>Del</button>
                    <button className="btn btn-primary mx-2">Edit</button>
                </td>
            </tr >
        })

    }
    render() {
        let { arrProduct} = this.props
        // arrProduct: [
        //     {id:'1',name:'Product 1',price:1000,img:'http://placehold.it/300x300',description:'Product 1 description',type:'mobile'},
        //     {id:'2',name:'Product 2',price:1000,img:'http://placehold.it/300x300',description:'Product 2 description',type:'table'},
        //   ]
        return (
            <div className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                        <th>type</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderArrProduct(arrProduct)}


                </tbody>

            </div>
        )
    }
}
