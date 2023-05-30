import { useState, useEffect } from 'react'
import { GiRocketThruster } from 'react-icons/gi'

const ScrollPage = () => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 550) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        return (
            <div>ScrollPage</div>
        )
    }
    return (
        <div>
            <div className={scroll ? 'fixed right-0 bottom-0 m-4 p-4 bg-[#00df9a] text-black rounded-full cursor-pointer' : 'hidden'} onClick={handleScroll}>
                <GiRocketThruster size={30} className='animate-bounce' />
            </div>
        </div>
    )

}

export default ScrollPage