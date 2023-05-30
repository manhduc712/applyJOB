import React from 'react'
import { FaLocationArrow, FaPhoneAlt, FaMailBulk, FaTelegramPlane } from "react-icons/fa";
import contact from '../../src/assets/contact.jpg'

const Contact = () => {
    return (
        <div className='text-white mt-[60px]'>
            <img src={contact} alt='anh' className='w-full h-[450px] object-cover' />

            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1540px] mx-auto gird'>
                    <h2 className='text-black font-bold '>Contact Information</h2>
                    <div className='flex mt-4'>
                        <FaLocationArrow size={30} color='black' />
                        <p className='text-[#00df9a] font-bold ml-3 mb-4'>Location</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaPhoneAlt size={30} color='black' />
                        <p className='text-[#00df9a] font-bold ml-3 mb-4'>Phone</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaMailBulk size={30} color='black' />
                        <p className='text-[#00df9a] font-bold ml-3 mb-4'>Mail</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaTelegramPlane size={30} color='black' />
                        <p className='text-[#00df9a] font-bold ml-3 mb-4'>Telegram</p>
                    </div>
                </div>
            </div>

            <div className='w-full bg-black py-16 px-4'>


            </div>
        </div>
    )
}

export default Contact