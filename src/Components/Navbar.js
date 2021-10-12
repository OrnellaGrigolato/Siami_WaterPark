import React from 'react'
import { CartWidget } from './CartWidget'
import './navbar.css';
import { Row, Col } from 'antd';

const Navbar = () => {
    return (
        <header>
            <nav className="navBar">
                <Row align='middle' justify='center'>
                    <Col flex='auto'><div className='logo'><img src="../../../Background.svg" alt="Logo" /></div></Col>
                    <Col span={2}><a href="#">About</a></Col>
                    <Col span={2}><a href="#">Tickets</a></Col>
                    <Col span={2}><a href="#">Events</a></Col>
                    <Col span={2}><a href="#">Partys</a></Col>
                    <Col span={2}><CartWidget className='k'/></Col>
                </Row>
            </nav>
        </header>
    )
}

export default Navbar
