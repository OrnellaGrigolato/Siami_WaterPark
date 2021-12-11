import { React, useState } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import './navbar.css';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const categories = [
    { id: '1', address: '/category/tickets', text: 'Tickets' },
    { id: '2', address: '/category/events', text: 'Events' },
    { id: '3', address: '/category/parties', text: 'Parties' }
  ];

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <nav className="navBar">
        <div className="logo">
          <Link to="/">
            <img src="../../../Background.svg" alt="Logo" />
          </Link>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          {categories.map((elem) => {
            return (
              <li className="option" onClick={closeMobileMenu} key={elem.id}>
                <Link to={elem.address}>{elem.text}</Link>
              </li>
            );
          })}
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/cart">
              <CartWidget></CartWidget>
            </Link>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? <CloseOutlined className="menu-icon" /> : <MenuOutlined className="menu-icon" />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
