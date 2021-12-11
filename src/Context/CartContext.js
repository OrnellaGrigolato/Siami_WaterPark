import React, { useState } from 'react';
const CartContext = React.createContext();

const ContextFunction = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCar(item.list.id)) {
      setCart(cart.concat({ item: item.list, quantity: quantity }));
    } else {
      const cartAux = cart.map((elem) => {
        if (elem.item.id === item.list.id) {
          elem.quantity += quantity;
        }
        return elem;
      });
      setCart(cartAux);
    }
  };

  const removeItem = (itemId) => {
    const auxCart = cart.filter((elem) => elem.item.id !== itemId);
    setCart(auxCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCar = (id) => {
    const product = cart.find((elem) => {
      return elem.item.id === id;
    });
    if (product !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ cart, removeItem, clear, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, ContextFunction };
