import React from 'react'
import '../css/Company.css'

import logo from '../../src/assets/logo.png';

const data = [
    {
        id: 1,
        name: 'Thanh',
        email: 'thanh1234@gmail.com',
        title: 'Hello'
    },
    {
        id: 1,
        name: 'Duy Anh',
        email: 'duyanh1234@gmail.com',
        title: 'Hello'
    },
    {
        id: 1,
        name: 'Tu',
        email: 'tu1234@gmail.com',
        title: 'Hello'
    },
    {
        id: 1,
        name: 'Hieu',
        email: 'hieu1234@gmail.com',
        title: 'Hello'
    },

]
const Company = () => {
    return (
        <div className='w-full bg-white py-16 px-4 mt-[60px]'>
            <div className='max-w-[1240px] mx-auto'>
                
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-2'>
                    <div className='grid col-span-1 grid-cols-1 lg:gird-cols-1 md:grid-cols-1'>
                        <div className='h-[60px] w-96 p-2 shadow-2xl menu'>
                            <h2>Hello</h2>
                        </div>
                    </div>
                    <div className='grid col-span-2 grid-cols-2 gap-2 '>
                        {/* {data.map((item, index) => {
                            return (
                                <div className='box-border h-40 w-[100%] p-2 border-4'>
                                    <h2>Name: {item.name}</h2>
                                    <h2>Email: {item.email}</h2>
                                    <h2>Title: {item.title}</h2>
                                </div>
                            )
                        })} */}


                        <div className='h-40 w-[100%] p-2 shadow-2xl'>
                            <div className='flex'>
                                <img src={logo} alt='' width={70} />
                                <h2 className='font-bold text-[#00df9a] mt-4'>Công Ty ABC</h2>
                            </div>
                            <p className='font-bold'>Address: Unknow</p>
                            <p className='font-bold'>Salary: Unknow</p>
                            <p className='font-bold'>Experience: Unknow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company

