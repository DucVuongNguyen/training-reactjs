import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Body from './Body'
import Item from './Item'
import Footer from './Footer'
export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <Item></Item>
                <Footer></Footer>
            </div>
        )
    }
}
