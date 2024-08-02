import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ContactUs = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full h-full min-h-[90vh] mt-20 md:mt-0 bg-[url('./images/background_bg.jpeg')] z-10">
            <div className='invisible lg:visible h-0 lg:h-auto'>
                <img src={require('../../images/contact.jpg')} className='object-cover' style={{ width: '100%', maxHeight: '250px' }} alt="" />
            </div>

            <div className='text-center mt-5 text-white text-bold font-serif text-xl tracking-wider'>Contact Us</div>
            { loading && <div className="text-center text-white text-md mb-5">Loading...</div>}

            <div className='w-[80%] mx-auto mt-10'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.16174540149!2d36.76499593128878!3d-1.3032076027349888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1722633416568!5m2!1sen!2ske" width="100%" height="400" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='w-[80%] mx-auto pb-24 mt-10 md:mt-24 md:flex justify-center'>
                <div className='md:basis-2/4 text-center'>
                    <h2 className='text-white text-xl mb-4'>Contact us on...</h2>
                    <p className='text-white mb-4'>Email: info@ikonini.live</p>
                    <p className='text-white mb-4'>Phone: 07XX XXX XXX</p>
                    <p className='text-white mb-4'>Address: Nairobi, Kenya</p>
                    <p className='text-white mb-4'>Time: 8:00 - 9:00</p>
                </div>
                <div className='md:basis-2/4 mt-10 md:mt-0'>
                    <h2 className='text-white text-xl text-center mb-4'>Tell us something...</h2>
                    <form>
                        <input type='text' placeholder='Enter your full name' className='block w-[90%] md:w-3/4 mt-2 mx-auto px-2 py-1 bg-white rounded' />
                        <input type='text' placeholder='Enter your email' className='block w-[90%] md:w-3/4 mt-2 mx-auto px-2 py-1 bg-white rounded' />
                        <textarea type='text' placeholder='Enter your message' className='block w-[90%] md:w-3/4 mt-2 mx-auto px-2 py-1 bg-white rounded'></textarea>
                        <button type='submit' className='block md:w-3/4 text-black mt-2 mx-auto px-2 py-1 bg-white rounded'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;