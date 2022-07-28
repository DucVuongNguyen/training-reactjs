import React, { Component } from 'react'
import BaiTapChonXe from '../BaiTap/BaiTapChonXe'
import BaiTapTangGiamFontSize from '../BaiTap/BaiTapTangGiamFontSize'
export default class StateDemo extends Component {
    // state là thuộc tính có sẵn của react class compunent, dùng để chứa các giá trị thay đổi trên giao diện
    state = {
        login: false,

    }
    renderLogin = () => {
        if (this.state.login) {
            return <div>
                <span className="text-light mx-2">Hello cybersoft</span>
                <button className="btn btn-outline-success" onClick={() => { this.handleLogin(); }}>Đăng xuất</button>

            </div>
        }
        return <div>
            <button className="btn btn-outline-success" onClick={() => { this.handleLogin(); }}>Đăng nhập</button>
        </div>
    }
    handleLogin = async () => {
        await this.setState(
            {
                login: !this.state.login
            },
            () => {
                // hàm này sẽ tự gọi khi setState và render xong
                console.log(`setState: ${this.state.login}`)
            });
        // this.setState là phương thức có sẵn trong react class compinent, làm thay đổi giá trị State cũ đồng thời render lại giao diện
        // setState là phương thức bất đồng bộ
        console.log(`async - setState: ${this.state.login}`)
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expanded-sm navbar-dark bg-dark"></nav>
                <hr />

                <BaiTapChonXe></BaiTapChonXe>
                <BaiTapTangGiamFontSize></BaiTapTangGiamFontSize>


            </>

        )
    }
}
