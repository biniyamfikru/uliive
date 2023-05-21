'use client'

import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRouter } from 'next/navigation';
import { useFirebaseStore } from '@/store/firebaseStore';
import firebase, { auth } from '@/firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Footer from '@/components/footer';
const Login = () => {
    // const { auth, analytics, firestore } = useFirebaseStore();
    const router = useRouter()

    let signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => router.push('/chatroom'))
            .catch(err => console.log({ err }))
    }
    let handleSignUpWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('Signed up with Google:', user);
            })
            .catch((error) => {
                console.error('Error signing up with Google:', error);
            });
    };
    useEffect(() => {
    }, [])


    const [isChecked, setIsChecked] = useState(false)
    // useEffect(() => console.log({ auth2: auth }), [])
    return (
        <>
            <main className='flex-1 flex flex-col items-center justify-evenly'>
                <h1 className='font-bold text-3xl text-[#222]'>Welcome to ULIIVE</h1>
                <div className='w-full px-6'>
                    <form className='flex flex-col bg-white gap-y-3 py-5 px-3 rounded-[16px]'>
                        <div className='w-full flex flex-col gap-y-3'>
                            <label className='text-[#222] text-sm text-opacity-50'>Username</label>
                            <input type='text' className='bg-[#F7F7F7]  text-base rounded-[8px] py-2 px-3 text-[#222] font-bold' />
                        </div>
                        <div className='w-full flex flex-col gap-y-3'>
                            <label className='text-[#222] text-sm text-opacity-50'>Password</label>
                            <input type='password' className='bg-[#F7F7F7] text-base  rounded-[8px] py-2 px-3 text-[#222] font-bold' />
                        </div>
                        <label className='flex items-center gap-x-2 text-[#222] font-bold'>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            Keep me signed in unless I sign out
                        </label>
                        <button className='bg-[#41B7EF] text-white py-3 font-bold rounded-[8px]'>SIGN ON</button>
                        <div className='flex items-center gap-x-3 text-[#222] text-opacity-20'>
                            <hr className='flex-1' />
                            OR
                            <hr className='flex-1' />
                        </div>
                        <div className='flex justify-center items-center gap-x-4 py-2 bg-[#F7F7F7] rounded-[8px] text-[#222] font-bold' onClick={signInWithGoogle}>
                            <img src='/images/google.svg' />
                            <span>GOOGLE SIGN IN</span>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='w-full flex justify-center gap-x-1'>
                        <span className='text-[#222] text-opacity-50'>Forgot your password?</span>
                        <span className='text-[#41B7EF] cursor-pointer'>Recover it.</span>
                    </div>
                    <div className='w-full flex justify-center gap-x-1'>
                        <span className='text-[#222] text-opacity-50'>Not yet a member?</span>
                        <span onClick={handleSignUpWithGoogle} className='text-[#41B7EF] cursor-pointer'>Create your free account.</span>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login