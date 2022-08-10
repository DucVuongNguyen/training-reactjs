import React, { Component, PureComponent } from 'react'
/**
 * PureComponent là component không có lifecycle
 * ShouldComponentUpdate tuy nhiên ở PureComponent
 * đã hỗ trợ việc xử lý render khi props ở đây thay đổi và không render
 * khi props không thay đổi
 * Lưu ý:
 *  So sánh props ở đây chỉ là dạng shallow copare - nhận biết được (primitive value): number, boolean, string, undefined...
 * Đối với reference value thì khi cập nhật state ở component cha phải sử dung (...spread operator)
 */
export default class Child extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log('constructor child')
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');
        return null;

    }
    render() {
        console.log('render child')
        return (
            <div className="p-5 display-4 bg-dark text-white">
                <h3>Child component {this.props.number}</h3>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount child')
    }
    // shouldComponentUpdate(newProps, newState) {
    //     if (this.props.number !== newProps.number) {
    //         console.log('shouldComponentUpdate Child')
    //         return true
    //     }
    //     return false
    // }
}
