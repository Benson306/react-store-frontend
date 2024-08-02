import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {

    return ( 
        <div className="w-full h-full min-h-[90vh] bg-[url('./images/background_bg.jpeg')] z-10">
            <div className='w-full md:w-3/4 mx-auto relative'>
                <div className='w-[70%] h-full absolute top-[120%] md:top-1/3 left-[50%] ml-[-35%] right-1/4 border-2 border-slate-50'></div>
                <div className='w-4/5 mx-auto translate-y-36 flex justify-between px-6 py-4 translate-x-2'>
                    <div className='flex justify-between'>
                        <img className='w-[42rem] h-auto scale-150 md:scale-90 -translate-x-10 md:translate-x-1/4 translate-y-24' src={require('../../images/man1.png')}/>
                    </div>
                    <div className='flex justify-between'>
                        <img className='w-[42rem] h-auto translate-y-4 scale-[250%] md:scale-125 z-[99]' src={require('../../images/man2.png')}/>
                    </div>
                    <div className='flex justify-between'>
                        <img className='w-[42rem] h-auto scale-150 md:scale-90 translate-x-10 md:-translate-x-1/3 translate-y-24' src={require('../../images/man3.png')}/>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Home;