import React from 'react';
import Community from '../components/Community';
import Downloadhero from '../components/Downloadhero';
import Plaform from '../components/Plaform';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <div>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 0.2 }}>
        <Downloadhero />
      </motion.div>
      <Plaform />
      <Community />
      <Footer />
    </div>
  );
};

export default Download;
