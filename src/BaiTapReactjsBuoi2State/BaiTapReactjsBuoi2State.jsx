import React, { Component } from 'react'


export default class BaiTapReactjsBuoi2State extends Component {

    state = {
        imgSrc: "./img/glassesImage/v1.png"
    }
    changeGlasses = (number) => {
        this.setState({
            imgSrc: `./img/glassesImage/v${number}.png`
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='header' style={{ backgroundColor: 'rgb(0,0,0,0.6)', width: '100%', height: '100px', color: '#fff', fontSize: 18, fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>TRY GLASSES APP ONLINE</p>
                </div>
                <div className="imgModel position-relative d-flex justify-content-center">
                    <img src="./img/glassesImage/model.jpg" alt="model" className='' />
                    <img src={this.state.imgSrc} alt="v1" className='position-absolute h-20 w-25' style={{ top: '150px', right: '420px' }}></img>
                </div>
                <div className='choices d-flex justify-content-center' >
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g1.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("1")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g2.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("2")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g3.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("3")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g4.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("4")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g5.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("5")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g6.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("6")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g7.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("7")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g8.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("8")
                        }}/>
                    </button>
                    <button className='btn  mx-2' style={{border: "2px solid black",width: '80px', height: '50px'}}>
                        <img src="./img/glassesImage/g9.jpg" alt="" style={{ width: '100%', height: '100%' }} onClick={() => {
                            this.changeGlasses("9")
                        }}/>
                    </button>
                    
                </div>

            </div>
        )
    }
}
