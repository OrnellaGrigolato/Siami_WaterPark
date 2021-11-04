import React from 'react'
import "./header.css"
import ArrowDownOutlined from '@ant-design/icons' 


function Header() {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'/header.jpg'})` }} className={'header'}>
            <h1 className='headerTitle'>SIAMI WATERPARK</h1>
            <ArrowDownOutlined style={{width: '20'}}/>
        </div>
    )
}

export default Header
