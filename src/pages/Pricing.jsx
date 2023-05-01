import { Splide } from '@splidejs/splide';
import React from 'react';
import Faq from '../components/Faq';
import Plans from '../components/Plans';
import Splider from '../components/Splider';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div>
      <Plans />
      <Splider />
      <Faq />
      <Footer />
    </div>
  );
};

export default Pricing;
