'use-client'

import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { TbCapture } from 'react-icons/tb'
const Header = () => {
    return (
        <div className='flex h-fit justify-between items-center px-4 py-3'>
            <div className='flex justify-start  items-center  gap-2'>
                <img src='/images/logo-1.svg' className='h-7' />
            </div>
            <IoMdMenu className='text-2xl' />
        </div>
    )
}

export default Header