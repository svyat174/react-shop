import { useContext, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from './Preloader'
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { ShopContext } from "../context";

export const Main = () => {
    const {goods, setGoods, loading, order, isBasketShow, alertName} = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.featured)
        })
        // eslint-disable-next-line
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={order.length}/>
            {
                loading ? (
                    <Preloader/>
                    ) : (
                    <GoodsList goods={goods}/>
            )}
            {
                isBasketShow && 
                <BasketList />
            }
            {
                alertName && <Alert />
            }
        </main>
    );
}
