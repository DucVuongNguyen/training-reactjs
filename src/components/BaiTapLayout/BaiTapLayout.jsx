import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTNavigation from './BTNavigation'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader></BTHeader>
                <div className='d-flex'>
                    <div className='w-25'>
                        <BTNavigation></BTNavigation>
                    </div>
                    <div className='w-75'>
                        <BTContent></BTContent>
                    </div>

                </div>
                <BTFooter></BTFooter>
            </div>

        )
    }
}
