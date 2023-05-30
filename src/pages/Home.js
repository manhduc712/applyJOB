import '../css/Home.css'
import anh from '../../src/assets/applyjob.jpg'
import Double from '../../src/assets/double.png'
import Laptop from '../../src/assets/laptop.jpg'
import Single from '../../src/assets/single.png'
import Triple from '../../src/assets/triple.png'
const Home = () => {

    return (
        <div className='text-white'>
            <div className='images'>
                <img src={anh} alt='anh' className='w-full h-[650px] object-cover mt-[60px]' />
            </div>

            <div className='w-full bg-white py-16 px-4'>
                <p className='text-black text-center font-bold text-2xl'>Chuyên Ngành</p>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-4'>
                    <div className='flex flex-col justify-center mr-5 items-center'>
                        <img className='w-[500px] mx-auto my-4' src={Double} alt='/' />
                        <p className='text-[#00df9a] font-bold mt-4 '>KHỐI MARKETING</p>
                        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>XEM THÊM</button>
                    </div>

                    <div className='flex flex-col justify-center mr-5 items-center'>
                        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                        <p className='text-[#00df9a] font-bold '>KHỐI KỸ THUẬT</p>
                        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>XEM THÊM</button>
                    </div>

                    <div className='flex flex-col justify-center mr-5 items-center'>
                        <img className='w-[500px] mx-auto my-4 ' src={Single} alt='/' />
                        <p className='text-[#00df9a] font-bold mt-8'>KHỐI KẾ TOÁN</p>
                        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>XEM THÊM</button>
                    </div>

                    <div className='flex flex-col justify-center mr-5 items-center'>
                        <img className='w-[500px] mx-auto my-4' src={Triple} alt='/' />
                        <p className='text-[#00df9a] font-bold '>KHỐI KINH DOANH</p>
                        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>XEM THÊM</button>
                    </div>
                </div>
            </div>

            <div className='w-full bg-black py-16 px-4'>
                <p className='text-white text-center font-bold text-3xl '>Các công ty phổ biến</p>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10'>
                    <div className='flex flex-col justify-center mr-5 items-center'>
                        <img className='w-[500px] mx-auto my-4' src={Double} alt='/' />
                        <p className='text-[#00df9a] font-bold mt-4 '>KHỐI MARKETING</p>
                        <button className='bg-white text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>XEM THÊM</button>
                    </div>

                    <div className='flex flex-col justify-center mr-5 items-center'>
                        <img className='w-[500px] mx-auto my-4 ' src={Single} alt='/' />
                        <p className='text-[#00df9a] font-bold mt-8'>KHỐI KẾ TOÁN</p>
                        <button className='bg-white text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>XEM THÊM</button>
                    </div>

                    <div className='flex flex-col justify-center mr-5 items-center'>
                        <img className='w-[500px] mx-auto my-4' src={Triple} alt='/' />
                        <p className='text-[#00df9a] font-bold '>KHỐI KINH DOANH</p>
                        <button className='bg-white text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>XEM THÊM</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home