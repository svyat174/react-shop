import { BasketItem } from "./BasketItem"

function BasketList(props) {
  const {
    order = [], 
    handleBasketShow, 
    removeFromBasket,
    incQuantity,
    decQuantity
  } = props

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Cart</li>
        {
          order.length ? order.map(item => (
            <BasketItem 
              key={item.id} 
              {...item}
              removeFromBasket={removeFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          )) : <li className="collection-item">Cart is empty</li>
        }
      <li className="collection-item active">
        Total Price: {totalPrice} rub
      </li>
      <li className="collection-item">
        <button className="btn-small">Ordering</button>
      </li>
      <i 
        className="material-icons basket-close" 
        onClick={() => handleBasketShow()}
      >
        close
      </i>
    </ul>
  )

}

export {BasketList}
