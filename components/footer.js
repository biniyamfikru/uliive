import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex justify-between items-end px-3 bg-white text-sm py-3'>
            <div className='flex flex-col gap-y-2 justify-end'>
                <span className='font-bold text-[#222] text-opacity-50'>Upgrade Now</span>
                <span className='font-bold text-[#222] text-opacity-50'>Promote A Room</span>
                <span className='font-bold text-[#222] text-opacity-50'>Home</span>
            </div>
            <div className='flex flex-col gap-y-2 justify-end text-right'>
                <span className='font-normal text-[#222] text-opacity-50'>Home</span>
                <span className='font-normal text-[#222] text-opacity-50'>© 2023 Uliive inc.</span>
            </div>
        </div>
    )
}

export default Footer