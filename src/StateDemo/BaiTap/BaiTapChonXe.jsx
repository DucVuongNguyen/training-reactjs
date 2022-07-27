import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: `./img/Buoi2-products/red-car.jpg` //xác định default state
    }
    changeColor = (color) => {
        // alert(`Change color:${color}`);
        this.setState({
            srcImg: `./img/Buoi2-products/${color}-car.jpg`
        })
    }
    render() {
        return (
            <div className='container'>
                <h3>Bài tập chọn xe</h3>
                <hr />
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.state.srcImg} alt="" className='w-100' />
                    </div>
                    <div className='col-6'>
                        <button className='btn text-white mx-2' style={{ background: 'red' }} onClick={() => { this.changeColor('red') }}>Red</button>
                        <button className='btn text-white mx-2' style={{ background: 'black' }} onClick={() => {
                             this.changeColor('black')
                        }}>Black</button>
                        <button className='btn text-white mx-2' style={{ background: 'silver' }} onClick={() => {
                            this.setState({
                                srcImg: `./img/Buoi2-products/silver-car.jpg`
                            })
                        }}>Silver</button>
                        <button className='btn text-white mx-2' style={{ background: '#EEE' }} onClick={() => {
                            this.setState({
                                srcImg: `./img/Buoi2-products/steel-car.jpg`
                            })
                        }}>Steel</button>
                    </div>

                </div>

            </div>
        )
    }
}
