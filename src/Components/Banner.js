import React from 'react';
import { Link } from 'react-router-dom';
import bgBanner from '../Images/bg-banner.jpg';
// import banner from '../images/banner.jpg';
const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgBanner})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold leading-12">Big choice of Plumbing products</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;