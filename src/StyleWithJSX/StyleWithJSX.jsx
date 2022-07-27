import React, { Component } from 'react'
// import '../index.scss'
import style from './StyleWithJSX.module.scss'
export default class StyleWithJSX extends Component {
    render() {
        return (
            <div>
                <div>StyleWithJSX</div>
                <p className="text-red">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque inventore, tempora, fugiat asperiores nisi commodi aperiam quam praesentium beatae voluptas placeat suscipit fuga eaque nihil nobis expedita ut odit quod.</p>
                <h3 className={`p-2 bg-dark text-white ${style['text-blue']}`}>Hello fontend 28</h3>
                <p style={{ color: 'blue', background: `url(http://picsum.photos/500/500`, height: 500 }}>Lorem</p>
            </div >

        )
    }
}
