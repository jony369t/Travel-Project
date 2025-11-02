import React from 'react';
import HeroSection from './HeroSection';
import PopularDestinations from './PopularDestinations';
import SpecialOffers from './SpecialOffers';
import WhyChooseUs from './WhyChooseUs';
import CustomerTestimonials from './CustomerTestimonials';
import TravelTipsSection from './TravelTipsSection';
import NewsletterSubscribeSection from './NewsletterSubscribeSection';

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

            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>

            <section>

                <CustomerTestimonials></CustomerTestimonials>
            </section>

            <section>

                <TravelTipsSection></TravelTipsSection>
            </section>

            <section>
                
                <NewsletterSubscribeSection></NewsletterSubscribeSection>
        </section>
        </div>

    );
};

export default Home;