import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'
export default class ReactForm extends Component {
  render() {
    return (
        <div className='container'>
            <FormProduct></FormProduct>
            <TableProduct></TableProduct>
      </div>
    )
  }
}
