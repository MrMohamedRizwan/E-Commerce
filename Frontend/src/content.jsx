import './mark1.css'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import { useState } from 'react';
// import Cup from './cart';
const Content = (props)=>{
    const {span, h, price, Cup}=props
    // const [h, seth]=useState(props.h);
    // const [price, setp]=useState(props.price);

    const handleClick=async()=>{
        const cart={h,price};
        // Cup(cart);
        console.log(cart);
        // await fetch('http://127.0.0.1:1000/');
        await fetch('http://127.0.0.1:1000/post', {
            method: "POST",
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify(cart)
        }).then(()=>console.log("success")).catch((error)=>console.log(error));
    }

    return (
        <>
        <div className="p1">
            <img className="wim" src={props.img} alt=""/>
            <div className="wet">
                <span>{span}</span>
                <h3>{h}</h3>
                <div className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <h4>{price}</h4>
                <button id="carti" onClick={handleClick}><img src="src/images/shopping-cart.png" alt="Cart" /></button>
            </div>
        </div>
        </>
    )
};

export default Content;