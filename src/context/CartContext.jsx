import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    cart: [],
    addItem: () => {}
  })
  

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalToPay, setTotalToPay] = useState (0)

    useEffect(() => {
      updateTotal()
    }, [cart]);

   
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)){
           setCart(prev =>{
            console.log(prev)
            return [...prev , productToAdd]
          })
        } else {
          console.error('Ya agregaste este producto')
        }
     }
  
     const isInCart = (id) => {
        return cart.some (prod => prod.id === id)
     }

     const getTotalQuantity= () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
     }

     const totalQuantity = getTotalQuantity()

     const updateTotal = () => {
      let total = 0
      cart.forEach(prod => {
        total += prod.price * prod.quantity
      })
      setTotalToPay(total)
     }

     const clearCart = () => {
      setCart([])
     }

     const updateQuantityItem = (id, aux ) => {
        const newState = cart.map(prod => {
          if (prod.id === id) {
            return{...prod, quantity: (prod.quantity + aux)};
            
          }
          return prod
        });
        setCart(newState)
     }

    return(
        <CartContext.Provider value={{cart, totalToPay, totalQuantity, updateQuantityItem, clearCart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}