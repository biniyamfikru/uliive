'use client'

import React, { useEffect, useRef, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRouter } from 'next/navigation';
import firebase, { firestore, auth } from '@/firebaseConfig';
import { collection, addDoc, getDocs, Timestamp, query, limit, orderBy } from 'firebase/firestore';
import { async } from '@firebase/util';

const ChatRoom = () => {
    const [formValue, setFormValue] = useState();
    const q = query(collection(firestore, 'messages'), orderBy('createdAt'), limit(25))
    const [messages] = useCollectionData(q);
    useEffect(async () => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                router.push('/login');
            }
        });
    }, [])
    const { uid, photoURL, displayName } = auth.currentUser ?? { uid: "", photoURL: "", displayName: "" };
    const dummy = useRef();

    const sendMessage = async (e) => {
        try {
            const docref = await addDoc(collection(firestore, 'messages'), {
                text: formValue,
                createdAt: Timestamp.now(),
                name: displayName,
                uid,
                photoURL
            })
            console.log({ id: docref.id })
        } catch (error) {
            console.log({ error })
        }

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    function ChatMessage(props) {
        const { text, uid, photoURL, name } = props.message;

        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

        return (<>
            <div className='flex flex-col gap-y-1'>
                {messageClass === "sent" ?
                    <>
                        <span className='text-[#222] text-opacity-50'>{name}</span>
                        <div className='w-full flex justify-start items-start gap-4'>
                            {/* <img src="/images/dream-profile.png" alt="" className='h-7 w-7' /> */}
                            <img src={photoURL || '/images/dream-profile.png'} className='h-7 w-7 rounded-full' alt='' />
                            <span className='bg-[#41B7EF] text-white font-bold text-sm py-2 px-3' style={{ borderRadius: "0px 16px 16px 16px" }}>{text}</span>
                        </div>
                    </>
                    :
                    <>
                        <span className='text-[#222] text-opacity-50'>{name}</span>
                        <div className='w-full flex justify-start items-start gap-4'>
                            <img src={photoURL || '/images/dream-profile.png'} className='h-7 w-7 rounded-full' alt='' />
                            <span className='bg-[#F7F7F7] text-[#222] font-bold text-sm py-2 px-3' style={{ borderRadius: "0px 16px 16px 16px" }}>{text}</span>
                        </div>
                    </>}
            </div>
        </>)
    }

    return (
        <main className='flex-1 max-h-screen flex flex-col items-center justify-evenly overflow-hidden'>
            <div className="w-full flex justify-between items-center  px-2">
                <div className='flex gap-x-4'>
                    <div className='flex justify-start items-center gap-2'>
                        <img src="/images/dream-profile.png" alt="" />
                        <span className='font-semibold'>Dream</span>
                    </div>
                    <div className='flex justify-start items-center gap-2 bg-[#1E2439] text-white rounded-[4px] px-2 text-sm'>
                        <BiCheck />
                        <span className='font-semibold'>Following</span>
                    </div>
                </div>
                <BsThreeDots className='text-xl' />
            </div>
            <div className='w-[full] py-2 aspect-[3/2.05] max-h-[fit-content] overflow-scroll flex flex-wrap justify-center items-start gap-3  px-2'>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
                <div className='relative w-[43%] aspect-[4/3]'>
                    <img src='/images/sample-video-thumbnail.svg' alt='' className='w-full h-full' />
                    <div className="absolute w-full h-1/5 bottom-0 flex justify-start items-center gap-x-2 px-2 my-1">
                        <img src="/images/dream-profile.png" alt="" className='h-full' />
                        <span className='text-white font-bold text-base'>Dream</span>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit max:h-fit flex justify-center items-center gap-x-8  px-2'>
                <div className='w-11 aspect-square rounded-full bg-white flex justify-center items-center'>
                    <img src="/images/video-icon.svg" alt="" className='w-3/5' />
                </div>
                <div className='w-11 aspect-square rounded-full bg-white flex justify-center items-center'>
                    <img src="/images/speaker-icon.svg" alt="" className='w-3/5' />
                </div>
                <div className='w-11 aspect-square rounded-full bg-white flex justify-center items-center'>
                    <img src="/images/fullscreen-icon.svg" alt="" className='w-3/5' />
                </div>
            </div>
            <div className="w-full flex-1 max-h-[40%] flex flex-col bg-white pb-4 overflow-hidden">
                <div className='w-full h-1/6 max:h-1/6 flex justify-between items-center text-[#222] text-opacity-50'>
                    <div className='flex-1'></div>
                    <span className='flex-1 font-bold text-base text-center'>Chat Room</span>
                    <div className='flex-1 flex justify-end'>
                        <button className='text-xs border-[#222] border-opacity-50 border-[1px] py-[5px] px-[10px] rounded-[4px]'>Buy A Badge</button>
                    </div>
                </div>
                <div className='w-full h-4/6 max:h-4/6 flex flex-col justify-start overflow-scroll px-2 pb-2 gap-y-3'>
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                    <span ref={dummy}></span>
                </div>
                <div className='w-full h-1/6 max:h-1/6 relative flex justify-center items-center'>
                    <input type='text' placeholder='You can Speak Here' className='w-[90%] bg-[#F7F7F7] text-[#222] rounded-[8px] py-2 px-3' value={formValue} onChange={e => setFormValue(e.target.value)} />
                    <div className='absolute right-0 top-0 h-full w-fit flex items-center mr-10'>
                        <img src="/images/send-icon.svg" alt="" className='h-2/5' onClick={sendMessage} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ChatRoom