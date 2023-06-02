import React from 'react'

const Modal = ({ isLogin, onClose, children}) => {

    if (!isLogin) return null

    const handleModalClick = (e) => {
        if (e.target.id === 'modal') onClose()
    }
        return (
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='modal' onClick={handleModalClick}>
                <div className='w-[600px] flex flex-col'>
                    <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                    <div className='bg-white p-2 rounded text-black'>
                        {children}
                    </div>

                </div>
            </div>
        )
    }

    export default Modal