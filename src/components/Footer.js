import React from 'react'

import { FaLocationArrow, FaMailBulk} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='p-10 bg-white text-black'>
            <div className='max-w-[1540px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
                    <div className='mb-5'>
                        <h2 className='font-bold text-[#00df9a] mb-3'>Company</h2>
                        <p>Công ty TNHH Truyền Thông Tầm Nhìn Cộng là doanh nghiệp hoạt động trong lĩnh vực
                            truyền thông và internet. Chúng tôi là đơn vị chủ quản
                            blogtamsu.vn, feedy.tv, kenhthethao.vn, 1news.video
                            uy tín hoạt động trên lĩnh vực truyền thông và cung cấp
                            thông tin cho bạn đọc</p>
                        <div className='flex mt-4'>
                            <FaLocationArrow size={30} color='black' />
                            <p className='text-[#00df9a] font-bold ml-3 mb-4'>Tầng 5, tòa nhà Ngôi Sao, Dương Đình Nghệ, Cầu Giấy, Hà Nội</p>
                        </div>
                        <div className='flex mt-4'>
                            <FaMailBulk size={30} color='black' />
                            <p className='text-[#00df9a] font-bold ml-3 mb-4'>contact@eyeplus.vn</p>
                        </div>
                    </div>
                    <div className='mb-5 ml-20'>
                        <h2 className='text-[#00df9a] font-bold'>Useful Link</h2>
                        <ul className='mt-4'>
                            <li className='mb-3'>
                                Home
                            </li>
                            <li className='mb-3'>
                                Company
                            </li>
                            <li className='mb-3'>
                                About
                            </li>
                            <li className='mb-3'
                            >Contact
                            </li>
                        </ul>
                    </div>
                    <div className='mb-5 ml-16' >
                        <h2 className='text-[#00df9a] font-bold'>Contact</h2>
                        <p>Join company</p>
                        <input className='mr-4 rounded-lg text-black border-2 border-teal-300 h-10 w-80' type='text' placeholder='Enter'/>
                        <button className='bg-[#00df9a] text-black px-4 py-2 rounded-lg  mt-2'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer