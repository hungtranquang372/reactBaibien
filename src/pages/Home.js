import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import FeatureRoom from '../components/FeatureRoom';
import Services from '../components/Services';
export default function Home(props) {
    console.log("porp",props);
    
    return (
        <div>
        <Hero hero={"defaultHero"}>
            <Banner  
            title={"Luxious Room"}
            subtitle={"Deluxe room starting at 255$"}
            
            >
             <Link to="/rooms" className="btn-primary">Phong Ngủ</Link>  
            </Banner>
        </Hero>
<Services/>
<FeatureRoom/>

        </div>
    )
}
