import React, { Component } from 'react';
import {FaBeer,FaHiking,FaCocktail,FaShuttleVan } from 'react-icons/fa';
import Title from '../components/Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaBeer/>,
                title:"free drink",
                info:"Có đủ thuc uống giai khát"
            },
            {
                icon:<FaCocktail/>,
                title:"có trả tiền",
                info:"xoài,dua hấu,cheerries"
            },
            {
                icon:<FaHiking/>,
                title:"dạo mát",
                info:"bải biển,vưởn trái cây,công viên thú"
            },
            {
                icon:<FaShuttleVan/>,
                title:"miễn phí",
                info:"xe đời mới,giới hạn trong 10km"
            }
        ]
    }
    render() {

        return (
            <section className="services">
                <Title title={"services"}/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article 
                        key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                           
                        </article>
                        
                        
                       
                    })}
                </div>

                
                
            </section>
        )
    }
}
