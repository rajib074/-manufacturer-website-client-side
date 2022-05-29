import React from 'react';
import About from './About';

import Banner from './Banner';
import CompanyInformetion from './CompanyInformetion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <CompanyInformetion></CompanyInformetion>
            <About></About>
            
           
        </div>
    );
};

export default Home;