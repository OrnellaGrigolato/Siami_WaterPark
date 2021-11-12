import React, {useState} from "react"
const CartContext = React.createContext()



const ContextFunction=({children})=>{
    const [cart, setCart] = useState([])


    const addItem=(item,quantity)=>{
        if(!isInCar(item.list.numId)){
           setCart(cart.concat({item: item.list, quantity: quantity}))
        } else{
            const cartAux=cart.map((elem)=>{
                if(elem.item.numId===item.list.numId){
                    elem.quantity+=quantity
                }
                return elem
            })
            setCart(cartAux)
        }



        
    }

    const removeItem=(itemId)=>{
        const auxCart= cart.filter(elem=> elem.item.numId!==itemId)
        setCart(auxCart)



    }

    const clear=()=>{
        setCart([])


    }

    const isInCar=(id)=>{
        const product=cart.find((elem)=> {return elem.item.numId===id})
        if(product!==undefined){
            return true
        } else{
            return false
        }


    }





    return <CartContext.Provider value={{cart, removeItem, clear, addItem}}>
    {children}
</CartContext.Provider>



}

export {CartContext, ContextFunction}