import { useEffect, useState } from "react";
import useCart from "../../utils/CartContext";
import towns from '../../data/towns.json';
import * as yup from 'yup'
import { Field, Form, Formik } from 'formik'
import SyncLoader from "react-spinners/SyncLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myRegex = /^07\d{8}$/;

const checkoutSchema = yup.object({
    firstname: yup.string().required().min(3),
    secondname: yup.string().required().min(3),
    email: yup.string().email('Invalid Email').required().min(3),
    phoneNumber: yup.string().matches(myRegex, "Phone number is not valid").required()
})

const Checkout = () => {

    const { products, total } = useCart();

    const [ location, setLocation ] = useState('Nairobi');

    const [deliveryCost, setDeliveryCost] = useState(260);

    const [link, setLink] = useState('');

    const [showIframe, setShowIframe] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const town = towns.filter( town => town.name === location)

        setDeliveryCost(town[0].price);
    }, [location])

    const handleSubmit = (data) =>{
        setLoading(true);
        let newData = {...data, products, total, location, deliveryCost};

        fetch(`${process.env.REACT_APP_API_URL}/Checkout`,{
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newData)
        })
        .then((res)=>{
            if(res.ok){
                res.json().then(response => {
                    setLink(response.redirect_url);
                    setLoading(false);
                    setShowIframe(true);
                })
            }else{
                res.json().then(response => {
                    toast.error(response)
                })
            }
            
        })
        .catch( err=>{
            console.log(err);
        })
    }


    return ( <div className="mt-3 lg:mt-20 ">
        <ToastContainer />
            <div className="flex justify-center mb-10 text-xl">Checkout</div>
            
    { showIframe ? (
        <div className="flex justify-center items-center">
        <iframe
          src={link}
          title="Secure Checkout"
          width="80%"
          height="500px"
          frameBorder="0"
        />
        </div>
      )
    
    :
    
    <Formik
            initialValues={{firstname: '', secondname: '', email:'', phoneNumber:''}}
            validationSchema={checkoutSchema}
            onSubmit={(values)=>{
                    handleSubmit(values);
                }
            }
            >
        {(props)=>(
    <Form>
        
        <div className="block lg:flex lg:justify-center mx-5 lg:mx-10">                
            <div className="block w-full lg:w-1/2">
                <div className="font-bold mb-5">Account Information</div>
                <div className="flex gap-4">
                    <div>
                        <Field type="text" name="firstname" value={props.values.firstname} placeholder="First name"  className="border-b-2 p-3 mb-2 w-full lg:w-3/4" required/>
                        <div className="p-1 capitalize text-red-900 text-xs">{props.touched.firstname && props.errors.firstname}</div>
                    </div>
                    <div>
                        <Field type="text" name="secondname" value={props.values.secondname} placeholder="Second name"  className="border-b-2 p-3 mb-2 w-full lg:w-3/4" required/>
                        <div className="p-1 capitalize text-red-900 text-xs">{props.touched.secondname && props.errors.secondname}</div>
                    </div>
                </div>                
                <div>
                <Field type="email" name="email" value={props.values.email} placeholder="Email"  className="border-b-2 p-3 mb-2 w-full lg:w-3/4" required/>
                </div>
                <div className="p-1 capitalize text-red-900 text-xs">{props.touched.email && props.errors.email}</div>
                <div>
                <Field type="text" name="phoneNumber" value={props.values.phoneNumber} placeholder="Phone Number" className="border-b-2 p-3 mb-2 w-full lg:w-3/4" required/>
                </div>
                <div className="p-1 capitalize text-red-900 text-xs">{props.touched.phoneNumber && props.errors.phoneNumber}</div>
            </div>

            <div >
                <div className="font-bold mb-5">Select Delivery Location</div>
                <select className="w-full p-1 lg:p-3 bg-white mb-4 border-b-2" onChange={(e)=>{ setLocation(e.target.value); }}>
                            <option value="Nairobi">Nairobi - Ksh260.00</option>
                            <option value="Nairobi Area">Nairobi Area - Ksh250.00</option>
                            <option value="Athi River">Athi River - Ksh280.00</option>
                            <option value="Gilgil">Gilgil - Ksh280.00</option>
                            <option value="Juja">Juja - Ksh280.00</option>
                            <option value="Kangundo">Kangundo - Ksh280.00</option>
                            <option value="Kiambu">Kiambu - Ksh280.00</option>
                            <option value="Kikuyu">Kikuyu - Ksh280.00</option>
                            <option value="Kitengela">Kitengela - Ksh280.00</option>
                            <option value="Machakos">Machakos - Ksh280.00</option>
                            <option value="Ongata Rongai">Ongata Rongai - Ksh280.00</option>
                            <option value="Ruiru">Ruiru - Ksh280.00</option>
                            <option value="Thika">Thika - Ksh280.00</option>
                            <option value="Gatundu">Gatundu - Ksh300.00</option>
                            <option value="Githunguri">Githunguri - Ksh300.00</option>
                            <option value="Karatina">Karatina - Ksh300.00</option>
                            <option value="Kutus">Kutus - Ksh300.00</option>
                            <option value="Limuru">Limuru - Ksh300.00</option>
                            <option value="Muranga">Muranga - Ksh300.00</option>
                            <option value="Naivasha">Naivasha - Ksh300.00</option>
                            <option value="Nakuru">Nakuru - Ksh300.00</option>
                            <option value="Ngong">Ngong - Ksh300.00</option>
                            <option value="Nyeri">Nyeri - Ksh300.00</option>
                            <option value="Othaya">Othaya - Ksh300.00</option>
                            <option value="Embu">Embu - Ksh320.00</option>
                            <option value="Kerugoya">Kerugoya - Ksh320.00</option>
                            <option value="Molo">Molo - Ksh320.00</option>
                            <option value="Tala">Tala - Ksh320.00</option>
                            <option value="Chuka">Chuka - Ksh330.00</option>
                            <option value="Kagio">Kagio - Ksh330.00</option>
                            <option value="Kangema">Kangema - Ksh330.00</option>
                            <option value="Kiganjo">Kiganjo - Ksh330.00</option>
                            <option value="Kijabe">Kijabe - Ksh330.00</option>
                            <option value="Kilgoris">Kilgoris - Ksh330.00</option>
                            <option value="Matuu">Matuu - Ksh330.00</option>
                            <option value="Mwea">Mwea - Ksh330.00</option>
                            <option value="Narok">Narok - Ksh330.00</option>
                            <option value="Nyahururu">Nyahururu - Ksh330.00</option>
                            <option value="Sagana">Sagana - Ksh330.00</option>
                            <option value="Eldoret">Eldoret - Ksh340.00</option>
                            <option value="Isinya">Isinya - Ksh340.00</option>
                            <option value="Kitui">Kitui - Ksh340.00</option>
                            <option value="Makuyu">Makuyu - Ksh340.00</option>
                            <option value="Sultan Hamud">Sultan Hamud - Ksh340.00</option>
                            <option value="Emali">Emali - Ksh350.00</option>
                            <option value="Engineer">Engineer - Ksh350.00</option>
                            <option value="Kajiado">Kajiado - Ksh350.00</option>
                            <option value="Kericho">Kericho - Ksh350.00</option>
                            <option value="Kibwezi">Kibwezi - Ksh350.00</option>
                            <option value="Makindu">Makindu - Ksh350.00</option>
                            <option value="Makutano">Makutano - Ksh350.00</option>
                            <option value="Njoro">Njoro - Ksh350.00</option>
                            <option value="Murarandia">Murarandia - Ksh370.00</option>
                            <option value="Kisii">Kisii - Ksh380.00</option>
                            <option value="Kisumu">Kisumu - Ksh380.00</option>
                            <option value="Meru">Meru - Ksh380.00</option>
                            <option value="Nanyuki">Nanyuki - Ksh380.00</option>
                            <option value="Sotik">Sotik - Ksh390.00</option>
                            <option value="Wote">Wote - Ksh390.00</option>
                            <option value="Bomet">Bomet - Ksh400.00</option>
                            <option value="Bungoma">Bungoma - Ksh400.00</option>
                            <option value="Chogoria">Chogoria - Ksh400.00</option>
                            <option value="Eldama Ravine">Eldama Ravine - Ksh400.00</option>
                            <option value="Kakamega">Kakamega - Ksh400.00</option>
                            <option value="Kangari">Kangari - Ksh400.00</option>
                            <option value="Litein">Litein - Ksh400.00</option>
                            <option value="Mwingi">Mwingi - Ksh400.00</option>
                            <option value="Naromoru">Naromoru - Ksh400.00</option>
                            <option value="Nkubu">Nkubu - Ksh400.00</option>
                            <option value="Nyamira">Nyamira - Ksh400.00</option>
                            <option value="Runyenjes">Runyenjes - Ksh400.00</option>
                            <option value="Sabasaba">Sabasaba - Ksh400.00</option>
                            <option value="Awendo">Awendo - Ksh420.00</option>
                            <option value="Kitale">Kitale - Ksh420.00</option>
                            <option value="Maua">Maua - Ksh420.00</option>
                            <option value="Mbale">Mbale - Ksh420.00</option>
                            <option value="Nandi Hills">Nandi Hills - Ksh420.00</option>
                            <option value="Webuye">Webuye - Ksh420.00</option>
                            <option value="Timau">Timau - Ksh430.00</option>
                            <option value="Bondo">Bondo - Ksh450.00</option>
                            <option value="Burnt Forest">Burnt Forest - Ksh450.00</option>
                            <option value="Isiolo">Isiolo - Ksh450.00</option>
                            <option value="Kabarnet">Kabarnet - Ksh450.00</option>
                            <option value="Kapsabet">Kapsabet - Ksh450.00</option>
                            <option value="Maseno">Maseno - Ksh450.00</option>
                            <option value="Migori">Migori - Ksh450.00</option>
                            <option value="Mtito Andei">Mtito Andei - Ksh450.00</option>
                            <option value="Mumias">Mumias - Ksh450.00</option>
                            <option value="Olkalau">Olkalau - Ksh450.00</option>
                            <option value="Oloitoktok">Oloitoktok - Ksh450.00</option>
                            <option value="Londiani">Londiani - Ksh460.00</option>
                            <option value="Voi">Voi - Ksh460.00</option>
                            <option value="Keroka">Keroka - Ksh480.00</option>
                            <option value="Mombasa">Mombasa - Ksh480.00</option>
                            <option value="Ahero">Ahero - Ksh500.00</option>
                            <option value="Busia">Busia - Ksh500.00</option>
                            <option value="Homabay">Homabay - Ksh500.00</option>
                            <option value="Iten">Iten - Ksh500.00</option>
                            <option value="Kilifi">Kilifi - Ksh500.00</option>
                            <option value="Luanda">Luanda - Ksh500.00</option>
                            <option value="Malaba">Malaba - Ksh500.00</option>
                            <option value="Mariakani">Mariakani - Ksh500.00</option>
                            <option value="Moi's Bridge">Moi's Bridge - Ksh500.00</option>
                            <option value="Mtwapa">Mtwapa - Ksh500.00</option>
                            <option value="Muhoroni">Muhoroni - Ksh500.00</option>
                            <option value="Ogembo">Ogembo - Ksh500.00</option>
                            <option value="Oyugis">Oyugis - Ksh500.00</option>
                            <option value="Rongo">Rongo - Ksh500.00</option>
                            <option value="Siaya">Siaya - Ksh500.00</option>
                            <option value="Ugunja">Ugunja - Ksh500.00</option>
                            <option value="Kimilili">Kimilili - Ksh540.00</option>
                            <option value="Sabatia">Sabatia - Ksh540.00</option>
                            <option value="Garissa">Garissa - Ksh550.00</option>
                            <option value="Kapenguria">Kapenguria - Ksh550.00</option>
                            <option value="Lugari">Lugari - Ksh550.00</option>
                            <option value="Mukurweini">Mukurweini - Ksh550.00</option>
                            <option value="Nambale">Nambale - Ksh550.00</option>
                            <option value="Mwatate">Mwatate - Ksh580.00</option>
                            <option value="Rachuonyo">Rachuonyo - Ksh580.00</option>
                            <option value="Diani">Diani - Ksh600.00</option>
                            <option value="Masii">Masii - Ksh600.00</option>
                            <option value="Mwala">Mwala - Ksh600.00</option>
                            <option value="Malindi">Malindi - Ksh620.00</option>
                            <option value="Taveta">Taveta - Ksh620.00</option>
                            <option value="Baraton">Baraton - Ksh650.0</option>
                            <option value="Kehancha">Kehancha - Ksh650.00</option>
                            <option value="Marsabit">Marsabit - Ksh650.00</option>
                            <option value="Chwele">Chwele - Ksh680.00</option>
                            <option value="Mbita">Mbita - Ksh700.00</option>
                            <option value="Nzoia">Nzoia - Ksh700.00</option>
                            <option value="Turbo">Turbo - Ksh700.00</option>
                            <option value="Isebania">Isebania - Ksh750.00</option>
                            <option value="Kendubay">Kendubay - Ksh750.00</option>
                            <option value="Lamu">Lamu - Ksh1,400.00</option>
                            <option value="Lodwar">Lodwar - Ksh1,500.00</option>
                            <option value="Maralal">Maralal - Ksh1,600.00</option>
                            <option value="Lokichogio">Lokichogio - Ksh1,650.00</option>
                </select>
                <div className="font-bold mb-5">Order Summary</div>
                {
                    products.map( product =>(
                        <div className="flex mb-1 text-xs lg:text-base">
                            <div className="w-48 lg:w-64">
                                { product.productName || product.title }
                            </div>
                            <div className="ml-5 lg:ml-0 w-5 lg:w-20">
                               X { product.quantity }
                            </div>
                            <div className="ml-2">
                                KES. { product.quantity * product.price }
                            </div>
                        </div>
                    ))
                }
                <hr />

                <div className="flex mt-5 text-xs lg:text-base">
                    <div className="w-48 lg:w-80  font-bold">Delivery Cost:</div>
                    <div className="ml-12 lg:ml-0">KES. {deliveryCost}</div>
                </div>

                <div className="flex mt-5 text-xs lg:text-base">
                    <div className="w-48 lg:w-80 font-bold">Total:</div>
                    <div className="ml-12 lg:ml-0">KES. {total + deliveryCost}</div>
                </div>

                <button className="collapse lg:visible w-28 flex justify-center p-1 border-2 border-black mt-10 hover:bg-black hover:text-white" type="submit">
                    { loading &&  <div><SyncLoader size={6} color={"black"}/></div> }
                    {!loading && <div>PAY</div> }
                </button>


            </div>
        </div>


        <button type="submit" className="visible lg:collapse fixed bottom-0 bg-blue-950 text-white text-center w-full lg:w-0 p-4 text-bold tracking-wider font-serif flex justify-center">
           { loading &&  <div><SyncLoader size={6} color={"#fff"}/></div> }
           {!loading && <div>PAY</div> }
        </button>
        </Form>
    )}
    </Formik>
    }
    </div>
    );
}
 
export default Checkout;