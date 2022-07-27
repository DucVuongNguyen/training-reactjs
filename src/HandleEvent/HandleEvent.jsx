import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => { alert('Heloo Cybersoft') }
    showMess = (name) => {
        alert(`Hello ${name}`)
    }
    render() {
        return (
            <div className="container">
                <button id='btnClick' onClick={() => { alert('Heloo Cybersoft') }}>
                    Click Me
                </button>
                <hr></hr>
                <button className='btn btn-primary ml-2' onClick={this.handleClick}>Click</button>
                <hr></hr>
                <button className='btn btn-primary ml-2' onClick={this.showMess.bind(this, `Quân mentors`)}>Click</button>
                <hr></hr>
                <h3>Handle click params</h3>
                <button onClick={(e) => {
                    // gọi các hàm khác khi click
                    this.showMess(`Quân Mentor!!!`)
                }}>Show mess</button>
            </div>
        )
    }
}
