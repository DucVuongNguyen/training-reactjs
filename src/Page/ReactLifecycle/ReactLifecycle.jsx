import React, { Component } from 'react'
import Child from './Child'
export default class ReactLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1,
            like: 0
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        // currentState.number = 20;
        //return về state mới, nếu giữ state cũ thì render về null
        // return currentState;
        return null;
    }
    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Number {this.state.number}</h3>
                <button className="btn btn-primary px-2" onClick={() => { this.setState({ number: this.state.number + 1 }) }}>Add</button>
                <h3>Like {this.state.like}</h3>
                <button className="btn btn-primary px 2" onClick={() => { this.setState({ like: this.state.like + 1 }) }}>Like</button>
                <Child number={this.state.number}></Child>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
        //tương tự window onload
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true
    }

}

/* Lifecycle
+Mouting:
    + Các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để
    can thiệp vào úa trình trước khi render hoặc sau khi render nhầm
    mục đích xử lý state và props
    + Can thiệp thay đổi state trước render (getDerivedStateFromProps(newProps, currentState))
    Can thiệp thay đổi state sau render sử dụng componentDidMount()
    + ComponentDidMount() chỉ chạy 1 lần duy nhất khi component load
    lần đầu tiên (thường dùng để call api)
*/


