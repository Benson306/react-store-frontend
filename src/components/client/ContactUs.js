import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ContactUs = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full h-full min-h-[90vh] bg-[url('./images/background_bg.jpeg')] z-10">
            <div className='invisible lg:visible h-0 lg:h-auto'>
                <img src={require('../../images/contact.jpg')} className='object-cover' style={{ width: '100%', maxHeight: '250px' }} alt="" />
            </div>

            <div className='text-center mt-5 text-white text-bold font-serif text-xl tracking-wider'>Contact Us</div>
            { loading && <div className="text-center text-white text-md mb-5">Loading...</div>}
        </div>
    );
}

export default ContactUs;