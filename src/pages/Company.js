import React from 'react'

const Company = () => {
    return (
        <div className='w-full bg-white py-16 px-4 mt-[60px]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4'>
                <div className='col-span-1'>
                    <div className='flex flex-col justify-center mr-5 items-center bg-black'>
                        <p className='text-white'>Hello</p>
                    </div>
                </div>

                <div className='col-span-3 flex flex-col gap-2'>
                    <div className='grid-rows-1'>
                        <div className='flex flex-col justify-center mr-5 items-center bg-black'>
                            <p className='text-white'>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company

