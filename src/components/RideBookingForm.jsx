import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import AddressAutocomplete from "../AddressAutocomplete";
import Select from 'react-select';

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
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleStartCitySelect = (place) => {
        setStartCity(place.display_name);
    };

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
                    setShowModal(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <form ref={form} onSubmit={sendEmail} className="font-semibold text-black p-6 my-20 rounded-lg shadow-sm w-[80%] flex flex-col sm:flex-row md:gap-6 items-center justify-center">
                    <div className='w-[80vw] md:w-[70vw] p-3 sm:p-10 rounded'>
                        <p className='text-2xl text-amber-500 font-bold mb-3 text-center'>Enter Details to Book Your Ride 🚕</p>
                        {/* Select Service */}
                        <div>
                            <label className="block mb-2">Service:</label>
                            <Select
                                options={services}
                                name='service'
                                value={service}
                                onChange={setService}
                                className="w-[100%] mb-4"
                                placeholder="Select the Service"
                                required
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        border: "none",
                                        borderBottom: "2px solid #000",
                                        boxShadow: "none",
                                        "&:hover": {
                                            borderBottom: "2px solid #000",
                                        },
                                    }),
                                    dropdownIndicator: (base) => ({
                                        ...base,
                                        color: "#000",
                                    }),
                                    indicatorSeparator: () => ({
                                        display: "none",
                                    }),
                                }}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* User first name */}
                            <div className='flex-1 relative'>
                                <label className="block mb-2">First Name:</label>
                                <input
                                    type="text"
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your First Name'
                                    required
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000",
                                        outline: "none",
                                    }}
                                />
                                {firstName && (
                                    <button
                                        type="button"
                                        onClick={() => setFirstName("")}
                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            {/* User last name */}
                            <div className='flex-1 relative'>
                                <label className="block mb-2">Last Name:</label>
                                <input
                                    type="text"
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your Last Name'
                                    required
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000",
                                        outline: "none",
                                    }}
                                />
                                {lastName && (
                                    <button
                                        type="button"
                                        onClick={() => setLastName("")}
                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* user mail */}
                        <div className='relative'>
                            <label className="block mb-2">Email:</label>
                            <input
                                type="email"
                                name='mail'
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter Your Email Address'
                                required
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000",
                                    outline: "none",
                                }}
                            />
                            {mail && (
                                <button
                                    type="button"
                                    onClick={() => setMail("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        {/* user phone number */}
                        <div className='relative'>
                            <label className="block mb-2">Phone:</label>
                            <input
                                type="tel"
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter Your Mobile Number'
                                required
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000",
                                    outline: "none",
                                }}
                            />
                            {phone && (
                                <button
                                    type="button"
                                    onClick={() => setPhone("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-4">
                            {/* Pickup Date */}
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block mb-2">Pickup Date</label>
                                <DatePicker
                                    selected={pickupDate}
                                    name="pickupDate"
                                    onChange={setPickupDate}
                                    className="w-full p-2 border-b-2 border-black focus:outline-none rounded mb-4"
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
                                    timeIntervals={10}
                                    timeFormat="HH:mm"
                                    dateFormat="hh:mm aa"
                                    className="w-full p-2 border-b-2 border-black focus:outline-none rounded mb-4"
                                    placeholderText="Select Pickup Time"
                                    required
                                />
                            </div>
                        </div>
                        {/* start city */}
                        <div className='flex-1 relative'>
                            <label className="block mb-2">Travel From:</label>
                            <AddressAutocomplete
                                value={startCity}
                                name='startCity'
                                onChange={setStartCity}
                                onSelect={handleStartCitySelect}
                                required
                            />
                            {startCity && (
                                <button
                                    type="button"
                                    onClick={() => setStartCity("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        {/* Additional Note */}
                        <div className='relative'>
                            <label className="block mb-2 my-4">Additional Note:</label>
                            <textarea
                                value={note}
                                name='note'
                                onChange={(e) => setNote(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter any additional message or information...'
                                rows="3"
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000",
                                    outline: "none",
                                }}
                            />
                            {note && (
                                <button
                                    type="button"
                                    onClick={() => setNote("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className="w-[40%] bg-amber-300 text-black px-2 sm:px-4 py-2 rounded sm:rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300">{isLoading ? "BOOKING..." : "BOOK NOW"}</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* Modal for success message */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-[70%] sm:w-[40%]">
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">Booking Successful!</h2>
                        <p className="text-lg mb-6 text-white">Your car booking has been successfully submitted! We will be in touch shortly.</p>
                        <button
                            onClick={() => {
                                setShowModal(false);
                                window.location.href = 'https://chelmsfordmastercabs.com';
                            }}
                            className="px-8 py-2 bg-red-400 text-black rounded-full hover:bg-red-500 transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default RideBookingForm;