import React from 'react'
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropType from 'prop-types';//xac dinh dau vao co dung kieu data minh muon
export default function Room({room}) {
    // console.log("ab",room);
    var a = 2;
    var b = 3;
    // console.log(a + "+" + b + "=" + (a+b)) ;
    // console.log(`${a}+${b}=${a+b}`);//cach vietde ko cong chuoi
    
    const {price,name,slug,images}=room
    return (
        <article className="room">
            <div className="img-container">
            <img src={images[0] || defaultImg} alt="single-room"/> 
            <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <Link to={`/rooms/${slug}`}//    '/rooms/' + slug//xai template string co bien va {}
            className="btn-primary room-link">Features</Link>
            </div>
        </article>
    )
}
//dooi hoi nhan props co style giong trong code
Room.propTypes={
    room:PropType.shape({
        price:PropType.number.isRequired,
        name:PropType.string.isRequired,
        slug:PropType.string.isRequired,
        images:PropType.arrayOf(PropType.string).isRequired
    })
}