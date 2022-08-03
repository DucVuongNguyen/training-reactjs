import React, { Component } from 'react'
export default class ProducItem extends Component {
    render() {
        let { phone, detailPhone } = this.props;
        return (

            <div className="card h-100">
                <img src={phone.hinhAnh} alt="" className='w-100 h-75' />
                <div className="card-body w-100">
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan}</p>
                    <button className="btn btn-success" onClick={() => {
                        detailPhone(phone)
                    }}>Xem chi tiết</button>
                </div>
            </div>

        )
    }
}
