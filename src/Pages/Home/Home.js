import React from 'react';
import Login from '../Login/Login';

import Banner from './Banner';
import CompanyInformetion from './CompanyInformetion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyInformetion></CompanyInformetion>
            <Login></Login>
            
           
        </div>
    );
};

export default Home;