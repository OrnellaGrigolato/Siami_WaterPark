import React from 'react'
import { CartWidget } from './CartWidget'
import './navbar.css';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const categories = [
,
        { id: '1', address: '/category/tickets', text: 'Tickets' },
        { id: '2', address: '/category/events', text: 'Events' },
        { id: '3', address: '/category/parties', text: 'Parties' },
      ];
    return (
        <header>
            <nav className="navBar">
                <Row align='middle' justify='center'>
                    <Col flex='auto'><div className='logo'><Link to='/'><img src="../../../Background.svg" alt="Logo" /></Link></div></Col>
                    <Col span={2}><Link to='/about'>About</Link></Col>
                    {categories.map(elem=> {return (<Col span={2} key={elem.id}><Link to={elem.address}>{elem.text}</Link></Col>)})}
                    <Col span={2}><Link to='/cart'><CartWidget/></Link></Col>
                </Row>
            </nav>
        </header>
    )
}

export default Navbar
