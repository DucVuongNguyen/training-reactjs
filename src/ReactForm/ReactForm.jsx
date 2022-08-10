import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'
export default class ReactForm extends Component {
  state = {
    arrProduct: [
      { id: '1', name: 'Product 1', price: 1000, img: 'http://placehold.it/300x300', description: 'Product 1 description', type: 'mobile' },
      { id: '2', name: 'Product 2', price: 1000, img: 'http://placehold.it/300x300', description: 'Product 2 description', type: 'table' },
    ],
  }
  addProduct = (newProduct) => {
    let arrProductUpdate = [...this.state.arrProduct, newProduct]
    this.setState({
      arrProduct: arrProductUpdate
    }, () => { this.saveStore() })
  }

  delProduct = (idDel) => {
    console.log(idDel)
    let arrProductUpdate = this.state.arrProduct.filter(pro => pro.id !== idDel)
    this.setState({ arrProduct: arrProductUpdate }, () => { this.saveStore() })


  }

  saveStore = () => {
    let value = JSON.stringify(this.state.arrProduct)
    localStorage.setItem('arrProduct', value)
  }
  getStore = () => {
    if (localStorage.getItem('arrProduct')) {
      let arrProduct = JSON.parse(localStorage.getItem('arrProduct'))
      return arrProduct
    }
    return []
  }
  render() {
    return (
      <div className='container'>
        <FormProduct addProduct={this.addProduct}></FormProduct>
        <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct}></TableProduct>
      </div>
    )
  }
  componentDidMount() {
    //Hàm này sẽ thực thi sau khi nội dung 
    this.setState({
      arrProduct: this.getStore()
    })
  }
}
