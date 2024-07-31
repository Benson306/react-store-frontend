import { Tab, Tabs, Box, Typography } from '@mui/material';
import { useState } from 'react';
import Home from './Home';
import Hoodies from './Hoodies';
import Tshirts from './Tshirts';
import Videos from './Videos';
import ContactUs from './ContactUs';

const Navigation = () => {
  const currentYear = new Date().getFullYear();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    //console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (<div className="min-h-screen">

    <div className='fixed inset-x-0 top-0 flex justify-center mt-5 text-white text-bold z-[99]'>
      <Tabs
        textColor="white"
        value={currentTabIndex}
        onChange={handleTabChange}
      >
        <Tab label="Home" />
        <Tab label="Videos" />
        <Tab label="T-shirts" />
        <Tab label="Hoodies" />
        <Tab label="Contact Us" />
      </Tabs>
    </div>
    {currentTabIndex === 0 && (
      <Box sx={{ p: 0 }} className="mt-3">
        <Typography>
          <Home />
        </Typography>
      </Box>
    )}

    {currentTabIndex === 1 && (
      <Box sx={{ p: 0 }} className="mt-3">
        <Typography>
          <Videos />
        </Typography>
      </Box>
    )}

    {currentTabIndex === 2 && (
      <Box sx={{ p: 0 }} className="mt-3">
        <Typography>
          <Tshirts />
        </Typography>
      </Box>
    )}

    {currentTabIndex === 3 && (
      <Box sx={{ p: 0 }} className="mt-3">
        <Typography>
          <Hoodies />
        </Typography>
      </Box>
    )}

    {currentTabIndex === 4 && (
      <Box sx={{ p: 0 }} className="mt-3">
        <Typography>
          <ContactUs />
        </Typography>
      </Box>
    )}

    <div className="w-full text-center text-sm bg-rose-600">
      <div className='w-full flex justify-center p-4'>
        <a href='#'>
          <img src={require('../../images/youtube.png')} className='w-[3rem] h-[3rem] mx-2 rounded-full z-50' />
        </a>
        <a href='#'>
          <img src={require('../../images/spotify.png')} className='w-[3rem] h-[3rem] mx-2 rounded-full z-50' />
        </a>
        <a href='#'>
          <img src={require('../../images/instagram.png')} className='w-[3rem] h-[3rem] mx-2 rounded-full z-50' />
        </a>
        <a href='#'>
          <img src={require('../../images/twitter.png')} className='w-[3rem] h-[3rem] mx-2 rounded-full z-50' />
        </a>
        <a href='#'>
          <img src={require('../../images/tiktok.png')} className='w-[3rem] h-[3rem] mx-2 rounded-full z-50' />
        </a>
      </div>
      <div className='w-full text-center text-lg text-white pb-4'>© {currentYear} Copyright Iko Nini</div>
    </div>
  </div>);
}

export default Navigation;