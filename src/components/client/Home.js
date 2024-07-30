import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {

    return ( 
        <div className="w-full h-full min-h-screen mb-10 bg-[url('./images/background_bg.jpeg')]">
            <div className='w-4/5 mx-auto flex justify-between px-6 py-4'>
                <div className='flex justify-betweem'>
                    <img className='w-[42rem] h-auto scale-75 translate-x-1/3 translate-y-24' src={require('../../images/man1.png')}/>
                </div>
                <div className='flex justify-betweem'>
                    <img className='w-[42rem] h-auto scale-105 z-[99]' src={require('../../images/man2.png')}/>
                </div>
                <div className='flex justify-betweem'>
                    <img className='w-[42rem] h-auto scale-75 -translate-x-1/3 translate-y-24' src={require('../../images/man3.png')}/>
                </div>
            </div>
        </div> 
    );
}
 
export default Home;