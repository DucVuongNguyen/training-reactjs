import React, { Component } from 'react'

export default class FormProduct extends Component {

    state = {
        productInfo: {
            id: "",
            name: "",
            price: "",
            productType: "",
            description: "",
            img: ""
        },
        error: {
            id: "",
            name: "",
            price: "",
            productType: "",
            description: "",
            img: ""
        }

    }

    handleChange = (event) => {

        let { value, id } = event.target
        let dataType = event.target.getAttribute("data-type")
        console.log(dataType)
        //Xử lý productInfo
        let newValue = this.state.productInfo
        newValue[id] = value;
        // Xử lý error
        let newError = this.state.error
        let messError = "";
        if (value.trim() === "") {
            messError = id + " không được bỏ trống"
        }
        else {
            if (dataType === "number") {
                let regexNumber = /^\d*$/
                if (!regexNumber.test(value)) {
                    messError = id + ' phải là số'
                }
            }
        }
        newError[id] = messError;
        // setState
        this.setState({
            productInfo: newValue,
            error: newError
        }, () => { console.log(this.state) })

    };
    handleSubmit = (event) => {
        //chawjn suwj kieejn reload cuar browser
        event.preventDefault();
        
        //khi người dùng nhấn nút submit thì gửi dữ liệu từ state ra hàm addProduct
        this.props.addProduct(this.state.productInfo)
    }
    render() {
        return (
            <form className="card" onSubmit={this.handleSubmit}>
                <div className="card-header bg-dark text-warning">Create product</div>
                <div className='card-body row'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>id</p>
                            <input className='form-control' id='id' name='id' onInput={this.handleChange} />
                            <p className='text-danger'>{this.state.error.id}</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>name</p>
                            <input className='form-control' id='name' name='name' onChange={this.handleChange} />
                            <p className='text-danger'>{this.state.error.name}</p>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>price</p>
                            <input data-type="number" className='form-control' id='price' name='price' onChange={this.handleChange} />
                            <p className='text-danger'>{this.state.error.price}</p>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>img</p>
                            <input className='form-control' id='img' name='img' onChange={this.handleChange} />
                            <p className='text-danger'>{this.state.error.img}</p>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>product type</p>
                            <select name="productType" id='productType' className='form-control' onChange={this.handleChange}>
                                <option value="mobile">Mobile</option>
                                <option value="tablet">tablet</option>
                                <option value="laptop">laptop</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>description</p>
                            <textarea name="description" id="description" className='form-control' onChange={this.handleChange}></textarea>
                            <p className='text-danger'>{this.state.error.description}</p>

                        </div>
                    </div>

                </div>
                <div className='card-footer'>
                    <button className='btn btn-success mx-2' > Create</button>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </form >
        )
    }
}
