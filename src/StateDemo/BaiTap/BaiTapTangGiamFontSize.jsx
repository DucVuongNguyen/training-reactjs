import React, { Component } from 'react'

export default class BaiTapTangGiamFontSize extends Component {
    state = ({
        fSize: 12,
    })
    render() {
        return (
            <div className="container">
                <h3>Bài tập tăng giảm fontsize</h3>
                <hr />
                <p style={{ fontSize: this.state.fSize }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ullam eius eligendi dignissimos architecto sint fuga est sit molestiae, inventore itaque modi perspiciatis, optio autem at cupiditate qui atque laborum.</p>
                <button className="btn btn-primary mx-2" onClick={() => {
                    this.setState({
                        fSize: this.state.fSize + 5
                    })
                }}>+</button>
                <button className="btn btn-primary mx-2" onClick={() => {
                    this.setState({
                        fSize: this.state.fSize - 5
                    })
                }}>-</button>
            </div>
        )
    }
}
