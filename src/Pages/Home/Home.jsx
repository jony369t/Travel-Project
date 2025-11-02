import React from 'react';
import HeroSection from './HeroSection';
import PopularDestinations from './PopularDestinations';

const Home = () => {
    return (
        <div >
          <section>

            <HeroSection></HeroSection>
            </section>
            
            <section>
                <PopularDestinations></PopularDestinations>
            </section>
        </div>
    );
};

export default Home;