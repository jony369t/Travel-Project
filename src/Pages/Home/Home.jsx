import React from 'react';
import HeroSection from './HeroSection';
import PopularDestinations from './PopularDestinations';
import SpecialOffers from './SpecialOffers';

const Home = () => {
    return (
        <div >
          <section>

            <HeroSection></HeroSection>
            </section>
            
            <section>
                <PopularDestinations></PopularDestinations>
            </section>

            <section>
                <SpecialOffers></SpecialOffers>
            </section>
        </div>
    );
};

export default Home;