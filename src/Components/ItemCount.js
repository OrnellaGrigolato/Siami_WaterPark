import React, {useState} from "react";


const ItemCount = (props) =>{

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(1)

   
    const sumaStock= ()=>{
            if(stock===0){
                alert('no hay mas stock')
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        }

    const restaStock = ()=>{
            if(unidades===1){
                alert('no podes seleccionar menos de 1')
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    

    return(
        <div className='ItemCount'>
            <div>
                <button onClick={restaStock} >-</button>
                <p>{unidades}</p>
                <button onClick={sumaStock} >+</button>
            </div>
            <div>
                <p>Stock disponible {stock}</p>
            </div>
            <div>
                <button onClick={()=>props.onAdd({unidades})}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount