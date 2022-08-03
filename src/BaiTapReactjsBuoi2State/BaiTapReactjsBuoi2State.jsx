import React, { Component } from 'react'
import "./BaiTapReactjsBuoi2State.scss"
const data =
    [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
export default class BaiTapReactjsBuoi2State extends Component {

    state = {
        imgSrc: "./img/glassesImage/v1.png"
    }
    renderListGlasses = (data) => {
        return data.map((glasses, index) => {
            console.log(glasses.url)
            return <button className='btn h-50 GlassesItem' key={index} onClick={() => { this.changeGlasses(glasses.url) }}>
                <img src={glasses.url} alt="" className="w-100 h-100" />
            </button>
        })

    }
    changeGlasses = (url) => {
        this.setState({
            imgSrc: url
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='model'>
                    <img src="./img/glassesImage/model.jpg" alt="" />
                    <img src={this.state.imgSrc} alt="" className='Glasses' />
                </div>
                <div className='ListGlasses'>
                    {this.renderListGlasses(data)}
                </div>


            </div>
        )
    }
}
