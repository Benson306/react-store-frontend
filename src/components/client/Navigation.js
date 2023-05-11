import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tab, Tabs, Box, Typography } from '@mui/material';
import { useState } from 'react';
import Hoodies from './Hoodies';
import Tshirts from './Tshirts';

const Navigation = () => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };

    return ( <div className="mt-6">
        <div className="flex justify-between mx-20">
            <div className='pl-10'>

            </div>

            <div className='font-sans text-3xl text-center tracking-widest font-bold'>SHOP</div>

            <div className=''>
                <ShoppingCartIcon fontSize={'medium'}  />
            </div>

        </div>
        <div className='flex justify-center mt-5 text-gray-800 text-bold'>
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab label="T-shirts" />
                <Tab label="Hoodies" />
            </Tabs>
        </div>
        {currentTabIndex === 0 && (
        <Box sx={{ p: 0 }} className="mt-3">
          <Typography>
                    <Tshirts />
          </Typography>
        </Box>
        )}

        {currentTabIndex === 1 && (
        <Box sx={{ p: 0 }} className="mt-3">
          <Typography>
                    <Hoodies />
          </Typography>
        </Box>
        )}
    </div> );
}
 
export default Navigation;