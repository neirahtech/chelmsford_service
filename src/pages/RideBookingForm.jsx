import React, { useRef, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import logo from '../assets/logo.png';
import bg_img from '../assets/bg_image.jpg';
import bg_img2 from '../assets/bg_image2.jpg';
import bg_img3 from '../assets/bg_image3.jpg';

const ukCities = [
    { value: 'Aberdeen', label: 'Aberdeen' },
    { value: 'Ashford', label: 'Ashford' },
    { value: 'Basildon', label: 'Basildon' },
    { value: 'Basingstoke', label: 'Basingstoke' },
    { value: 'Belfast', label: 'Belfast' },
    { value: 'Blackpool', label: 'Blackpool' },
    { value: 'Bradford', label: 'Bradford' },
    { value: 'Bristol', label: 'Bristol' },
    { value: 'Cambridge', label: 'Cambridge' },
    { value: 'Cardiff', label: 'Cardiff' },
    { value: 'Cheltenham', label: 'Cheltenham' },
    { value: 'Chester', label: 'Chester' },
    { value: 'Colchester', label: 'Colchester' },
    { value: 'Coventry', label: 'Coventry' },
    { value: 'Crawley', label: 'Crawley' },
    { value: 'Derby', label: 'Derby' },
    { value: 'Dundee', label: 'Dundee' },
    { value: 'Edinburgh', label: 'Edinburgh' },
    { value: 'Enfield', label: 'Enfield' },
    { value: 'Eastbourne', label: 'Eastbourne' },
    { value: 'Glasgow', label: 'Glasgow' },
    { value: 'Harrow', label: 'Harrow' },
    { value: 'Hounslow', label: 'Hounslow' },
    { value: 'Hove', label: 'Hove' },
    { value: 'Inverness', label: 'Inverness' },
    { value: 'Kingston upon Hull', label: 'Kingston upon Hull' },
    { value: 'Leeds', label: 'Leeds' },
    { value: 'Leicester', label: 'Leicester' },
    { value: 'Lichfield', label: 'Lichfield' },
    { value: 'London', label: 'London' },
    { value: 'Luton', label: 'Luton' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Maidstone', label: 'Maidstone' },
    { value: 'Milton Keynes', label: 'Milton Keynes' },
    { value: 'Newcastle', label: 'Newcastle upon Tyne' },
    { value: 'Norwich', label: 'Norwich' },
    { value: 'Nottingham', label: 'Nottingham' },
    { value: 'Oxford', label: 'Oxford' },
    { value: 'Peterborough', label: 'Peterborough' },
    { value: 'Plymouth', label: 'Plymouth' },
    { value: 'Reading', label: 'Reading' },
    { value: 'Redditch', label: 'Redditch' },
    { value: 'Rushden', label: 'Rushden' },
    { value: 'Sheffield', label: 'Sheffield' },
    { value: 'Slough', label: 'Slough' },
    { value: 'Southampton', label: 'Southampton' },
    { value: 'St Albans', label: 'St Albans' },
    { value: 'Stoke-on-Trent', label: 'Stoke-on-Trent' },
    { value: 'Sunderland', label: 'Sunderland' },
    { value: 'Swindon', label: 'Swindon' },
    { value: 'Warrington', label: 'Warrington' },
    { value: 'Woking', label: 'Woking' },
    { value: 'Wokingham', label: 'Wokingham' },
    { value: 'York', label: 'York' }
];
const services = [
    { value: 'Contract Taxi Service', label: 'Contract Taxi Service' },
    { value: 'Standard Taxi Service', label: 'Standard Taxi Service' },
    { value: 'Airport Transfers', label: 'Airport Transfers' },
    { value: 'Party & Night Out Transport', label: 'Party & Night Out Transport' },
    { value: 'Wheelchair Accessible Taxi', label: 'Wheelchair Accessible Taxi' },
    { value: 'Scheduled Rides', label: 'Scheduled Rides' },
];

const RideBookingForm = () => {
    const [service, setService] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [startCity, setStartCity] = useState(null);
    const [pickupDate, setPickupDate] = useState(null);
    const [pickupTime, setPickupTime] = useState(null);
    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_5swb61o', 'template_rpb9mbc', form.current, {
                publicKey: 'KmjhBg43Jveju2TqZ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Booking Succesfully Done🚖");
                    setIsLoading(false)
                    setService("")
                    setFirstName("")
                    setLastName("")
                    setMail("")
                    setNote("")
                    setPhone("")
                    setPickupDate("")
                    setStartCity("")
                    setPickupTime("")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className='bg-black flex flex-row justify-evenly items-center p-4'>
                <img className='w-10 md:w-25 hover:cursor-pointer' src={logo} alt="Logo" onClick={() => window.location.href = "https://chelmsfordmastercabs.com"}/>
                <h1 className='font-serif text-xl sm:text-3xl font-bold text-amber-300'>Book Your Ride</h1>
                <button className="text-black bg-amber-100 px-3 md:px-6 py-1 rounded-full hover:bg-amber-300 hover:scale-105 hover:cursor-pointer" onClick={() => window.location.href = "https://chelmsfordmastercabs.com"}>Back</button>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen relative backdrop-invert backdrop-opacity-10 "
                style={{ backgroundImage: `url(${bg_img3})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                {/* Overlay using pseudo-element */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Dark overlay, adjust opacity as needed
                        zIndex: -1,  // Ensure it stays behind the content
                    }}
                />
                <form ref={form} onSubmit={sendEmail} className="sm:font-semibold p-6 mb-20 mt-10 rounded-lg shadow-md w-[60vw] flex flex-col sm:flex-row md:gap-6 items-center justify-center bg-transparent bg-opacity-50">
                    <div className='w-[50vw] text-white p-3 sm:p-10 rounded'>
                        <p className='text-4xl text-white font-bold mb-10 text-center'>Safe, Reliable & Professional Cab Services.</p>
                        <p className='text-2xl text-amber-300 mb-3 text-center'>Enter Details to Book Your Ride 🚕</p>
                        {/* Select Service */}
                        <div>
                            <label className="block mb-2">Service:</label>
                            <CreatableSelect
                                options={services}
                                name='service'
                                value={service}
                                onChange={setService}
                                className="w-[100%] mb-4"
                                color='white'
                                placeholder="Select the Service"
                                required
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        backgroundColor: "", // Match regular input background
                                        // border: "1px solid black", // Match regular input border
                                        padding: "2px", // Match input padding
                                        borderRadius: "4px", // Match input border radius
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        color: "#d1d5db"
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        backgroundColor: "white",
                                    }),
                                    option: (base) => ({
                                        ...base,
                                        color: "black",
                                        ":hover": { backgroundColor: "gray" },
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "white", // Match regular input text color
                                    }),
                                }}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* User first name */}
                            <div className='flex-1'>
                                <label className="block mb-2">First Name:</label>
                                <input
                                    type="text"
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your First Name'
                                    required
                                />
                            </div>
                            {/* User last name */}
                            <div className='flex-1'>
                                <label className="block mb-2">Last Name:</label>
                                <input
                                    type="text"
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your Last Name'
                                    required
                                />
                            </div>
                        </div>

                        {/* user mail */}
                        <div>
                            <label className="block mb-2">Email:</label>
                            <input
                                type="email"
                                name='mail'
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter Your Email Address'
                                required
                            />
                        </div>
                        {/* user phone number */}
                        <div>
                            <label className="block mb-2">Phone:</label>
                            <input
                                type="tel"
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter Your Mobile Number'
                                required
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-4">
                            {/* Pickup Date */}
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block mb-2">Pickup Date</label>
                                <DatePicker
                                    selected={pickupDate}
                                    name="pickupDate"
                                    onChange={setPickupDate}
                                    className="w-full p-2 border rounded mb-4"
                                    minDate={new Date()}
                                    placeholderText="Select Pickup Date"
                                    required
                                />
                            </div>

                            {/* Pickup Time */}
                            <div className="flex-1">
                                <label className="block mb-2">Pickup Time</label>
                                <DatePicker
                                    selected={pickupTime}
                                    name="pickupTime"
                                    onChange={(time) => setPickupTime(time)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15} // Set interval (e.g., 15 mins)
                                    timeFormat="HH:mm"
                                    dateFormat="hh:mm aa" // Display format (12-hour format)
                                    className="w-full p-2 border rounded mb-4"
                                    placeholderText="Select Pickup Time"
                                    required
                                />
                            </div>
                        </div>
                        {/* start city */}
                        <div className='flex-1'>
                            <label className="block mb-2">Travel From:</label>
                            <CreatableSelect
                                options={ukCities}
                                name='startCity'
                                value={startCity}
                                onChange={setStartCity}
                                className="w-full mb-4"
                                color='white'
                                placeholder="City Travelling from"
                                required
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        backgroundColor: "", // Match regular input background
                                        // border: "1px solid black", // Match regular input border
                                        padding: "2px", // Match input padding
                                        borderRadius: "4px", // Match input border radius
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        color: "#d1d5db"
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        backgroundColor: "white",
                                    }),
                                    option: (base) => ({
                                        ...base,
                                        color: "black",
                                        ":hover": { backgroundColor: "gray" },
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "white", // Match regular input text color
                                    }),
                                }}
                            />
                        </div>
                        {/* Additional Note */}
                        <div>
                            <label className="block mb-2">Additional Note:</label>
                            <textarea
                                value={note}
                                name='note'
                                onChange={(e) => setNote(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter any additional message or information...'
                                rows="3"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className="w-[40%] bg-amber-300 text-black px-2 sm:px-4 py-2 rounded sm:rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300">{isLoading ? "BOOKING..." : "BOOK NOW"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default RideBookingForm;